const React = require('react');

 
const mapStyle = {width: 650, height: 600, left: 300};



const homepage = props => {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            
           
<script src='https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />

            <title>Document</title>
            
        </head>
        <body>
            <div>
            <h1>Disaster hub</h1>

            <div id='map' style={mapStyle}></div>
           
            <script src="static/mapbox.js"></script>

            <strong><p>Earthquakes gone of in the past hour:</p></strong>
           {/* <p> {JSON.stringify(props.data)} </p> */}
           {props.data.map(earthquake => {
               return (
                <center>   <p>{earthquake.properties.place}</p> </center>
                   
               )
           })}

            {props.data.map(earthquake => {
               return (
                   <p >{earthquake.properties.mag}</p>
                   
               )
           })}
           </div>
        </body>
        </html>
    )
}

module.exports = { homepage }

