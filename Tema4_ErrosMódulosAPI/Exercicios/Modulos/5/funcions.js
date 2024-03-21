function cargarAlumnos() {
    var mapaAlumnos = new Map();

    var cantidadAlumnos = parseInt(prompt("Introduce la cantidad de alumnos a añadir:"));
    
    for (var i = 0; i < cantidadAlumnos; i++) {
        var dni = prompt("Introduce el DNI del alumno:");
        var nota = prompt("Introduce la nota del alumno:");
        
            mapaAlumnos.set(dni, parseInt(nota)); 
    }

    return mapaAlumnos;
}

function imprimirAlumnos(mapaAlumnos) {
    console.log("DNI - Nota:");
    mapaAlumnos.forEach((nota, dni) => {
        console.log(dni + " - " + nota);
    });
}

export{
    cargarAlumnos,
    imprimirAlumnos
}