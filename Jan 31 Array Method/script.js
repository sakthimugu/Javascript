let fruits = ["Apple","Banana","Orange"];
console.log(`Array : ${fruits}`);

//task 1 
console.log("Task 1 : Add Mango in end of the array : ");
fruits.push("Mango");
console.log(fruits);

//task 2
let task2 = ["Apple","Banana","Orange"];
console.log("Task 2 : Remove orange in array : ");
task2.pop();
console.log(task2);

//task 3
let task3 = ["Apple","Banana","Orange"];
console.log("Task 3 : Add Pineapple beggining of the fruits array :");
task3.unshift("Pineapple");
console.log(task3);

//task 4
let task4 = ["Apple","Banana","Orange"];
console.log("Task 4 : Remove Apple from the fruits array :");
task4.shift();
console.log(task4);

//task 5
let task5 =  ["Apple","Banana","Orange"];
console.log("Task 5 : Extract first two elements in array :");
for(i=0;i<2;i++){
    console.log(fruits[i]);   
}

//task 6
console.log("Task 6 : Replace Banana with Strawberry in array :");
let task6 = ["Apple","Banana","Orange"];
console.log(task6);
task6.splice(1,1,"Strawberry");
console.log(task6);

//task 7
console.log("Task 7 : Reverse an array elements : ");
let task7 = ["Apple","Banana","Orange"];
console.log(task7);
task7.reverse();
console.log(task7);

//task 8
console.log("Task 8 : Sort the fruits array alphabetically : ");
let task8 = ["Orange","Banana","Mango","Apple"];
console.log(task8);
task8.sort();
console.log(task8);

//task 9 
console.log("Task 9 : Copywithin the elements in array :");
let task9 = [1,2,3,4,5,6,7,8,9];
console.log(task9);
task9.copyWithin(3,6,8);
console.log(task9);

//task 10
console.log("Task 10 : Fill 0 values in array elements : ");
let task10 = [1,2,3,4,5];
console.log(task10);
task10.fill(0,2,4);
console.log(task10);





