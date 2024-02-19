import _ from "underscore";
// export const miNombre = "Fernando";
/**
 * Crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales Ejemplo: ["A", "J", "Q", "k"]
 * @returns {Array<String>} regresa un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error("El tipo de carta es obligatorio");
  //   if (tiposDeCarta.length > 0) throw new Error("Tipos de carta tiene que ser un arreglo de strings");
  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("El tiposEspeciales de carta es obligatorio");
  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tiposDeCarta) {
    for (let especial of tiposEspeciales) {
      deck.push(especial + tipo);
    }
  }
  return _.shuffle(deck);
};

// export default crearDeck;
