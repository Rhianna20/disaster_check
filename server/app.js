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

// const map = require('./lib/mapbox')

app.use(express.static("public"));


// Request to main page
app.get("/", async function (req, res) {
  const natualHazards = await disasterApi.disasterData();
 
  
  const body = ReactDOMServer.renderToString(
    React.createElement(homepage, {
      data: natualHazards,
    })
  );
  const html = document(body)
  res.send(html);
});

app.get("/daily", async function (req, res){
  
   const dailyShakeData = await dailyEarthquake.dailyShakes();
   
  const body = ReactDOMServer.renderToString(
    React.createElement(homepage, {
      data: dailyShakeData
    })
)
  const html = document(body)
  res.send(html)
})

app.get("/monthly", async function (req, res){
  
  const dailyShakeData = await monthlyShakes.monthlyEarthquakesData();
  
 const body = ReactDOMServer.renderToString(
   React.createElement(homepage, {
     data: dailyShakeData
   })
)
 const html = document(body)
 res.send(html)
})

app.listen(PORT, () => console.log(`Disaster app listening on ${PORT}`));
