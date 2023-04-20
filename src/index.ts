import express from  "express" ;

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {

    const now = new Date();
    const unixTimestamp = Math.floor(now.getTime() / 1000);


    const util = require('util')

    // tslint:disable-next-line:no-console
    console.log( "timestamp: " +  util.inspect(unixTimestamp));

    res.send(
        {
            "message" : "Automate all the things!",
            "timestamp" :  unixTimestamp
        }
        );
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );