// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready", Dispositivo_Listo, false);
	//Cuando esta listo el dispositivo//
	function Dispositivo_Listo() {
		$('#localizar').on('tap',function(){
			navigator.geolocation.getCurrentPosition( function (position){
				$('#localizacion').html('latitude:' + posicion.coords.latitude +'\n' + 
				'Longitud: ' + posicion.coords.longitude + '\n' +
		'Altitud: ' + posicion.coords.altitude + '\n' +
		'Precision: ' + posicion.coords.accuracy + '\n' +
		'Precision de Altitud: ' + posicion.coords.altitudeAccuracy+ '\n' +
		'Direccion: ' + posicion.coords.heading+ '\n' +
		'Velocidad: ' + posicion.coords.speed + '\n' +
		'Intervalo: ' + posicion.timestamp + '\n');
	}, $('#localizacion').html('error en la localizacion') );
		});
}
});
