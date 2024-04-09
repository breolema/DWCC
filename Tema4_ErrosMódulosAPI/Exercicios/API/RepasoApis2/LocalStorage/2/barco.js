var nombre = "Santa Maria";
var portoBase = "Galicia";
var anoConstruc = 1790;
var eslora = "36 metros";

var infoBarco = {
    nombre: nombre,
    portoBase: portoBase,
    anoConstruc: anoConstruc,
    eslora: eslora
};

//gardamos en localStorage
localStorage.setItem('infoBarco', JSON.stringify(infoBarco));

//recuperamos do localStorage
const barcoGuardado = JSON.parse(localStorage.getItem('infoBarco'));

var buscarBarco = prompt("Que barco queres eliminar?");

//verificamos o nombre do barco
if (barcoGuardado.nombre === buscarBarco) {
    //si conincide o nombre borramos o barco
    localStorage.removeItem('infoBarco');
    document.write("Barco eliminado.");
    console.log(localStorage.getItem("infoBarco"));
} else {
    document.write(`Non hai barcos con ese nombre.<br>`);
    for (const propiedad in barcoGuardado) {
        document.write(`${propiedad}: ${barcoGuardado[propiedad]} <br>`);
    };
}

