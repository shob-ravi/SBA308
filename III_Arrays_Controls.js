/**************************III. Arrays & Control flow********************************************* */

//*************************** */ A. Talk about it:******************************************************/
// What are the things in an array called?
// Ans: Array contains zero or more items called "elements".

// Do Arrays guarantee those things will be in order?
// Ans:Array items are considered to be ordered.
// What real-life thing could you model with an array?
// Ans: A restaurant menu, box of chocolates, music playlist.....

//****************************************** */ B. Easy Does It********************************************/
// Create an array that contains three quotes and store it in a variable called quotes
let quotes = ["","",""];

// ********************************************C. Accessing elements ***************************************/
// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
const randomThings = [1, 10, "Hello", true]
console.log(randomThings[0]);

// Change the value of "Hello"to "World"
randomThings[2] = "World";

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

// ********************************************D. Change values **************************************************/
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?
console.log(ourClass[2]);

// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
console.log(ourClass);

// Add a new element, "Cloud City" to the array
ourClass[ourClass.length] = "Cloud City";
console.log(ourClass);
// **************************************************E. Mix It Up ********************************************************************/
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20];
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray[myArray.length] = "Aegon";
myArray[myArray.length] = "Wicked";
console.log(myArray);
// Remove the 5from the beginning of the array.
const delItem1 = myArray.shift();
console.log(myArray);
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);
// Remove the string of your choice from the end of the array.
const delItem2 = myArray.pop();
console.log(myArray);
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse();
console.log(myArray);
// Ans: Yes, the array got reversed. The original array got modified.Mutate mean we can modify the elements or properties directly.
// Yes, the .reverse() method returned the reversed string.

// ***********************************************************F. Biggie Smalls *****************************************************/
// Create a variable that contains an integer.
let inputInt = 100;
// Write an if ... elsestatement that:

// console.log()s "little number" if the number is entered is less than 100
if (inputInt < 100)
    { console.log("little number");
        
    }
// console.log()s big numberif the number is greater than or equal to 100.
else {
    console.log("big number");
    }    

//******************************************* G. Monkey in the Middle ************************************************************/
// Write an if ... else if ... elsestatement:
let intNumber = 10;
// console.log()little numberif the number entered is less than 5.
if (intNumber < 5)
    console.log("little number");
// If the number entered is more than 10, log big number.
else if (intNumber >10)
    console.log("big number");
// Otherwise, log "monkey".
else 
    console.log("monkey");

//*************************************** H. What's in Your Closet? ******************************************************************/
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + 
// the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] +" today!");

// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6,0,"raybans");
console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(thomsCloset[0][0]);

// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][0]);

// Access one item from Thom's accessories array.
console.log(thomsCloset[2][0]);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " +thomsCloset[0][0]+ "," +thomsCloset[1][1]+ " and " +thomsCloset[2][1]+"!");

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);


