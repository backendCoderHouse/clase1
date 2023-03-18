function mostrarLista(lista) {
    if (lista.length === 0) {
      console.log("Lista vacía");
    } else {
      lista.forEach((elemento) => {
        console.log(elemento);
      });
    }
    return `La lista tiene ${lista.length} elementos`;
  }
  
  // Casos de prueba
  const casas = [];
  const vehiculos = ["Autos", "Motos", "Aviones"];
  
  console.log(mostrarLista(casas)); // Output: "Lista vacía"
  console.log(mostrarLista(vehiculos)); 
  
  
  
  // Output:
  // Autos
  // Motos
  // Aviones
  // La lista tiene 3 elementos
  