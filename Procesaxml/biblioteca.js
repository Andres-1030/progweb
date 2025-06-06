function cargarDatos() {
  fetch("datos.xml")
    .then((response) => response.text())
    .then((xmlText) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "application/xml");

      const clientes = xmlDoc.getElementsByTagName("cliente");
      const contenedor = document.getElementById("contenedor");
      contenedor.innerHTML = ""; // Limpiar antes de agregar

      for (let i = 0; i < clientes.length; i++) {
        const cliente = clientes[i];
        const nombre = cliente.getElementsByTagName("nombre")[0].textContent;
        const sector = cliente.getElementsByTagName("sector")[0].textContent;
        const notas = cliente.getElementsByTagName("notas")[0].textContent;

        const divCliente = document.createElement("div");
        divCliente.className = "cliente";
        divCliente.innerHTML = `
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Sector:</strong> ${sector}</p>
          <p><strong>Notas:</strong> ${notas}</p>
          <button onclick="eliminarCliente(this)">Eliminar</button>
          <hr>
        `;
        contenedor.appendChild(divCliente);
      }

      const btnAgregar = document.createElement("button");
      btnAgregar.textContent = "Agregar Cliente";
      btnAgregar.onclick = agregarCliente;
      contenedor.appendChild(btnAgregar);
    });
}

function eliminarCliente(boton) {
  const divCliente = boton.parentElement;
  divCliente.remove();
}

function agregarCliente() {
  const nuevo = document.createElement("div");
  nuevo.className = "cliente";
  nuevo.innerHTML = `
    <p><strong>Nombre:</strong> <input type="text" placeholder="Nombre"></p>
    <p><strong>Sector:</strong> <input type="text" placeholder="Sector"></p>
    <p><strong>Notas:</strong> <textarea placeholder="Notas"></textarea></p>
    <button onclick="eliminarCliente(this)">Eliminar</button>
    <hr>
  `;
  const contenedor = document.getElementById("contenedor");
  contenedor.insertBefore(nuevo, contenedor.lastElementChild);
}
