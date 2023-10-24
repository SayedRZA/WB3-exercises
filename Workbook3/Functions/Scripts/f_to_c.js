convertFtoC()

function convertFtoC(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  
 
  let fahrenheit = 68; 
  let celsius = convertFtoC(fahrenheit);
  console.log(fahrenheit + " degrees Fahrenheit is " + celsius + " degrees Celsius.");
  


