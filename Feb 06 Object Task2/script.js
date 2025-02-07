// 1. Use Object.create() Create a base object shape = { color: "blue" }. Use Object.create() to create a new object circle with a radius property, inheriting color from shape.
console.log("Task 1 : Inheriting color from shape");
 const shape = {
    color : "blue"
 }
 const circle = Object.create(shape);
 circle.radius = "25";
 console.log(`Color : ${circle.color}`);
 console.log(`Radius : ${circle.radius}`);
 
 
//  2. Iterate Over Object Properties Given the object student = { name: "John", grade: "A", age: 20 }, use a for...in loop to log all properties and their values. 
console.log("Task 2 : Iterate all properties using for in loop");
let student = {
    name : "John",
    grade : "A",
    age : 20
}
for(let iterateObject in student){
    console.log(student + ":" + student[iterateObject]);
}

//  3. Delete Object Properties Create an object movie = { title: "Inception", director: "Nolan", year: 2010 }. Delete the director property and log the updated object.
console.log("Task 3 : Delete the Director Property");
let movie = {
    title : "Inception",
    director : "Nolan",
    year : 2010
}
console.log(movie);
delete movie.director;
console.log(movie);


//  4. Check for Property Existence Given the object employee = { id: 123, name: "Alice" }, check if the property name exists in the object and log the result.
console.log("Task 4 : Check the property name exist or not");
let employee = {
    id : 123,
    name : "Alice"
}
let emp = Object.create(employee)
console.log(employee.isPrototypeOf(emp));



// 5 . Merge Objects Create two objects address = { city: "San Francisco", state: "CA" } and contact = { phone: "123-456-7890", email: "example@example.com" }. Merge them into a new object profile.
console.log("Task 5 : Merging two objects");
let address = {
    city : "San Francisco",
    state : "CA"
}
console.log(address);
let contact = {
    phone : 123-456-7890,
    email : "example@example.com"
}
console.log(contact);
let concatObject = Object.assign(address,contact);
console.log(`Merge Object : ${concatObject}`);


//  6. Object Constructor Write a constructor function Person(name, age) that creates objects with name and age properties. Create two instances and log them. 
console.log("Task 6 : Creating object using constructor function");
function Person(name,age){
    this.name = name;
    this.age = age
}
let firstPerson =new Person("Mugunthan",21);
let secondPerson =new Person("Sakthi",21);
console.log(firstPerson);
console.log(secondPerson);


//  7. Add a Property Using Bracket Notation Given the object car = { make: "Toyota" }, add a model property using bracket notation and assign a value to it. 
console.log("Task 7 : Add property using bracket Notation");
let car = {
    make : "Toyota"
}
console.log(car);
car['model'] = 2024;
console.log("Adding model property :",car);


//  8. Clone an Object Given the object original = { key: "value" }, create a shallow copy of this object using Object.assign() and log the copy.
console.log("Task 8 : Clone an object");
 let original = {
    name : "sakthi",
    age : 21,
    degree : "Bsc.CS"
 }
 console.log("Original",original);
 
 let clone = Object.assign(original);
 console.log("Clone",clone);
 

//  9. Use Object.keys() to List Properties Create an object user = { name: "Bob", age: 30, occupation: "Developer" }. Use Object.keys() to get an array of property names and log it.
console.log("Task 9 : List the Properties with key()");
let user = {
    name : "Bob",
    age : 30,
    occupation : "Developer"
}
console.log(user);
console.log(Object.keys(user));


//  10. Define a Read-Only Property Create an object settings = { theme: "dark" }. Define a read-only property version with the value "1.0" using Object.defineProperty(). 
console.log("Task 10 : Read-Only Property");
let setting = {
    theme : "Dark"
}
Object.freeze(setting);
console.log(setting);
setting.date=21;
console.log(setting);

//  11. Add and Remove Methods Create an object calculator with a method add that adds two numbers. Later, remove the add method from the object and verify it. 
console.log("Task 11 : Add and Remove Methods");
let calculator = {
    number1 : 10,
    number2 : 20,
    add : function(){
        return(this.number1+this.number2)
    }
}
console.log(calculator);
console.log("Added value :",calculator.add());
let deleted = delete calculator.add
console.log(calculator);

//  12. Create Nested Objects Create an object library with a property books that is an array of objects, each representing a book with title and author.
console.log("Task 12 : Creating a Nested Objects");
let books = [
    {title : "HTML",author: "aaa"},
    {title : "CSS",author : "bbb"},
    {title : "JAVASCRIPT",author : "ccc"}
]
console.log(books);

//  13. Use a Prototype Method Create a base object animal with a method makeSound. Create a dog object that inherits from animal and override makeSound to log "Woof!". 
console.log("Task 12 : Use a Prototype Method");
let animal = {
    makeSound : function(){
        return "Woof!";
        
    }
}
let dog = {}
Object.setPrototypeOf(dog,animal)
console.log(dog.makeSound());

//  14. Use Object.values() Given the object student = { name: "Alice", grade: "A", age: 21 }, use Object.values() to get an array of values and log it.
console.log("Task 14 : Get the property Values");
let students = {
    name : "Alice",
    grade : "A",
    age : 21
}
console.log(students);
console.log(Object.values(students));
