const axios = require("axios");

const dailyShakes = async () => {
  // request for recent earthquake data
  try {
    const response = await axios.get(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    );

    const data = response.data.features;

    return data;
  } catch (error) {
    console.log(error);
  }
};



module.exports = { dailyShakes  };
