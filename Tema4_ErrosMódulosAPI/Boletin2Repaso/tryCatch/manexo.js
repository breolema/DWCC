try {
    var persona = {
      nombre: "Juanillo",
      apellidos: "Pérez",
    };
    if(!persona.edad){
        throw new Error("Error de rango: Non temos datos sobre a edad.");
    } else {
      document.write(persona.edad);
    }
  } catch (error) {
    document.write(error.message);
  } finally {
    document.write("O programa intentou acceder a propiedade");
  }