const cargarFruta = (fruta) => {
    return new Map([
        [1, 'Fresa'],
        [2, 'Laranxa'],
        [3, 'Limon']
    ]);
}

function buscarFruta(mapa, fruta) {
    for (let nombre of mapa.values()) {
        if (nombre === fruta) {
            return true;
        }
    }
    return false;
}

export{cargarFruta,buscarFruta}