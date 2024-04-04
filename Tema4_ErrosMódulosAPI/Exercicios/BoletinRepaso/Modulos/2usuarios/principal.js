import { agregarUsuario, eliminarUsuario, buscarUsuario } from './usuarios.js';

const añadir = () => {
  const idUsuario = prompt('Introduce el ID del usuario:');
  const nombre = prompt('Introduce el nombre del usuario:');
  agregarUsuario(idUsuario, nombre);
  console.log('Usuario agregado exitosamente.');
};

const eliminar = () => {
  const idEliminar = prompt('Introduce el ID del usuario a eliminar:');
  eliminarUsuario(idEliminar);
  console.log('Usuario eliminado exitosamente.');
};

const buscar = () => {
  const idBuscar = prompt('Introduce el ID del usuario a buscar:');
  const usuarioEncontrado = buscarUsuario(idBuscar);
  if (usuarioEncontrado) {
    console.log(`El usuario con ID ${idBuscar} es: ${usuarioEncontrado}`);
  } else {
    console.log('Usuario no encontrado.');
  }
};

const principal = () => {
  let opcion;
  do {
    opcion = prompt("MENU\n1. Agregar usuario\n2. Eliminar usuario\n3. Buscar usuario\n4. Salir");
    switch (opcion) {
      case '1':
        añadir();
        break;
      case '2':
        eliminar();
        break;
      case '3':
        buscar();
        break;
      case '4':
        console.log('Saliendo del programa.');
        break;
      default:
        console.log('Opción inválida.');
    }
  } while (opcion !== '4');
};

principal();
