let displayValue = '0';

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function appendToDisplay(value) {
  if (displayValue === '0') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

updateDisplay();
