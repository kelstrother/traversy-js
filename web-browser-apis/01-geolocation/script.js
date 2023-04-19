//~ //////////////////////////
//!   GET CURRENT LOCATION  //
//~ ///////////////////////////

function curSuccess(pos) {
  const coords = pos.coords;
  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within ${coords.accuracy} meters.`);
}
function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}
const options = {
  enableHighAccuracy: true,   // will use GPS if available
  timeout: 5000, // TIME TO WAIT BEFORE STOP LOOKING FOR LOCATION
  maximumAge: 0, // DO NOT USE A CACHED POSITION
}

navigator.geolocation.getCurrentPosition(curSuccess, curError, options)

//~ //////////////////////////
//!   WATCH LOCATION     //
//~ ///////////////////////////
const target = {
  latitude: 41.43245,
  longitude: -71.4748
}

function watchSuccess(pos) {
  const coords = pos.coords;

  if(target.latitude === coords.latitude && target.longitude === coords.longitude) {
    console.log('you have reached your destination');
    navigator.geolocation.clearWatch(id);
  }

}
function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}
const watchOptions = {
  enableHighAccuracy: true, // will use GPS if available
  timeout: 5000, // TIME TO WAIT BEFORE STOP LOOKING FOR LOCATION
  maximumAge: 0, // DO NOT USE A CACHED POSITION
};

const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions)

