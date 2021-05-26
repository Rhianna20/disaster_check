const axios = require("axios");
const MockAdapter = require('axios-mock-adapter');
const disasterData = require('../server/lib/disasterApi')
const dataApi = 'https://www.npmjs.com/package/axios-mock-adapter'
describe("Disaster Data", () => {
  test("It should GET live time earthquake api data", async () => {
      const mock = new MockAdapter(axios)
    const response = {response: true}
      mock.onGet(dataApi)
      .reply(200, {})
    axios.get(dataApi).then(function (response) {
    })
   
  });
});
