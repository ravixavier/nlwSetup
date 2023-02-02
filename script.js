const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Dia já registrado!");
    return;
  }

  alert("Dia registrado com sucesso🎇");
  nlwSetup.addDay(today);
}

function save() {
  console.log("Saving...");
  localStorage.setItem("NLWsetup@habits", JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("NLWsetup@habits")) || {};

nlwSetup.setData(data);
nlwSetup.load();
