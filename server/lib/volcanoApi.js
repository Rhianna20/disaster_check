const axios = require('axios');



const volcanoApi = async () => {
    try {
      const volcanoResponse = await axios.get('http://webservices.volcano.si.edu/geoserver/GVP-VOTW/wms?service=WFS&version=1.0.0&request=GetFeature&typeName=GVP-VOTW:E3WebApp_Eruptions1960&outputFormat=application%2Fjson`')
 
      console.log(volcanoResponse)
      
    } catch (error) {
      console.log(error)
    }
}
    module.exports = { volcanoApi };