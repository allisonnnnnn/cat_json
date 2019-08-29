// client.js
const request = require("request");

// const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const fetchBreedDescription = function(breed, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (error, response, body) => {
      // connection error ->sth wrong with the url
      if (error) {
        return console.log(error);
      }
      const data = JSON.parse(body)[0];
      if (data) {
        callback(null, data.description);
        // request error -> if the data you want does not exist
      } else {
        callback(error, null);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
