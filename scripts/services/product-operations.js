// Contains the Logic for Fetching ,
// Adding, Sorting, Searching,
 // Deletion , Updation
 /*
  It talk to Network Layer to Bring the JSON, and
  convert JSON into Objects vice-versa

 */
  import Product from '../models/product.js';
  import makeNetworkCall from './api-clients.js';
  
  const productOperations = {
      products:[], // Key:value
      search(pizzaId){
          const product = this.products.
          find(currentProduct=>currentProduct.id==pizzaId);
          console.log('Product Found ', product);
          product.isAddedInCart = true;
          console.log('Array ', this.products);
      },
      getProductsInCart(){
          const productInBasket = this.products.filter(product=>product.isAddedInCart);
          return productInBasket;
      },
  
      async loadProducts(){
          const pizzas = await makeNetworkCall();
          const pizzaArray = pizzas['Vegetarian'];
          const productsArray = pizzaArray.map(pizza=>{
              const currentPizza = new Product(pizza.id, pizza.name,
                   pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url);
                  return currentPizza;
                  })
                  console.log('********Product Array ', productsArray);
                  this.products = productsArray;
                  return productsArray;  // Wrap in Promise
              },
      sortProducts(){
  
      },
      searchProducts(){
  
      }
  }
  export default productOperations;
  
  





// contains the logic for fetching,adding,sorting,searching
//deletion,updation
//talk too network layer to bring the JSON and
//convert JSON into Objects vice-versa

/*
import makeNetworkCall from './api-clients.js';
import product from '../models/product.js';
const productOperations={
    pizzas:[],
    cart:[],
    addtocart(product){
        this.carts.push(product);
    },
    removefromcart(product){
        this.carts= this.carts.filter(pizza =>pizza.id=!product.id)
    },
    async loadProducts(){
        const pizzas= await makeNetworkCall();
        const pizzaArray= pizzas['Vegetarian'];
        const productsArray =pizzaArray.map(pizza=>{
            const currentPizza= new product(pizza.id,pizza.name,pizza.menu_description,pizza.price,pizza.assets.product_details_page[0].url);
            return currentPizza;
            })
            console.log('product array',productsArray);
            return productsArray; //wrap in promise
        },
    sortProducts(){
    
    },
    searchProducts(id){
        console.log('PPPPPPPPPPPPP',this.pizzas);
        //const searchedpizzaarray= pizzas.Vegetarian;
        console.log('SEARCH Pizza',this.pizzas.length,'id',id);
        const searched=this.pizzas.filter(pizza=>pizza['id']===id);
        return searched;
    }
}
export default productOperations;

*/
/*window.addEventListener(
    'load',bindevents
)
function bindevents(){
    document.getElementById('clickme').addEventListener(
        'click',
        ()=>{
            alert("hello")
        }
    )
}*/
