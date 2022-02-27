const { fetchMyIP, fetchCoordsByIp } = require('./iss');

// fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes

fetchMyIP((error, IP) => {
  if (error) {
    console.log("It didn't work: ", error);
    return;

  }
  console.log("It worked! Return IP: ", IP);

});



fetchCoordsByIp('6.11.178.134', (error, geoCoordinates) => {
  if (error) {
    console.log("Coordinates unavailable: ", error);
    return;
  }
  console.log("It worked! Coordinates at IP are: ", geoCoordinates);
});







