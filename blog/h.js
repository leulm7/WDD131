// blog.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Blog page loaded");

    const articles = document.querySelectorAll("article");
    const filterInput = document.createElement("input");
    filterInput.setAttribute("type", "text");
    filterInput.setAttribute("placeholder", "Search reviews...");
    document.querySelector(".filters").appendChild(filterInput);

    filterInput.addEventListener("input", (event) => {
        const query = event.target.value.toLowerCase();
        articles.forEach(article => {
            const title = article.querySelector("h2").textContent.toLowerCase();
            if (title.includes(query)) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });
});