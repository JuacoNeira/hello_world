import Animal from "./Animal.js";

class Perro extends Animal {   
    constructor(nombre, mDeVida, raza){
        super(nombre, mDeVida);
        this.raza = raza;
    
    }

    hablar(){
        console.log("Guau, guau");
    }
}

export default Perro;