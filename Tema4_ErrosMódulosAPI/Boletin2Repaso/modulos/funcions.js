// Función en frecha para obter a hora actual
const obterHoraActual = () => new Date().toLocaleTimeString();

// Función en frecha para obter a data actual
const obterDataActual = () => new Date().toLocaleDateString('es-ES');

export{obterDataActual,obterHoraActual};