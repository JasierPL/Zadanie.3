let resultField = document.getElementById("result");

function Wartosc(value) {
  resultField.value += value;
}

function wyczysc() {
  resultField.value = "";
}

function Oblicz() {
  try {
    resultField.value = eval(resultField.value);
  } catch (error) {
    alert("Błędne wyrażenie!");
  }
}
