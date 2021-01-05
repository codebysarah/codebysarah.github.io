import React, {PureComponent} from "react";
import Phaser from "phaser";
import { Row, Col } from 'react-bootstrap'; 
import '../styles/nerdybirdy.css'

type PhaserGameInstanceProps = {}
type PhaserGameInstanceState = {
    displayGame: boolean
}

var startTime;
var replay = false;

class PhaserGameContent extends Phaser.Game {}

  const STYLE = {
    font: '30px "Raleway"',
    fill: "#000000"
  }

class PhaserTitleScene extends Phaser.Scene {
  constructor() {
    super({
      key: "PhaserTitleScene"
    })
  }

  init() {}

  preload() {
    this.load.image("sky", "sky.png");
    this.load.image("bird", "nerdy.png");
    this.load.image("startbutton", "play.png");
  }

  create() {
    replay = false;
    let centerX = this.game.config.width/2;
    let centerY = this.game.config.height/2;
    this.add.image(0,0, 'sky').setOrigin(0,0);
    this.add.image(centerX, centerY+50, "startbutton").setInteractive({useHandCursor: true})
    .on('pointerdown', () => this.clickStart());
    this.add.text(centerX-165,centerY-100, "Press Spacebar to Jump!", STYLE);
    this.birdy = this.physics.add.sprite(centerX,centerY-170,'bird');
  }

  clickStart() {
    this.scene.start('PhaserGameScene');
  }

  update() {}
}

class PhaserGameScene extends Phaser.Scene {
  birdy: Phaser.Physics.Arcade.Sprite|undefined
  jumpKey: Phaser.Input.Keyboard.KeyCodes.SPACE|undefined
  tween: Phaser.Scene.Tween|undefined
  music: Phaser.Sound|undefined
  
  constructor() {
    super({
      key: "PhaserGameScene"
    })
  }

  init() {}

  preload() {
    this.load.image("sky", "sky.png");
    this.load.image("bird", "nerdy.png");
    this.load.image("cloud", "cloud.png");
    this.load.audio('song', [
      'https://raw.githubusercontent.com/codebysarah/codebysarah.github.io/master/Fireflies.ogg', 
      'https://raw.githubusercontent.com/codebysarah/codebysarah.github.io/master/Fireflies.mp3']);
    if (!replay) {
      var progressBar = this.add.graphics();
      var progressBox = this.add.graphics();
      progressBox.fillStyle(0x35B882, .8);
      progressBox.fillRect(240, 270, 320, 50);
            
      var width = this.cameras.main.width;
      var height = this.cameras.main.height;
      var loadingText = this.make.text({
          x: width / 2,
          y: height / 2 - 50,
          text: 'Loading...',
          style: STYLE
      });
      loadingText.setOrigin(0.5, 0.5);
      
      var percentText = this.make.text({
          x: width / 2,
          y: height / 2 - 5,
          text: '0%',
          style: STYLE
      });
      percentText.setOrigin(0.5, 0.5);
            
      this.load.on('progress', function (value) {
          percentText.setText(parseInt(value * 100) + '%');
          progressBar.clear();
          progressBar.fillStyle(0xFFFFFF, 1);
          progressBar.fillRect(250, 280, 300 * value, 30);
      });

      this.load.on('complete', function () {
          progressBar.destroy();
          progressBox.destroy();
          loadingText.destroy();
          percentText.destroy();
      });
    }
  }

  create() {
    startTime = new Date().getTime();
    this.music = this.sound.add('song');
    this.music.play();
    this.add.image(0,0, 'sky').setOrigin(0,0);
    this.birdy = this.physics.add.sprite(150,200,'bird');
    this.birdy.setCollideWorldBounds(true);
    this.birdy.setGravityY(1000)
    this.tween = this.tweens.add({
      targets: this.birdy,
      angle: -20,
      duration: 200,
      ease: 'Power0',
      yoyo: true });
    this.jumpKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); 
    this.clouds = this.physics.add.group({
      key: 'cloud',
      repeat: 5,
      setXY: { x: 700, y: 200, 
        stepX: 150},});
    this.clouds.children.iterate(function(cloud) {
      cloud.y = Phaser.Math.RND.integerInRange(1,5)*100;
      cloud.body.velocity.x = -165
    });

    this.physics.add.overlap(this.birdy, this.clouds, this.gameOver, 
      null, this);
  }

  jump(birdy) {
    if(!birdy.active) return;
    birdy.body.velocity.y = -350;
    this.tween.play();
  }

  gameOver() {
    if (this.birdy.alive === false) return;
    this.birdy.alive = false;
    this.birdy.visible = false;
    this.clouds.children.iterate(function(cloud) {
      cloud.body.velocity.x = 0; // freeze clouds
    });
    this.music.stop();
    this.scene.start('PhaserEndScene');
  }

  update() {
    if(Phaser.Input.Keyboard.JustDown(this.jumpKey)) {
      this.jump(this.birdy);
    }
    this.clouds.children.iterate(function(cloud) {
      if (cloud.body.x < 0) {
        cloud.body.x = 900;
        cloud.body.y = Phaser.Math.RND.integerInRange(1,5)*100;
      }});

    if(this.birdy.body.blocked.down) {
      this.gameOver();
    }
  }
}

class PhaserEndScene extends Phaser.Scene {
    
  constructor() {
    super({
      key: "PhaserEndScene"
    })
  }

  init() {}

  preload() {
    this.load.image("sky", "sky.png");
    this.load.image("replaybutton", "replay.png");
  }

  create() {
    let centerX = this.game.config.width/2;
    let centerY = this.game.config.height/2;
    this.add.image(0,0, 'sky').setOrigin(0,0);
    this.add.text(centerX-90, centerY-150, "Game Over!", STYLE);
    
    let d = new Date().getTime();
    let elapsed = (d-startTime)/1000;
    elapsed = Phaser.Math.FloorTo(elapsed);
    this.add.text(centerX - 185, centerY-75, "You survived for " + 
      elapsed + " seconds", STYLE);
    this.add.image(centerX, centerY+50, "replaybutton").setInteractive(
      {useHandCursor: true})
    .on('pointerdown', () => this.replayGame());
  }

  replayGame() {
    replay = true;
    this.scene.start('PhaserGameScene');
  }

  update() {}
}

export default class PhaserGameInstance extends PureComponent<PhaserGameInstanceProps, PhaserGameInstanceState> {

  gameContent: PhaserGameContent|undefined
  timerId: number|undefined
    
  constructor(props: PhaserGameInstanceProps) {
    super(props)
    this.setDisplayGame_ = this.setDisplayGame_.bind(this)
    this.state = { displayGame: false }
  }
    
  componentDidMount() {
    this.gameContent = new PhaserGameContent({
      title: "PhaserGame",
      type: Phaser.CANVAS,
      width: 800,
      height: 600,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH },
      parent: "PhaserContainer",
      backgroundColor: "#87DEF9",
      scene: [PhaserTitleScene, PhaserGameScene, PhaserEndScene],
      physics: {
        default: "arcade",
        arcade: { debug: false,}},
      })

      this.timerId = window.setTimeout(this.setDisplayGame_, 300) 
    }

    setDisplayGame_() {
      this.setState({ displayGame: true })
    }

    componentWillUnmount() {
      clearTimeout(this.timerId)
        if (this.gameContent) {
          this.gameContent.destroy(true)
        }
    }

    render() {
      const gameDisplayClass = this.state.displayGame? "PhaserCanvasContainerOpen": "PhaserCanvasContainerClosed"
      return (
        <div>
          <Row className="justify-content-center">
            <Col sm={8}>
              <h1 className="game-header elsie">Nerdy Birdy Just Wants to Fly</h1>
              <p>...home, to deploy urgent updates to prod. Or maybe to re-read The Goblet of Fire. But some pesky bullies are blocking her way. Help her escape them!</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={10}>
              <div className={gameDisplayClass} id="PhaserContainer"></div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <p className="game-footer">assets designed in Adobe Illustrator. <a className="links" href="https://github.com/codebysarah/codebysarah.github.io/blob/source/src/components/NerdyBirdy.js" target="_blank">game development</a> in Phaser 3. ♫ Fireflies by Owl City.</p>
          </Row>
        </div>
      )
    }
}