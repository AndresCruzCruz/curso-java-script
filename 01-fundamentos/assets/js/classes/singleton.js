class Singleton {
    static instancia; // Esto es una propiedad estatica, es decir, es una propiedad que se puede llamar sin necesidad de instanciar la clase
    nombre = '';

    constructor(nombre = '') {
        if (!!Singleton.instancia) { // Se coloca !! para convertir el valor a booleano, porque si no existe la instancia, el valor es undefined, y undefined es falso
            return Singleton.instancia; // Si ya existe una instancia, se retorna la instancia
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('Ironman');