require("sucrase/register/jsx");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { homepage } = require("./views/homepage.jsx");
const hourlyEarthquakes = require("./lib/hourlyShakes");
const dailyEarthquake = require('./lib/dailyEarthquake')
const weeklyEarthquake = require('./lib/weeklyEarthquake')
const monthlyShakes = require('./lib/monthEarthquakes')
const { document } = require('../document');
const { dailyDoc} = require('../dailydoc')
const { weeklyTemplate } = require('../weeklyTemplate');
const { monthlyTemplate } = require("../monthlyTemplate");


app.use(express.static("public"));  

// Request to main page
app.get("/hourlyEarthquakes", async function (req, res) {
  const natualHazards = await hourlyEarthquakes.earthquakesWithinAHour();
 
  const body = ReactDOMServer.renderToString(
    React.createElement(homepage, {
      data: natualHazards,
    })
  );
  const html = document(body)
  res.send(html);
});


app.get("/dailyEarthquakes", async function (req, res){
  
   const dailyShakeData = await dailyEarthquake.dailyShakes();
   
  const body = ReactDOMServer.renderToString(
    React.createElement(homepage, {
      data: dailyShakeData,
    })
)
  const html = dailyDoc(body)
  res.send(html)
})

app.get("/weeklyEarthquakes", async function (req, res) {
  const weeklyShakes = await weeklyEarthquake.earthquakesWithinAWeek();
 
  
  const body = ReactDOMServer.renderToString(
    React.createElement(homepage, {
      data: weeklyShakes,
    })
  );
  const html = weeklyTemplate(body)
  res.send(html);
});


app.get("/monthlyEarthquakes", async function (req, res){
  
  const monthlyShakeData = await monthlyShakes.monthlyEarthquakesData();
  
 const body = ReactDOMServer.renderToString(
   React.createElement(homepage, {
     data: monthlyShakeData
   })
)
 const html = monthlyTemplate(body)
 res.send(html)
})

app.listen(PORT, () => console.log(`Disaster app listening on ${PORT}`));
