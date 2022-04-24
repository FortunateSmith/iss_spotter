const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIp = function(body) {
  const IP = JSON.parse(body).ip
  return request(`https://freegeoip.app/json/${IP}`);
};

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body);
  const url = `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(url);
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIp)
  .then(fetchISSFlyOverTimes)
  .then((data) => {
    const response = JSON.parse(data);
    
    return response;
  });
};


module.exports = { nextISSTimesForMyLocation };