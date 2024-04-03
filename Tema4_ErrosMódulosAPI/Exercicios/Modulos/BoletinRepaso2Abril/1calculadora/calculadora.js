const suma = (num1,num2) => {
    let suma=num1+num2;
   console.log(num1 + "+" + num2 + "=" + suma);
}

const resta = (num1,num2) => {
    let resta=num1-num2;
    console.log(num1 + "-" + num2 + "=" + resta);
}

const multiplicacion = (num1,num2) => {
    let multiplicacion=num1*num2;
    console.log(num1 + "x" + num2 + "=" + multiplicacion);
}

const division = (num1,num2) => {
    let division=num1/num2;
    console.log(num1 + "/" + num2 + "=" + division);
}

export{
    suma,
    resta,
    multiplicacion,
    division
}