## Short list

- node to serverless (ts, routes, services, env)
- debug the function
- debug the function AND angular

- upload static site

- environment.prod.ts -> API to the function
- the function's proxies.json proxies the static site, custom domain, ssl, etc

https://papafunc1.azurewebsites.net/heroes

## Story

Angular heroes app, that talks to Node/Express server, which talks to Cosmos DB.

We want to move the app to the cloud so it is fast and cheap. Scales as you go with functions including down to $0.

### Migrate to Functions

Create function project
Create heroes-get route
Copy server services to the functions
Change the context/req/res in the services
Local func running
Debugging of the function

### Local Angular -> Functions

Keep proxy pointing to 7071 (same as express app)
Delete the node express folder? - prove a point?

Dual debugging?
launch to chrome - snippet (pre-deploy calls the task)
add the compound launch thing to launch.json
add the task to the tasks file - this starts the angular app

### Storage Deploy

Have storage account ready to go
Right click deploy (which storage acct, yes overwrite, then browse)
Crap, we have a 404!

#### What happened here?

- First we deploy, which kicks off ...
- Settings has a pre deploy task that calls the task (npm run build)
- Task does the build for us (to dist)
- Then the deploy kicks in
- But our app needs to know where the api's are

### Deploy Function

- set up the proxies
- If i use the arrow to the ceiling, i just enter one name, and 2 min later i get an app
- enter the name
- upload local.settings.json

```json
{
  "$schema": "http://json.schemastore.org/proxies",
  "proxies": {
    "Client": {
      "matchCondition": {
        "route": "/{*restOfPath}"
      },
      "backendUri": "https://papamandaloreheroes.z20.web.core.windows.net/{restOfPath}"
    },
    "Func": {
      "matchCondition": {
        "route": "/api/{*restOfPath}"
      },
      "backendUri": "http://localhost:7071/api/{restOfPath}"
    }
  }
}
```

- Now update the environment.prod.ts for angular to point to the func api.
- redeploy storage

Resources

- vs code doc for storage
- vs code doc for functions
- azure extension for vs code

## Notes:

Always refresh azure stuff from the root level
Make sure dist/xxx folder exists already so we can deploy to static site

check if fort awesome is a problem or not
