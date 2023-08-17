//question num 01

let num = prompt("Please enter a positive integer:");
if (num > 0) {
  document.write("The number is: " + num);
} else {
  alert("Please enter a positive integer.");
}
let roundedNum = Math.round(num);
  document.write("<br>The rounded-off value is: " + roundedNum);
  let floorNum = Math.floor(num);
  document.write("<br>The floor value is: " + floorNum);
  let ceilNum = Math.ceil(num);
  document.write("<br>The ceil value is: "+ ceilNum);

  //question num 02
  let number = prompt("Please enter a negative integer:");
if (number < 0) {
  document.write("<br><br>The number is: " + number);
} else {
  alert("Please enter a  negative integer.");
}
let roundedNumber = Math.round(number);
  document.write("<br>The rounded-off value is: " + roundedNumber);
  let floorNumber = Math.floor(number);
  document.write("<br>The floor value is: " + floorNumber);
  let ceilNumber = Math.ceil(number);
  document.write("<br>The ceil value is: "+ ceilNumber);

  //question num 03
  let Num = prompt("Please enter a number:");
let absNum = Math.abs(Num);
document.write("<br><br>The absolute value of " + Num + " is: " + absNum);

//question num 04
let diceValue = Math.floor(Math.random() * 6) + 1;
document.write("<br><br>The value of the dice is: " + diceValue);

//qusetion num 05
let coinToss = Math.floor(Math.random() * 2);
if (coinToss === 0) {
    document.write("<br><br>" + coinToss);
  document.write(": Random coin value: Head ");
} else {
    document.write("<br><br>"+coinToss);
  document.write(": Random coin value: Tails");
}

//qusetion num 06
let dicevalue = Math.floor(Math.random() * 100) + 1;
document.write("<br><br>Random Number between 1 and 100: " + dicevalue);

//qusetion num 07


//question num 08
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userInput = prompt("Guess a number between 1 and 10:");
if (parseInt(userInput) === secretNumber) {
    // If the user guessed the secret number, congratulate them
    alert("Congratulations, you guessed the secret number! " +secretNumber+ ".");
  } else {
    // If the user guessed the wrong number, display a message telling them the correct answer
    alert("Sorry, that's not the secret number. The secret number was " + secretNumber + ".");
  }