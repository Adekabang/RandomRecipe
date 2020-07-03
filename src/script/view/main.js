import "../component/recipe-item.js";

const axios = require("axios");
const loadingSvg = require("../../assets/loading.svg");

const main = () => {
  const body = document.querySelector("body");
  const randomBtn = document.querySelector("#random");
  const mainText = document.querySelector("#main-text");
  const recipe = document.querySelector("#recipe");
  const loading = document.querySelector("#load-svg");
  const baseUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  let svg = document.createElement("IMG");
  svg.setAttribute("src", loadingSvg);
  svg.setAttribute("class", "loading");
  loading.appendChild(svg);

  randomBtn.addEventListener("click", () => {
    mainText.innerHTML = "Please Wait";
    loading.classList.remove("hidden");
    randomBtn.classList.add("hidden");
    getRecipe();
  });

  const getRecipe = () => {
    axios
      .get(`${baseUrl}`)
      .then((response) => {
        return response.data;
      })
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderRecipe(responseJson.meals[0]);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  const renderRecipe = (result) => {
    body.classList.remove("full-height");
    mainText.classList.add("hidden");
    randomBtn.classList.remove("hidden");
    loading.classList.add("hidden");

    recipe.innerHTML = "";
    const recipeItem = document.createElement("recipe-item");
    recipeItem.recipe = result;
    recipe.appendChild(recipeItem);
  };
};
export default main;
