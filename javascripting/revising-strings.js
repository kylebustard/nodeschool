// REVISING STRINGS (Exercise 5 of 19)  

// You will often need to change the contents of a string.  

// Strings have built-in functionality that allow you to inspect and  
// manipulate their contents.  

// Here is an example using the .replace() method:  

//    var example = 'this example exists';  
//    example = example.replace('exists', 'is awesome');  
//    console.log(example);  

// Note that to change the value that the example variable references, we  
// need to use the equals sign again, this time with the example.replace()  
// method to the right of the equals sign.  

// The challenge:  

// Create a file named revising-strings.js.  

// Define a variable named pizza that references this string: 'pizza is  
// alright'  

var pizza = 'pizza is alright';

// Use the .replace() method to change alright to wonderful.  

pizza = pizza.replace('alright', 'wonderful');

// Use console.log() to print the results of the .replace() method to the  
// terminal.  

console.log(pizza);

// Check to see if your program is correct by running this command:  

// javascripting verify revising-strings.js  