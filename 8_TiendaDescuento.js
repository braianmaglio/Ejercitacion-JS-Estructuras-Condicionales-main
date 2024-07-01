// 8. En una tienda de descuento se efectúa una promoción en la cual se hace un descuento sobre el valor de la compra total según el color de la bolita que el cliente saque al pagar en caja. 
// Si la bolita es de color blanco no se le hará descuento alguno, si es verde se le hará un 10% de descuento, si es amarilla un 25%, si es azul un 50% y si es anaranjada un 100%. 
// Determinar la cantidad final que el cliente deberá pagar por su compra si se sabe que solo hay bolitas de los colores mencionados.

// Array de colores predefinidos

const colores = ['blanco', 'verde', 'amarilla', 'azul', 'anaranjada'];
function colorAleatorio() {
  let indice = Math.floor(Math.random() * colores.length);
    return colores[indice];
}

let colorBolita = colorAleatorio();
let precioBase = 100;
let descuento = 0;

switch (colorBolita) {
    case "blanco":
        console.log("No se hará descuento");
        break;
    case "verde":
        descuento = 0.10;
        break;
    case "amarilla":
        descuento = 0.25;
        break;
    case "azul":
        descuento = 0.50;
        break;
    case "anaranjada":
        descuento = 1.0;
        break;
}

let precioFinal = precioBase - (precioBase * descuento);
console.log(`Color de la bolita: ${colorBolita}`);
console.log(`a cobrar: $${precioFinal}`);




