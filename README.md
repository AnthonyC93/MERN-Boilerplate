<h1>M.E.R.N. Stack Boilerplate</h1>

<h2> 2 changes need to be made to complete connection to Express/MongoDB:</h2>

    1. line 18 in server.js needs to have routes index added to middleware
    2. line 21 in server.js needs to be uncommented and the database name needs replace "dbNameHere"

<h2>Back End Dependencies in package.json:</h2>

    "axios": "^0.18.0",
    "bcrypt": "^3.0.4",
    "dotenv": "^6.2.0",
    "express": "^4.16.3",
    "if-env": "^1.0.4",
    "jquery": "^3.3.1",
    "mongodb": "^3.1.13",
    "mongoose": "^5.3.16"
    
<h2>Front End Dependencies in client/package.json:</h2>

    "axios": "^0.18.0",
    "react": "^16.6.3",
    "react-dom": "^16.6.3",
    "react-router-dom": "^4.3.1",
    "react-scripts": "^2.1.5",
    "react-loader-spinner": "^2.3.0"
    
<h3>API Server calls traverses through:</h3>
React Component Trigger --> API Functions File --> Corresponding Route file --> Corresponding Controller file which uses Mongoose Models


<h4>Note: Some code was left in models and routes folders for reference in future projects</h4>
