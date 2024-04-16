var persona = {
  nombre: "Juanillo",
  apellidos: "Pérez",
};

try {
      persona.edad;
      throw new Error("Error: Non temos datos sobre a edad.");
  } catch (error) {
    document.write(error.message);
  } finally {
    document.write("O programa intentou acceder a propiedade");
  }