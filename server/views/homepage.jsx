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
<link href='/static/css/style.css' rel='stylesheet' ></link>
<script src="/static/js/index.js"></script>
            <title>Document</title>

        </head>
        <body>
            <div>
            <h1 className='heading'>Disaster hub</h1>
            {/* map box object */}
            <div className='map' style={mapStyle}></div>
            
            <script src="/static/client/mapbox.js"></script>
            {/* button reveals list of recent earthquakes */}
          <button className='button'>Click</button>

        
          <div className='hazardls' id='hazardls'>
           
            <strong><p className='headingtwo'>Earthquakes gone of in the past hour:</p></strong>
          
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
           <p className='eqdescription'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea minima doloribus vitae reiciendis, a consequuntur, ipsam eveniet error perferendis nam modi delectus laboriosam pariatur, libero itaque tempore earum? Sunt.</p>


           </div>
        </body>
        </html>
    )
}

module.exports = { homepage }

