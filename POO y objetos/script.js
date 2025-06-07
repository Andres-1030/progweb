// Clase Personaje usando POO
class Personaje {
  constructor(nombre, clase, nivel) {
    this.nombre = nombre;
    this.clase = clase;
    this.nivel = nivel;
  }

  describir() {
    return `${this.nombre} es un ${this.clase} de nivel ${this.nivel}.`;
  }
}

const personajes = [];

function crearPersonaje() {
  const nombre = document.getElementById("nombre").value.trim();
  const clase = document.getElementById("clase").value;
  const nivel = parseInt(document.getElementById("nivel").value);

  if (!nombre || !clase || isNaN(nivel)) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const nuevoPersonaje = new Personaje(nombre, clase, nivel);
  personajes.push(nuevoPersonaje);
  mostrarPersonajes();

  // Limpiar inputs
  document.getElementById("nombre").value = "";
  document.getElementById("clase").value = "";
  document.getElementById("nivel").value = "";
}

function mostrarPersonajes() {
  const listaDiv = document.getElementById("listaPersonajes");
  listaDiv.innerHTML = "";

  personajes.forEach((personaje, index) => {
    const p = document.createElement("p");
    p.textContent = `#${index + 1} - ${personaje.describir()}`;
    listaDiv.appendChild(p);
  });
}
