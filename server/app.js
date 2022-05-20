require("sucrase/register/jsx");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { homepage } = require("./views/homepage.jsx");
const disasterApi = require("./lib/hourlyShakes");
const dailyEarthquake = require('./lib/dailyEarthquake')
const { document } = require('../document');
const monthlyShakes = require('./lib/monthEarthquakes')
const { dailyDoc} = require('../dailydoc')
const {weeklyTemplate} = require('../weeklyTemplate')


app.use(express.static("public"));


// Request to main page
app.get("/dailyEarthquakes", async function (req, res) {
  const natualHazards = await disasterApi.disasterData();
 
  
  const body = ReactDOMServer.renderToString(
    React.createElement(homepage, {
      data: natualHazards,
    })
  );
  const html = document(body)
  res.send(html);
});

app.get("/weeklyEarthquakes", async function (req, res){
  
   const dailyShakeData = await dailyEarthquake.dailyShakes();
   
  const body = ReactDOMServer.renderToString(
    React.createElement(homepage, {
      data: dailyShakeData,
    })
)
  const html = weeklyTemplate(body)
  res.send(html)
})

app.get("/monthlyEarthquakes", async function (req, res){
  
  const monthlyShakeData = await monthlyShakes.monthlyEarthquakesData();
  
 const body = ReactDOMServer.renderToString(
   React.createElement(homepage, {
     data: monthlyShakeData
   })
)
 const html = dailyDoc(body)
 res.send(html)
})

app.listen(PORT, () => console.log(`Disaster app listening on ${PORT}`));
