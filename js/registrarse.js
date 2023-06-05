const reg = document.getElementById("ingresoForm");

reg.addEventListener("submit", function (e) {
  e.preventDefault(); // Previene el envío del formulario

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const regUSER = Users.find((user) => user.email === email);
  if (regUSER) {
    return alert("El usuario ya está registrado");
  }

  Users.push({ name: name, email: email, password: password });
  localStorage.setItem("users", JSON.stringify(Users)); // Almacenar en el almacenamiento local
  alert("Registro Exitoso");

  // Redireccionar a la página de inicio de sesión
  window.location.href = "login.html";
});
