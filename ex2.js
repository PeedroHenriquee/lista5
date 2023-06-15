function inverterNumero(numero) {
    const numeroString = numero.toString();
    const numeroInvertido = numeroString.split('').reverse().join('');
    return parseInt(numeroInvertido);
  }
  
  const numero = parseInt(prompt("Digite um número inteiro de até 4 dígitos:"));
  
  if (numero >= 0 && numero <= 9999) {
    const numeroInvertido = inverterNumero(numero);
    console.log("Número invertido:", numeroInvertido);
  } else {
    console.log("Número inválido. Digite um número inteiro de até 4 dígitos.");
  }
  