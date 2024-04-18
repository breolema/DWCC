//creamos o array
let arrayNumeros = new Array();

//funcion para meter parametros no array
const crearArray = (num1,num2,num3) => {
    arrayNumeros.push(num1,num2,num3);
}

//funcion para mostrar os datos do array
const mostrarArray = () => {
    for (var i = 0; i < arrayNumeros.length; i++) {
        console.log(arrayNumeros[i]);
    }
}

export{crearArray,mostrarArray}