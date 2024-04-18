var vehiculoInfo = {
    marca: "Toyota",
    modelo: "Corolla",
    numBastidor: "123456789",
    cilindrada: "2000cc",
    numPuertas: "4",
    color: "Rojo",
    nombre: "Juan",
    apellido: "Pérez",
    direccion: "Calle 123",
    telefono: "123456789",
    email: "juan@example.com"
};


let arrayVehiculo = new Array();

for(let i=0; i<2 ; i++){
    let marca1=prompt("Marca?");
    let modelo1=prompt("Modelo?");
    let numBastidor1=prompt("Numero bastidor?");
    let cilindrada1=prompt("Cilindrada?");
    let numPuertas1=prompt("Numero de puertas?");
    let nombre1=prompt("Nombre?");
    let apellido1=prompt("Apellidos?");
    let direccion1=prompt("Direccion?");
    let telefono1=prompt("Telefono?");
    let email1=prompt("Email?");

//importante esto de crear o objeto
    let vehiculo = Object.create(vehiculoInfo);
    vehiculo.marca=marca1;
    vehiculo.modelo=modelo1;
    vehiculo.numBastidor=numBastidor1;
    vehiculo.cilindrada=cilindrada1;
    vehiculo.numPuertas=numPuertas1;
    vehiculo.nombre=nombre1;
    vehiculo.apellido=apellido1;
    vehiculo.direccion=direccion1;
    vehiculo.telefono=telefono1;
    vehiculo.email=email1;
    arrayVehiculo.push(vehiculo);
}
//guardar info
for(let i=0; i<2 ; i++){
    localStorage.setItem(i,JSON.stringify(arrayVehiculo[i]));
}

//recuperar info
for (let i = 0; i < arrayVehiculo.length; i++) {
    let vehiculoGuardado2 = JSON.parse(localStorage.getItem(i));
    document.write("<h2>Vehículo " + (i + 1) + "</h2>");
    document.write("<p>Marca: " + vehiculoGuardado2.marca + "</p>");
    document.write("<p>Modelo: " + vehiculoGuardado2.modelo + "</p>");
    document.write("<p>Numero bastidor: " + vehiculoGuardado2.numBastidor + "</p>");
    document.write("<p>Cilindrada: " + vehiculoGuardado2.cilindrada + "</p>");
    document.write("<p>Numero de puertas: " + vehiculoGuardado2.numPuertas + "</p>");
    document.write("<p>Color: " + vehiculoGuardado2.color + "</p>");
    document.write("<p>Nombre: " + vehiculoGuardado2.nombre + "</p>");
    document.write("<p>Apellido: " + vehiculoGuardado2.apellido + "</p>");
    document.write("<p>Direccion: " + vehiculoGuardado2.direccion + "</p>");
    document.write("<p>Telefono: " + vehiculoGuardado2.telefono + "</p>");
    document.write("<p>Email: " + vehiculoGuardado2.email + "</p>");
    document.write("<hr>");
}


/*
//guarda información en el almacenamiento local del navegador web
localStorage.setItem('vehiculoInfo', JSON.stringify(vehiculoInfo));

//guarda información en el almacenamiento local del navegador web
const vehiculoGuardado = JSON.parse(localStorage.getItem('vehiculoInfo'));

//recorremos 
for (const propiedad in vehiculoGuardado) {
    document.write(`${propiedad}: ${vehiculoGuardado[propiedad]} <br>`);
};

//exemplo de acceder a unha propiedade
document.write(vehiculoGuardado.marca);*/