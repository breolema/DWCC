const gradosC = (gradosFar) => {
    let pasoACelsius=(gradosFar - 32) * 5/9;
    console.log(gradosFar + "ºF son " + pasoACelsius + "ºC");
}

const gradosF = (gradosCelsius) => {
    let pasoAFar=(gradosCelsius * 9/5) +32;
    console.log(gradosCelsius + "ºC son " + pasoAFar + "ºF");
}

const pies = (distMetros) => {
    let pasoPies=distMetros*3.281;
    console.log(distMetros + "m son " + pasoPies + "pies");
}

const metros = (distPies) => {
    let pasoMetros=distPies/3.281;
    console.log(distPies + " pies son " + pasoMetros + "m");
}

const libras = (pesoKg) => {
    let pasoLibras=pesoKg*2.205;
    console.log(pesoKg + " kg son " + pasoLibras + "libras");
}

const kg = (pesoLibras) => {
    let pasoKg=pesoLibras/2.205;
    console.log(pesoLibras + " libras son " + pasoKg + "kg");
}

export {
    gradosC,
    gradosF,
    pies,
    metros,
    libras,
    kg
}
