const axios = require("axios");

const disasterData = async () => {
  // request for recent earthquake data
  try {
    const response = await axios.get(
"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson" );
    console.log(response.data.features);
    // const currentDisaster = response.data.features[0].geometry;
    return response.data.features;
  } catch (error) {
    console.log(error);
  }
};

// const volcanoApi = async () => {
//   try {
//     const response = await axios.get("www.ngdc.noaa.gov:12152/hazel/hazard-service");
//     console.log()
//     return response
//   } catch (error) {
//     console.log(error)
//   }
// }



module.exports = { disasterData };


