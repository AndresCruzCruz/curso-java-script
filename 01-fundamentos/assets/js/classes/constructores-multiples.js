
class Persona {

    static porObjeto({nombre, apellido, pais}) { // Se crea un metodo estatico que recibe un objeto como argumento para poder utilizar el metodo porObjeto sin necesidad de instanciar la clase
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`info: ${ this. nombre }, ${ this.apellido }, ${ this.pais }`);
    }

}

const nombre1 = 'Melissa',
        apellido1 = 'Flores',
        pais1 = 'Honduras';

const fer = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Costa Rica'
};

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(fer);

persona1.getInfo();
persona2.getInfo();