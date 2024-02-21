let displayValue= "0";

function updateDisplay() {
const display=document.getElementById('display');
display.textContent=displayValue;

}
function appendtoDisplay(value){
if(displayValue === "0"){
displayValue=value;

}else{
displayValue += value;

}updateDisplay();
}
function calculate(){
try{
    displayValue=eval(displayValue).toString();
}
catch (error)

{
    displayValue="Error"
}
    
    updateDisplay();
}




function clearDisplay(){
displayValue="0";
updateDisplay();

}

function deleteDisplay() {
    if (displayValue.length > 1) {
      // Remove the last character from the displayValue
      displayValue = displayValue.slice(0, -1);
    } else {
      // If there is only one character left, set displayValue to "0"
      displayValue = "0";
    }
    updateDisplay();
  }

