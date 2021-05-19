require("sucrase/register/jsx");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { homepage } = require("./views/homepage.jsx");
const disasterApi = require("./lib/disasterApi");
const volcanoData = require('./lib/volcanoApi')

// const map = require('./lib/mapbox')

app.use('/static', express.static("public"));


// Request to main page
app.get("/", async function (req, res) {
  const natualHazards = await disasterApi.disasterData();
  const volcanoLiveData = await volcanoData.volcanoApi();
  
  const html = ReactDOMServer.renderToString(
    React.createElement(homepage, {
      data: natualHazards,
    })
  );
  res.send(html);
});
// res.render('map', document.getElementById('app') )
function reveal(){
  const revealEl = req.gerElementById('button').style.display='inline';
  return reveal
}


app.listen(PORT, () => console.log(`Disaster app listening on ${PORT}`));
