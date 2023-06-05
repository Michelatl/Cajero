const MovimientoDinero = document.querySelector("#MovimientoDinero");

let datos = JSON.parse(localStorage.getItem("MovimientoDinero")) || [];

const Movimientos1 = () => {
  let htmlCards = "";

  datos.forEach((e) => {
    htmlCards += '<div class="col">';
    htmlCards += '<div class="card">';
    htmlCards += '<div class="card-body">';
    htmlCards += `<h5 class="card-title">${e}</h5>`;
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";
  });

  document.getElementById("cardsFromApi").innerHTML = htmlCards;
};

Movimientos1();

const user = JSON.parse(localStorage.getItem("login_success")) || false;
if (!user) {
  window.location.href = "login2.html";
}

const logo = document.getElementById("salirCajero");
logo.addEventListener("click", () => {
  alert("Hasta pronto");
  window.location.href = "login2.html";
});
