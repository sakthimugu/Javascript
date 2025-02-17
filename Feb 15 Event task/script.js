const rootDiv = document.querySelector('.task');
console.log(rootDiv);

// // 1. How would you change the text content of a specific element on the page using 
// // JavaScript?
const task_1 = document.createElement('div');
task_1.setAttribute('class','task-1');
task_1.innerHTML = `<h1>Task 1</h1>
<h3 class="contentChange">Before Change</h3>`
rootDiv.append(task_1);
const contentChange = document.querySelector('.contentChange');
contentChange.textContent="After Change";

// // 2. How can you change the background color of a <div> element when a button is 
// // clicked?
const parentBox = document.createElement('div');
parentBox.classList.add('bgbox');
parentBox.innerHTML=`<h1>Task 2</h1>
<button class="colorChange">Click Here to change color</button>`
rootDiv.append(parentBox)
const colorChange = document.querySelector('.colorChange');
colorChange.addEventListener("click",(change)=>{
    const changeColor = document.querySelector('.bgbox');
    changeColor.style.background="blue";
})
console.log(parentBox);


// // 3. What steps would you take to toggle the visibility of a <p> element by adding and 
// // removing a CSS class using JavaScript?
// const task3 = document.createElement('div');
// task3.classList.add('toggletask');
// rootDiv.append(task3)
// const toggleButton = document.createElement('button');
// toggleButton.innerText="Toggle On & Off";
// task3.append(toggleButton);
// const togglepara = document.createElement('p');
// togglepara.classList.add('togglepara');
// task3.append(togglepara);
// togglepara.innerText="Toggle Para";
// toggleButton.addEventListener("toggle",(event)=>{
//     const toggleOn = document.querySelector('.togglepara');
//     if(event.newState==="open"){
//         console.log("hi");
        
//     }
//     else {
//         console.log("bye");
        
//     }
// })


// // 4. How can you dynamically add a new list item to an unordered list using 
// // JavaScript?
const task4 = document.createElement('div');
task4.classList.add('dynamicList');
rootDiv.append(task4);
const unorder = document.createElement('ul');
unorder.classList.add('lists');
task4.append(unorder);
const getInput = document.createElement('div');
getInput.innerHTML=`<input type="text" class="inputElement">
<button type="submit" class="submitBtn">Add</button>`
task4.append(getInput);
//adding list
const addButtons = document.querySelector('.submitBtn');console.log(addButtons);
addButtons.addEventListener('click',()=>{
    const getValues = document.querySelector('.inputElement');
    const items = document.createElement('li');
    unorder.append(items);
    items.append(getValues.value)
})

// // 5. What approach would you use to remove a specific list item from an unordered 
// // list when a button next to it is clicked?

// // 6. How would you modify the src attribute of an <img> element to display a 
// // different image when a button is clicked?
const task6=document.createElement('div');
task6.classList.add('task6')
rootDiv.append(task6);
const changeImage = document.createElement('img');
changeImage.setAttribute('src','images/1.png');
task6.append(changeImage)
const changeImageBtn = document.createElement('button');
changeImageBtn.classList.add('imgbtn');
changeImageBtn.innerText="Task 6 :Click here to change Image"
rootDiv.append(changeImageBtn);
changeImageBtn.addEventListener('click',()=>{
    changeImage.setAttribute('src','images/2.png')
})

// 7. How can you update the text content of a <p> element based on user input from a 
// text field when a button is clicked?
const task7 = document.createElement('div');
task7.classList.add('task7');
rootDiv.append(task7);
const tempPara=document.createElement('p');
tempPara.textContent="Hello";
task7.append(tempPara);
const textForm = document.createElement('div');
textForm.innerHTML=`
<input type="text" class="inputText">
<button type="submit" class="submitB">Click Here to Update</button>`
task7.append(textForm);
const updated = document.querySelector('.submitB');
updated.addEventListener('click',()=>{
    const letters = document.querySelector('.inputText');
    tempPara.textContent=`${letters.value}`
    
})
console.log(updated);


