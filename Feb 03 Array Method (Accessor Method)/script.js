let fruits = ['apple','banana','graphes','mango','orange','oop'];
console.log("Given array : ",fruits);

//Task 1
console.log("Task 1 : Find the position of Banana");
console.log("The banana position is",fruits.indexOf('banana'));

//Task 2
console.log("Task 2 : Find graphes in array");
console.log(fruits.includes("graphes"));

//Task 3
console.log("Task 3 : Create a shallow copy of array");
console.log("The original array : ",fruits);
let fruitsCopy = [];
fruitsCopy = [...fruits];
console.log("The shallow copy array : ",fruitsCopy);

//Task 4
console.log("Task 4 : Combine another array element(Kiwi) to fruits array");
let fruit = ['kiwi','graphes'];
let combineArray = fruits.concat(fruit);
console.log("The combine array is : ",combineArray);

//Task 5
console.log("Task 5 : Extract first two elements from array");
let fruitSlice = fruits.slice(0,2);
console.log(fruitSlice);

//Task 6
console.log("Task 6 : Don't contain a letter fruits in array");
console.log(fruit);
let filterArray = fruit.filter((val)=>{
    return !val.includes('a');
})
console.log("Output : ",filterArray);

//Task 7
console.log("Task 7 : Iterate the array using foreach()");
let forEachArr = fruits.forEach((val)=>{
    console.log(val);
})

// Task 8
console.log("Task 8 : Find Fruits has more than 3 character");
let FilterChar = fruits.filter((val)=>{
    return (val.length>3);
})
console.log(FilterChar);


//Task 9
console.log("Task 9 : Find fruits name start with letter O");
let fruit1 = fruits.filter((val)=>{
    return (val.startsWith('o'))           
});
console.log(fruit1);

//Task 10
console.log("Task 10 : Join all elements into a single string");
let fruitsss = fruit.concat(fruits);
let fruitString = fruitsss.join(",");
console.log(fruitString);

//Task 11
console.log("Task 11 : Remove second element banana from array");
fruits.splice(1,1);
console.log(fruits);


