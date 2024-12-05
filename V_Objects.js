// ************************************************************ Objects ********************************************************/
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, 
// and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// *********************************************** A. Make a user object *********************************************/
// Create an object called user.
let user =[];
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. 
// Set the other values to whatever you would like.
user = [
    { name: "Bruce", email: "Knight@gmail.com", age: 41,purchased:[]}]  


// ******************************************** B. Update the user******************************************************/
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
user[0].email = "valid@gmail.com";


// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user[0].age++;

// ********************************************C. Adding keys and values **************************************************/
// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
const newValue = "Pittsburgh";
user[0].location = newValue;

// ******************************************* D. Shopaholic! *************************************************************************/

// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.

user[0].purchased = [];
user[0].purchased.push("Carbohydrates");
user[0].purchased.push("peace of mind");
user[0].purchased.push("Merino jodhpurs");
user[0].purchased.push("Natural Life");

// Console.log just the "Merino jodhpurs" from the purchasedarray.
console.log(user[0].purchased[2]);

// ************************************************* E. Object-within-object **************************************************************/
// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
let friend = [{ name: "Grace Hopper", email: "Grace@gmail.com", age: "85",purchased:[],location:"Cleveland"} ]
user.friend = friend;

// Console.log just the friend's name
console.log(user.friend[0].name);

// Console.log just the friend's location
console.log(user.friend[0].location);

// CHANGE the friend's age to 55
user.friend[0].age = "55";

// The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend[0].purchased = [];

user.friend[0].purchased.push("The One Ring");
//console.log(user.friend);
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchased array.
user.friend[0].purchased.push("A latte");

// Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend[0].purchased[1]);

// ************************************************ F. Loops **********************************************************************************
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
user.forEach(obj =>{
    console.log(obj.purchased);
})

// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
user.friend.forEach(obj =>{
    console.log(obj.purchased);
})

// ********************************************** G. Functions can operate on objects *********************************************************
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.
function updateUser()
{
    console.log(user[0].age++);
    console.log(user[0].name.toUpperCase());
}
updateUser();

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, 
// make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. 
// Call your oldAndLoudfunction with useras the argument.

function oldAndLoud(person)
{
    console.log(person[0].age++);
    console.log(person[0].name.toUpperCase());
}
oldAndLoud(user);