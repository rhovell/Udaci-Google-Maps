var map;
 function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 53.408490, lng: -2.149290 },
    zoom: 13
  });
  var merseyway = { lat: 53.410300, lng: -2.162440 };
  var marker = new google.maps.Marker({
    position: merseyway,
    map: map,
    title: 'First Marker'
  })
 }
