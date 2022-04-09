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
var addARecipeButton = document.querySelector('.add-a-recipe');
var recipeType = document.querySelector('#recipe-type');
var recipeName = document.querySelector('#recipe-name');
var addNewRecipeButton = document.querySelector('.add-new');
var sideSelection = document.querySelector('input[value="side"]');
var mainSelection = document.querySelector('input[value="main"]');
var dessertSelection = document.querySelector('input[value="dessert"]');
var entireSelection = document.querySelector('input[value="entire"]');
var letsCookButton = document.querySelector('.lets-cook');

//event listeners
addARecipeButton.addEventListener('click', displayAddNewForm);
addNewRecipeButton.addEventListener('click', getUserRecipeInfo);
letsCookButton.addEventListener('click', displayRandomizedDish);

//functions and event handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getUserRecipeInfo() {
  var userRecipeType = recipeType.value;
  var userRecipeName = recipeName.value;
  addUserRecipeInfoToArray(userRecipeType, userRecipeName);
  displayUserRecipeInfo(userRecipeName);
};

function addUserRecipeInfoToArray(userRecipeType, userRecipeName) {
  if (userRecipeType === 'Side') {
    sideDishes.push(userRecipeName);
  } else if (userRecipeType === 'Main Dish') {
    mainDishes.push(userRecipeName);
  } else if (userRecipeType === 'Dessert') {
    dessertDishes.push(userRecipeName);
  } else {
    alert("Error: Recipe will appear in suggestion initially, but it cannot be saved to recipe list unless recipe type is Side, Main Dish, or Dessert.")
  }
};

function displayUserRecipeInfo(userRecipeName) {
  hideStockPot(event);
  dishSuggestionText.innerText = userRecipeName;
};

function displayAddNewForm(event) {
  addNewRecipeForm.classList.remove("hidden");
  event.preventDefault();
};

function displayRandomizedDish() {
  hideStockPot(event);
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

function hideStockPot(event) {
  stockPot.classList.add("hidden");
  dishSuggestion.classList.remove("hidden");
  event.preventDefault();
};
