require ('dotenv').config();

const keys = require('./keys.js');
// console.log(keys);

// NPM Spotify Module
const Spotify = require('node-spotify-api');

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
    break;
  case 'movie-this':
    console.log(`OMDAPI`);
    break;
  default:
  console.log(`error bruh`);
}
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
      query: 'All the Small Things' },
    function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      let track = data.tracks.items[0]

      // console.log(track.external_urls.spotify);

      let artist = track.album.artists[0].name;
      console.log(artist);
      let songName = track.name;
      console.log(songName);
      let preview = track.external_urls.spotify;
      console.log(preview);
      let album = track.album.name;
      console.log(album);



    });
}
const tweet = () =>{

}
const omdapi = () =>{

}
