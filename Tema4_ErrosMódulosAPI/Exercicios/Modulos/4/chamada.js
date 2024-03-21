import { imprimirContenido,crearArray,crearMapa } from './funcions.js';

function programaPrincipal(str1, str2) {
    var mapa = crearMapa(str1, str2);
    var array = crearArray(str1, str2);
    imprimirContenido(mapa, array);
}

programaPrincipal("Ana", "Pepe");