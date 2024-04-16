const guardarFecha = () => {
    const nombre = prompt("Por favor, introduce teu nome:");
    if (nombre) {
        const fechaActual = new Date().toLocaleDateString('es-ES');
        localStorage.setItem(nombre, fechaActual);
        document.write(localStorage.getItem(nombre));
    } else {
        document.write("Non se proporcionóu un nome.<br>");
    }
};