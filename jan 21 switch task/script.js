//Switch Task

//task 1 Calculate discount on Membership level
console.log("Membership Level");
let membershipLevel = 2;

switch(membershipLevel){
    case 1:
        level = "Bronze";
        discount = "6%";
        break;
    case 2:
        level = "Silver";
        discount = "10%";
        break;
    case 3:
        level = "Gold";
        discount = "16%";
        break;
    case 4:
        level = "Platinum";
        discount = "20%"
    default:
        console.log("Please activate your membership");   
}
console.log("Your Membership Level was",level,"& Discount was",discount);

//task 2 Season Based on Month
console.log("Weather");
let month = 5;

switch(true){
    case month <= 3:
        climate = "monsoon";
        break;
    case month >= 3 && month <= 6:
        climate = "summer";
        break;
    case month >= 6 && month <= 9:
        climate = "rainy";
        break;
    case month >= 9:
        climate = "winter";
        break;
    default:
        console.log("Please enter a month in number");        
}
console.log("The climate for",month,"is",climate);

//task3 Deetermine the wheels
console.log("Number of Wheels");
let wheels = 2;

switch (wheels) {
   case 2:
    console.log("It has 2 wheels & The vehicle was Bicycle & Motorcycle");
    break;

    case 4:
    console.log("It has 4 wheels & The vechicle was car");
    break;

    case 8:
    console.log("It has 8 wheels & The vechicle was truck");
    break;

    default:
        console.log("Please enter the number of  wheels"); 
}

//task4 Menu Selection 
console.log("Menu Selection in Restaurant");
let menuTime = "lunch"

switch(menuTime){
    case "breakfast":
        console.log("The breakfast are idly,poori,pongal,vadai,dosai");
        break;

    case "lunch":
        console.log("The lunch are rice,sambar,tomato rice,etc....");
        break;

    case "dinner":
        console.log("The dinner are dosa,parotta,chicken rice,chappathi...etc");
        break;

    default:
        console.log("Please select the menuTime");
}

//task5 Day of the week planner
console.log("Week Planner");
let weekPlanner = "Friday";

switch(weekPlanner){
    case "Monday":
        console.log("The Monday Plan was seeing ooty");
        break;

     case "Tuesday":
        console.log("The Tuesday Plan was seeing chennai");
        break;

     case "Wednesday":
        console.log("The Wednesday Plan was seeing Coimbatore");
        break;

     case "Thursaday":
        console.log("The Thursday Plan was seeing Kerala");
        break;

     case "Friday":
        console.log("The Friday Plan was seeing Wonderla");
        break;

     case "Saturday":
        console.log("The Saturday Plan was Returning Home");
        break;

    case "Sunday":
        console.log("The Sunday Plan was taking Rest");
        break;
    
    default:
        console.log("THere is no plan");
        
}


//task6 Student Mark Score card
console.log("Student Score card");
let mark = 60;
switch(true){
    case mark>=35 && mark<=50:
    grade = "E";
    break;

    case mark>=51 && mark<=60:
    grade = "D";
    break;
    
    case mark>=61 && mark<=70:
    grade = "C";
    break;

    case mark>=71 && mark<=80:
    grade = "B";
    break;
    
    case mark>=81 && mark<=100:
    grade = "A";
    break;

    case mark<35:
    grade = "fail"
    break;

    default:
    console.log("Please enter a mark");
    
}
console.log('The student mark was',mark,"& it was",grade,"grade");



//Nested If Task

//task 7 Eligibility checking
console.log("Eligibility Checking");
let income = 70000;
let cibil = 200;
if(income>=70000){
    if(cibil>=150){
        console.log("Loan Approved");
    }
    else if(cibil>=130 || cibil<150){
        console.log("Your Cibil was slightly low");
        
    }
    else{
        console.log("Your Cibil was too low so loan not eligible");
        
    }
}
else{
    console.log("Your Salary was too low so your not eligble");
    
}


//task 8 Access Control
console.log("Access Control : ");
var user = "editor";
var editor = "premium";

if(user=="admin"){
    console.log("Your eligible to access all settings");
}
else if(user=="editor"){
    if(editor=="premium"){
        console.log("Your level was premium so you can access premium settings");  
    }
    else if(editor=="basics"){
        console.log("Your level was basics so you can basics premium settings"); 
    }
    else{
        console.log("Please renew your subscription");
        
    }
}
else if(user=="viewer"){
    console.log("Your role is viewer so you can only view the settings");
    
}
else{
    console.log("your not allowed so Access Denied");    
}

//task9 Student Grade  (22/1)
console.log("Student Grade");
let marks = 34;
if(marks>=35 && marks<=100){
    if(marks>=81 && marks<=100){
        console.log("The grade was A");
    }
    else if(marks>=71  && marks<=80){
        console.log("The grade was B");
    }
    else if(marks>=61 &&  marks<=70){
        console.log("The grade was C");
    }
    else if(marks>=51 && marks<=60){
        console.log("The grade was D");
    }
    else{
        console.log("The grade was E");
    }
}
else if(marks<=34){
    console.log("The grade was FAIL");
}
else{
    console.log("enter a valid marks");  
}

//TASK10 User Role Authorization (22/1)
console.log("User Role Authorization");
var userRole = "gamer";
var userLevel = "";
if(userRole == "admin"){
    console.log("All access available and no authorization needed");
}
else if(userRole=="gamer"){
    if(userLevel=="gold"){
        console.log("Your membership was gold so you can play any games");
    }
    else if(userLevel=="silver"){
        console.log("Your membership was silver so you can play only 20games");
    }
    else if(userLevel=="bronze"){
        console.log("Your membership was bronze so you can play only 7games");
    }
    else{
        console.log("Please renew your membership and get authorization from admins");
    }
}
else if(userRole=="viewer"){
    console.log("you role was viewer so you can only view the website");
}
else{
    console.log("Access Denied & Role Authorization needed");
    
}
