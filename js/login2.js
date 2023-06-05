const log = document.getElementById("loginForm");

log.addEventListener("submit", function (e) {
  e.preventDefault(); // Previene el envío del formulario

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const validUser = Users.find(
    (user) => user.email === email && user.password === password
  );
  if (!validUser) {
    return alert("Usuario y/o contraseña incorrectos!");
  }

  alert(`Bienvenido ${validUser.name}`);
  localStorage.setItem("login_success", JSON.stringify(validUser));
  window.location.href = "cajero.html";
});

/*

function buscarUsuario() {
  let email = document.getElementById(exampleInputEmail1).value;
  let pass = document.getElementById(exampleInputPassword1).value;

  usuarios.forEach((usuario) => {
    if (usuario.exampleInputEmail1 == email  && usuario.exampleInputEmail1 == pass) {
        console.log(buscarUsuario)
      //function para enviar a vista de cajero?
      window.location.href = "Login.html";
    }
  });

  alert("Usuario invalido");
}



/*
let usuarios = [];

function agregarUsuario() {
  let correo = exampleInputEmail1.value;
  let contraseña = exampleInputPassword1.value;

  let user = { correo: correo, pass: contraseña };
  usuarios.push(user);
}

function agregarUsuario() {
  let correo = exampleInputEmail1.value;
  let contraseña = exampleInputPassword1.value;

  var user = { correo: correo, pass: contraseña };
  usuarios.push(user);
}
*/
/*
document.getElementById("MovimientoDinero").innerHTML = Movimientos.join(",");
localStorage.setItem("MovimientoDinero", JSON.stringify(Movimientos));
} else {
    */
