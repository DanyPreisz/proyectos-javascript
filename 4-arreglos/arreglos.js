// ================================================
// CURSO JAVASCRIPT - Resumen Strings + Arrays + Ejercicios
// ================================================

// ────────────────────────────────────────────────
// STRINGS (cadenas de texto)
// ────────────────────────────────────────────────

const myName = "Brais";
const greeting = `Hola, ${myName}!`;  // template literal recomendado
console.log("Saludo:", greeting);
console.log("Tipo:", typeof greeting);
console.log("Longitud:", greeting.length);
console.log("Primer char:", greeting[0]);
console.log("Último char:", greeting.at(-1));  // .at(-1) es más moderno y legible

console.log("Mayúsculas:", greeting.toUpperCase());
console.log("Minúsculas:", greeting.toLowerCase());

console.log("Posición 'Hola':", greeting.indexOf("Hola"));      // 0
console.log("Posición 'Brais':", greeting.indexOf("Brais"));    // 6
console.log("¿Incluye 'MoureDev'?", greeting.includes("MoureDev")); // false

console.log("Slice 0-10:", greeting.slice(0, 10));
console.log("Reemplazo:", greeting.replace("Brais", "Daniel"));

// Multilínea + interpolación
const email = "daniel@example.com";
const mensaje = `
Hola ${myName},
tu email es: ${email}
¡Bienvenido desde Corrientes!
`;
console.log("Mensaje multilínea:\n" + mensaje);

// ────────────────────────────────────────────────
// ARRAYS (arreglos)
// ────────────────────────────────────────────────

// Declaración e inicialización
const arregloVacio = [];
const arregloMixto = ["Texto", 456.1, false, { prop: "valor" }, [1, 2, 3]];
console.log("Arreglo mixto:", arregloMixto);
console.log("Longitud:", arregloMixto.length);

// Acceso por índice
const amigos = ["Alejandro", "Manuel", "Cesar"];
console.log("Primer amigo:", amigos[0]);
console.log("Amigo inexistente:", amigos[10]); // undefined

// Modificar por índice (con huecos)
const colores = [];
colores[0] = "Rojo";
colores[2] = "Verde";
console.log("Colores con huecos:", colores); // [ 'Rojo', <1 empty item>, 'Verde' ]

// Métodos principales
const lista = [];
lista.push("Brais", "Moure", "mouredev", 37);
console.log("Después de push:", lista);

console.log("Pop (elimina último):", lista.pop()); // 37
console.log("Después de pop:", lista);

console.log("Shift (elimina primero):", lista.shift()); // Brais
console.log("Después de shift:", lista);

lista.unshift("Daniel", "Corrientes");
console.log("Después de unshift:", lista);

console.log("Longitud actual:", lista.length);

// Vaciar array
lista.length = 0;
console.log("Array vaciado:", lista);

// slice (copia sección)
const original = ["Brais", "Moure", "mouredev", 37, true];
const copia = original.slice(1, 4);
console.log("Original:", original);
console.log("Slice(1,4):", copia);

// splice (modifica original)
const lista2 = ["Brais", "Moure", "mouredev", 37, true];
lista2.splice(1, 2, "Nueva entrada", "Corrientes");
console.log("Después de splice:", lista2);

// ────────────────────────────────────────────────
// EJERCICIOS RESUELTOS
// ────────────────────────────────────────────────

// 1. Array de frutas
const frutas = ["Manzana", "Banana", "Naranja", "Frutilla", "Mango"];
console.log("Primera fruta:", frutas[0]);
console.log("Última fruta:", frutas.at(-1));
frutas.push("Kiwi");
console.log("Con push Kiwi:", frutas);
const quitada = frutas.shift();
console.log("Quitada:", quitada);
console.log("Frutas finales:", frutas);

// 2. Números con forEach
const numeros = [10, 5, 8, 3, 12];
numeros.forEach((num, i) => {
  console.log(`Posición ${i}: ${num} × 2 = ${num * 2}`);
});

// 3. Saludo personalizado
const saludoPersonal = `Hola Daniel, tienes 30 años y vives en Corrientes.`;
console.log(saludoPersonal);
