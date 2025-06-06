function saludo(){
	document.write(`
		<h1>Ejemplo de saludos</h1>
		<ol>
			<li>hola</li>
			<li>¿qué hay?</li>
			<li>whats up?</li>
		</ol>
	`);
}

function arraysAsociativos(){
	const alumno = new Array();
	alumno["nombre"] = "Andrés";
	alumno.direccion = new Array();
	alumno.direccion.cp = 77010;

    let nuevoAlumno = {
    	nombre: "Andrés",
    	apellidoPat: "Isais",
    	apellidoMat: "Mariscal",
    	semestre: 6,
    	regular: false,
    	direccion: {
    		calle: "Av. Insurgentes",
    		numExterior: "330",
    		colonia: "David Bisbal"
    		cp: 77010
    	}
    }
	const divAsoc = document.getElementsByTagName("div");
	divAsoc[1].innerHTML = "Alumno nombre = " + alumno.nombre + "<br/>"

	let elemClass = document.
	getElementsByTagName("poo");

	elemClass[2].innerHTML = "Alumno =" + JSON.stringify(alumno);
}

function crearArrayTradicional(){
	let primos = [1, 2, 3, 5, 7, 11, 15, 17, 19, 23, 29, 31];
	const divArregloTradicional = document.querySelector("#divArrayIndice");
	divArregloTradicional.innerHTML = "<hr><strong>Arreglo de primos = </strong>" + primos.join(", ") + "<hr>";
}
