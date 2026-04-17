window.showToast = function(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = 'transform translate-y-full opacity-0 transition-all duration-300 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 max-w-sm pointer-events-auto ' + (type === 'success' ? 'bg-primary-container text-on-primary-container' : 'bg-error-container text-on-error-container');
    
    const icon = document.createElement('span');
    icon.className = 'material-symbols-outlined';
    icon.textContent = type === 'success' ? 'check_circle' : 'error';
    
    const text = document.createElement('p');
    text.className = 'text-sm font-bold';
    text.textContent = message;
    
    toast.appendChild(icon);
    toast.appendChild(text);
    container.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-full', 'opacity-0');
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.add('translate-y-full', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};
