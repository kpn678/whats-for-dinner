//arrays
var sideDishes = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots",
"Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];
var mainDishes = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry",
"Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empanadas",
"Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"];
var dessertDishes = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler",
"Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova",
"Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"];

//page elements
var stockPot = document.querySelector("svg");
var dishSuggestion = document.querySelector(".dish-suggestion");

//buttons
var sideButton = document.querySelector("#side");
var mainDishButton = document.querySelector("#main-dish");
var dessertButton = document.querySelector("#dessert");
var letsCookButton = document.querySelector(".lets-cook");

//eventListeners
sideButton.addEventListener('click', )
mainDishButton.addEventListener('click', )
dessertButton.addEventListener('click', )
letsCookButton.addEventListener('click', randomizeDish)

//functions and eventHandlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function randomizeDish() {
  if (value === "side") {
    return sideDishes[getRandomIndex(sideDishes)];
  } else if (value === "main") {
    return mainDishes[getRandomIndex(mainDishes)];
  } else if (value === "dessert") {
    return dessertDishes[getRandomIndex(dessertDishes)];
  }
  changePotToSuggestion();
};

function changePotToSuggestion() {
  stockPot.classList.add("hidden");
  dishSuggestion.classList.remove("hidden");
  dishSuggestion.innerHTML = `<h3>You should make:</h3>
      <p>???</p>`

};

/* Need to do:
- Make p css
- Figure out how to link value of radio buttons to eventListeners to get what we need
- Where to put p changing in JS
*/
