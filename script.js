function runFor() {
  const num = parseInt(document.getElementById("for-num").value);
  const text = document.getElementById("for-text").value;
  const output = document.getElementById("for-output");

  if (!num || !text) { output.innerHTML = "Please fill in both fields."; return; }

  let result = "";
  for (let i = 1; i <= num; i++) {
    result += i + " - " + text + "<br>";
  }
  output.innerHTML = result;
}

function runWhile() {
  const num = parseInt(document.getElementById("while-num").value);
  const text = document.getElementById("while-text").value;
  const output = document.getElementById("while-output");

  if (!num || !text) { output.innerHTML = "Please fill in both fields."; return; }

  let result = "";
  let i = 1;
  while (i <= num) {
    result += i + " - " + text + "<br>";
    i++;
  }
  output.innerHTML = result;
}

function runDoWhile() {
  const num = parseInt(document.getElementById("dowhile-num").value);
  const text = document.getElementById("dowhile-text").value;
  const output = document.getElementById("dowhile-output");

  if (!num || !text) { output.innerHTML = "Please fill in both fields."; return; }

  let result = "";
  let i = 1;
  do {
    result += i + " - " + text + "<br>";
    i++;
  } while (i <= num);
  output.innerHTML = result;
}

function clearOut(id) {
  document.getElementById(id).innerHTML = "";
}