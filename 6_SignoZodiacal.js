// 6. Escribir un algoritmo que permita dada la fecha de nacimiento de una persona saber cuál es su signo zodiacal.

let dia = 6;
let mes = 12;
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let signoZodiacal = "";

if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
    signoZodiacal = "Acuario";
} else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
    signoZodiacal = "Piscis";
} else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    signoZodiacal = "Aries";
} else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    signoZodiacal = "Tauro";
} else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    signoZodiacal = "Géminis";
} else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    signoZodiacal = "Cáncer";
} else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    signoZodiacal = "Leo";
} else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    signoZodiacal = "Virgo";
} else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    signoZodiacal = "Libra";
} else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    signoZodiacal = "Escorpio";
} else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    signoZodiacal = "Sagitario";
} else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
    signoZodiacal = "Capricornio";
}

console.log(`naciste el ${dia} de ${meses[mes-1]} por lo tanto sos de signo ${signoZodiacal}.`);