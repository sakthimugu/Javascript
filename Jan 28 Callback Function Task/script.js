//task 1
console.log("Task 1 : Add two numbers");
function addNumber(a,b){
    return a+b;
}
console.log(`ADDITION : ${addNumber(5,5)}`);

//task 2
console.log("Task 2 : Default Parameters");
function greet(name){
    if(name=="guest"){
        console.log("Welcome");
    }
    else{
        console.log("Hello Guest");
        
    }
}
greet("guest")
greet("")

//task 3
console.log("Task 3 : Find Square Number");
const square = (c) => {
    return c*c;
}
console.log(`The square value is : ${square(6)}`);


//task 4
console.log("Task 4 : Largest of Three Numbers");
function findLargest(firstNum,secondNum,ThirdNum){
   if(firstNum>secondNum){
    console.log(`${firstNum} is largest`);
   }
   else if(secondNum>ThirdNum){
    console.log(`${secondNum} is largest`);
   }
   else{
    console.log(`${ThirdNum} is largest`);
   }
}
findLargest(1,3,7)

//task 5
console.log("Task 5 : Callback Function");
function add(one,two){
    let addition = one+two;
    console.log("Add :",addition);
    
}
function sub(f,s){
   let subraction=f-s;
   console.log("Sub :",subraction);
   
}
function performOperation(){
    add(5,5);
    sub(7,5);
}
performOperation()

//task 6
console.log("Task 6 : Area of Circle");
function calculateCircleArea(radius){
    return 3.14*radius*radius;
}
console.log(`Area of circle : ${calculateCircleArea(5)}`);

//task 7
console.log("Task 7 : Celcius to Fahrenheit");
function celciusToFahrenheit(celcius) {
    return celcius*9/5+32;
}
console.log(`Fahrenheit: ${celciusToFahrenheit(30)}`);

