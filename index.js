const { nextISSTimesForMyLocation } = require('./iss')

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

//nextISSTimesForMyLocation();
////////////////////////////////////////////////

// const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss');
// // fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes

// call function to fetch IP and parse
// fetchMyIP((error, IP) => {
//   if (error) {
//     // Pass error back to callback
//     console.log("It didn't work: ", error);
//     return;

//   }
//   console.log("It worked! Return IP: ", IP);

// });

// // call function to fetch geoCoordinates by IP address
// fetchCoordsByIp('6.11.178.134', (error, geoCoordinates) => {
//   if (error) {
//     console.log("Coordinates unavailable: ", error);
//     return;
//   }
//   console.log("It worked! Coordinates at IP are: ", geoCoordinates);
// });

// // call function to fetch ISS flyover times at geolocation
// fetchISSFlyOverTimes({ latitude: 37.751, longitude: -97.822 }, (error, flyOverTimes) => {
//   if (error) {
//     console.log("Flyover Times unavailable: ", error);
//     return;
//   }
//   console.log("It worked! Flyover Times are:", flyOverTimes);
// });
