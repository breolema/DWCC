const usuariosMap = new Map();

const agregarUsuario = (idUsuario, nombre) => {
  usuariosMap.set(idUsuario, nombre);
};

const eliminarUsuario = (idUsuario) => {
  usuariosMap.delete(idUsuario);
};

const buscarUsuario = (idUsuario) => {
  return usuariosMap.get(idUsuario);
};

export {
  agregarUsuario,
  eliminarUsuario,
  buscarUsuario
}
