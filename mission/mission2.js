// JavaScript (mission2.js)

const body = document.querySelector('body');
const themeSelector = document.getElementById('theme-selector');
const logo = document.getElementById('logo-blue');


// Function to change the theme based on the dropdown selection
function changeTheme() {
    if (themeSelector.value === 'dark') {
        body.classList.add('dark'); // Add dark class to the body
        logo.src="byui-logo_white.webp" // Hide blue logo
    } else {
        body.classList.remove('dark'); // Remove dark class from body
        logo.src="byui-logo_blue_small.jpeg"
    }
}

// Add event listener to handle theme change
themeSelector.addEventListener('change', changeTheme);
