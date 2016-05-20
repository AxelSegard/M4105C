$(document).ready(function () {
    $("#menu2").click(function () {
	console.log('click');
        $(".burger").toggle(800);
    });
});


function init_map(){
	var myOptions = {
		zoom:10,
		center:new google.maps.LatLng(8.061795255877653,124.2443656356611),mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('gmap_canvas'),myOptions);
	marker = new google.maps.Marker({
		map: map,position: new google.maps.LatLng(8.061795255877653,124.2443656356611)
	});
	infowindow = new google.maps.InfoWindow({
		content:'<strong>Map</strong><br>Marawi<br>'
	});
	google.maps.event.addListener(marker, 'click', function(){
		infowindow.open(map,marker);
	});
	infowindow.open(map,marker);
}google.maps.event.addDomListener(window, 'load', init_map);


