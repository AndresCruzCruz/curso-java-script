/**
 * Esta funcion me permite obtener el valor de la carta
 * @param {String} carta Ejemplo: 2C
 * @returns {Number} regresa el valor de la carta 11, 10, 4, 3, 2
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1; // Terniario anidado
};
