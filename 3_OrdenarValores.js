// 3. Ordenar en forma creciente tres valores diferentes A, B, C.
let A = 1700
let B = 150
let C = 200
let temp;

if (A > B) {
    temp = A;
    A = B;
    B = temp;
}

if (A > C) {
    temp = A;
    A = C;
    C = temp;
}

if (B > C) {
    temp = B;
    B = C;
    C = temp;
}

console.log(`Valores ordenados: A = ${A}, B = ${B}, C = ${C}`);
