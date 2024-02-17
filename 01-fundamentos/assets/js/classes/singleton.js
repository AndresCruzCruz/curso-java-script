class Singleton {
    static instancia; // Esto es una propiedad estatica, es decir, es una propiedad que se puede llamar sin necesidad de instanciar la clase
    nombre = '';

    constructor(nombre = '') {
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('Ironman');