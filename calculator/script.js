document.getElementById("calculate").addEventListener("click", function () {
  const firstNumber = parseFloat(document.getElementById("firstnumber").value);
  const operator = document.getElementById("operator").value;
  const secondNumber = parseFloat(
    document.getElementById("secondnumber").value
  );
  let result;

  switch (operator) {
    case "add":
      result = firstNumber + secondNumber;
      break;
    case "sub":
      result = firstNumber - secondNumber;
      break;
    case "mul":
      result = firstNumber * secondNumber;
      break;
    case "div":
      result = firstNumber / secondNumber;
      break;
    default:
      result = "Invalid operator";
  }

  if (document.getElementById("doround").checked) {
    const decimalPlaces = parseInt(document.getElementById("decimals").value);
    result = result.toFixed(decimalPlaces);
  }

  const resultsList = document.getElementById("results");
  const resultItem = document.createElement("li");
  resultItem.textContent = result;
  resultsList.insertBefore(resultItem, resultsList.firstChild);
});

document.getElementById("clear").addEventListener("click", function () {
  const resultsList = document.getElementById("results");
  resultsList.innerHTML = "";
});
