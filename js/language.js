// Language management utilities
let currentLanguage = null;

/**
 * Initialize language from storage
 * @returns {string} The current language ('es' or 'en')
 */
function initLanguage() {
    currentLanguage = safeStorage('language', 'es');
    document.documentElement.setAttribute('data-lang', currentLanguage);
    return currentLanguage;
}

/**
 * Update all translatable elements on the page
 */
function updateLanguage() {
    document.querySelectorAll('[data-es][data-en]').forEach(element => {
        // Skip the typing effect element as we handle it separately
        if (element.id === 'typed-greeting') {
            return;
        }
        const text = currentLanguage === 'es'
            ? element.getAttribute('data-es')
            : element.getAttribute('data-en');
        if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
            element.textContent = text;
        } else if (element.childNodes.length === 0) {
            element.textContent = text;
        } else {
            const textNode = Array.from(element.childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = text;
        }
    });
    
    // Re-initialize typing effect when language changes
    initTypedEffect();
}

/**
 * Update the language toggle button UI
 */
function updateToggleButton() {
    const languageToggle = document.getElementById('lang-toggle');
    if (languageToggle) {
        languageToggle.innerHTML = currentLanguage === 'es'
            ? '<span>ES</span> / <span style="opacity:0.5">EN</span>'
            : '<span style="opacity:0.5">ES</span> / <span>EN</span>';
    }
}

/**
 * Toggle between English and Spanish
 */
function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    document.documentElement.setAttribute('data-lang', currentLanguage);
    safeStorageSet('language', currentLanguage);
    updateLanguage();
    updateToggleButton();
}

// Make functions available globally if needed
window.updateLanguage = updateLanguage;
window.updateToggleButton = updateToggleButton;
window.toggleLanguage = toggleLanguage;