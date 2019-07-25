mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhbmR1eCIsImEiOiJjanRnMmh6OXcwZDl6M3lvY292cG55ZGFlIn0.evy0JhSJp-d__Rp1Aerc6g';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/evandux/cjy563cud0ekp1cp9brkn4kdd', // stylesheet location
center: [-115.99,49.6773783], // starting position [lng, lat]
zoom: 13 // starting zoom
});

// Load recycling bin layer from Mapbox
map.on('click', function(e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ['recycle-points'] // replace this with the name of the layer  
        });
      
        if (!features.length) {
          return;
        }
      
        var feature = features[0];
      
        var popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML('<b><p>' + feature.properties.name + '</p></b><p>' + 'glass: ' + feature.properties.glass + '</p>')
          .addTo(map);
      });

// Add direction functionality for user
var directions = new MapboxDirections({
  accessToken: 'pk.eyJ1IjoiZXZhbmR1eCIsImEiOiJjanRnMmh6OXcwZDl6M3lvY292cG55ZGFlIn0.evy0JhSJp-d__Rp1Aerc6g',
  unit: 'metric',
  interactive: 'false',
  placeholderOrigin: 'Choose a location to start from'
});

// Geolocate user
map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true,
    showUserLocation: true
  },
  trackUserLocation: true
  }));

// map.addControl(directions, 'top-left');