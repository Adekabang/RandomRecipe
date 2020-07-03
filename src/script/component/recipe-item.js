class RecipeItem extends HTMLElement {
  set recipe(recipe) {
    this._recipe = recipe;
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1>${this._recipe.strMeal}</h1>
      <img class="" src="${this._recipe.strMealThumb}" alt=">
      <div class="">
          <p>${this._recipe.strCategory}</p>
      </div>`;
  }
}

customElements.define("recipe-item", RecipeItem);
