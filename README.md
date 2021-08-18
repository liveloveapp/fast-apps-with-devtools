# Fast Apps with Chrome DevTools Workshop

## Prerequisites

To get started, ensure that you have _at least_ Node v12 installed. You can verify what version you have installed by running the following command in the terminal:

```sh
node --version
```

Finally, you need to have the latest version of [Google Chrome](https://www.google.com/chrome/) installed.


## Setup

First, fork this repository to your personal GitHub account. As you make changes to the codebase during this workshop you will be pushing your changes to your personal fork. You can [learn more about forks here](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

Next, clone your fork to your development machine. Then run the following command in the terminal from the root of the repository to install dependencies.

```sh
npm install
```

With the dependencies installed run the app to verify everything is working correctly.

## Running the app

To run the app execute the following command in the terminal:

```sh
npm start
```

The app should now be running at [http://localhost:8080](http://localhost:8080)

## Building the app

To build a production-ready execute the following command in the terminal:

```sh
npm run build
```

Then, to locally serve the production build of the application execute the following command in the terminal:

```sh
npm run serve
```

## Lighthouse

Lighthouse is installed a dependency of the application. We have create a script in the **package.json** file to easily run Lighthouse:

```sh
npm run lh
```
