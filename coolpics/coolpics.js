const menuButton = document.querySelector(".menu-button");

let images = document.querySelector(".gallery");


function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

function handleResize(){
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 700) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

function viewerTemplate(pic, alt) {
  return `
    <div id="viewer"> 
    <button id="close-viewer">X</button>
    <img src="${pic}" alt="${alt}" />
    </div>`;

  // let closeButton = document.getElementById("close-viewer");
  // closeButton.addEventListener("click", closeViewer);
}

function closeViewer() {
  let viewer = document.getElementById("viewer");
  viewer.remove();
}

function viewHandler(event){
  console.log("viewHandler called");
  let clickedObject = event.target;
  let sourceInfo = clickedObject.src.split("-");
  let newImageSource = sourceInfo[0] +  "-full.jpeg";
  let newImageAlt = clickedObject.alt;
  document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newImageSource, newImageAlt));
  let viewer = document.getElementById("viewer"); 
  viewer.addEventListener("click", closeViewer);
}

menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
images.addEventListener("click", viewHandler);
handleResize(); // Initial call to set up menu visibility