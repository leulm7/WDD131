// JavaScript (mission2.js)

const body = document.querySelector('body');
const themeSelector = document.getElementById('theme-selector');
const logoBlue = document.getElementById('logo-blue');
const logoWhite = document.getElementById('logo-white');

// Function to change the theme based on the dropdown selection
function changeTheme() {
    if (themeSelector.value === 'dark') {
        body.classList.add('dark'); // Add dark class to the body
        logoBlue.style.display = 'none'; // Hide blue logo
        logoWhite.style.display = 'block'; // Show white logo
    } else {
        body.classList.remove('dark'); // Remove dark class from body
        logoBlue.style.display = 'block'; // Show blue logo
        logoWhite.style.display = 'none'; // Hide white logo
    }
}

// Add event listener to handle theme change
themeSelector.addEventListener('change', changeTheme);
