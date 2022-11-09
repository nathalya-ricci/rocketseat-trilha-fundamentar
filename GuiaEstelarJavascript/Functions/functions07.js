/* function () constructor

  * expressão new
  * criar um novo objeto
  * this keyword

*/

function Person(name) {
	this.name = name;
	this.walk = function () {
		return this.name + " está andando";
	};
}

const lya = new Person("Lya");
const yoko = new Person("Yoko");

console.log(lya.walk());
console.log(yoko.walk());
