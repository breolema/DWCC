var ordenadorInfo = {
    referencia: "",
    modelo: "",
    ram: "",
    discoDuro: "",
    procesador: "",
    so: ""
};


let arrayOrdenador = new Array();

for(let i=0; i<2 ; i++){
    let referencia1=prompt("Referencia?");
    let modelo1=prompt("Modelo?");
    let ram1=prompt("Memoria RAM?");
    let discoDuro1=prompt("Capacidad disco duro?");
    let procesador1=prompt("Procesador?");
    let so1=prompt("Sistema operativo?");

//importante esto de crear o objeto
    let ordenador = Object.create(ordenadorInfo);
    ordenador.referencia=referencia1;
    ordenador.modelo=modelo1;
    ordenador.ram=ram1;
    ordenador.discoDuro=discoDuro1;
    ordenador.procesador=procesador1;
    ordenador.so=so1;
    arrayOrdenador.push(ordenador);
}
//guardar info
for(let i=0; i<2 ; i++){
    localStorage.setItem(i,JSON.stringify(arrayOrdenador[i]));
}

var borrarPC = prompt("Que pc queres eliminar?");

//recuperar info
for (let i = 0; i < arrayOrdenador.length; i++) {
    let ordenadorGuardado = JSON.parse(localStorage.getItem(i));
    //borrar pc
    if (ordenadorGuardado.referencia === ordenadorGuardado) {
        localStorage.removeItem(i);
        document.write("Ordenador eliminado.");
    } else {
        document.write(`Non hai ordenadores con esa referencia.<br>`);
    }

    document.write("<h2>Vehículo " + (i + 1) + "</h2>");
    document.write("<p>Referencia: " + ordenadorGuardado.referencia + "</p>");
    document.write("<p>Modelo: " + ordenadorGuardado.modelo + "</p>");
    document.write("<p>Memoria RAM: " + ordenadorGuardado.ram + "</p>");
    document.write("<p>Capacidad disco duro: " + ordenadorGuardado.discoDuro + "</p>");
    document.write("<p>Tipo procesador: " + ordenadorGuardado.procesador + "</p>");
    document.write("<p>Sistema Operativo: " + ordenadorGuardado.so + "</p>");
    document.write("<hr>");
}
