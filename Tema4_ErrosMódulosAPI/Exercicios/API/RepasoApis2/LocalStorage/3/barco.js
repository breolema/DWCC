var nombre="Santa Maria";
var portoBase="Galicia";
var anoConstruc=1790 ;
var eslora="36 metros";

var infoBarco = {
    nombre: nombre,
    portoBase: portoBase,
    anoConstruc: anoConstruc,
    eslora:eslora
};

localStorage.setItem('infoBarco', JSON.stringify(infoBarco));

const barcoGuardado = JSON.parse(localStorage.getItem('infoBarco'));

console.log(barcoGuardado);

localStorage.clear();

const barcoGuardado2 = JSON.parse(localStorage.getItem('infoBarco'));

console.log(barcoGuardado2);