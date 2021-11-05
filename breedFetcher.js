const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, res, body) => {
    let description = null;
    if (err) {
      callback(err, description);
      return;
    }

    const data = JSON.parse(body);
    // check if there is at least one result
    if (data[0]) {
      // Empty array returned by API if nothing matches the query
      description = data[0].description;
    } else {
      description = 'Sorry, no breed found!';
    }

    callback(null, description);
  });
};

module.exports = { fetchBreedDescription };

