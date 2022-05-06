const axios = require("axios");

const earthquakesWithinAWeek  = async () => {
  // request for recent earthquake data
  try {
    const response = await axios.get(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
    );

    const data = response.data.features;
      
    return data;
  } catch (error) {
    console.log(error);
  }
};



module.exports = { earthquakesWithinAWeek };
