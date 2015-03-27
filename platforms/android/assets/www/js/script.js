/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Variable global para almacenar la ciudad pulsada en cada caso
var ciudadElegida;


/**
 * Funcion que inicia el mapa con las propiedades especificadas y lo inserta en el elemento googlemap
 * @returns {undefined}
 */
function iniciarMapa() {
    var propiedades = {
          center: new google.maps.LatLng(51.508742,-0.120850),
          zoom:5,
          mapTypeId:google.maps.MapTypeId.ROADMAP 
    };
    var mapa = new google.maps.Map(document.getElementById("googlemap"),propiedades);

    //Genero las marcas, les añado el listener y las agrego al mapa
    var marca=new google.maps.Marker({
        position:new google.maps.LatLng(51.508742,-0.120850)
    });
    function callbackBotonPulsado(botonIndice) {
        if (botonIndice == 1) {
            //Mostrar las fotos
        } 
    }
    google.maps.event.addListener(marca,'click',function() {
        //Anoto la ciudad elegida
        ciudadElegida = "Londres";
        //Muestro una alerta nativa
        navigator.notification.confirm(
            'Capital de Inglaterra', 
            callbackBotonPulsado(),            
            'Londres',          
            ['Ver fotos','Cancelar']        
        );
    });
    marca.setMap(mapa);
}

//Añado evento para que cuando la pagina haya sido cargada se llama a iniciarMapa
google.maps.event.addDomListener(window, 'load', iniciarMapa);
