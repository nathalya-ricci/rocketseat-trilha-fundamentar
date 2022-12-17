let techs = ["html", "css", "js"];

// adicionar um item no fim
console.log(techs.push("react"));

// adicionar um item no começo
console.log(techs.unshift("tailwindcss"));

// remover do fim
// console.log(techs.pop());

// remover do começo
// console.log(techs.shift());

// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3));

// remover 1 ou mais itens em qualquer posição do array
// console.log(techs.splice(1, 2));

// encontrar a posição de um a elemento no array
let index = techs.indexOf("css");
techs.splice(index, 1);

console.log(techs);
