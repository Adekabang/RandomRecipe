import './recipe-item.js'
const body = document.querySelector("body")
const randomBtn = document.querySelector("#random")
const mainText = document.querySelector("#main-text")
const loading = document.querySelector(".loading")
const recipeItem = document.querySelector("recipe-item")
const baseUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
const imageUrl = "https://www.themealdb.com/images/ingredients/"

randomBtn.addEventListener("click", () => {
  mainText.innerHTML = "Please Wait"
  loading.classList.remove('hidden')
  randomBtn.classList.add("hidden")
  getRecipe()
})

const getRecipe = () => {
  fetch(`${baseUrl}`)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderRecipe(responseJson.meals[0]);
      }
    })
    .catch(error => {
      showResponseMessage(error);
    })
};

const showResponseMessage = (message = "Check your internet connection") => {
  alert(message);
};

const renderRecipe = (result) => {
  body.classList.remove("full-height")
  mainText.classList.add("hidden")
  randomBtn.classList.remove("hidden")
  loading.classList.add("hidden")
  recipeItem.recipe = result
}