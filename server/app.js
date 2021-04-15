require('sucrase/register/jsx');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { homepage } = require('./views/homepage.jsx')

// Request to main page
app.get('/', function (req, res){
    const html = ReactDOMServer.renderToString(
        React.createElement(homepage,{
            
        })
    )
    res.send(html)
})

app.listen(PORT, () => console.log(`Disaster app listening on ${PORT}`))