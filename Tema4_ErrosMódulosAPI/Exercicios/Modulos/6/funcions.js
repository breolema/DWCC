function validarDNI(dni){
    let erDNI =/^[0-9]{8}[A-Z]{1}$/i;
    if(erDNI.test(dni)){
        return alert("É un dni válido");
    } else {
        return alert("Non é un DNI válido");
    }
}

export{validarDNI}