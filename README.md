# Heroes Angular Serverless

TypeScript Node/Express 👉TypeScript Serverless ➕ Angular

This project was created to help represent a fundamental app written with Angular and Node.js/Express. The heroes and villains theme is used throughout the app. The app is migrated from Node.js/Express to Azure Functions.

Structure:

```
- server    // Node.js Express server using TypeScript
- src       // Angular front-end app
- functions // Azure Functions APIs
```

## The Story

You created an Angular app and its static assets are served by Node.js. All of your code in Angular and Node are written with TypeScript, because you love how it helps identify and fix issues while you are creating your code. Your data is accessed via the same Node.js server through Express.js hitting a database (in this case Azure's Cosmos DB). This all works beautifully!

Now you want to host the Angular app on a web site in the cloud. You can absolutely host the app and Node in the cloud, but you're thinking it would be great if you could just host the Angular app without having to worry about a server.

You decide to migrate your Node.js Express APIs to serverless functions, and host your Angular app and its static assets in the cloud!

by [John Papa](http://twitter.com/john_papa)

Comparative apps written with Vue and React can be found at at [github.com/johnpapa/heroes-vue](https://github.com/johnpapa/heroes-vue) and [github.com/johnpapa/heroes-react](https://github.com/johnpapa/heroes-react)

## Why

I love JavaScript and the Web! One of the most common questions I hear is "which framework is best?". I like to flip this around and ask you "which is best for you?". The best way to know this is to try it for yourself. I'll follow up with some articles on my experiences with these frameworks but in the meantime, please try it for yourself to gain your own experience with each.

## Live Demos

Hosted in [Azure](https://azure.microsoft.com/en-us/free/?wt.mc_id=heroes_angular_serverless-github-jopapa)

- [Tour of Heroes with Angular](https://papa-heroes-angular.azurewebsites.net)
- [Tour of Heroes with React](https://papa-heroes-react.azurewebsites.net)
- [Tour of Heroes with Vue](https://papa-heroes-vue.azurewebsites.net)

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/johnpapa/heroes-angular-serverless.git
   cd heroes-angular-serverless
   ```

1. Install the npm packages

   ```bash
   npm install
   ```

1. Copy the `.env.example` file to `.env`

1. Copy your Cosmos DB connection string and url into the supplied places in the `.env`

    > If you have not tried Cosmos DB you can [try Cosmos DB for free here](https://azure.microsoft.com/en-us/try/cosmosdb?wt.mc_id=heroes_angular_serverless-github-jopapa)

1. Open the Command Palette in VS Code with `F1`

1. Type and select `View: Show Debug`

1. Select the `Angular & Functions` debug configuration

1. Press `F5` or the green button to start the debugger

The function app and angular app both build, then execute, and finally the app is laucnhed in your browser at http://localhost:4200

## Problems or Suggestions

[Open an issue here](/issues)

## Related apps

- [heroes-angular](https://github.com/johnpapa/heroes-angular)
- [heroes-react](https://github.com/johnpapa/heroes-react)
- [heroes-vue](https://github.com/johnpapa/heroes-vue)

## Resources

Sign up for an [Azure Free Trial](https://azure.microsoft.com/en-us/free/?wt.mc_id=heroes_angular_serverless-github-jopapa)

### Tools

- [VS Code](https://code.visualstudio.com?wt.mc_id=heroes_angular_serverless-github-jopapa)
- [VS Code Extension for Node on Azure](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack&WT.mc_id=heroes_angular_serverless-github-jopapa)
- [VS Code Extension Marketplace](https://marketplace.visualstudio.com/vscode?wt.mc_id=heroes_angular_serverless-github-jopapa)
- [VS Code - macOS keys](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf?WT.mc_id=heroes_angular_serverless-github-jopapa)
- [VS Code - Windows keys](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf?WT.mc_id=heroes_angular_serverless-github-jopapa)

### Tutorials

- [Static Website Tutorial](https://code.visualstudio.com/tutorials/static-website/getting-started?wt.mc_id=heroes_angular_serverless-github-jopapa)
- [Serverless Function Tutorial](https://code.visualstudio.com/tutorials/functions-extension/getting-started?wt.mc_id=heroes_angular_serverless-github-jopapa)

### Debugging Resources

- [Debugging Angular in VS Code](https://code.visualstudio.com/docs/nodejs/angular-tutorial?wt.mc_id=heroes_angular_serverless-github-jopapa)
- [Debugging React in VS Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial?wt.mc_id=heroes_angular_serverless-github-jopapa)
- [Debugging Vue in VS Code](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial?wt.mc_id=heroes_angular_serverless-github-jopapa)
