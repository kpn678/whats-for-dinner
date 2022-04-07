//arrays
var sideDishes = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots",
"Coconut Rice", "Caesar Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];
var mainDishes = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry",
"Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empanadas",
"Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"];
var dessertDishes = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler",
"Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova",
"Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"];

//page elements query selectors
var stockPot = document.querySelector(".stockpot-img");
var dishSuggestion = document.querySelector(".dish-suggestion")
var dishSuggestionText = document.querySelector("p");
var addNewRecipeForm = document.querySelector(".add-new-recipes");

//input & button query selectors
var sideSelection = document.querySelector('input[value="side"]');
var mainSelection = document.querySelector('input[value="main"]');
var dessertSelection = document.querySelector('input[value="dessert"]');
var entireSelection = document.querySelector('input[value="entire"]');
var letsCookButton = document.querySelector('.lets-cook');
var addARecipeButton = document.querySelector('.add-a-recipe');
var recipeType = document.querySelector('#recipe-type');
var recipeName = document.querySelector('#recipe-name');
var addNewRecipeButton = document.querySelector('.add-new');

//event listeners
letsCookButton.addEventListener('click', showRandomizedDish)
addARecipeButton.addEventListener('click', showAddNewForm)
addNewRecipeButton.addEventListener('click, getUserRecipeInfo)

//functions and event handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getUserRecipeInfo() {
  var userRecipeType = recipeType.value
  var userRecipeName = recipeName.value
  displayUserCardInfo(userRecipeType, userRecipeName)
}

function showRandomizedDish(event) {
  stockPot.classList.add("hidden");
  dishSuggestion.classList.remove("hidden");
  event.preventDefault();
  if (sideSelection.checked) {
    dishSuggestionText.innerText = sideDishes[getRandomIndex(sideDishes)]
  } else if (mainSelection.checked) {
    dishSuggestionText.innerText = mainDishes[getRandomIndex(mainDishes)]
  } else if (dessertSelection.checked) {
    dishSuggestionText.innerText = dessertDishes[getRandomIndex(dessertDishes)]
  } else if (entireSelection.checked) {
    dishSuggestionText.innerText = `${mainDishes[getRandomIndex(mainDishes)]} with a side of ${sideDishes[getRandomIndex(sideDishes)]} and ${dessertDishes[getRandomIndex(dessertDishes)]} for dessert!`
  }
};
//probably split top part(display) from second part(data model?)

function showAddNewForm(event) {
  addNewRecipeForm.classList.remove("hidden");
  event.preventDefault();
};
