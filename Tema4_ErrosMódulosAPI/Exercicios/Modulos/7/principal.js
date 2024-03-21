import { cargarFruta,buscarFruta } from './funcions.js';

const mapaFrutas = cargarFruta();
console.log("Mapa de frutas cargado:", mapaFrutas);

const fruta=prompt("Que fruta buscas?");
const existeFruta = buscarFruta(mapaFrutas, fruta);

if (existeFruta) {
    console.log("La fruta existe en el mapa.");
} else {
    console.log("La fruta no existe en el mapa.");
}