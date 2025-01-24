//task 1 
console.log("Task 1 // Print array of an element");
let bikeCompany = ["1.Hero","2.TVS","3.Honda","4.Ducati","5.KTM","6.Kawaski"];
for(i=0;i<bikeCompany.length;i++){
    let bikes = bikeCompany[i];
    console.log(bikes);
}


//task 2
console.log("Task 2 // Print array in reverse");
for(j=bikeCompany.length;j>0;j--){
    let biker = bikeCompany[j];
    console.log(biker);
}


//task3

console.log(("Task 3 // Maximum numbers in array"));
let values = [20,2,3,15,17,90,105,4,205];
let temp_Max = values[0];
console.log(values);
for(max=0;max<values.length;max++){
    if(values[max]>temp_Max){ 
        temp_Max=values[max];
    }
}
console.log(temp_Max);

//task 4 
console.log("Task 4 // Minimum numbers in array");
let temp_Min = values[0];
console.log(values);
for(min=0;min<values.length;min++){
    if(values[min]<temp_Min){
        temp_Min=values[min];
    }
}
console.log(temp_Min);


//task 5
console.log("Task 6 // Count digits in number");
console.log(values);
console.log(`The number of digits is ${values.length}`);

//task 6
console.log("Task 7 // Sum of digits in number");
console.log(values);
let temp_A = 0;
for(z=0;z<values.length;z++){
    let numbers = values[z];
    temp_A+=values[z]    
}
console.log(`The sum of digits is ${temp_A}`);


//task 7
console.log("Task 8 // Print all Elements of an object");
let obj = {
    Name : "Mugunthan",
    Age  : 21,
    Degree : "Bsc.Computer Science",
    Passed_Out: 2024,
    Role : "Full Stack Developer"
}
let obj_values = Object.entries(obj);
for(a=0;a<obj_values.length;a++){
    let object = obj_values[a];
    console.log(object);
}

//task 8
console.log("Task 9 // Fibonnaci Series using array");
let givenNumber = 10;
let Fibo = [0,1];
for(f=2;f<=givenNumber;f++){
    Fibo[f]=Fibo[f-1]+Fibo[f-2]; 
}
console.log(Fibo);
for(k=0;k<Fibo.length;k++){
    let Fibonnaci = Fibo[k];
    console.log(Fibonnaci);
}

