mapboxgl.accessToken =
  "pk.eyJ1IjoicmhpY29kZXMiLCJhIjoiY2tucms4bWNjMHBiZzMwcGZ4a3hzcWdieSJ9.khYnouHqfA2um_QyOtmMyA";

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 2, // starting zoom
});

//create a popup

const url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";
map.on("load", function () {
  // Load an image from an external URL

  const request = new XMLHttpRequest();
  window.setInterval(function () {
    // make a GET request to parse the GeoJSON at the url
    request.open("GET", url, true);
    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        // retrieve the JSON from the response

        const json = JSON.parse(this.response);
        console.log(json)
        // const popup = new window.mapboxgl.Popup({
        //     closeOnClick: false
        // })
        // map.on('click', (e) => {
        //     const coordinates = e.features[0].geometry.coordinates.slice();
        //     const html = '<p>Tell em</p>'
        //     popup.setLngLat(coordinates).setHtml(html).addTo
        // })

        // update the drone symbol's location on the map
        map.getSource("drone").setData(json);

        // fly the map to the drone's current location
        map.flyTo({
          center: json.geometry.coordinates,
          speed: 1,
        });
      }
    };
    request.send();
  }, 2000);

  map.addSource("drone", { type: "geojson", data: url });
  map.addLayer({
    id: "drone",
    type: "symbol",
    source: "drone",
    layout: {
      // This icon is a part of the Mapbox Streets style.
      // To view all images available in a Mapbox style, open
      // the style in Mapbox Studio and click the "Images" tab.
      // To add a new image to the style at runtime see
      // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
      "icon-image": "rocket-15",
      //allows multiple images close in location to appear
      "icon-allow-overlap": true,
    },
  });
});

//create one overlay

map.on("click", "drone", function (e) {

  const coordinates = e.features[0].geometry.coordinates.slice();
  const description = '<strong>Location:</strong>  ' + e.features[0].properties.place;
  const magnitude = '<strong>Magnitude:</strong>   ' + e.features[0].properties.mag;
   

   
  new mapboxgl.Popup()
  .setLngLat(coordinates)
  .setHTML(description + '        ' + magnitude)
  .addTo(map);
  });
   

  
