function convert() {
  let number = document.getElementById("number").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let result = "";

  if (from === "binary") {
    if (to === "decimal") {
      result = parseInt(number, 2).toString(10);
    } else if (to === "hexadecimal") {
      result = parseInt(number, 2).toString(16).toUpperCase();
    }
  } else if (from === "decimal") {
    if (to === "binary") {
      result = parseInt(number, 10).toString(2);
    } else if (to === "hexadecimal") {
      result = parseInt(number, 10).toString(16).toUpperCase();
    }
  } else if (from === "hexadecimal") {
    if (to === "binary") {
      result = parseInt(number, 16).toString(2);
    } else if (to === "decimal") {
      result = parseInt(number, 16).toString(10);
    }
  }

  document.getElementById("result").value = result;
}
