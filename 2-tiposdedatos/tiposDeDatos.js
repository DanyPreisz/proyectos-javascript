// 📌 Cadena de Texto
const nombre = 'Carlos';
const parrafo = "Este es un 'parrafo'";
const parrafo2 = 'Este es un "parrafo"';
const parrafo3 = 'Este es un \'parrafo\'';

// 📌 Numero
const numero = 4;
const numero2 = -4.123;

// 📌 Boleano
const usuarioConectado = false;
const mayorQue = 10 > 2;

console.log(mayorQue);

// 📌 Arrays - Arreglos
const arreglo = ['texto', 456, true, { propiedad: 'valor' }, [1, 2, 3]];
console.log(arreglo);

// 📌 Objeto
const persona = {
	nombre: 'Carlos',
	edad: 27,
	carro: {
		marca: '...',
		color: 'negro',
	},
};

// 📌 Function
function hola() {
	console.log('Hola');
}

hola()

// 📌 Null
// Normalmente lo usamos cuando queremos especificar que un valor sea nulo.
const miVariable = null

// 📌 Undefined
// Undefined se usa para indicarnos que un valor no esta definido.
const miVariable2 = undefined

/*
📌 Tipos de datos que podemos guardar en las variables:
	string - Cadena de Texto
	number - Numero
	boolean - Booleano (verdadero o falso)
	object - Objeto
	function - Funciones
	null - Valor nulo
	undefined - Valor sin definir 
*/

// Tipos de datos primitivos

// Cadenas de texto (string)
let myName = "Brais Moure"
let alias = 'MoureDev'
let email = `braismoure@mouredev.com`

// Números (number)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined
let undefinedValue
console.log(undefinedValue)

// Null
let nullValue = null

// Symbol

let mySymbol = Symbol("mysymbol")

// BigInt

let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// Mostramos los tipos de datos
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)
