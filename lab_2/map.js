var mymap = L.map("map").setView([43.81642117539796, -91.23209456992531], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWJha2VzOSIsImEiOiJja3o3ajBnMXAwanhiMm9tcDVoOGptNTl3In0.efDBfxtTqOfoOTw5Oo5Sgg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([43.81642117539796, -91.23209456992531])
    .addTo(mymap)
    .bindPopup("<b>Hello!</b><br>I am University of Wisconsin La Crosse.")
    .openPopup();