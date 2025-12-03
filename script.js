// Simple token-based progression using localStorage

function setProgress(key) {
    try {
        localStorage.setItem(key, "1");
    } catch (e) {
        console.warn("Could not write progress token:", e);
    }
}

function hasProgress(key) {
    try {
        return localStorage.getItem(key) === "1";
    } catch (e) {
        console.warn("Could not read progress token:", e);
        return false;
    }
}

function requireProgress(requiredKey) {
    if (!hasProgress(requiredKey)) {
        // If requirement not met, send the user to a blocked page
        window.location.href = "blocked.html";
    }
}

// Optional helper to clear all progress (for instructor / testing)
// You can call clearProgress() manually from the console.
function clearProgress() {
    try {
        localStorage.clear();
        alert("Progress cleared.");
    } catch (e) {
        console.warn("Could not clear progress:", e);
    }
}
