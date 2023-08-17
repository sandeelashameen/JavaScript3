//question num 01
let firstName = prompt("Please enter your first name:");
let lastName = prompt("Please enter your last name:");

let fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome.");


// question num 02
let phoneModel = prompt("What is your favorite mobile phone model?");

// Find the length of the user input
let inputLength = phoneModel.length;

document.write("MY Favorit Mobiles is : " + phoneModel);
document.write("<br>The length of your favorite mobile phone model is: " + inputLength);

//question num 03
let word = "Pakistani";

// Use the indexOf() function to find the index of "n" in the word
let nIndex = word.indexOf("n");

document.write("<br><br>The index of 'n' in the word 'Pakistani' is: " + nIndex);

//question num 04
let string = "Hello World";

// Use the lastIndexOf() function to find the last index of "l" in the word
let lastIndex = string.lastIndexOf("l");

// Display the last index of "l" in the word in the browser
document.write("<br><br>The last index of 'l' in the word 'Hello World' is: " + lastIndex);

//question num 05
let thirdchar = "Pakistani";

// Use the charAt() function to find the character at the 3rd index in the word
let char = thirdchar.charAt(3);

// Display the character at the 3rd index in the word in the browser
document.write("<br><br>The character at the 3rd index in the word 'Pakistani' is: " + char);

//question num 06
let firName = prompt("Please enter your first name:");
let laName = prompt("Please enter your last name:");

// Combine the first and last names into a full name using the concat() method
let CONCAT= firName.concat(laName);

// Greet the user using their full name
alert("Hello, " + CONCAT + "! Welcome.");

//question num 07
let word1 = "Hyderabad";

// Use the replace() function to replace the "Hyder" substring with "Islam"
let newWord = word1.replace("Hyder", "Islam");

document.write("<br><br>City: " + word1);
document.write("<br>After Replacement is: " + newWord);

//question num 08
let message = "Ali and Sami are best friends. They play cricket and football together.";

// Use the replace() function with a regular expression to replace all occurrences of "and" with "&"
let newMessage = message.replace(/and/g, "&");

// Display the modified string in the browser
document.write("<br><br>The modified string is: " + newMessage);

//question num 09
let str = "472";
let num = parseInt(str);

document.write("<br><br>String value: " + str + "<br>");
document.write("String type: " + typeof str + "<br>");
document.write("Number value: " + num + "<br>");
document.write("Number type: " + typeof num + "<br>");

//question num 10
let usersInput = prompt("Enter some text For Convert in UpperCase :");

// Use the toUpperCase() function to convert the input to uppercase
let upperCaseInput = usersInput.toUpperCase();

document.write("<br><br>Uppercase input: " + upperCaseInput);

//question num 11
let stri = prompt("Enter a String: ")
let str2 = stri.charAt(0).toUpperCase() + stri.slice(1);
document.write("<br><br>User Input: " + stri);
document.write("<br>Title case: " +str2);

//qusetion num 12
let Num = 35.36;
let numString = Num.toString().replace(".", "");
document.write("<br><br>"+numString);

//question num 13
let username = prompt("Please enter your username:");

if (/[!@.,]/.test(username))
 {
  alert("Your username contains a special character. Please enter a valid username.");
} 
else 
{
  alert("Welcome, " + username + "!");
}


//qusetion num 14
let items = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput = prompt("Enter an item to search for: ");

// Perform case-insensitive search by converting both the input and the items to lowercase
let foundIndex = -1;
for (let i = 0; i < items.length; i++) {
  if (items[i].toLowerCase() === userInput.toLowerCase()) {
    foundIndex = i;
    break;
  }
}

if (foundIndex >= 0) {
  document.write("<br><br>"+userInput + " is available at the index: "  + foundIndex + " in our bakery!");
} else {
    document.write("<br><br>we are sorry " + userInput + " is not available in our bakery! ");
}

//question number 16
let university = "University of Karachi";
let universityArray = university.split(3);

document.write("<br><br>" + universityArray);


//question num 17
let UserInput = prompt("Enter a string for last character: ");

let lastChar = UserInput.charAt(UserInput.length - 1);

document.write("<br><br>User Input: "+ UserInput+ "<br>Last Character of Input: " + lastChar);

//question num 18
let strg = "The quick brown fox jumps over the lazy dog";
let count = 0;
let words = strg.split(" ");

for (let i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() === "the") {
    count++;
  }
}
document.write("<br><br>Text: " +strg);
document.write("<br>There are " + count + " occurrences of word “the”");

