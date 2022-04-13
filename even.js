// write a function that return the sum of even numbers

//let sum = 0;
//for(i=1;i<=100;i++){
//if(i%2==0)
//{
//sum=sum+i;
//}
//}
//console.log(sum);



function evenSum(num){
    var sum = 0;
    for(var i=1; i <= num; i++){
        if (i%2==0) {
            sum=sum+i;     
        }
    }
    return sum;
}  
var getSum = evenSum(100);  
console.log(evenSum);


//Assessment 2: Write a condition inside the sumofeven function that ensure start parameter is less than end parameter

function sumOfEven(start,end){
    if(typeof start !== 'number' || typeof end !== 'number' || start >= end){
      return 'Invalid number supplied';
    }
  
    var sum = 0;
    for(var i=start; i<=end; i++){
      if(i%2===0){
        sum = sum + i;
      }
    }
    return sum;
  }
  var getSum = sumOfEven();
  console.log(getSum);