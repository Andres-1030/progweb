function tirarDados() {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById('dado1').textContent = obtenerEmojiDado(dado1);
  document.getElementById('dado2').textContent = obtenerEmojiDado(dado2);

  let mensaje = "";
  if (dado1 > dado2) {
    mensaje = "¡El Dado 1 gana!";
  } else if (dado2 > dado1) {
    mensaje = "¡El Dado 2 gana!";
  } else {
    mensaje = "¡Empate!";
  }

  document.getElementById("resultado").textContent = mensaje;
}

function obtenerEmojiDado(numero) {
  const emojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  return emojis[numero - 1];
}
