// Typed.js effect manager
let typedInstance = null;

/**
 * Initialize or reinitialize the typing effect
 */
function initTypedEffect() {
    const typedElement = document.getElementById('typed-greeting');
    if (!typedElement) return;

    const text = currentLanguage === 'es'
        ? typedElement.getAttribute('data-es')
        : typedElement.getAttribute('data-en');

    // Destroy existing instance if any
    if (typedInstance) {
        typedInstance.destroy();
    }

    // Initialize Typed.js
    typedInstance = new Typed('#typed-greeting', {
        strings: [text],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: false,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
    });
}

// Make function available globally
window.initTypedEffect = initTypedEffect;