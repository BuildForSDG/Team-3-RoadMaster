/* eslint-disable linebreak-style */
/* locs would be replaced by the coordinates sent to the server from the client */
// const locs = { lat: 6.3445645, lng: 3.4533255 };
/* firestations would be stored and pulled from the database, this is just a mock */
const { fireStations } = require('../fireStations.json');

/* Function to find the closest firestation to the accident location */
function findClosestStation(accidentLocation, fireStation = fireStations) {
  let closestStation;
  let min = Infinity;
  fireStation.reduce((init, next) => {
    const station = Object.keys(next);
    const latDiff = Math.abs(accidentLocation.lat - next[station].lat);
    const lngDiff = Math.abs(accidentLocation.lng - next[station].lng);
    const tempMin = latDiff > lngDiff ? lngDiff : latDiff;
    if (tempMin < min) {
      min = tempMin;
      closestStation = station;
    }
    return tempMin;
  }, {});
  return closestStation;
}

/* Function to find the optimal route between the closest firestation and the accident location */
// function optimalRoute() {

// }

/* This would be used as a controller for the route */
// const mapsApi = (req, res) => {
//   // Coordinates of the accident location
//   const { accidentLocation } = req.body;
//   const closestStation = findClosestStation(accidentLocation, fireStations);
//   res.json({
//     closestStation,
//     optimalRouteCoords: []
//   });
// };

/* This controller would be exported to the routes module to be used in the maps logic */
export default findClosestStation;
