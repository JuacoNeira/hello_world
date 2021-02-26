class Animal {
    constructor(nombre, mDeVida){
        this.nombre = nombre;
        this.mDeVida = mDeVida;
    }
    
    medioDeVida (){
        if (this.mDeVida === "Terrestre"){
            return console.log("Soy Terrestre");;
        }
        else if (this.mDeVida === "Acuatico"){
            return console.log("Soy Acuatico"); ;
        }
        else return console.log( "Soy aereo");;
    }
}


export default Animal;