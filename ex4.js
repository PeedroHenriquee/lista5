function calcularDiasParaAlcancarTopo(altura, subida, descida) {
    let distanciaCoberta = 0;
    let dias = 0;
  
    while (distanciaCoberta < altura) {
      distanciaCoberta += subida;
  
      if (distanciaCoberta >= altura) {
        dias++;
        break;
      }
  
      distanciaCoberta -= descida;
      dias++;
    }
  
    return dias;
  }
  
  const altura = 10000;
  const subida = 100;
  const descida = 50;
  
  const diasParaAlcancarTopo = calcularDiasParaAlcancarTopo(altura, subida, descida);
  
  console.log("Dona Lesma levará", diasParaAlcancarTopo, "dias para alcançar o topo do muro.");
  