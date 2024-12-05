// ********************************************************Cat Combinator **************************************************

// *************************************************1. Mama cat********************************************************
// Define an object called cat1that contains the following properties:

// name
// breed
// age (a number)
let cat1 = [{name: "Joe", age: 19, breed: "Mog" }]          

// console.log the cat's age
//console.log(cat1[0].age);
// console.log the cat's breed
//console.log(cat1[0].breed);

// *********************************************** 2. Papa cat ********************************************************************
// Define an object called cat2that also contains the properties:

// name
// breed
// age (a number)
let cat2 = [{name: "Jam", age: 45, breed: "Siamese" }]    
// ***************************************************3. Combine Cats!**********************************************************/
// Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.    // 
function combine(mama,papa)
{
    console.log(mama,papa);    
}
combine(cat1,cat2);
// Make it so the combineCatsfunction will return a combination of the two incoming cats
// The result should be an object wherein the name is a concatenation of the parents' names, the age is 1
// the breed is each of the parents' breeds with a hyphen in between
function combineCats(mama,papa)
{
    let result = [{name: "", age: 1, breed: ""}];
    const name = mama.map((item1, index) => {
        const item2 = papa[index];
        return `${item1.name}${item2.name}`;
      });
      
      const breed = mama.map((item1, index) => {
        const item2 = papa[index];
        return `${item1.breed}-${item2.breed}`;
      });
      result[0].name = name;      
      result[0].breed = breed;
      return result;
}
console.log(combineCats(cat1,cat2));

// ***************************************************4. Cat brain bender***********************************************************/
function combineCatsfunction(mama,papa)
{
    let result = [{name: "", age: 1, breed: ""}];
    const name = mama.map((item1, index) => {
        const item2 = papa[index];
        return `${item1.name}${item2.name}`;
      });
      
      const breed = mama.map((item1, index) => {
        const item2 = papa[index];
        return `${item1.breed}-${item2.breed}`;
      });
      result[0].name = name; 
      result[0].age = 1;     
      result[0].breed = breed;
      return result;
}

console.log(combineCatsfunction(combineCatsfunction(combineCatsfunction(cat1,cat2), combineCatsfunction(cat1,cat2)),
combineCatsfunction(combineCatsfunction(cat1,cat2), combineCatsfunction(cat1,cat2))));