// Theme management utilities
let currentTheme = null;

/**
 * Initialize theme from storage
 * @returns {string} The current theme ('dark' or 'light')
 */
function initTheme() {
    currentTheme = safeStorage('theme', 'dark');
    document.body.setAttribute('data-theme', currentTheme);
    return currentTheme;
}

/**
 * Update the theme toggle icon based on current theme
 */
function updateThemeIcon() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (currentTheme === 'dark') {
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
    }
}

/**
 * Toggle between dark and light theme
 */
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    safeStorageSet('theme', currentTheme);
    updateThemeIcon();
}

// Make functions available globally
window.initTheme = initTheme;
window.updateThemeIcon = updateThemeIcon;
window.toggleTheme = toggleTheme;