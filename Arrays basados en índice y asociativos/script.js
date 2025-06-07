 	// Array basado en índice (nombres)
const personas = ["Ana", "Luis", "Carlos", "María"];

// Array asociativo (objeto con info por persona)
const datos = {
  "Ana": {
    edad: 25,
    comidaFavorita: "Pizza"
  },
  "Luis": {
    edad: 30,
    comidaFavorita: "Tacos"
  },
  "Carlos": {
    edad: 22,
    comidaFavorita: "Hamburguesas"
  },
  "María": {
    edad: 28,
    comidaFavorita: "Sushi"
  }
};

// Cargar nombres en el <select>
window.onload = () => {
  const select = document.getElementById("persona");
  personas.forEach(nombre => {
    const opcion = document.createElement("option");
    opcion.value = nombre;
    opcion.textContent = nombre;
    select.appendChild(opcion);
  });
};

// Mostrar info al seleccionar una persona
function mostrarInfo() {
  const seleccion = document.getElementById("persona").value;
  const infoDiv = document.getElementById("info");

  if (seleccion === "") {
    infoDiv.textContent = "Por favor, selecciona una persona.";
    return;
  }

  const persona = datos[seleccion];
  infoDiv.innerHTML = `
    <strong>Nombre:</strong> ${seleccion} <br>
    <strong>Edad:</strong> ${persona.edad} años <br>
    <strong>Comida favorita:</strong> ${persona.comidaFavorita}
  `;
}
