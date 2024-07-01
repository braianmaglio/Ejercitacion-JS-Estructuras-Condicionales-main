// 9. Ingresar el nombre del estudiante y la nota del examen final (Nota de tipo entero). 
// Asignar la calificación de acuerdo a las notas de la siguiente tabla:
//
// | Nota    | Calificación |
// |---------|--------------|
// | 0 - 2.9 | Desaprobado  |
// | 3 - 5.9 | Aprobado     |
// | 6 - 8.9 | Notable      |
// | 9 - 10  | Sobresaliente|

const alumno = {
    nombre: "Braian",
    nota: 6,
}

let nota = alumno.nota;
let calificacion = " ";

if (nota >= 0 && nota <= 2.9) {
    calificacion = "Desaprobado";
} else if (nota >= 3 && nota <= 5.9) {
    calificacion = "Aprobado";
} else if (nota >= 6 && nota <= 8.9) {
    calificacion = "Notable";
} else if (nota >= 9 && nota <= 10) {
    calificacion = "Sobresaliente";
} else if (nota >= 10) {
    console.log("Error: Nota inválida");
    return
}

console.log(`${alumno.nombre}: ${calificacion}`);