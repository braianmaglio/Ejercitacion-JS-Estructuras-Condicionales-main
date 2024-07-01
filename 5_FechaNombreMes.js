// 5. Leer un valor de Día, Mes y Año de una fecha (ej.: 10-5-2003). Mostrar la fecha con el respectivo nombre del mes (ej.: 10-mayo-2003). 
// Si el número leído para el mes no está entre 1 y 12 imprimir un mensaje de error. 
// Comprobar que el día se encuentre entre 1 y 31 y el año sea mayor que 2000.


let dia = 13;
let mes = 5;
let año = 2000;

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


let diaMes = dia < 10 ? `0${dia}` : dia;
let mesNombre = (mes < 1 || mes > 12) ? console.log("Error: mes invalido") : meses[mes - 1];
let añoValido = año >= 2000 ? año : console.log("Error año invalido");;

console.log(`${diaMes}-${mesNombre}-${añoValido ? año : 'Error: Año invalido'}`);
