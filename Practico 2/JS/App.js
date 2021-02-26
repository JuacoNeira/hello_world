import Animal from "./Animal.js";
import Perro from "./Perro.js";

 
let animal1 = new Animal("Ave", "Aereo");

console.log(animal1);

let perro1 = new Perro("Claudio", "Terrestre", "Golden");

console.log(perro1);

perro1.hablar();

perro1.medioDeVida();           