const select_container = document.querySelector('.row')

//left-div
const first_child = document.createElement('div');
first_child.setAttribute('class','left');
first_child.innerHTML=`
<img src="./assets/images/about-image.webp">`
select_container.append(first_child);


//right-div
const second_child= document.createElement('div');
second_child.setAttribute('class','right');
second_child.innerHTML=`<h3>How Jobpath Works</h3>
<p class="sub_1">From entry-level positions to executive roles browse through.`;
select_container.append(second_child)

//right-div-list
const list = document.createElement('div');
list.setAttribute('class','listed')
second_child.append(list)
console.log(select_container);

const list_items = [
    {id:1, img_src : "./assets/images/create.svg", content_head: "Create a Free Account", content_para:"Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum."},
    {id:2, img_src : "./assets/images/khata.svg",content_head: "Make Your Resume Amazing",content_para:"Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum."},
    {id:3, img_src : "./assets/images/apply.svg",content_head: "Apply job",content_para:"Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum."},
]

const iteration = list_items.map((items)=>{
const parent = document.createElement('div');
parent.setAttribute('class','container-1')
list.append(parent);
const child_1 = document.createElement('div');
child_1.setAttribute('class','card_logo')
child_1.innerHTML=`
<img src=${items.img_src} class="card-logoo">`
parent.append(child_1);
const child_2 = document.createElement('div');
child_2.setAttribute('class','card_details');
child_2.innerHTML=`<h6>${items.content_head}</h6>
<p>${items.content_para}</p> `
parent.append(child_2);
})
