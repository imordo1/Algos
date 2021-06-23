var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
    whatToBring += "sunglasses, ";
}
if(temperature < 50) {
    whatToBring += "a coat, ";
}
if(isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);



for(var i=10; i>0; i--) {
    if(i != 2) {
      console.log(i);
    } else {
      console.log("ignition!");
    }
  }
      
  console.log("liftoff!");
  



  var countPositives = 0;
  var numbers = [3, 4, -2, 7, 16, -8, 0];
      
  for (var i=-0; i < numbers.length; i++)
  {
      if (numbers[i]>0)
      {countPositives = countPositives + 1 }
  }
//Comments
  console.log("there are " + countPositives + " positive values")
    







  var ar = [-1, -2, -3, 0, 0, 5, 12, 0, -10];

function counter(ar) {
  var counter = [0, 0, 0];
  ar.forEach(function(a) {
    if (a < 0)
      counter[0]++;
    else if (a > 0)
      counter[2]++;
    else
      counter[1]++;
  });
  return counter;
}

var result = counter(ar);
alert("No of Negative, Zero and Positive Elements are : " + result);


var countPositives = 0;
var 
var numbers = [3, 4, -2, 7, 16, -8, 0];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        countPositives++;
    } else{
        countPositives==countPositives
    }
}

console.log("there are " + countPositives + " positive values");
