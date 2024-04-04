import { gradosC, gradosF, pies, metros, libras, kg } from './modulo.js';

const pasoCelsius = () => {
    const gradosFar = prompt('Introduce los grados Fahrenheit para pasar a Clesius:');
    gradosC(gradosFar);
  };

const pasoFahrenheit = () => {
    const gradosCelsius = prompt('Introduce los grados Celsius para pasar a Fahrenheit:');
    gradosF(gradosCelsius);
  };


const pasoPies = () => {
    const distMetros = prompt('Introduce los metros  para pasar a pies:');
    pies(distMetros);
  };

  const pasoMetros = () => {
    const distPies = prompt('Introduce los pies  para pasar a metros:');
    metros(distPies);
  };

  const pasoLibras = () => {
    const pesoKg = prompt('Introduce los Kg  para pasar a libras:');
    libras(pesoKg);
  };

  const pasoKg = () => {
    const pesoLibras = prompt('Introduce las libras  para pasar a Kg:');
    kg(pesoLibras);
  };

  const principal = () => {
    let opcion;
      opcion = prompt("MENU\n1. Pasar de ºF a ºC\n2.  Pasar de ºC a ºF\n3. Pasar de metros a pies\n4. Pasar de pies a metros\n5. Pasar de KG a sibras\n6. Pasar de libras a KG\n7. Salir");
      switch (opcion) {
        case '1':
            pasoCelsius();
          break;
        case '2':
            pasoFahrenheit();
          break;
        case '3':
            pasoPies();
          break;
          case '4':
            pasoMetros();
          break;
          case '5':
            pasoLibras();
          break;
          case '6':
            pasoKg();
          break;
        case '7':
          console.log('Saliendo del programa.');
          break;
        default:
          console.log('Opción inválida.');
      }
  };
  
  principal();