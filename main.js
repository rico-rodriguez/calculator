let op = '';
let num1 = 0;
let num2 = 0;

// adding event listener for all buttons on the DOM
const btn = document.querySelectorAll("input[type=button]");
const length = btn.length;
for (let i = 0; i < length; i++) {
  btn[i].addEventListener("click", numberValue);
}

function clearDisplayFunction(event) {
    const value = event.target.value;
    document.getElementById("textfield").value = "";
}

//Recognize operator's being clicked
function numberValue(event) {
  const value = event.target.value;
  switch (value) {
    case "+":
        console.log("+ was clicked");
        num1 = document.getElementById("textfield").value;
        clearDisplayFunction(event)
        op = '+';
        break;
    case "-":
        console.log("- was clicked");
        num1 = document.getElementById("textfield").value;
        clearDisplayFunction(event)
        op = '-';
        break;
    case "x":
        console.log("* was clicked");
        num1 = document.getElementById("textfield").value;
        clearDisplayFunction(event)
        op = '*';
        break;
    case "/":
        console.log("/ was clicked");
        num1 = document.getElementById("textfield").value;
        clearDisplayFunction(event)
        op = '/';
        break;
    case "=":
        num2 = document.getElementById("textfield").value;
        doMath('=')
        break;  
    case "C":
        console.log("C was clicked");
        clearDisplayFunction(event)
        break;      
    default:
        console.log("%s was clicked", value);      
        // add value of button to textfield
        document.getElementById("textfield").value += value;
  }
}
function doMath(operator) {
    //calculating inputted numbers against operator - sent from '=' sign.
    console.log("= was clicked!");
    document.getElementById("textfield").value = operate(op, num1, num2);
}

function subtract (num1, num2) {
    //subtraction function
    return num1 - num2;
}
function multiply (num1, num2) {
    //multiplication function
    return num1 * num2;
}
function divide (num1, num2) {
    //division function
    return num1 / num2;
}
function add (num1, num2) {
    return num1 + num2;
}
function operate (operator, num1, num2) {
    // operating function
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1,  num2);
        case '/':
            return divide(num1, num2);
        default:
            return null;
    }

    return 'nothing special';
}
// END OF BASIC MATH FUNCTIONS