class Persona {
    constructor(nombre) {
      this.nombre = nombre;
      Persona.contadorInstancias++;
    }
  
    static contadorInstancias = 0;
  }
  
  // Crear instancias de la clase Persona
  const persona1 = new Persona("Juan");
  const persona2 = new Persona("Ana");
  
  // Comprobar individualidad
  console.log(persona1.nombre); // Output: "Juan"
  console.log(persona2.nombre); // Output: "Ana"
  
  console.log(Persona.contadorInstancias); // Output: 2
  