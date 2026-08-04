// Notification system
const colors = { success: '#10b981', error: '#ff1744', info: '#a855f7' };

/**
 * Show a notification toast
 * @param {string} message - Message to display
 * @param {string} type - Type of notification: 'success', 'error', or 'info' (default)
 */
function showNotification(message, type = 'info') {
    const el = document.createElement('div');
    el.textContent = message;
    el.style.cssText = `
        position:fixed; top:100px; right:20px;
        padding:1rem 1.5rem;
        background:${colors[type] || colors.info};
        color:white; border-radius:8px; font-weight:600;
        z-index:10000; box-shadow:0 10px 25px rgba(0,0,0,.2);
        animation:slideIn 0.3s ease;
    `;
    document.body.appendChild(el);
    setTimeout(() => {
        el.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => el.remove(), 300);
    }, 3000);
}

// Make function available globally
window.showNotification = showNotification;