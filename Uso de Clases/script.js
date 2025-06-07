// Clase Vehiculo
class Vehiculo {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  descripcion() {
    return `${this.marca} ${this.modelo} (${this.anio})`;
  }
}

// Arreglo para guardar los vehículos
const vehiculos = [];

function registrarVehiculo() {
  const marca = document.getElementById("marca").value.trim();
  const modelo = document.getElementById("modelo").value.trim();
  const anio = parseInt(document.getElementById("anio").value);

  if (!marca || !modelo || isNaN(anio)) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const nuevoVehiculo = new Vehiculo(marca, modelo, anio);
  vehiculos.push(nuevoVehiculo);
  mostrarVehiculos();

  // Limpiar campos
  document.getElementById("marca").value = "";
  document.getElementById("modelo").value = "";
  document.getElementById("anio").value = "";
}

function mostrarVehiculos() {
  const lista = document.getElementById("listaVehiculos");
  lista.innerHTML = "";

  vehiculos.forEach((vehiculo, index) => {
    const p = document.createElement("p");
    p.textContent = `#${index + 1} - ${vehiculo.descripcion()}`;
    lista.appendChild(p);
  });
}
