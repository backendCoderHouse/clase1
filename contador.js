class Contador {
    static contadorGlobal = 0;
  
    constructor(nombre) {
      this.nombre = nombre;
      this.cuentaIndividual = 0;
      Contador.contadorGlobal++;
    }
  
    getResponsable() {
      return this.nombre;
    }
  
    contar() {
      this.cuentaIndividual++;
      Contador.contadorGlobal++;
    }
  
    getCuentaIndividual() {
      return this.cuentaIndividual;
    }
  
    static getCuentaGlobal() {
      return Contador.contadorGlobal;
    }
  }
  
  // Crear instancias de la clase Contador
  const contador1 = new Contador("Juan");
  const contador2 = new Contador("Ana");
  
  // Comprobar individualidad
  console.log(contador1.getResponsable()); // Output: "Juan"
  console.log(contador2.getResponsable()); // Output: "Ana"
  
  // Incrementar contadores individuales y global
  contador1.contar();
  contador2.contar();
 
  
  // Obtener cuentas individuales y global
  console.log(contador1.getCuentaIndividual()); // Output: 2
  console.log(contador2.getCuentaIndividual()); // Output: 1
  console.log(Contador.getCuentaGlobal()); // Output: 2
  
