// client.js
const request = require("request");
const breed = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const fetchCat = function() {
  request(url, (error, response, body) => {
    // connection error ->sth wrong with the url
    if (error) {
      return console.log(error);
    }
    const data = JSON.parse(body)[0];
    if (data) {
      return console.log(data.description);
      // request error -> if the data you want does not exist
    } else {
      return console.log("no data");
    }
  });
};

fetchCat();
