// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 261.11999;
console.log(number.toFixed(2).replace(".", ","));
/*
  number.toFixed() torna um Number em uma String;
  tipo Number não usa vírgula, mas ponto.
*/
