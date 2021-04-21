const axios = require("axios");

const disasterData = async () => {
  // reuqest for natural disaster data
  try {
    const response = await axios.get(
"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson" );
    console.log(response.data.features);
      // console.log(response.data);
    return response.data.features;
  } catch (error) {
    // console.log(error);
  }
};



module.exports = { disasterData };


