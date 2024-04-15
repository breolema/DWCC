

const contarCaracteres = (cadena) => {
    let longitud = 0;

    while (cadena[longitud] !== undefined) {
        longitud++;
    }

    console.log(`A lonxitude de "${cadena}" é de ${longitud}`);
}

export{contarCaracteres}