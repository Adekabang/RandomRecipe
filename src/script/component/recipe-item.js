class RecipeItem extends HTMLElement {
  set recipe(recipe) {
    this._recipe = recipe;
    this.render();
  }

  render() {
    let result = this._recipe.strInstructions.replace(
      /(?:\r\n)/g,
      "</p><br><p>"
    );

    let ingredientArr = [];
    for (var i = 1; i <= 20; i++) {
      if (
        this._recipe["strIngredient" + i] !== "" &&
        this._recipe["strIngredient" + i] !== "null"
      ) {
        ingredientArr.push(
          `${this._recipe["strMeasure" + i]} ${
            this._recipe["strIngredient" + i]
          }`
        );
      }
    }
    this.innerHTML = `
    <div class="row">
      <div class="column center-parent">
      <div class="flex-child">
        <h2>${this._recipe.strMeal}</h2>
        <span class="tags">${this._recipe.strCategory}</span>
        <span class="tags">${this._recipe.strArea}</span>
      </div>
      </div>
      <div class="column end-parent">
        <img class="img-thumb flex-child" src="${
          this._recipe.strMealThumb
        }" alt="">
      </div>
    </div>
        <br>
    <div class="row">
      <div class="column-30 start-parent">
        <img class="img-thumb flex-child img-ingredient" src="https://www.themealdb.com/images/ingredients/${
          this._recipe.strIngredient1
        }.png" alt="">
      </div>
      <div class="column-70">
      <div class="flex-child">
        <h3>Ingredient</h3>
        <ul>
          ${ingredientArr.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      </div>
    </div>
        <br>
    <div class="mb-5">
        <h3>Instructions</h3>
        <p>${result}</p>
    </div>
      `;
  }
}

customElements.define("recipe-item", RecipeItem);