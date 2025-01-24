//task 1
console.log("Task 1 : Print an array element");
let cars = ['1.bmw','2.benz','3.bugati','4.lamborgini','5.lexus'];
for(const car of cars){
    console.log(car);
}

//task 2
console.log("Task 2 : Print an array element in reverse");
for(let Cars of cars){
    console.log(Cars);
}


//task 3
console.log("Task 3 : Find maximum number in array");
let values = [10,30,44,21,99,4];
let temp_Max = values[0];
for(const Maximum of values){
    if(Maximum>temp_Max){
        temp_Max=Maximum;
    }
}
console.log(values);
console.log(`The maximum number is ${temp_Max}`);

//task 4
console.log("Task 4 : Find minimum mumbers in array");
console.log(values);
let temp_Min = values[0];
for(const Minimum of values){
    if(Minimum<temp_Min){
        temp_Min=Minimum;
    }
}
console.log(`The minimum value is ${temp_Min}`);


//task 5
console.log("Task 5 : Count the digits in number");
console.log(values);
console.log(`The number of digits are ${values.length}`);

//task 6
console.log("Task 6: Sum of digits");
console.log(values);
let temp_Sum = 0;
for(const sum of values){
    temp_Sum+=sum;
}
console.log(`The sum of digits is ${temp_Sum}`);


//task 7 
console.log("Task 7 : Print all elements in objects");
let obj = {
    Name : "Mugunthan",
    Age : 21,
    Degree : 'Bsc.Computer Science',
    Role : 'Full Stack Developer'
}
for(const keys in obj){
    let val = obj[keys];
    console.log(keys,":",val);
     
}

//task 8 
console.log("Task 8 : Fibonnaci Series");
let fibonnaci = [0,1];
let givenNumber = 10;
for(fibo=2;fibo<=givenNumber;fibo++){
  fibonnaci[fibo]=fibonnaci[fibo-1]+fibonnaci[fibo-2];   
}
console.log(fibonnaci);
for(const Fibonnaci of fibonnaci){
    console.log("The Fibonacci values are",Fibonnaci);    
}
