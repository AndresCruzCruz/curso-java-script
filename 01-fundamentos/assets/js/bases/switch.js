const dia = 0; // 0: domingo, 1: lunes, 2: martes...

switch (dia) { // El switch es una forma de simplificar el uso de if else, comparando una variable con varios casos
    case 0: // Domingo
        console.log('Domingo');
        break; //  Se usa el break para que el switch no siga comparando los demás casos, una forma de romper el switch.
    case 1: // Lunes
        console.log('Lunes');
        break;
    case 2: // Martes
        console.log('Martes');
        break;
    case 3: // Miercoles
        console.log('Miercoles');
        break;
    case 4: // Jueves
        console.log('Jueves');
        break;
    case 5: // Viernes
        console.log('Viernes');
        break;
    case 6: // Sabado
        console.log('Sabado');
        break;
    default:
        console.log('No es un día valido');
        break;
}

console.log('Fin del programa'); // Este mensaje se imprime al final del switch, ya que el switch se rompe con el break, y el programa sigue su flujo normal.   