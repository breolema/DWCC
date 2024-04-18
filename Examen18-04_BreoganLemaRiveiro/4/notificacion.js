//verificar si as notificacions son compatibles co navegador
if (!("Notification" in window)) {
    console.error("Este navegador no soporta notificaciones.");
  } else {
    //verificar si as notificacions están permitidas, si non, pedimos permiso
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
  
  
  //función para mostrar a notificación
  function mostrarNotificacion() {
    const iconoURL = "icono.png";
    const titulo = "VAMOS A YOUTUBE!";
    const opciones = {
      body: "Pulsa para ir a YouTube",
      icon: iconoURL,
    };
  
  
    //creamos a notificación
    const notificacion = new Notification(titulo, opciones);
  
  
    //si facemos click vamos a youtube
    notificacion.onclick = function () {
      window.location.href = "https://youtube.com";
    };
  }