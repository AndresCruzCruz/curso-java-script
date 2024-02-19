/**
 * Funcion que permite pedir una carta
 * @param {Array<String>} deck es un arreglo del deck
 * @returns {String} regresa una carta del deck
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) throw "No hay cartas en el deck"; // Va a detener la ejecucion del programa y mostrar el mensaje
  return deck.pop();
};
