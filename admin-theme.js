document.addEventListener("DOMContentLoaded", () => {
    // Initial load
    const isDark = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // New specific buttons logic (for settings.html)
    const btnLight = document.getElementById('admin-theme-light');
    const btnDark = document.getElementById('admin-theme-dark');
    
    function updateActiveButton() {
        if (!btnLight || !btnDark) return;
        if (document.documentElement.classList.contains('dark')) {
            // Dark is active
            btnDark.className = "flex-1 py-2 rounded-md bg-surface shadow-sm text-sm font-bold text-primary flex justify-center items-center gap-2 transition-all";
            btnLight.className = "flex-1 py-2 rounded-md text-sm font-semibold text-on-surface flex justify-center items-center gap-2 hover:bg-surface-variant transition-all";
        } else {
            // Light is active
            btnLight.className = "flex-1 py-2 rounded-md bg-white shadow-sm text-sm font-bold text-primary flex justify-center items-center gap-2 transition-all";
            btnDark.className = "flex-1 py-2 rounded-md text-sm font-semibold text-on-surface flex justify-center items-center gap-2 hover:bg-surface-variant transition-all";
        }
    }
    
    if (btnLight && btnDark) {
        updateActiveButton();
        
        btnLight.addEventListener('click', () => {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            updateActiveButton();
        });
        
        btnDark.addEventListener('click', () => {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            updateActiveButton();
        });
    }
});
