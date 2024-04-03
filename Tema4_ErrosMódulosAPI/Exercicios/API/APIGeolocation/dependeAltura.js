let identificador = navigator.geolocation.watchPosition(posicion=>{
    console.log(`Lonxitude:${posicion.coords.longitude}`);
    console.log(`Latitude:${posicion.coords.latitude}`);
    if ( posicion.coords.altitude < 100)
    navigator.geolocation.clearWatch(Identificador);
    });