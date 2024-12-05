// ***********************************************IV. Functions***************************************************************************/

//******************************************* A. printGreeting*************************************************************/
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument 
// interpolated into the greeting?
function printGreeting(name)
{
    console.log("Hello There, "+name);
}
printGreeting("Slimer!");

// ********************************************B. printCool***************************************************************/
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name 
// and a message saying that that person is cool.
function printCool(name)
{
    console.log(name +" is cool");
}
printCool("Captain Reynolds");

// ********************************************C. calculateCube***************************************************************/
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
function calculateCube(num)
{
    console.log("Volume of cube is:" + num**3);
}
calculateCube(5)

// *******************************************D. isVowel***********************************************************************/
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
// The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. 
// In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
function isVowel(alphabet)
{   alphabet = alphabet.toLowerCase();
    if ((alphabet == "a" )|| (alphabet == "e")|| (alphabet == "i")||(alphabet == "o" ) ||(alphabet =="u"))
        return true;
    
    else
        return false;
    
}
console.log("Vowel found:" +isVowel("A"));

// ******************************************E. getTwoLengths******************************************************************/
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where 
// each number is the length of the corresponding string.
function getTwoLengths(str1,str2)
{
        return [str1.length,str2.length];
     
}
console.log(getTwoLengths("GoodMorning","Hello"));

// *******************************************F. getMultipleLengths***************************************************************/

// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. 
// The function should return an array of numbers where each number is the length of the corresponding string.
let s = "";
function getMultipleLengths(arg1)
{   
    let arrayOfStrings = arg1;
    arg1.forEach(element => 
        s+=(element.length)+ " ");   
        console.log(s);
}
getMultipleLengths(["hello", "what", "is", "up", "dude","pepper"]);

// ******************************** G. maxOfThree ************************************************************************************/
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. 
// If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. 
// Be sure to test it with larger values in each of the three locations.
function maxOfThree(num1,num2,num3)
{
    if ((num1 > num2) && (num1 > num3))
        return num1;
    else if (num2 > num3) 
        return num2;
    else return num3;
}
console.log(maxOfThree(10000,2500,200));

//*************************************** * H. printLongestWord *********************************************************************/
// Write a function printLongestWordthat accepts a single argument, an array of strings. 
// The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
function printLongestWord(strArray)
{    
    let longstring = "";
    strArray.forEach((stringInput)=>
    {
        if (longstring.length < stringInput.length) 
            longstring = stringInput;        
    });
    return longstring;    
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Peanutbutter","MaxandRubyTVshow","big", "Todd"]));