function calcularParcelas(valorCompra, numeroParcelas) {
    const valorParcela = Math.floor(valorCompra / numeroParcelas);
    const resto = valorCompra % numeroParcelas;
  
    const parcelas = [];
  
    for (let i = 0; i < numeroParcelas; i++) {
      parcelas.push(valorParcela);
    }
  
    for (let i = 0; i < resto; i++) {
      parcelas[i]++;
    }
  
    return parcelas;
  }
  
  const valorCompra = parseInt(prompt("Digite o valor da compra:"));
  const numeroParcelas = parseInt(prompt("Digite o número de parcelas desejado:"));
  
  const parcelas = calcularParcelas(valorCompra, numeroParcelas);
  
  console.log("Valores das parce")
  