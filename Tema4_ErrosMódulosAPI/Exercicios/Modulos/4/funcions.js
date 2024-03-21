function crearMapa(str1, str2) {
    var mapa = { 'String1': str1, 'String2': str2 };
    return mapa;
}

function crearArray(str1, str2) {
    var array = [str1, str2];
    return array;
}

function imprimirContenido(mapa, array) {
    console.log("Contenido del mapa:");
    for (var key in mapa) {
            console.log(key + ": " + mapa[key]);
    }
    console.log("\nContenido del array:");
        for (var i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
}

export{
    imprimirContenido,
    crearArray,
    crearMapa
}