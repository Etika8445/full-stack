// Product Controller - It is a Glue B/w View and Model
// Controller - I/O View Layer

import productOperations from "../services/product-operations.js";

// Data Exchange B/w View and Model.
async function loadPizzas(){
    const pizzas = await productOperations.loadProducts();
    console.log('Pizzas are ', pizzas);
    for(let pizza of pizzas){
        preparePizzaCard(pizza);
    }
}
loadPizzas();

/*
 <div id="output" class="col-4">
                  <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  </div>
*/

function addToCart(){
  // this - keyword (Current calling object reference)
  console.log('Add to Cart Called...', this);
  const currentButton = this;
  const pizzaId = currentButton.getAttribute('product-id');
  console.log('Pizza Id is ', pizzaId);
  productOperations.search(pizzaId);
  printBasket();
}
let total=0;
let count=0;
function printBasket(){
  const cartProducts = productOperations.getProductsInCart();
  const basket = document.querySelector('#basket');
  basket.innerHTML = '';
  for(let product of cartProducts){
      const li = document.createElement('li');
      li.innerText = `${product.name} ${product.price}`;
      count++;
      total+=product.price;
      basket.appendChild(li);
  }
  totalAmount();
}
function totalAmount(){
    const total = document.querySelector('#total');
    const colD = document.createElement('div');
    colD.className = 'card';
    const h2= document.createElement('h2'); 
    h2.innerText=`Total Pizza:`;
    colD.appendChild(h2);
    const span1= document.createElement('span');
    span1.innerText=`${count}`;
    colD.appendChild(span1);
    const H2= document.createElement('h2'); 
    H2.innerText=`Total Pizza:`;
    colD.appendChild(H2);
    const span2= document.createElement('span');
    span2.innerText=`${total}`;
    colD.appendChild(span2);
}

function preparePizzaCard(pizza){
    const outputDiv = document.querySelector('#output');
    const colDiv = document.createElement('div');
    colDiv.className = 'col-4';
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style = "width: 18rem;";
    colDiv.appendChild(cardDiv);
    const img = document.createElement('img');
    img.src = pizza.url;
    img.className = 'card-img-top';
    cardDiv.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardDiv.appendChild(cardBody);
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = pizza.name;
    const pTag = document.createElement('p');
    pTag.className = 'card-text';
    pTag.innerText = pizza.desc;
    const button = document.createElement('button');
    button.setAttribute('product-id', pizza.id);
    button.addEventListener('click', addToCart);// Event Bind
    button.innerText = 'Add to Cart';
    button.className = 'btn btn-primary';
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(button);
    outputDiv.appendChild(colDiv);
}





/*//controller- I/O view layer
//data exchange between view and model.

import productOperations from "../services/product-operations.js";

//data exchange betwwen view and model
async function loadpizzas(){
    const pizza= await productOperations.loadProducts();
    console.log('pizza are', pizza);
    const rowdiv= document.getElementById('loaddata');
    let pizzalen= pizza.length;
    for (let index = 0; index < pizzalen; index++) {
        const col = document.createElement('div');
        col.classList.add('col-4');
        col.innerHTML=`
        <div class="card">
            <img src="${pizza[index].url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${pizza[index].name}</h5>
                <p class="card-text">${pizza[index].desc}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `;++0
        rowdiv.appendChild(col);
    }
}
loadpizzas();

function addpizzatocart(){
    const pizzaid=this.getAttribute('product-id');
    console.log("current button clicked",pizzaid);
    const pizza= productOperations.searchProducts(pizzaid);
    console.log('pizza',pizza);
    pizza.isaddedincart=!pizza.isaddedincart;
    if(pizza.isaddedincart){
        this.className='btn btn-danger';
        this.innertext='remove from cart';
        productOperations.addtocart(pizza);
    }
    else{
        this.className='btn btn-primary';
        this.innerText='add to cart';
        productOperations.removefromcart(pizza);
    }
    printcart();
}

function totalsummary(){}


function preparepizzaCard(){
    const outputdiv=document.querySelector("#output");
    const coldiv=document.createElement('div');
    coldiv.className='col-4';
    const carddiv=document.createElement('div');
    carddiv.className='card';
    carddiv.style="width: 18rem";
    coldiv.appendChild(carddiv);
    const img= document.createElement('img');
    img.src='';
    img.className='card-img-top';
    carddiv.appendChild(img);
    const cardbody= document.createElement('div');
    cardbody.className='card-body';
    carddiv.appendChild(cardbody);
    const h5=document.createElement('h5');
    h5.className='card-title';
    h5.innerText=pizza.name;
    const ptag=document.createElement('p');
    ptag.className='card-text';
    ptag.innerText=pizza.desc;
    const button=document.createElement('button');
    button.setAttribute('product-id',pizza.id);
    button.addEventListener("click",addpizzatocart);
    button.innerText='add to cart';
    button.className='btn btn-primary';
    cardbody.appendChild(h5);
    cardbody.appendChild(ptag);
    cardbody.appendChild(button);
    cardbody.appendChild(coldiv);
    return outputdiv;

}*/