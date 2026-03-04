// OPERADORES EN JAVASCRIPT - Resumen completo y práctico

// 1. Operadores Aritméticos
let a = 10;
let b = 3;

console.log(a + b);   // 13  → suma
console.log(a - b);   // 7   → resta
console.log(a * b);   // 30  → multiplicación
console.log(a / b);   // 3.333... → división (siempre da float)
console.log(a % b);   // 1   → módulo (resto de la división)
console.log(a ** b);  // 1000 → exponente (potencia)

a++;  // incremento (a = a + 1) → ahora a vale 11
console.log(a);       // 11

b--;  // decremento (b = b - 1) → ahora b vale 2
console.log(b);       // 2

// 2. Operadores de Asignación Compuesta
let numero = 20;

numero += 5;    // numero = numero + 5 → 25
numero -= 10;   // 15
numero *= 2;    // 30
numero /= 3;    // 10
numero %= 7;    // 3 (resto de 10 / 7)
numero **= 2;   // 9 (3²)

console.log('Resultado final con asignaciones:', numero);

// 3. Operadores de Comparación
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 9);    // false

console.log(10 == 10);       // true  (solo valor)
console.log(10 == "10");     // true  (conversión automática)
console.log(10 === "10");    // false (valor y tipo estrictos)

console.log(10 != 5);        // true
console.log(10 !== "10");    // true  (diferente tipo)

// Comportamientos curiosos de == (¡cuidado con esto!)
console.log(0 == false);     // true
console.log(0 == "");        // true
console.log("" == false);    // true
console.log(null == undefined); // true
console.log(null === undefined); // false ← usa siempre ===

// 4. Operadores Lógicos
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false || true);  // true
console.log(false || false); // false

console.log(!true);          // false
console.log(!false);         // true

// Ejemplo práctico real
const edad = 17;
const tieneEntrada = true;
const tienePermisoPadres = true;

const puedeEntrar = (edad >= 18 && tieneEntrada) || (tienePermisoPadres && tieneEntrada);
console.log('¿Puede entrar al concierto?', puedeEntrar); // true

// 5. Operador Ternario (if en una línea)
const estaLloviendo = false;
const mensaje = estaLloviendo ? 'Llevá paraguas ☔' : 'Día soleado 🌞';
console.log(mensaje);

// Bonus: Cortocircuito útil
const username = ''; // vacío = falsy
const nombreMostrar = username || 'Invitado'; // si username es falsy, usa 'Invitado'
console.log('Bienvenido,', nombreMostrar);