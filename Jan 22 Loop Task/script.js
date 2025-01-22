//For loop

//task1 Numbers from 1 to 10
console.log("Task 1 :");
let num = 1;
for(num;num<=10;num++){
    console.log("The numbers are",num);
}

//task2 Even Numbers from 1 to 20
console.log("Task 2 : ");
let num1=1;
for(num1;num1<=20;num1++){
    if(num1%2==0){
        console.log("The Even numbers are",num1);
    } 
}

//task3 Odd Numbers from 1 to 20
console.log("Task 3 : ");
let num2=1;
for(num2;num2<=20;num2++){
    if(num2%2!==0){
        console.log("The Odd numbers are",num2);
    } 
}


// task4 Sum of Numbers from 1 to 10
console.log("Task 4 : ");
let start = 0;
let sum = 10;
for(let i=0;i<=sum;i++){
    start = start+i;
}
console.log("The sum of",sum,"is",start);

//task5 Factorial Number
console.log("Task 5 :");
let factorial = 1;
let givenFact = 6;
for(a=1;a<=givenFact;a++){
    factorial = factorial*a;   
}
console.log("The Factorial Number",givenFact,"is",factorial);

//task6 Multiplication table of 5
console.log("Task 6 : ");
let k = 1;
let givenTable = 10;
for(k;k<=givenTable;k++){
    table = k*5;
    console.log(`${k}*5=${table}`);
}


// task7 Fibonacci Series




//task8 Print Numbers from 10 to 1
console.log("Task 8 :");
let reverse = 10;
for(reverse;reverse>=1;reverse--){
    console.log("The Numbers are",reverse);
}

//task9 Prime Numbers
// console.log("Task 9 :");
// let prime = 1;
// let givennumber = 10;
// for(prime;prime<=givennumber;prime++){
//     if(prime%1==0 && prime%prime==0){  //doubt
//         console.log(prime);
//     }
// }


//task 10 Print numbers from 1 to 100
console.log("Task 10 : ");
let z = 1;
for(z;z<=100;z++){
    if(z%3!==0){
        console.log("The numbers are",z);  
    }
}



//While loop
console.log("While Loop");
//task 1 Print Numbers from 1 to 10
let a1=1;
while(a1<=10){
    console.log("The numbers are",a1);
    a1++;
}

//task2 Print even numbers from 1 to 20
console.log("Task 2 :");
let b1=1;
while(b1<=20){
    if(b1%2==0){
        console.log("The numbers are",b1);
    }
    b1++;
}

//task3 Print odd numbers from 1 to 20
console.log("Task 3 :");
let c1=1;
while(c1<=20){
    if(c1%2!==0){
        console.log("The numbers are",c1);
    }
    c1++;
}

// task5 Sum of Numbers from 1 to 10
console.log("Task 4 : ");
let d1 = 0;
let d2 = 10;
let d3 = 0;
while(d3<=d2){
    d1=d1+d3;
    d3++;
}
console.log("The sum of",d2,"is",d1);

//task5 Factorial of a number
console.log("Task 5 :");
let e1 = 1;
let e2 = 6;
let e3 = 1;
while(e3<=e2){
    e1=e1*e3;
    e3++;
}
console.log("The Factorial of",e2,'is',e1);


