const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;;
}

console.warn('Not o la negación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse());

console.warn('AND'); // REgresará true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // false
console.log(false && true); // false
console.log(false && false); // true


console.log('=======');
console.log(regresaFalse() && regresaTrue()); // false -- ignorará el segundo valor porque el primero es falso
console.log(regresaTrue() && regresaFalse()); // false


console.warn('OR'); // Regresará true si al menos un valor es verdadero
console.log(true || false); // true
console.log(false || false); // false

console.log(regresaFalse() || regresaTrue()); 
console.log(regresaTrue() || regresaFalse());

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// const a1 = true && 'Hola Mundo' && 150; // Regresará el último valor verdadero
const a1 = false && 'Hola Mundo' && 150; // Regresará el último valor verdadero
const a2 = 'Hola' && 'Mundo' && soyFalso && true; // Regresará el último valor verdadero
const a3 = soyFalso || 'Ya no soy falso' || true; // Regresará el primer valor verdadero
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso' || true; // Regresará el primer valor verdadero
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso' || true; // Regresará el primer valor verdadero

console.log({ a1, a2, a3, a4, a5 });

if (regresaTrue() && regresaTrue() && (true || false || true)) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}   // Regresará 'Hacer algo' porque todos los valores son verdaderos