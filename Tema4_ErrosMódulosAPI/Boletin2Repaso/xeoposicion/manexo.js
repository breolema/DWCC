function obtenerUbicacion() {
    navigator.geolocation.getCurrentPosition((posicion) => {
        let longitud = posicion.coords.longitude;
        let latitud = posicion.coords.latitude;

        document.getElementById("resultado").innerText = `A lonxitude é ${longitud} e a latitude é ${latitud}`;
    });
}