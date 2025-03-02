// Get DOM elements
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const body = document.body;

// Function to open the menu
openMenu.addEventListener('click', () => {
    menu.classList.add('active'); // Add active class to show menu
    body.classList.add('menu-open'); // Prevent scrolling
});

// Function to close the menu
closeMenu.addEventListener('click', () => {
    menu.classList.remove('active'); // Remove active class to hide menu

    // Restore scrolling after the transition
    setTimeout(() => {
        body.classList.remove('menu-open');
    }, 300); // Match the transition duration in CSS (0.3s)
});
