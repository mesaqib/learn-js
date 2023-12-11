let currentDisplay = "";

function takeInput(value) {
  currentDisplay = currentDisplay + value;
  document.querySelector("#input-screen").value = currentDisplay;
}

function clearInput() {
  currentDisplay = "";
  document.querySelector("#input-screen").value = "";
}

function ourputResult() {
  let finalResult = (currentDisplay = eval(currentDisplay));
  if (finalResult.toString().includes(".")) {
    finalResult = parseFloat(finalResult.toFixed(2));
  }
  document.querySelector("#input-screen").value = finalResult;
}

function deleteLast() {
  if (currentDisplay.length > 0) {
    currentDisplay = currentDisplay.slice(0, currentDisplay.length - 1);
    document.querySelector("#input-screen").value = currentDisplay;
  }
}
