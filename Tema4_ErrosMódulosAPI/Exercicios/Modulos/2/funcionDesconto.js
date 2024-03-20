function descontoTienda(precio){
    if(precio>0){
        let desconto = precio*0.2;
        let precioFinal=precio-desconto;
        return console.log("O prezo final é de: " + precioFinal + "€");
    }
}

export{
    descontoTienda
}