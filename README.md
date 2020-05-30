Hi! This is a little React app deployed on Github Pages.

## How To Deploy a React App on your Github Pages User Page

There is a lot of info out there on how to deploy a react app to a "project" site on Github Pages (i.e. a subdomain on your user page), but deploying an app to the main user page ("username.github.io") is a teensy bit tricky. This is because Github pages requires user pages to be built from the master branch. To deploy a production build on your master branch, and work with your source code on another branch, follow these steps:

#### Set up a User Page

Create an empty repository (without the README or any other file), called 'username.github.io'.

#### Create a new React App in the Repository

Clone the repository and use [`create-react-app`](https://github.com/facebook/create-react-app) to create a new react app. Keep going with the rest of these steps before developing your app further, to ensure set up has been done correctly.

#### Install Github Pages

Change directory so that you are in your new react app folder. Then install Github pages as a dependancy.

`$ npm install gh-pages --save-dev`

#### Move your app's source code to a new branch

Right now your code is on a master branch. Move it over to a branch called `source`.

    $ git checkout -b source
    $ git push origin source


#### Set up deployment to the Master branch

You'll need to edit the app's `package.json` and add some properties. First, add a `homepage` property that denotes your Github user page as the homepage for this app.

`"homepage": "http://username.github.io/"`

Then, add two properties to the `scripts` section:

    "scripts": {
      //...
      "predeploy": "npm run build",
      "deploy": "gh-pages -b master -d build"
    }


The above `deploy` command states that production builds will be deployed to the master branch of this repository. Run the following command to deploy your app:

`$ npm run deploy`

Be sure to visit your github page (username.github.io) to check if it is working! If all is in order, you can now keep editing and developing on the `source` branch in your repository. To update the builds, just run `npm run deploy` (You don't have to switch branches to do this - stay on `source`).

#### An additional note if you want a Custom Domain

You can usually just save a Custom Domain in the Settings section of your repository, or add a CNAME file to the repo. However, in this case, every time a new production build deploys, it wipes out the CNAME file. To get around this, you can update the `predeploy` command in your package.json like so:

`"predeploy": "npm run build && cp CNAME build/CNAME"`

This will copy over your CNAME file in the `source` branch to the deployed build on `master`.  

Happy coding!
