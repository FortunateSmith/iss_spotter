/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const { fetchMyIP } = require('./iss');

fetchMyIP((error, IP) => {
  if (error) {
    console.log("It didn't work: ", error);
    return;

  }
  console.log("It worked! Return IP: ", IP);
  
});

fetchMyIP();

//module.exports = { fetchMyIP };