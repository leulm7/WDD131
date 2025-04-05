document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.innerHTML = '🌙'; 
    themeToggle.title = 'Toggle Dark Mode';
    themeToggle.className = 'theme-toggle-btn';
    
    const nav = document.querySelector('nav');
    nav.appendChild(themeToggle);
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '☀️';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '☀️'; 
            localStorage.setItem('theme', 'dark');
            
            const logoImg = document.querySelector('.logo');
            if (logoImg) {
                // You can create a dark version of your logo and uncomment this
                // logoImg.src = "images/logo-dark.jpeg";
            }
        } else {
            themeToggle.innerHTML = '🌙'; // Moon emoji for dark mode
            localStorage.setItem('theme', 'light');
            
            // Restore original logo
            const logoImg = document.querySelector('.logo');
            if (logoImg) {
                logoImg.src = "images/logo Small.jpeg";
            }
        }
    });
});