// Counter animation utility
/**
 * Animate a counter from 0 to target value
 * @param {HTMLElement} element - Element to animate
 * @param {number} target - Target number to count to
 * @param {string} suffix - Optional suffix to append (e.g., '+', '%')
 */
function animateCounter(element, target, suffix = '') {
    let start = null;
    const duration = 1500; // 1.5 seconds
    
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const current = Math.floor(progress * target);
        element.textContent = current + suffix;
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }
    
    window.requestAnimationFrame(step);
}

// Make function available globally
window.animateCounter = animateCounter;