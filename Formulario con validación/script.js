document.getElementById("password").addEventListener("input", function() {
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirmar_password");
  const passwordValue = passwordField.value;
  const confirmPasswordValue = confirmPasswordField.value;

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Validación de la contraseña
  if (passwordPattern.test(passwordValue)) {
    passwordField.style.borderColor = "green";
  } else {
    passwordField.style.borderColor = "red";
  }

  // Validación de la confirmación de la contraseña
  if (passwordValue === confirmPasswordValue) {
    confirmPasswordField.style.borderColor = "green";
  } else {
    confirmPasswordField.style.borderColor = "red";
  }
});

document.getElementById("email").addEventListener("input", function() {
  const emailField = document.getElementById("email");
  const emailValue = emailField.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validación del correo electrónico
  if (emailPattern.test(emailValue)) {
    emailField.style.borderColor = "green";
  } else {
    emailField.style.borderColor = "red";
  }
});

document.querySelector("form").addEventListener("submit", function(event) {
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirmar_password");
  const emailField = document.getElementById("email");
  const captchaField = document.getElementById("captcha");
  
  // Verifica si todo está correcto
  if (passwordField.style.borderColor === "green" && confirmPasswordField.style.borderColor === "green" && emailField.style.borderColor === "green" && captchaField.checkValidity()) {
    alert("¡Usuario registrado exitosamente!");
  } else {
    event.preventDefault();  // Previene el envío si no está todo correcto
    alert("Por favor, completa todos los campos correctamente.");
  }
});
