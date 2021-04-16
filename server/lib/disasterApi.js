const axios = require("axios");

const disasterData = async () => {
  // reuqest for natural disaster data
  try {
    const response = await axios.get(
"https://earthquake.usgs.gov/fdsnws/event/1/application.json" );
    console.log(response.data['eventtypes']);
    return response.data['eventtypes'];
  } catch (error) {
    // console.log(error);
  }
};



module.exports = { disasterData };
