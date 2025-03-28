import recipes from "./recipes.mjs";


function getRandomIndex(maxNum){
    return Math.floor(Math.random()*maxNum);

}

function getRandomRecipe(list){
    const maxNum = list.length;
    return list[getRandomIndex(maxNum)];
}

alert (getRandomIndex(recipes.length));

function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img src="${recipe.image}" alt="${recipe.name}" />
	<figcaption>
		<ul class="recipe__tags">
            ${tagsTemplate(recipe.tags)}
		</ul>
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="recipe__ratings">
			${ratingTemplate(recipe.rating)}
		</p>
		<p class="recipe__description">
            ${recipe.description}
		</p>
</figcaption>
</figure>`;
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html=''
    tags.forEach(tag => {
        html += `<li>${tag}</li>`
    });
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i < 6; i++) {
    if (i < rating){
        html += `<span aria-hidden="true" class="icon-star">⭐</span>`
    }
    else{
        html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
    }
    }
		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star

		// else output an empty star

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
	const output = document.querySelector("#container");
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
	const html = recipeList.map(whatever => {
		recipeTemplate(whatever);
	})
	// Set the HTML strings as the innerHTML of our output element.
	output.innerHTML = html
}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}

init();

function searchHandler(event){
	event.preventDefault()
	const userInput = document.getElementById("search").value.toLowerCase()
	const filter = filterRecipes(userInput)
	renderRecipes(filter);
}

function filterRecipes(query){
	const filtered = recipes.filter(recipe => { 
	return	recipe.name.toLowerCase().includes(query) ||
			recipe.description.toLowerCase().includes(query) ||
			recipe.tags.find((item) => item.toLowerCase().includes(query)) ||
			recipe.recipeIngredient.find((item) => item.toLowerCase().includes(query));
})
	const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
		return sorted
}
document.querySelector("#search").addEventListener("click", searchHandler)

const recipe = getRandomRecipe(recipes);
console.log(recipeTemplate(recipe));