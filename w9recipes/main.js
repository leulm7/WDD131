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

const recipe = getRandomRecipe(recipes);
console.log(recipeTemplate(recipe));