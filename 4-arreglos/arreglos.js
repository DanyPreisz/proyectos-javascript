// STRINGS (repaso rápido y correcto)

let myName = "Brais";
let greeting = "Hola, " + myName + "!";
console.log(greeting);               // Hola, Brais!
console.log(typeof greeting);        // string

console.log(greeting.length);        // 12 (incluye espacios y !)

console.log(greeting[0]);            // H (posición 0 = primer carácter)
console.log(greeting[11]);           // ! (posición 11 = último carácter)

console.log(greeting.toUpperCase()); // HOLA, BRAIS!
console.log(greeting.toLowerCase()); // hola, brais!

console.log(greeting.indexOf("Hola"));     // 0
console.log(greeting.indexOf("Brais"));    // 6
console.log(greeting.indexOf("MoureDev")); // -1 (no encontrado)

console.log(greeting.includes("Hola"));    // true
console.log(greeting.includes("MoureDev")); // false

console.log(greeting.slice(0, 10));        // "Hola, Bra" (del 0 al 9)
console.log(greeting.replace("Brais", "Daniel")); // Hola, Daniel!

// Template literals (muy recomendadas)
let email = "braismoure@mouredev.com";
let mensaje = `Hola, ${myName}!
Tu email es: ${email}
¡Bienvenido!`;

console.log(mensaje);

// ARRAYS (arreglos) - ¡Muy importantes!

// 1. Crear un array con mezcla de tipos (totalmente válido)
const arreglo = ['Texto', 456.1, false, { propiedad: 'valor' }, [1, 2, 3]];
console.log(arreglo);          // muestra todo el array
console.log(arreglo.length);   // 5 elementos

// 2. Acceder a elementos por índice (empieza en 0)
const amigos = ['Alejandro', 'Manuel', 'Cesar'];
console.log(amigos[0]);        // Alejandro (primero)
console.log(amigos[1]);        // Manuel
console.log(amigos[2]);        // Cesar
console.log(amigos[10]);       // undefined (no existe)

// 3. Crear array vacío y agregar elementos
const colores = [];
colores[0] = 'Rojo';
colores[1] = 'Verde';
colores[3] = 'Blanco';         // deja posición 2 vacía (undefined)
colores[3] = 'Amarillo';       // sobreescribe la posición 3

console.log('El arreglo colores tiene:', colores.length, 'colores');
console.log(colores);          // ['Rojo', 'Verde', undefined, 'Amarillo']

// 4. Método .push() → agrega al final (muy usado)
colores.push('Azul');          // agrega 'Azul' al final
colores.push('Negro', 'Morado'); // puedes agregar varios
console.log(colores);

// 5. Otros métodos útiles de arrays (prueba estos)
console.log(colores.pop());     // quita y devuelve el último → 'Morado'
console.log(colores);

console.log(colores.shift());   // quita y devuelve el primero → 'Rojo'
console.log(colores);

colores.unshift('Naranja');     // agrega al inicio
console.log(colores);

// Bonus: recorrer un array con forEach (muy común)
colores.forEach((color, indice) => {
  console.log(`Posición ${indice}: ${color}`);
});

// 1. Crear un array con 5 frutas que me gustan
const frutas = ['Manzana', 'Banana', 'Naranja', 'Frutilla', 'Mango'];

console.log('Array de frutas:', frutas);

// Muestra la primera y la última fruta
console.log('Primera fruta:', frutas[0]);          // Manzana
console.log('Última fruta:', frutas[frutas.length - 1]); // Mango

// Agrega una fruta más al final con push
frutas.push('Kiwi');
console.log('Después de push("Kiwi"):', frutas);

// Quita la primera con shift y muestra el array
const primeraQuitada = frutas.shift();
console.log('Fruta quitada con shift:', primeraQuitada); // Manzana
console.log('Array después de shift:', frutas);

// 2. Array de números
const numeros = [10, 5, 8, 3, 12];

// Usa forEach para mostrar cada número multiplicado por 2
numeros.forEach((numero, indice) => {
  const resultado = numero * 2;
  console.log(`Posición ${indice}: ${numero} × 2 = ${resultado}`);
});

// 3. Saludo personalizado con template literals
const nombre = "Daniel";
const edad = 30;  // podés cambiarla por tu edad real

const saludoPersonal = `Hola ${nombre}, tienes ${edad} años y vives en Corrientes.`;

console.log(saludoPersonal);
// Salida: Hola Daniel, tienes 30 años y vives en Corrientes.