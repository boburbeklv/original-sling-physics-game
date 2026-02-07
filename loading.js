// loading.js

// Function to create a loading screen
function createLoadingScreen() {
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading-screen';
    loadingDiv.style.position = 'fixed';
    loadingDiv.style.top = '0';
    loadingDiv.style.left = '0';
    loadingDiv.style.width = '100%';
    loadingDiv.style.height = '100%';
    loadingDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    loadingDiv.style.display = 'flex';
    loadingDiv.style.justifyContent = 'center';
    loadingDiv.style.alignItems = 'center';
    loadingDiv.style.zIndex = '9999';
    loadingDiv.innerHTML = '<h1>Loading...</h1>';

    document.body.appendChild(loadingDiv);
}

// Function to remove the loading screen
function removeLoadingScreen() {
    const loadingDiv = document.getElementById('loading-screen');
    if (loadingDiv) {
        document.body.removeChild(loadingDiv);
    }
}

// Call the loading screen when the window is loading
window.addEventListener('load', () => {
    createLoadingScreen();
    // Simulate loading time with a timeout (remove this in production)
    setTimeout(removeLoadingScreen, 2000);
});
