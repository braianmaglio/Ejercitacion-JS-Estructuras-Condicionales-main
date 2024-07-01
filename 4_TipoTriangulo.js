// 4. Escribir un algoritmo que con solo ingresar los lados de un triángulo rectángulo le dice al usuario si es isósceles, escaleno o equilátero.

const lado1 = 5;
const lado2 = 10;
const lado3 = 6;

if (lado1 === lado2 && lado2 === lado3) {
  console.log('El triángulo es equilátero');
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
  console.log('El triángulo es isósceles');
} else {
  console.log('El triángulo es escaleno');
}
