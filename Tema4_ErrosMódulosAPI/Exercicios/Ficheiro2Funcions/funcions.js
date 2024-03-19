//Creamos a funcion para añadir os datos ao array ou matriz
function encherMatriz(){
    let array = [];
    let indice = parseInt(prompt("Introduce o tamaño do array: "));
    for(let i = 0; i < indice; i++) {
        let dato = prompt("Introduce un dato para el array:");
        array.push(dato);
    }
    return array;
    }
    
    
    //Creamos a funcion para visualizar o contido do array ou matriz
    function mostraContido(array){
        console.log("Contido do array:");
        for(let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }
    
    
    export {encherMatriz, mostraContido};