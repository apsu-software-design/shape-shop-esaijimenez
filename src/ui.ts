//User Interface for The Shopping Cart 
//@author James Church

import readlineSync = require('readline-sync'); //for easier repeated prompts
import {ProductModel, ProductView} from './products';

/**
 * Function to run the UI
 */
export function start() {
  showMainMenu();
}

/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
  while(true){ //run until we exit
    console.log(`Welcome to the Shape Store! We offer the best shapes! Pick an option:
  1. Add an item to the cart.
  2. Remove an item to the cart.
  3. View the items in the cart.
  4. View the price of all items.
  5. Quit.`);

    let response = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q'){
      break; //stop looping, thus leaving method
    }

    switch(response) { //handle each response
      case '1': addItemToCart(); break;
      case '2': removeItemFromCart(); break;
      case '3': viewItemsInCart(); break;
      case '4': viewCartTotal(); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
  }
}

function addItemToCart() {
  
  console.log(`Here you can select your shape. Pick an option:
  1. Buy a Triangle!
  2. Buy a Square!
  3. Buy a Pentagon!
  4. Go back. Don't buy anything.`);
  let productResponse = readlineSync.question('> ');
  
  console.log(`How many of this shape would you like to purchase?`);
  
  let amountResponse = readlineSync.question('> ');
  
  let product = new ProductModel;
  product.addProductToCart(productResponse,amountResponse);
}

function removeItemFromCart() {
    let cartRemove = new ProductView;

    console.log(`Select an item to be removed from the cart.`);

    cartRemove.viewItemsToRemove();

    let removeResponse = readlineSync.question('> ')
  
    let product = new ProductModel;
    product.removeProductFromCart(removeResponse);

    console.log(''); //extra empty line for revisiting
}

function viewItemsInCart() {
    let cartView = new ProductView;
    cartView.viewItemsInCart();
}

function viewCartTotal() {
    let cartTotal = new ProductView;
    cartTotal.viewCartTotalPrice();
}
