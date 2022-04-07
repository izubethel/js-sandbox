 // This is a simple calculator program 
 
 var operator = prompt('Enter operator(+,-,/,*)');
  var num1 = parseFloat(prompt('Please Enter first number: '));
    var num2 = parseFloat(prompt('Please Enter second number: '));

   if
      (operator === "+"){
      result = num1 + num2;
       alert("the answer is " + result);
   }else if
       (operator === "-"){
       result = num1 - num2;
        alert("the answer is " + result);
    }else if
        (operator === "/"){
        result = num1 / num2;
        alert("the answer is " + result);
   }else if
        (operator === "*"){
        result = num1 - num2;
        alert("the answer is " + result);
    }else{
            alert("Wrong input operator!");
    }




