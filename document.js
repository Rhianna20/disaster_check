function document(body, map){
return `
    <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        
       
<script src='https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
<link href='/css/style.css' rel='stylesheet' />

        <title>Document</title>

    </head>
<body>
<h1 class='heading'> Disaster Hub </h1>

    <div id='map' class='map'></div>
    
    <script src="../client/mapbox.js"></script>
    <script src="../client/weeklyMapbox.js"></script>   
    <script src="../client/monthlyMapbox.js"></script>

        
    ${body}
            // Try tenary opertator. querying routes to utilze script
        


    <script src="/js/index.js"></script>
    </body>
    </html>

`
}

module.exports = {document};