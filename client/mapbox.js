

mapboxgl.accessToken='pk.eyJ1IjoicmhpY29kZXMiLCJhIjoiY2tucms4bWNjMHBiZzMwcGZ4a3hzcWdieSJ9.khYnouHqfA2um_QyOtmMyA'

const map = new mapboxgl.Map({
    
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});

const geojson = {
    type: 'geojson',
    data: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'
}

var marker = new mapboxgl.Marker({
    color: "#FFFFFF",
    draggable: true
    }).setLngLat([30.5, 50.5])
    .addTo(map);
    Copy

    // Store the marker's longitude and latitude coordinates in a variable
var lngLat = marker.getLngLat();
// Print the marker's longitude and latitude values in the console
console.log('Longitude: ' + lngLat.lng + ', Latitude: ' + lngLat.lat )
    
// map.addSource('some id', {
//     type: 'geojson',
//     data: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'
// })
