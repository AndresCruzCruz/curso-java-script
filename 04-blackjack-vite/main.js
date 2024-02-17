import _ from 'underscore'; // Importar todas las funciones de underscore, se usa el _ para referenciar el modulo
import "./style.css";

// El patron modulo me permite encapsular el codigo y evitar que las variables globales sean modificadas
const miModulo = (() => {
  //"use strict"; // Se usa para que el navegador sea mas estricto con el codigo

  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "k"];

  let puntosJugadores = [];

  // Referencias del HTML
  const btnPedir = document.querySelector("#btnPedir"), // Se usa el # para referenciar un id del HTML
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  // const imgCartaJugador = document.querySelector('#imgCartaJugador');
  // const imgCartaComputadora = document.querySelector('#imgCartaComputadora');

  const divCartasJugadores = document.querySelectorAll(".divCartas"), // Se usa el . para referenciar una clase del HTML
    puntosHTML = document.querySelectorAll("small"); // Se usa el tag para referenciar un elemento del HTML

  //   Esta funcion inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }
    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  // Esta funcion crea una nueva baraja
  const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
    }

    for (let tipo of tipos) {
      for (let especial of especiales) {
        deck.push(especial + tipo);
      }
    }
    return _.shuffle(deck);
  };

  // Esta funcion me permite pedir una cart
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck"; // Va a detener la ejecucion del programa y mostrar el mensaje
    }
    return deck.pop();
  };

  // Esta funcion me permite obtener el valor de la carta
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1; // Terniario anidado
  };

  // Esta funcion me permite acumular los puntos
  const acumularPuntos = (turno, carta) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  const crearCarta = (turno, carta) => {
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].append(imgCarta);
  };

  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
      if (puntosComputadora == puntosMinimos) {
        alert("Nadie gana :(");
      } else if (puntosMinimos > 21) {
        alert("Computadora gana");
      } else if (puntosComputadora > 21) {
        alert("Jugador gana");
      } else {
        alert("Computadora gana");
      }
    }, 20);
  };

  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta();
      puntosComputadora = acumularPuntos(puntosJugadores.length - 1, carta);
      crearCarta(puntosJugadores.length - 1, carta);
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
    determinarGanador();
  };

  // Eventos

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(0, carta);
    crearCarta(0, carta);
    // Validar puntos
    if (puntosJugador > 21) {
      console.warn("Lo siento mucho, perdiste");
      btnPedir.disabled = true; // Modificar el atributo disabled del boton
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.warn("21, genial");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
  });

  return {
    nuevoJuego: inicializarJuego, // Esta forma de retornar un objeto es una forma de hacer publico un metodo, es decir, que se pueda acceder desde fuera del modulo adicional le estoy cambiando el nombre
  };
})(); // Una funcion autoinvocada
