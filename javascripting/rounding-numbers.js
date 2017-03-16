// ROUNDING NUMBERS (Exercise 7 of 19)  
 
// We can do basic math using familiar operators like +, -, *, /, and %.  
 
// For more complex math, we can use the Math object.  
 
// In this challenge we'll use the Math object to round numbers.  
 
// The challenge:  
 
// Create a file named rounding-numbers.js.  
 
// In that file define a variable named roundUp that references the float  
// 1.5.  

var roundUp = 1.5;
 
// We will use the Math.round() method to round the number up. This method  
// rounds either up or down to the nearest integer.  

Math.round(roundUp);
 
// An example of using Math.round():  
 
//    Math.round(0.5);  
 
// Define a second variable named rounded that references the output of the  
// Math.round() method, passing in the roundUp variable as the argument.  

var rounded = Math.round(roundUp);
 
// Use console.log() to print that number to the terminal.  

console.log(rounded);
 
// Check to see if your program is correct by running this command:  
 
//    javascripting verify rounding-numbers.js