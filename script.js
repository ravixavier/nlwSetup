const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);

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

// const data = {
//   organize: ["01-01", "01-02", "01-03"],
//   coffee: ["01-01"],
//   study: ["01-01"],
// };

// nlwSetup.setData(data);
// nlwSetup.load();
