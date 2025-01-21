//task1 Leap Year
console.log("LeapYearCheck Task : ");
let year = 2005;
if(year%400==0){
    console.log(year,"is leap year");
}
else if(year%100==0 && year%400!==0){
    console.log(year,"is not leap year"); 
}
else if(year%4==0 && year%100!==0){
    console.log(year,"is leap year");
}
else{
    console.log(year,"is Not leap year");
}

//task2 Calculate simple interest
console.log("Calculate Simple Interest :");

let p = 10000;
let t = 5;
if(p<=10000){
    interest = p*10/100;
    siAmount = interest*t;
    totalValue = siAmount+p
}
else if(p<=20000){
    interest = p*15/100;                        //cleared
    siAmount = interest*t;
    totalValue = siAmount+p
}
else if(p<=30000){
    interest = p*20/100;
    siAmount = interest*t;
    totalValue = siAmount+p
}
else{
        interest = p*25/100;
        siAmount = interest*t;
        totalValue = siAmount+p
}
console.log("The rate of interest",siAmount);
console.log("The Final Amount",totalValue);


//task 3 ODDEVEN with Range
console.log("Odd or Even with range :");
let givenNumber = 10;
if(givenNumber<1 || givenNumber>=100){
    console.log("Outside range");
}
else if(givenNumber%2==0){
   console.log(givenNumber,"is even");
}
else{
    console.log(givenNumber,"is odd");  
}


//task4 Number Category
console.log("Number Category :");
let number = 100;
if(number>100){
    console.log(number,"is positive number");
}
else if(number>=1 && number<=100){
    console.log(number,"is positive number");
}
else if(number == 0){
    console.log(number,"is zero");
}
else{
    console.log(number,"is negative number");
}


//task5 Discount Calculator
console.log("Discount Calculator :");
let amount = 6000;
if(amount>=5000){
    discount = amount*10/100;
    total = amount - discount;
}
else if(amount>=2000 && amount<=5000){          //cleared
    discount = amount*5/100;
    total = amount - discount;
}
else{
    console.log("No discount");
}
console.log("The discount amount for",amount,"is",discount);
console.log("The final amount is",total);



//task6 ODDEVEN
console.log("Check Odd or Even");
let num = 5;
if(num%2==0){
    console.log(num,"is even");
}
else{
    console.log(num,"is odd");
}


//task7 User Autentication
console.log("User Authentication :");
let user = "viewer";
if(user=="admin"){
    console.log(user,"has all access");
}
else if(user=="editor"){
    console.log(user,"has only access for edit");
}
else if(user=="viewer"){
    console.log(user,"has only access for view");
}
else{
    console.log("Not a user and Access denied");
}


//task8 Product Stock Management
console.log("Product Stock Management : ");
let product = 100;
if(product>=100){
    console.log("A blenty of stock available");
}
else if(product>=1 && product<100){
    console.log("Limited stock only available");
}
else{
    console.log("Out of stock");
}


//task9
console.log("Electricity Bill : ");
let unit = 500;
if(unit<=100){
    amt = unit*1.5;
}
else if(unit<=300){                                     //cleared
    amt = (100*1.5)+(unit-100)*2.5;
}
else{
    amt = (100*1.5)+(200*2.5)+(unit-300)*3.5;
}
console.log("Electricity bill for",unit,"is",amt);



//task10 Divisible by 2,3 or both
console.log("Divisible by 2,3 or both : ");
let value = 4;
if(value%2==0 && value%3==0){
    console.log(value,"is divisible by 2&3");
}
else if(value%3==0){
    console.log(value,"is divisible by 3");
}
else if( value%2==0){
    console.log(value,"is divisible by 2");
}
else{
    console.log("not a number");
}


//task11 Calculate Tax
console.log("Calculate Tax : ");
let salary = 300000;
if(salary>200000 && salary<=400000){
    tax = salary*3/100;
    final = salary-tax;
}
else if(salary>=400000 && salary<=600000){
    console.log("20% was salary tax");
    tax = salary*5/100;
    final = salary-tax;                                 //cleared
}
else if(salary>=600000){
    console.log("30% was salary tax");
    tax = salary*7/100;
    final = salary-tax;
}
else{
    console.log("No tax");  
}
console.log("The tax amount for",salary,"is",tax);
console.log("The salary amount was",final);




//task12 Simple Calculator
console.log("Arithmetic Calculator : ");
let userInput = "Add"
let a = 10;
let b = 20;
if(userInput=="Add"){
    console.log("Addition",a+b);  
}
else if(userInput=="Sub"){
    console.log("Subraction",a-b);
}
else if(userInput=="Multiply"){
    console.log("Multiply",a*b);
}
else if(userInput=="Divide"){
    console.log("Divide",a/b);
}
else{
    console.log("Select a calculation method");
}


//task13 Number Comparison
console.log("Compare two numbers :");
let num1 = 10;
let num2 = 20;
if(num1==num2){
    console.log("Values are equal");
}
else if(num1>num2){
    console.log("Number 1 was greater than Number 2");
}
else{
    console.log("Number 2 was greater than Number 1");
}


//task14 Traffic Light Simulator
console.log("Traffic Light Simulator : ");
let signal = "red"
if(signal=="red"){
    console.log("Stop the vehicles");
}
else if(signal=="yellow"){
    console.log("Get ready");
}
else if(signal=="green"){
    console.log("Go");
}
else{
    console.log("Signal lost");
    
}


//task15 Shape Identifier
console.log("Shape Identifier : ");
let sides = 3;
if(sides==3){
    console.log("There are 3 sides so its triangle");
}
else if(sides==4){
    console.log("There are 4 sides so its Quadrilateral");
}
else if(sides==5){
    console.log("There are 5 sides so its Pentagon");
}
else{
    console.log("The shape was unknown");
}