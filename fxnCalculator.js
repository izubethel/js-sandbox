// Using functions
 
var operator = prompt('Enter operator(+,-,/,*)');
var num1 = parseFloat(prompt('Please Enter first number: '));
var num2 = parseFloat(prompt('Please Enter second number: '));

function output(result) {
    alert("Your answer is " +  result);
    
}

function add(num1, num2) {
    var result = num1 + num2;
    return result;
    
}
function minus(num1, num2) {
    var result = num1 - num2;
    return result;
    
}
function divide(num1, num2) {
    var result = num1 / num2;
    return result;
    
}
function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
    
}
 if
    (operator === "+"){
    result = num1 + num2;
    output(result);
}else if
    (operator === "-"){
    result = num1 - num2;
    output(result);
}else if
    (operator === "/"){
    result = num1 / num2;
    output(result);
 }else if
    (operator === "*"){
    result = num1 * num2;
    output(result);
}else{
        alert("Wrong input operator!");
}
