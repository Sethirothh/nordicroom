mapboxgl.accessToken = 'pk.eyJ1IjoicG1iYTEyMyIsImEiOiJjanRpZjFyMGoyZGI5NDR0Zmt5YnVmYjRwIn0.ZCWWF4LkxLEo2j__F9qB-Q';

const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/pmba123/cjtifbkq10x0w1fnr7v89ipxi',
center: [10.210121, 56.147745],
zoom: 16.5
});


geoJSON.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
    // new mapboxgl.Marker(el)
    //   .setLngLat(marker.geometry.coordinates)
    //   .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    //     .setHTML('<h3>' + marker.properties.sted + '</h3>'))
    //   .addTo(map);
});
