/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'k'];

let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias del HTML 
const btnPedir = document.querySelector('#btnPedir'); // Se usa el # para referenciar un id del HTML
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

// const imgCartaJugador = document.querySelector('#imgCartaJugador');
// const imgCartaComputadora = document.querySelector('#imgCartaComputadora');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small'); // Se usa el tag para referenciar un elemento del HTML


// Esta funcion crea una nueva baraja
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (tipo of tipos) {
        for (especial of especiales) {
            deck.push(especial + tipo);
        }
    }
    // console.log(deck);
    deck = _.shuffle(deck);
    // console.log(deck);
    return deck;
}

// Esta funcion me permite pedir una cart

const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck'; // Va a detener la ejecucion del programa y mostrar el mensaje
    }
    const cartaSeleccionada = deck.pop();
    return cartaSeleccionada;
}

//pedirCarta();
// const valorCarta = ( carta ) => {
//     const valor = carta.substring(0, carta.length - 1); // El substring me permite tomar una parte de la cadena, en este caso desde el inicio hasta el penultimo caracter
//     let puntos = 0;
//     if ( isNaN( valor ) ) { // isNaN me permite saber si el valor no es un número
//         console.log('No es un número');
//         puntos = ( valor === 'A' ) ? 11 : 10;
//     } else {
//         console.log('Es un número');
//         puntos = valor * 1; // Se multiplica por 1 para convertirlo a número
//     }
// }

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1; // Terniario anidado
}
// const valor = valorCarta(pedirCarta());
// console.log({valor});

// Turno de la computadora

const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        const puntosCarta = valorCarta(carta);
        puntosComputadora = puntosComputadora + puntosCarta;
        puntosHTML[1].innerText = puntosComputadora;
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);
        if (puntosMinimos > 21) {
            break;
        }
    } while ( puntosComputadora < puntosMinimos && puntosMinimos <= 21 );

    setTimeout(() => {
        if ( puntosComputadora == puntosMinimos ) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana');
        } else if (puntosComputadora > 21) {
            alert('Jugador gana');
        } else {
            alert('Computadora gana');
        }
    }, 20);
}

// Eventos

btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
    console.log(deck);
});

btnPedir.addEventListener('click', () => { // Se usa el addEventListener para escuchar el evento click
    const carta = pedirCarta();
    const puntosCarta = valorCarta(carta);
    puntosJugador = puntosJugador + puntosCarta;
    puntosHTML[0].innerText = puntosJugador;
    // imgCartaJugador.src = `assets/cartas/${carta}.png`;
    // Crear una imagen
    const imgCarta = document.createElement('img'); // Document.createElement me permite crear un elemento HTML
    imgCarta.src = `assets/cartas/${carta}.png`; // Se le asigna el atributo src
    imgCarta.classList.add('carta'); // Se le asigna una clase
    divCartasJugador.append(imgCarta); // Se agrega el elemento al div
    // Validar puntos
    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true; // Modificar el atributo disabled del boton
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        console.warn('21, genial');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

