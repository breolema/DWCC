// Verificar si las notificaciones son compatibles con el navegador
if (!("Notification" in window)) {
    console.error("Este navegador no soporta notificaciones.");
  } else {
    // Verificar si las notificaciones están permitidas, si no, pedir permiso
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          mostrarNotificacion();
        }
      });
    } else {
      mostrarNotificacion();
    }
  }
  
  
  // Función para mostrar la notificación
  function mostrarNotificacion() {
    const iconoURL = "bandeira-galicia.png"; // Ruta al icono de la bandera gallega
    const titulo = "PULSA PARA REDIRIXIR";
    const opciones = {
      body: "Haz clic para ir a edu.xunta.gal",
      icon: iconoURL,
    };
  
  
    // Crear la notificación
    const notificacion = new Notification(titulo, opciones);
  
  
    // Evento al hacer clic en la notificación
    notificacion.onclick = function () {
      // Redirigir al usuario al sitio web
      window.location.href = "https://edu.xunta.gal";
    };
  }