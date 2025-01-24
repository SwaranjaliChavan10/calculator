let display = document.getElementById("display");

// Add a value to the display
function appendValue(value) {
  display.value += value;
}

// Clear the entire display
function clearDisplay() {
  display.value = "";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculateResult() {
  try {
    // Replace symbols for evaluation
    display.value = eval(display.value.replace("×", "*").replace("÷", "/"));
  } catch (error) {
    display.value = "Error";
  }
}

// Add keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if ((key >= 0 && key <= 9) || ["+", "-", "*", "/", "."].includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});