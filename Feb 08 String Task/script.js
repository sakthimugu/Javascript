// Task 1 : Concatenate Two Strings  Description: Concatenate two strings, "Hello" and "World", with a space between them.  Expected Output: "Hello World" 
console.log("Task 1 : Concatenate Two String");
 let firstString = "Hello";
 let secondString = "World";
 let concatenate = firstString.concat(" ",secondString);
 console.log(`1.${firstString} 2.${secondString}`);
 console.log(`Concatenation : ${concatenate}`);
 
// Task 2 : Find the Length of a String  Description: Find the length of the string "JavaScript".  Expected Output: 10 
console.log("Task 2 : Find the length of the string");
let stringLength = "JavaScript";
console.log(`Length of Javascript : ${stringLength.length}`);

//  Task 3 : Extract a Substring  Description: Extract the word "World" from the string "Hello, World!".  Expected Output: "World" 
console.log("Task 3: Extract a substring");
let sampleString = "Hello, World!"
console.log(`Given String : ${sampleString}`);
let extractString = sampleString.slice(7,12);
console.log(`Extract string : ${extractString}`);


//  Task 4 : Convert a String to Uppercase  Description: Convert the string "javascript" to uppercase.  Expected Output: "JAVASCRIPT" 
console.log("Task 4 : Convert a string to Uppercase");
let givenString = "Javascript"
console.log(`Given String : ${givenString}`);
let convertedString = givenString.toUpperCase();
console.log(`Converted String : ${convertedString}`);


//  Task 5 : Check if a String Contains a Substring  Description: Check if the string "I love coding" contains the substring "love".  Expected Output: true 
console.log("Task 5 : Check String contains Substring");
let sentence = "I love coding"
console.log(`Given String : ${sentence}`);
let checkString = sentence.includes('love');
console.log(`String contain love word : ${checkString}`);


//  Task 6 : Replace a Substring  Description: Replace "World" with "JavaScript" in the string "Hello, World!".  Expected Output: "Hello, JavaScript!"
console.log("Task 6 : Replace a Substring");
let sample = "Hello World!"
console.log(`Given String : ${sample}`);
let replaceString = sample.replace('World','Javascript');
console.log(`Replaced String : ${replaceString}`);



//  Task 7 : Trim Whitespace  Description: Trim the leading and trailing whitespace from the string " Hello, World! ".  Expected Output: "Hello, World!"
console.log("Task 7 : Triming the White Spaces");
let whiteString = " Hello, World! "
console.log(`Given String : ${whiteString}, Length : ${whiteString.length}`);
let correctString  = whiteString.trim();
console.log(`Removed Space : ${correctString}, Length : ${correctString.length}`);


//  Task 8 : Split a String into an Array  Description: Split the string "apple,banana,cherry" into an array of fruits.  Expected Output: ["apple", "banana", "cherry"] 
console.log("Task 8 : Split a string into array");
let given = "apple,banana,cherry";
console.log(`Given String : ${given}`);
let splitString = given.split(`,`);
console.log("Split string :",splitString);



//  Task 9 : Repeat a String  Description: Repeat the string "Ha!" three times.  Expected Output: "Ha!Ha!Ha!" 
console.log("Task 9 : Repeat a given string 3 times");
let repeatGiven = "Ha!";
console.log(`Given String : ${repeatGiven}`);
let repeatString = repeatGiven.repeat(3);
console.log(`Repeating string : ${repeatString}`);


//  Task 10 : Check the First Character of a String  Description: Check if the first character of the string "JavaScript" is "J".  Expected Output: true
console.log("Task 10 : CHeck the first character is J or not");
console.log(`Given String : ${givenString}`);
let checkCharacter = givenString.
startsWith("J");
console.log(`Checking the Given String start with J : ${checkCharacter}`);
