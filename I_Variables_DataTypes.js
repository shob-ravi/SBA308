// *******************************I. Variables & Datatypes**********************************************************************************
/***********************************A. Q + A*********************************************************************************/

// -------------------------------1.How do we assign a value to a variable?-------
let value = " Assign value to a variable";

// -------------------------------2.How do we change the value of a variable?
value = "New value";

// -------------------------------3.How do we assign an existing variable to a new variable?
let newVar = value;

// -------------------------------4.Remind me, what are declare, assign, and define?
let x; /* This is declaring, creating a variable and giving it a name.*/
x = "Assigning a value to a variable"; /* Assigning means , giving value to a variable */
/* Define is used to mean the same as declare in functions.small code snippet below for defining a function.*/
let a_declare = 10; /* In a context of variables, define is declaring and assigning a value in a single statement.  */
function def(a_declare)
{ a_declare+=1;
    return a_declare;
}
console.log("def:" +def(12));

// ------------------------------5.What is pseudocoding and why should you do it?
// Pseudocoding is readable description of a program logic. it is useful for understanding the program and it is easier to debug.
/********************* */

// -------------------------------6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
/* 80% of time should be spend in analyzing , thinking and understanding the problem and 20% time should be spend on coding.*/

// *****************************************************B. Strings*****************************************************************************

// For all other questions that involve writing code, you can solve them via the following instructions.
// ------------------------------1.Create a variable called firstVariable
let firstVariable;
// ------------------------------2.Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// ------------------------------3.Change the value of this variable to some number
firstVariable = 10;
// ------------------------------4.Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// ------------------------------5.Change the value of secondVariableto any string.
secondVariable = "Good morning";
// ------------------------------6.What is the value of firstVariable?
/* The value of first variable is the number 10, since we changed the value from string to number. */
console.log("first variable:" +firstVariable);

// ------------------------------7.Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
let yourName = "Shobana Hariraman";
let newString = "Hello, my name is " + yourName;
console.log("new concatenated string is :" +newString);
// *********************************************************C. Booleans******************************************************************************
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';
// console.log(a __ b);    
console.log("a < b");
console.log(a < b);
//console.log(c __ d);
console.log("c > d");
console.log(c > d);
// console.log('Name' __ 'Name');
console.log("'Name' === 'Name'");
console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true __ false);
console.log("true || false");
console.log(true || false);
// console.log(false __ false __ false __ false __ false __ true);
console.log("false || false || false || false || false || true");
console.log(false || false || false || false || false || true);
// console.log(false __ false)
console.log("!(false && false)");
console.log(!(false  && false));
// console.log(e ___ 'Kevin');
console.log("e === 'Kevin'");
console.log(e === 'Kevin');
// console.log(a __ b ___ c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log("a + b == c");
console.log(a + b == c);
// console.log(a __ a ___ d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log("a * a == d");
console.log(a*a == d);
// console.log(48 __ '48');  
console.log("48 == '48'");
console.log(48 == '48');

/*********************************************************** D. The farm **********************************************************/
// Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow";
// Write code that will print out "mooooo" if the it is equal to cow
    if (animal === "cow")
    {
        console.log("mooooo");
    }
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow." 
    else
    {
        console.log("Hey! You're not a cow.");
    }

/**********************************************************E. Driver's Ed***********************************************************/
// Make a variable that holds a person's age; be semantic
let personAge = 15;
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (personAge >=16)
{
    console.log("Here are the keys!");
}
else
{
    console.log("Sorry, you're too young.");
}
