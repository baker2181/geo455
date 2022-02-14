var mymap = L.map("map").setView([38.576654997239075, -92.1756964845525], 8);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWJha2VzOSIsImEiOiJja3o3ajBnMXAwanhiMm9tcDVoOGptNTl3In0.efDBfxtTqOfoOTw5Oo5Sgg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon2 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon3 = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon4 = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon5 = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon6 = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon7 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon8 = L.icon({
    iconUrl: 'images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon9 = L.icon({
    iconUrl: 'images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon10 = L.icon({
    iconUrl: 'images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var kansascity = L.marker([39.10437300271487, -94.57986809699136], {icon: myIcon1}).bindPopup("<b>Kansas City").addTo(mymap);
var saintlouis = L.marker([38.67850621083638, -90.31681797482032], {icon: myIcon2}).bindPopup("<b>St. Louis").addTo(mymap);
var springfield = L.marker([37.20846397560923, -93.28430349456036], {icon: myIcon3}).bindPopup("<b>Springfield").addTo(mymap);
var columbia = L.marker([38.952933375393734, -92.32906163718351], {icon: myIcon4}).bindPopup("<b>Columbia").addTo(mymap);
var Independence = L.marker([39.09178996459889, -94.4144256050259], {icon: myIcon5}).bindPopup("<b>Independence").addTo(mymap);
var Leessummit = L.marker([38.91057577333796, -94.38328151506451], {icon: myIcon6}).bindPopup("<b>Lee's Summit").addTo(mymap);
var ofallon = L.marker([39.03710206280502, -90.750868164104561], {icon: myIcon7}).bindPopup("<b>O'Fallon").addTo(mymap);
var stjoesph = L.marker([39.76766155637599, -94.85174151633716], {icon: myIcon8}).bindPopup("<b>St. Joesph").addTo(mymap);
var stcharles = L.marker([38.78680921869194, -90.4932299843757], {icon: myIcon9}).bindPopup("<b>St. Charles").addTo(mymap);
var stpeters = L.marker([38.78719877075399, -90.62966414690051], {icon: myIcon10}).bindPopup("<b>St. Peters").addTo(mymap);