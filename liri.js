require ('dotenv').config();
// file system package
const fs = require('fs')

const keys = require('./keys.js');
// console.log(keys);

// NPM Spotify Module
const Spotify = require('node-spotify-api');

// NPM Twitter Module
const Twitter = require('twitter');

// User Input
let command = process.argv[2];
let searchItem = process.argv[3];

switch(command) {
  case 'spotify-this-song':
  console.log(`spotify`);
  spotifyer();
  break;
  case 'my-tweets':
  console.log(`twitter`);
  twitterer();
  break;
  case 'movie-this':
  console.log(`OMDAPI`);
  break;
  default:
  console.log(`error bruh`);
}

// Empty string to log log Searches
let searchLog = "";

// Appends to search log
function logMySearch(log) {
  fs.appendFile('log.txt', log, function(err) {
    if (err) {
      return console.log(err);
    };
    console.log('Your search has been added to log.txt ...');
  });
}; // Closes logMySearch


// arrow function do not get hoisted to top
function spotifyer(){
  // step 1) Make instance of API object using key and secret
  // step 2) Insert user search into query URL
  // step 3) Submit Query
  // step 4) process results drill into the object
  const spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
  })
  // spotify search
  spotify.search({
    type: 'track',
    query: searchItem
  },
  function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    let track = data.tracks.items[0]

    // console.log(track.external_urls.spotify);
    console.log(`========================================`);
    let artist = track.album.artists[0].name;
    console.log(`Artist: ${artist}`);
    let songName = track.name;
    console.log(`Song Name: ${songName}`);
    let preview = track.external_urls.spotify;
    console.log(`Spotify Preview Link: ${preview}`);
    let album = track.album.name;
    console.log(`Album: ${album}`);
    console.log(`========================================`);
    searchLog = `Search type: ${command}\nArtist: ${artist}\nSong Name: ${songName}\nSpotify Preview Link: ${preview}\nAlbum: ${album}\n ========================================`;
    // Append to log.txt
    logMySearch(searchLog);
  });
} // Closes Spotify

// Twitter Function
function twitterer(){
  const tweet = new Twitter({
    consumer_key: keys.twitter.consumer_key,
    consumer_secret: keys.twitter.consumer_secret,
    access_token_key: keys.access_token_key,
    access_token_secret: keys.access_token_secret
  })

} // Closes Twitter Function

//
const omdb = () =>{

}
