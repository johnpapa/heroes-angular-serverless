# Heroes Angular Serverless

TypeScript Node/Express 👉TypeScript Serverless ➕Angular

This project was created to help represent a fundamental app written with Node Express APIs and TypeScript that can be shifted to Serverless Functions with TypeScript.

The client app is Angular, however it could just as easily be Vue or React. The heroes and villains theme is used throughout the app.

by [John Papa](http://twitter.com/john_papa)

Comparative client apps written with Vue and React can be found at at [github.com/johnpapa/heroes-vue](https://github.com/johnpapa/heroes-vue) and [github.com/johnpapa/heroes-react](https://github.com/johnpapa/heroes-react)

## Why

I love Node and Express for creating APIs! These require a server and paying for that server in the cloud. Shifting to serverless alleviates the cost, the server upkeep, helps scale up and down easily, and reduces the surface are of the middleware required for a robust Express app. Is it perfect? No, of course not! But this is a solid option if these factors affect you.

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/johnpapa/heroes-angular-serverless.git heroes
   cd heroes
   ```

1. Install the npm packages

   ```bash
   npm install
   ```

1. Build the app!

   ```bash
   npm run node-ng:build
   ```

1. Run the app!

   ```bash
   npm run node:start
   ```

## Cypress Tests

1. You can execute all of the UI tests by running the following steps

   ```bash
   npm run cypress
   ```

## Problems or Suggestions

[Open an issue here](/issues)

## Resources

- [VS Code](https://code.visualstudio.com?wt.mc_id=heroesangularserverless-github-jopapa)
- [Azure Free Trial](https://azure.microsoft.com/en-us/free/?wt.mc_id=heroesangularserverless-github-jopapa)
- [VS Code Extension for Node on Azure](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack&WT.mc_id=heroesangularserverless-github-jopapa)
- [VS Code Extension Marketplace](https://marketplace.visualstudio.com/vscode?wt.mc_id=heroesangularserverless-github-jopapa)
- [VS Code - macOS keys](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf?WT.mc_id=heroesangularserverless-github-jopapa)
- [VS Code - Windows keys](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf?WT.mc_id=heroesangularserverless-github-jopapa)

### Debugging Resources

- [Debugging Angular in VS Code](https://code.visualstudio.com/docs/nodejs/angular-tutorial?wt.mc_id=heroesangularserverless-github-jopapa)
- [Debugging React in VS Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial?wt.mc_id=heroesangularserverless-github-jopapa)
- [Debugging Vue in VS Code](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial?wt.mc_id=heroesangularserverless-github-jopapa)
