class Persona {
	constructor(nombre, apellido, genero) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.genero = genero;
	}
}
const personas = [];

function crearPersonas() {
	let cantidadPersona = prompt('Cuántas personas quiere agregar');

	for (let i = 0; i < cantidadPersona; i++) {
		let nombre = prompt('ingrese nombre');
		let apellido = prompt('ingrese apellido');
		let genero = prompt('ingrese genero ');

		let personaNueva = new Persona(nombre, apellido, genero);

		personas.push(personaNueva);
	}
}

crearPersonas();

console.log(personas);
