// 1. Declare uma variável de nome weight

let weight;

// 2. Que tipo de dado é a variável acima?

console.log(typeof weight);

// 3. Declare uma variável e atribua valores para cada um dos dados:

// let name = "Lya";
// let age = 23;
// let weight = 64.5;
// let isSubscribed = true;

/*
  4. A varável student abaixo é de que tipo de dados?

  4.1 Atribua a ela as mesmas propriedades e valores do ex. 3.

  4.2 Mostre no console a seguinte mensagem:

    <name> tem <age> anos de idade e pesa <weight> kg.
*/

let student = {
	name: "Lya",
	age: 23,
	weight: 64.5,
	isSubscribed: true,
};

console.log(typeof student);

console.log(
	`${student.name} tem ${student.age} anos de idade e pesa ${student.weight}kg.`
);

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, somente o Array vazio.

let students = [];

// 6. Reatribua um valor para a variável acima, colocando dentro dela o objeto student do ex.4 (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

students = [student];

console.log(students);

// 7. Coloque no console o valor da posição zero do Array acima.

console.log(students[0]);

// 8. Crie um novo student e coloque-o na posição 1 do Array students.

const yoko = {
	name: "Yoko",
	age: 20,
	weight: 51.5,
	isSubscribed: true,
};

students[1] = yoko;
console.log(students);

/*
  9. Sem rodar o código, responda qual é a resposta do código abaixo e por quê? Após sua resposta, rode o código e veja se você acertou.

  console.log(a);
  var a = 1;

*/

console.log(a);
var a = 1;
