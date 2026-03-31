const routes = {
    '/': window.renderHome,
    '/doctors': window.renderDoctors,
    '/ai-chat': window.renderAIChat,
    '/pharmacy': window.renderPharmacy,
    '/profile': window.renderProfile,
    '/book': window.renderBook,
    '/login': window.renderLogin
};

function navigateTo(route) {
    const appEl = document.getElementById('router-view');
    // Basic router fade animation
    appEl.classList.remove('fade-in');
    void appEl.offsetWidth; // trigger reflow
    appEl.classList.add('fade-in');

    const renderFn = routes[route] || renderHome;
    appEl.innerHTML = renderFn();

    // Update bottom nav
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.route === route);
    });

    // Run setup scripts for specific pages if any
    if (route === '/ai-chat' && typeof window.initChat === 'function') {
        window.initChat();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial Render defaults to Login
    navigateTo('/login');

    // Navigation Click Listeners
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const route = e.currentTarget.dataset.route;
            navigateTo(route);
        });
    });

    // Listen to custom navigation events from within pages
    document.addEventListener('navigate', (e) => {
        if (e.detail && e.detail.route) {
            navigateTo(e.detail.route);
        }
    });
});

window.navigate = (route) => {
    const event = new CustomEvent('navigate', { detail: { route } });
    document.dispatchEvent(event);
};
