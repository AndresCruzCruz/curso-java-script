import _ from "underscore"; // Importar todas las funciones de underscore, se usa el _ para referenciar el modulo
// import { crearDeck } from "./usescases/crear-deck"; // Importar una funcion de un archivo
// import { crearDeck as crearNuevoDeck } from "./usescases/crear-deck"; // Importar una funcion de un archivo
// import crearDeck { miNombre } from "./usescases/crear-deck";
// import { pedirCarta } from "./usescases/pedir-carta";
// import { valorCarta } from "./usescases/valor-carta";
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, acumularPuntos, crearCarta } from "./usescases"; // Al importar un archivo que tiene un index.js, se importa puede improtar todos los archivos que esten en el index.js

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

  deck = crearDeck(tipos, especiales);

  //   Esta funcion inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
    deck = deck;
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }
    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };
  // Eventos

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(0, carta, puntosJugadores, document.querySelectorAll("small"));
    crearCarta(0, carta, document, divCartasJugadores);
    // Validar puntos
    if (puntosJugador > 21) {
      console.warn("Lo siento mucho, perdiste");
      btnPedir.disabled = true; // Modificar el atributo disabled del boton
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador, deck, puntosJugadores, document);
    } else if (puntosJugador === 21) {
      console.warn("21, genial");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador, deck, puntosJugadores, document);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], deck, puntosJugadores, document);
  });
