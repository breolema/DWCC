var vehiculoInfo = {
    marca: "Toyota",
    modelo: "Corolla",
    numBastidor: "123456789",
    cilindrada: "2000cc",
    numPuertas: "4",
    color: "Rojo",
    owner: {
        nombre: "Juan",
        apellido: "Pérez",
        direccion: "Calle 123",
        telefono: "123456789",
        email: "juan@example.com"
    }
};

localStorage.setItem('vehiculoInfo', JSON.stringify(vehiculoInfo));

const vehiculoGuardado = JSON.parse(localStorage.getItem('vehiculoInfo'));

for (const propiedad in vehiculoGuardado) {


    document.write(`${propiedad}: ${vehiculoGuardado[propiedad]} <br>`);

};