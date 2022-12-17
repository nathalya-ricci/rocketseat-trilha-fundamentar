// Separe um texto que contém espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e, onde eram espaços, coloque _.

let frase = "Eu amo tech gadgets!";
let meuArray = frase.split(" ");
console.log(meuArray);

let fraseComUnderscore = meuArray.join("_");
console.log(fraseComUnderscore);
