document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.innerHTML = '🌙'; 
    themeToggle.title = 'Toggle Dark Mode';
    themeToggle.className = 'theme-toggle-btn';
    
    const nav = document.querySelector('nav');
    const firstNavItem = nav.querySelector('a'); // Get the first link in the nav (Home)

// Insert the theme toggle before the first link
    nav.insertBefore(themeToggle, firstNavItem);
    
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
                
            }
        } else {
            themeToggle.innerHTML = '🌙';
            localStorage.setItem('theme', 'light');
            
            const logoImg = document.querySelector('.logo');
            if (logoImg) {
                logoImg.src = "images/logo Small.jpeg";
            }
        }
    });
});