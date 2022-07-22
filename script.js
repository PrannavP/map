// getting lon and lat of user
function checkGeoLocation(){
    alert("Please enable your location service.");
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(succssFunction, errorFunction);
    } else{
        alert('Please enable location');
    };
};

function succssFunction(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    console.log(lat, long);

    // var map = L.map('map').setView([27.711769, 85.257845], 15);
    
    var map = L.map('map').setView([lat, long], 15);
    
    var marker = L.marker([lat, long]).addTo(map);

    marker.bindPopup("This is your current location.").openPopup();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);
};

function errorFunction(){
    alert('Location is disabled. Please Reload');
};