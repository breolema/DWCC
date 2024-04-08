let direccion = prompt("Cual es la direccion de la casa?");
let valorCatastral =  prompt("Cual es el valor catastral de la casa?");
let anoConstruccion =  prompt("Cual es el año de construccion de la casa?");

var casaInfo = {
    direccion: direccion,
    valorCatastral: valorCatastral,
    anoConstruccion: anoConstruccion
};

localStorage.setItem('casaInfo', JSON.stringify(casaInfo));

const casaGuardada = JSON.parse(localStorage.getItem('casaInfo'));

console.log(casaGuardada);

for (const propiedad in casaGuardada) {
    document.write(`${propiedad}: ${casaGuardada[propiedad]} <br>`);
};