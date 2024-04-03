navigator.geolocation.getCurrentPosition(posicion=>{
    console.log(`Lonxitude:${posicion.coords.longitude}`);
    console.log(`Latitude:${posicion.coords.latitude}`);
    });