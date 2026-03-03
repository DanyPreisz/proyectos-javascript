// Tipos de datos básicos en JavaScript (2026 - ES2025+)

// 1. Strings (cadenas de texto)
const nombre = 'Carlos';
const parrafo  = "Este es un 'párrafo' con comillas simples dentro";
const parrafo2 = 'Este es un "párrafo" con comillas dobles dentro';
const parrafo3 = `Este es un párrafo con interpolación: Hola ${nombre}!`;

// 2. Números
const entero   = 42;
const decimal  = -3.14159;
const noSeguro = 9007199254740993; // ¡cuidado! pierde precisión

// 3. Booleanos
const conectado = true;
const esMayor   = 15 > 10;
console.log('¿Es mayor?', esMayor); // true

// 4. Arrays (arreglos)
const mezcla = ['hola', 2026, true, { nombre: 'Ana' }, [1, 2, 3]];
console.log('Array completo:', mezcla);

// 5. Objetos
const usuario = {
  nombre: 'Daniel',
  edad: 30,
  ciudad: 'Corrientes',
  activo: true,
  direccion: {
    calle: 'Av. 3 de Abril',
    numero: 1234
  }
};
console.log('Nombre del usuario:', usuario.nombre);

// 6. Funciones
function saludar() {
  console.log('¡Hola desde una función!');
}
saludar();

// 7. null y undefined
const valorNulo      = null;       // intencionalmente vacío
let valorNoDefinido;               // no se le asignó nada
console.log('null:', valorNulo);
console.log('undefined:', valorNoDefinido);

// 8. Symbol (útil para claves únicas en objetos)
const idUnico = Symbol('id_secreto');
console.log(typeof idUnico); // "symbol"

// 9. BigInt (para números muy grandes)
const numeroGrande  = 123456789012345678901234567890n;
const otroGrande    = BigInt("999999999999999999999999999999");
console.log(numeroGrande + otroGrande);

// Mostrar tipos con typeof
console.log('\n=== TIPOS CON typeof ===');
console.log('String:',     typeof parrafo3);
console.log('Number:',     typeof decimal);
console.log('Boolean:',    typeof conectado);
console.log('Object:',     typeof usuario);
console.log('Array:',      typeof mezcla);          // ¡sorpresa! → "object"
console.log('Function:',   typeof saludar);
console.log('null:',       typeof valorNulo);       // ¡sorpresa! → "object" (error histórico de JS)
console.log('undefined:',  typeof valorNoDefinido);
console.log('Symbol:',     typeof idUnico);
console.log('BigInt:',     typeof numeroGrande);
