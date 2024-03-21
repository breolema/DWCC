function separarCadea(cadea) {
    // Comprobar se a cadea ten un número impar de caracteres
    if (cadea.length % 2 !== 0) {
        cadea += '0'; // Engadir '0' ao final se é impar
    }

    // Calcular o punto de separación
    const metade = cadea.length / 2;

    // Separar a cadea en dúas partes
    const parte1 = cadea.substring(0, metade);
    const parte2 = cadea.substring(metade);

    const cadeaConEspazo = parte1 + ' ' + parte2;

    // Imprimir as duas partes
    console.log("Parte 1: " + parte1);
    console.log("Parte 2: " + parte2);
    console.log("Con espacio: " + cadeaConEspazo);

}
export { separarCadea };