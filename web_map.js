mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhbmR1eCIsImEiOiJjanRnMmh6OXcwZDl6M3lvY292cG55ZGFlIn0.evy0JhSJp-d__Rp1Aerc6g';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/evandux/cjy563cud0ekp1cp9brkn4kdd', // stylesheet location
center: [-115.99,49.6773783], // starting position [lng, lat]
zoom: 13 // starting zoom
});

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
          .setHTML('<h3>' + feature.properties.name + '</h3><p>' + 'glass: ' + feature.properties.glass + '</p>')
          .addTo(map);
      });

map.addControl(new MapboxDirections({
        accessToken: 'pk.eyJ1IjoiZXZhbmR1eCIsImEiOiJjanRnMmh6OXcwZDl6M3lvY292cG55ZGFlIn0.evy0JhSJp-d__Rp1Aerc6g'
        }), 'top-left');