// Storage utilities with fallback for blocked storage (Edge/Firefox Tracking Prevention)
/**
 * Safely get a value from localStorage, returning fallback if unavailable or error.
 * @param {string} key - Storage key
 * @param {*} fallback - Value to return if storage is unavailable
 * @returns {*} The stored value or fallback
 */
function safeStorage(key, fallback) {
    try { 
        const value = localStorage.getItem(key);
        return value !== null ? value : fallback;
    } catch (_) { 
        return fallback; 
    }
}

/**
 * Safely set a value in localStorage, failing silently if unavailable.
 * @param {string} key - Storage key
 * @param {*} value - Value to store
 */
function safeStorageSet(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (_) {
        // Silently fail if storage is unavailable
    }
}

// Make available globally if needed (optional)
// window.safeStorage = safeStorage;
// window.safeStorageSet = safeStorageSet;