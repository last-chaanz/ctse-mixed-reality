// Wait for models to load before removing loading screen
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
    }, 3000); // Give extra time for AR to initialize
});

// Initialize sound effects (empty for now)
const sounds = {};

// Main AR functionality will go here
document.addEventListener('DOMContentLoaded', function() {
    console.log('AR Beach Experience loaded');
});