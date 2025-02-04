// 1. Create a Simple Object Create an object car with properties make, model, and year. Assign values to these properties and log the object. 

console.log("Task 1 : Create a simple object");
let car = {
    carName : "Audi",
    carModel : "R8",
    carYear : 2018
}
console.log(car);

//  2. Access Object Properties Given the object user = { name: "Alice", age: 25, city: "New York" }, access and log each property individually. 

console.log("Task 2 : Accessing a Object Properties");
let user = {
    name : "Alice",
    age : 25,
    city : "New York"
}
console.log("Dot Notation");
console.log(`Name : ${user.name}`);
console.log(`Age : ${user.age}`);
console.log(`City : ${user.city}`);

console.log("Bracket Notation");
console.log(`Name : ${user['name']}`);
console.log(`Age : ${user['age']}`);
console.log(`City : ${user['city']}`);

//  3. Modify Object Properties Start with the object book = { title: "1984", author: "George Orwell" }. Add a year property and update the author property.

console.log("Task 3 : Add & update year the author property");

console.log("Dot Notation");
let book = {
    title : 1984,
    author : "George Orwell"
}
console.log(book);
book.year=2023;
book.author="Yatvin";
console.log(book);

console.log("Bracket Notation");

let books = {
    title : 1984,
    author : "George Orwell"
}
console.log(books);
books['year'] = 2020;
books['author'] = "Viyona"
console.log(book);

//  4. Add Methods to Objects Create an object person with properties firstName and lastName. Add a method fullName that returns the full name of the person.
console.log("Task 4 : Return the full name");

let person = {
    firstName : 'Mugunthan',
    lastName : 'Sakthi',
    fullName : function(){
        return (this.firstName+ " " +this.lastName)
    }
}
console.log(`Dot Notation : ${person.fullName()}`);
console.log(`Bracket Notation : ${person['fullName']()}`);
