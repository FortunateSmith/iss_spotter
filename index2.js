const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./index.js')

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes.response)
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });




