displayMailingLabel()

function displayMailingLabel(){
    console.log("Sayed")
    console.log("6969 West Schinzle BLVD")
    console.log("Jumanji")
    console.log("Congo")
    console.log("42069")
}

// -----------------------------------------------

addNumbers()

function addNumbers(num1, num2) {
    return num1 + num2;
  }
  

  const number1 = 5;
  const number2 = 3;
  const sum = addNumbers(number1, number2);
  
  console.log(`${number1} + ${number2} = ${sum}`);



//   -----------------------------------------

displayReceipt()

function displayReceipt(totalDue, amountPaid) {
    
    if (isNaN(totalDue) || isNaN(amountPaid)) {
        return "Invalid input. Please enter valid numbers.";
    }

    var changeDue = amountPaid - totalDue;
    return "Total Due: $" + totalDue.toFixed(2) + "\nAmount Paid: $" + amountPaid.toFixed(2) + "\nChange Due: $" + changeDue.toFixed(2);
}


let totalDue = 150;
let amountPaid = 150;
let receipt = displayReceipt(totalDue, amountPaid);
console.log(receipt);



console.log("end of line")