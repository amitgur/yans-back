#### YANS - Yet Another Node Starter
YANS Is a starting point for webApps projects based on: Vue3, Quasar 2+, Node, Express and MongoDB.
Yans is a REST api architecture splitted into two projects.
"yans-front" is the client project using axios for REST calls and Quasar for front UI.
"yans-back" is the server project using node and mongodb as server and database and passportJS for basic username+password authentication.

###Software design pattern
YANS is inspired by MVC model, except the View is handled by the front app. So you can call it MRC,
meaning Model-Route-Controller.

###Directory tree

```
project
│   README.md
│   yans_back.js - main app js file
│   .env - local app configs for process.env
│   package.json
│   .gitignore 
└───bash
│   │   .envDev - .env file for development environment, part of repository
│   │   dump-db-from-server-to-files.sh - script to download DB to local files
│   │   restore-db-from-files-at-develop.sh - script to restore DB from local files
│   │   restart.sh - script to start the app with forever
│   
└───config
    │   express.js
    │   logger.js
    │   mongoHandler.js
    │   passport.js
    │   routes.js
    
```