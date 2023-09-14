function dividir(a, b) {
    try {
      if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
      }
      return a / b;
    } catch (error) {
      console.error("Erro: " + error.message);
      return null;
    }
  }
  
  const resultado = dividir(10, 0);
  if (resultado !== null) {
    console.log("Resultado: " + resultado);
  } else {
    console.log("A divisão não pôde ser realizada.");
  }
  