const React = require('react');

const homepage = props => {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Document</title>
        </head>
        <body>
            <h1>Disaster hub</h1>
          
           <p> {props.data[8]} </p>
           
           <p> {props.data[40]} </p>
           <p> {props.data[41]} </p>
           
        </body>
        </html>
    )
}

module.exports = { homepage }