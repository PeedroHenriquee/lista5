function verificarPalindromo(numero) {
    const numeroString = numero.toString();
    const numeroInvertido = numeroString.split('').reverse().join('');
  
    if (numeroString === numeroInvertido) {
      return true;
    } else {
      return false;
    }
  }
  
  const numero = parseInt(prompt("Digite um número inteiro:"));
  
  if (verificarPalindromo(numero)) {
    console.log(numero + " é um número palíndromo.");
  } else {
    console.log(numero + " não é um número palíndromo.");
  }
  