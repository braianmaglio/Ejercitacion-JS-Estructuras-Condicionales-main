// 1. Leer una variable N de tipo entero e informar si el numero es positivo, negativo o cero y también si es par, impar o cero. El número cero no es ni positivo ni negativo ni par ni impar.

let N = -10;

if (N === 0) {
  console.log(`${N} es cero`);
} else if (N > 0) {
  console.log(`${N} es positivo`);
} else {
  console.log(`${N} es negativo`);
}