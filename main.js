//arrays
var sideDishes = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots",
"Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"]
var mainDishes = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry",
"Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empanadas",
"Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"];
var dessertDishes = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler",
"Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova",
"Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"]

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
  // if (value === "side") {
  //   return random side dish;
  // } else if (value === "main") {
  //   return random main dish;
  // } else if (value === "dessert")
  //   return random dessert dish;
};


/* 1) Must be able to click button to correct type of dish
2) Value that results from that will be held while "lets cook" button is pressed
3) Once "lets cook" is pressed, crockpot will disappear, and text will generate with food.

    */
