'use strict';

/**
 * Load Twilio configuration from .env config file - the following environment
 * letiables should be set:
 * process.env.TWILIO_ACCOUNT_SID
 * process.env.TWILIO_API_KEY
 * process.env.TWILIO_API_SECRET
 */

require('dotenv').config({path:'./.env'});

let http = require('http');
let AccessToken = require('twilio').jwt.AccessToken;
let VideoGrant = AccessToken.VideoGrant;
let express = require('express');
let cors = require('cors');

// Create Express webapp.
let app = express();

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));

/**
 * Generate an Access Token for a chat application user provided via the url
 */
app.get('/token', function(request, response) {
 
  let identity = request.query['identity'];

  if ( !identity ) {
    response.send({
      body: "An identity is needed"
    })
  }


  // Create an access token which we will sign and return to the client,
  // containing the grant we just created.
  let token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  );

  // Assign the generated identity to the token.
  token.identity = identity;

  // Grant the access token Twilio Video capabilities.
  let grant = new VideoGrant();
  token.addGrant(grant);

  // Serialize the token to a JWT string and include it in a JSON response.
  response.send({
    identity: identity,
    token: token.toJwt()
  });
});

// Create http server and run it.
let server = http.createServer(app);
let port = process.env.PORT || 9001;
server.listen(port, function() {
  console.log('Express server running on *:' + port);
});