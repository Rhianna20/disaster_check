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
            <div>
            <h1>Disaster hub</h1>

           {/* <p> {JSON.stringify(props.data)} </p> */}
           {props.data.map(earthquake => {
               return (
                   <p>{earthquake.properties.place}</p>
               )
           })}
           </div>
        </body>
        </html>
    )
}

module.exports = { homepage }

