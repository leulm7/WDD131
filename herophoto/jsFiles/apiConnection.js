// apiConnection.js
const url =
  "https://api.unsplash.com/search/photos?query=water%20rafting&per_page=30&page=1";

const options = {
  method: "GET",
  headers: {
    Authorization: "Client-ID bQMKac71neX5zgCjSMB-EM5bGZCSEW_FeADXWU1wFQA",
  },
};

export async function getImages() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Failed to fetch Unsplash images.");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function renderImages(imageList, containerId = "images") {
  const html = imageList.map((img, index) => {
    const photographer = img.user.name;
    const profileLink = img.user.links.html;
    const imageUrl = img.urls.regular;
    const imageLikes = img.likes;
    const altText = img.alt_description || "Nature photo";

    return `
      <article>
        <img src="${imageUrl}" alt="${altText}" />
        <div class="description">${altText}</div>
        <div class="photographer">
          <a href="${profileLink}" target="_blank">${photographer}</a>
        </div>
        <div class="likes">${imageLikes}</div>
      </article>
    `;
  });

  document.getElementById(containerId).innerHTML = html.join("");
}