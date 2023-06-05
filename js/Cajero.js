const btnAIngreso = document.getElementById("AceptarIngreso");
const btnAretiro = document.getElementById("AceptarRetiro");
const btnAvance = document.getElementById("Avance");
//variables
let IngresoD = "";
let RetiroD = "";
let AvanceD = "";
let Movimientos = JSON.parse(localStorage.getItem("MovimientoDinero")) || [];
let saldoGeneral = 0;

//Ingreso de dinero
const Ingreso = (DineroIngresados) => {
  IngresoD = parseInt(DineroIngresados);
  saldoGeneral = saldoGeneral + IngresoD;

  if (IngresoD > 0) {
    document.getElementById("Dinero").innerHTML = IngresoD;
    document.getElementById("Saldo").innerHTML = saldoGeneral;
    Movimientos.push(IngresoD);
    document.getElementById("MovimientoDinero").innerHTML =
      Movimientos.join(",");
    localStorage.setItem("MovimientoDinero", JSON.stringify(Movimientos));
  } else {
    alert("Verifique los datos");
  }
  document.getElementById("DineroIngresado").value = "";
};

//Retiro de dinero
const Retiro = (RetiroDinero) => {
  RetiroD = parseInt(RetiroDinero);
  if (RetiroD > saldoGeneral) {
    return alert("fondos insuficientes");
  }
  saldoGeneral = saldoGeneral - RetiroD;

  if (RetiroD > 0) {
    document.getElementById("DineroI").innerHTML = RetiroD;

    document.getElementById("Saldo").innerHTML = saldoGeneral;

    Movimientos.push(RetiroD);

    document.getElementById("MovimientoDinero").innerHTML =
      Movimientos.join(",");
    localStorage.setItem("MovimientoDinero", JSON.stringify(Movimientos));
  } else {
    alert("Verifique los datos");
  }
  document.getElementById("RetiroDinero").value = "";
};

const Avance = (AvancesDinero) => {
  AvanceD = parseInt(AvancesDinero);
  saldoGeneral = saldoGeneral - AvanceD;

  if (AvanceD > 0) {
    document.getElementById("AvanceI").innerHTML = AvanceD;

    document.getElementById("Saldo").innerHTML = saldoGeneral;

    Movimientos.push(AvanceD);

    document.getElementById("MovimientoDinero").innerHTML =
      Movimientos.join(",");
    localStorage.setItem("MovimientoDinero", JSON.stringify(Movimientos));
  } else {
    alert("Verifique los datos");
  }
  document.getElementById("AvancesDinero").value = "";
};

//Botones

btnAretiro.onclick = function () {
  let monto = document.getElementById("RetiroDinero").value;
  Retiro(monto);
};

btnAIngreso.onclick = function () {
  let monto = document.getElementById("DineroIngresado").value;
  Ingreso(monto);
};

btnAvance.onclick = function () {
  let monto = document.getElementById("AvancesDinero").value;
  Avance(monto);
};
