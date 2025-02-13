const products = [
  { id: 1, product_name: "One", img_src: "assets/images/1.png", price: "2000", buy: "Add to Cart" },
  { id: 2, product_name: "Two", img_src: "assets/images/6.png", price: "4000", buy: "Add to Cart" },
  { id: 3, product_name: "Three", img_src: "assets/images/3.png", price: "6000", buy: "Add to Cart" },
  { id: 4, product_name: "Four", img_src: "assets/images/4.png", price: "2000", buy: "Add to Cart" },
  { id: 5, product_name: "Five", img_src: "assets/images/11.png", price: "8000", buy: "Add to Cart" },
  { id: 6, product_name: "Six", img_src: "assets/images/1.png", price: "10000", buy: "Add to Cart" },
  { id: 7, product_name: "Seven", img_src: "assets/images/8.png", price: "10000", buy: "Add to Cart" },
  { id: 8, product_name: "Eight", img_src: "assets/images/9.png", price: "10000", buy: "Add to Cart" },
  { id: 9, product_name: "Nine", img_src: "assets/images/4.png", price: "10000", buy: "Add to Cart" },
  { id: 10, product_name: "Ten", img_src: "assets/images/11.png", price: "10000", buy: "Add to Cart" },
  { id: 11, product_name: "Eleven", img_src: "assets/images/3.png", price: "10000", buy: "Add to Cart" },
  { id: 12, product_name: "Twelve", img_src: "assets/images/8.png", price: "10000", buy: "Add to Cart" },
  { id: 13, product_name: "Thirteen", img_src: "assets/images/1.png", price: "10000", buy: "Add to Cart" },
  { id: 14, product_name: "Fourteen", img_src: "assets/images/6.png", price: "10000", buy: "Add to Cart" },
  { id: 15, product_name: "Fifteen", img_src: "assets/images/8.png", price: "10000", buy: "Add to Cart" },
  { id: 16, product_name: "Sixteen", img_src: "assets/images/4.png", price: "10000", buy: "Add to Cart" },
  { id: 17, product_name: "Seventeen", img_src: "assets/images/1.png", price: "10000", buy: "Add to Cart" },
  { id: 18, product_name: "Eighteen", img_src: "assets/images/6.png", price: "10000", buy: "Add to Cart" },
  { id: 19, product_name: "Nineteen", img_src: "assets/images/9.png", price: "10000", buy: "Add to Cart" },
  { id: 20, product_name: "Twenty", img_src: "assets/images/11.png", price: "10000", buy: "Add to Cart" },

]
const first = document.querySelector('.product');
console.log(first);

const firsts = document.querySelector('.product');
let card_1 = products.map((card_first) => {
  let child = document.createElement('div');
  child.classList.add('cards');
  child.innerHTML = `
  <img src = ${card_first.img_src}>
  <h1 class="title"> ${card_first.product_name}</h1>
  <h3 class="amount">Price : &#8377 ${card_first.price}</h3>
  <button>${card_first.buy}</button>`
  firsts.append(child)
})
