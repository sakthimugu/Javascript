//task 1 
console.log("Task 1 // Add two numbers");
function addNumbers(a,b){
    console.log(`1: ${a}+${b}=${a+b}`);
    
}
addNumbers(10,20)

const AddNumbers = (c,d) =>{
    console.log(`2: ${c}+${d}=${c+d}`);
}
AddNumbers(5,13)

//task 2
console.log("Task 2 // Check odd or even");
function oddEven(even){
    if(even%2==0){
        console.log(`1: ${even} is even`);
        
    }
    else{
        console.log(`1: ${even} is odd`);
        
    }
}
oddEven(3);

const Oddeven = (Even) => {
    if(Even%2==0){
        console.log(`2: ${Even} is even`);
        
    }
    else{
        console.log(`2: ${Even} is odd`);
        
    }
}
Oddeven(5)

//task 3 
console.log("Task 3 // Maximum Two Numbers");
function maximun(firstValue,secondValue){
    if(firstValue>secondValue){
        console.log(`1: ${firstValue} is greater value`); 
    }
    else{
        console.log(`1: ${secondValue} is greater value`);
    }
}
maximun(30,20)

const maximum=(first,second)=>{
    if(first>second){
        console.log(`2: ${first} is greater value`); 
    }
    else{
        console.log(`2: ${second} is greater value`);
    }
}
maximum(15,7)

//task 4
console.log("Task 4 // Minimum Two Numbers");
function minimum(one,two) {
    if(one<two){
        console.log(`1: ${one} is smaller value`);
    }
    else{
        console.log(`2: ${two} is smaller value`);
    }
}
minimum(40,20);

const min=(first,second)=>{
    if(first<second){
        console.log(`2: ${first} is smaller value`); 
    }
    else{
        console.log(`2: ${second} is smaller value`);
    }
}
min(15,7)

//task 5
console.log("Task 5 // Concatenate String");
function concatenate(stringOne,stringTwo){
    console.log(`1: ${stringOne} + ${stringTwo} = ${stringOne + stringTwo}`);
}
concatenate("Hello","World")

const concat=(stringOne,stringTwo)=>{
    console.log(`2: ${stringOne} + ${stringTwo} = ${stringOne + stringTwo}`);
}
concat("Sakthi","Mugu")

//task 6
console.log("Task 6 // Calculate Factorial");
function factorial(givenFact){
    let fact = 1
    for(a=1;a<=givenFact;a++){
    fact = fact*a;
    }
    console.log(`1: The factorial value for ${givenFact} is ${fact}`);
}
factorial(6)

const factor = (GivenFact) =>{
    let Fact = 1
    for(b=1;b<=GivenFact;b++){
    Fact = Fact*b;
    }
    console.log(`2: The factorial value for ${GivenFact} is ${Fact}`);
}
factor(5)


//task 7 
console.log("Task 7 // Reverse a string");
function reverseString(){
    let stringValue = ['o','r','d','e','r'];
    for(i=stringValue.length-1;i>=0;i--){
        str = stringValue[i]
        console.log(`1: ${str}`);
    }
}
reverseString()

const reverseStr = () =>{
    let strValue = ['s','a','k','t','h','i'];
    for(j=strValue.length-1;j>=0;j--){
        Str = strValue[j]
        console.log(`2: ${Str}`);
    }
}
reverseStr()

//task 8 
console.log("Task 8 // Length of an array");
function arrayLength(){
    let values = [1,2,3,4,5,6,7,8];
    console.log(`1: The array length is ${values.length}`);
}
arrayLength();

const Arraylength = () => {
    let value = [1,2,3,4,5,6,7,8,9,10,11];
    console.log(`2: The array length is ${value.length}`);
    
}
Arraylength()

//task 9 
console.log("Task 9 // Celcius to Fahrenheit");
function fahrenheit(celcius){
    Fahren = celcius * 1.8 + 32;
    console.log(`1: ${Fahren} Fahrenheit`);
}
fahrenheit(35);

const Fahrenheit = (Celcius)=>{
    FAH = Celcius * 1.8 + 32;
    console.log(`2: ${FAH} Fahrenheit`);
}
Fahrenheit(30);

//task 10
console.log("Task 10 // Filter even numbers in array");
function filterEven(){
    let evenNumbers = [1,2,3,4,5,6,7,8,9,10];
    for(const evenNum of evenNumbers){
        if(evenNum%2==0){
            console.log(`1 : ${evenNum}`);
        }
    }
}
filterEven()

const filtereven = () => {
    let evennum = [1,2,3,4,5,6,7,8,9,10,11,12];
    for(const Num of evennum){
        if(Num%2==0){
            console.log(`2: ${Num}`);
        }
    }
}
filtereven()


