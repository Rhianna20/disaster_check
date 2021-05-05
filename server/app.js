require("sucrase/register/jsx");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { homepage } = require("./views/homepage.jsx");
const disasterApi = require("./lib/disasterApi");
// const map = require('./lib/mapbox')

app.use("/static", express.static("client"));

// Request to main page
app.get("/", async function (req, res) {
  const natualHazards = await disasterApi.disasterData();

  const html = ReactDOMServer.renderToString(
    React.createElement(homepage, {
      data: natualHazards,
    })
  );
  res.send(html);
});
// res.render('map', document.getElementById('app') )

app.listen(PORT, () => console.log(`Disaster app listening on ${PORT}`));
