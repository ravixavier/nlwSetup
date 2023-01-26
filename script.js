const form = document.querySelector("#form-habits");

const nlwSetup = new NLWSetup(form);

nlwSetup.addDay("01/02");

nlwSetup.dayExists("01/02");
