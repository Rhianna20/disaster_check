const axios = require("axios");

const earthquakesWithinAHour = async () => {
  // request for recent earthquake data
  try {
    const response = await axios.get(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
    );

    const data = response.data.features;
      
    return data;
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

module.exports = { earthquakesWithinAHour };
