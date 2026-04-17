document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `<nav class="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#1a1c1d]/80 backdrop-blur-md shadow-sm dark:shadow-none">
<div class="flex items-center justify-between px-8 py-4 max-w-screen-2xl mx-auto">
<a class="font-['Work_Sans'] font-black text-xl tracking-tighter text-[#811026] dark:text-[#ffdadb]" href="index.html">UMD Consumer Insight &amp; Analytics</a>
<div class="hidden md:flex items-center space-x-8 font-['Work_Sans'] font-medium text-sm tracking-tight">
<a class="text-[#2a2a2a] dark:text-[#e3e2e3] hover:text-[#811026] dark:hover:text-[#fecb32] transition-all duration-300" href="index.html">Home</a>
<a class="text-[#2a2a2a] dark:text-[#e3e2e3] hover:text-[#811026] dark:hover:text-[#fecb32] transition-all duration-300" href="about.html">About</a>
<a class="text-[#2a2a2a] dark:text-[#e3e2e3] hover:text-[#811026] dark:hover:text-[#fecb32] transition-all duration-300" href="academics.html">Academics</a>
<a class="text-[#2a2a2a] dark:text-[#e3e2e3] hover:text-[#811026] dark:hover:text-[#fecb32] transition-all duration-300" href="faculty.html">Faculty</a>
<a class="text-[#2a2a2a] dark:text-[#e3e2e3] hover:text-[#811026] dark:hover:text-[#fecb32] transition-all duration-300" href="centers.html">Community</a>
<a class="text-[#2a2a2a] dark:text-[#e3e2e3] hover:text-[#811026] dark:hover:text-[#fecb32] transition-all duration-300" href="news.html">News</a>
<a class="text-[#2a2a2a] dark:text-[#e3e2e3] hover:text-[#811026] dark:hover:text-[#fecb32] transition-all duration-300" href="info.html">Info</a>
</div>
<div class="flex items-center gap-4">

<button id="theme-toggle" aria-label="Toggle Dark Mode" class="p-2 rounded-full hover:bg-surface-variant dark:hover:bg-[#333333] transition-colors flex items-center justify-center text-[#811026] dark:text-[#fecb32] mr-2 md:mr-0">
    <span class="material-symbols-outlined dark:hidden">dark_mode</span>
    <span class="material-symbols-outlined hidden dark:block">light_mode</span>
</button>
<a class="hidden md:inline-flex px-5 py-2 text-sm font-semibold rounded-xl border-2 border-[#811026] text-[#811026] hover:bg-[#811026] hover:text-white transition-all duration-300" href="adminlogin.html">Staff Login</a>
<a class="hidden md:inline-flex px-5 py-2 rounded-xl bg-[#811026] text-white hover:bg-[#fecb32] hover:text-[#1a1c1d] transition-all duration-300" href="contact.html">Contact Us</a>
</div>
</div>
</nav>`;

    const footerHTML = `<footer class="bg-[#2a2a2a] text-gray-400 w-full mt-20 px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-screen-2xl mx-auto">
        <div class="flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-4">
            <h3 class="text-white font-['Work_Sans'] font-black text-xl">Consumer Insight<br/>&amp; Analytics</h3>
            <p class="text-xs uppercase tracking-widest text-[#fecb32]">Labovitz School of Business and Economics</p>
        </div>

        <div class="flex flex-col space-y-4">
            <h4 class="text-white font-bold text-sm mb-2">Programs</h4>
            <a class="text-xs hover:text-white transition-colors duration-200" href="academics.html">Undergraduate Programs</a>
            <a class="text-xs hover:text-white transition-colors duration-200" href="academics.html">Graduate Programs</a>
            <a class="text-xs hover:text-white transition-colors duration-200" href="faculty.html">Faculty Directory</a>
            <a class="text-xs hover:text-white transition-colors duration-200" href="centers.html">Community Outreach</a>
        </div>

        <div class="flex flex-col space-y-4">
            <h4 class="text-white font-bold text-sm mb-2">Search & Give</h4>
            <a class="text-xs hover:text-white transition-colors duration-200" href="https://give.d.umn.edu/">Support UMD</a>
            <a class="text-xs hover:text-white transition-colors duration-200" href="https://www.d.umn.edu/department-directory/">Directory</a>
            <a class="text-xs hover:text-white transition-colors duration-200" href="https://hr.umn.edu/Jobs/Find-Job">Employment</a>
            <a class="text-xs hover:text-white transition-colors duration-200" href="https://calendar.d.umn.edu/">Events</a>
            <a class="text-xs hover:text-white transition-colors duration-200" href="https://lib.d.umn.edu/">Library</a>
        </div>

        <div class="flex flex-col space-y-4">
            <h4 class="text-white font-bold text-sm mb-2">Connect</h4>
            <a class="text-xs hover:text-white transition-colors duration-200" href="https://lsbe.d.umn.edu/" target="_blank" rel="noopener noreferrer">LSBE Home</a>
            <a class="text-xs hover:text-white transition-colors duration-200" href="https://d.umn.edu/" target="_blank" rel="noopener noreferrer">UMD Home</a>
            
            <div class="flex flex-col gap-3 mt-4">
                <a href="https://www.linkedin.com/company/umd-lsbe-consumer-insights-analytics-program/?viewAsMember=true" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-xs hover:text-[#fecb32] transition-colors">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                </a>
                <a href="contact.html" class="flex items-center gap-2 text-xs hover:text-[#fecb32] transition-colors">
                    <span class="material-symbols-outlined text-[16px]">mail</span>
                    Contact Program
                </a>
            </div>
        </div>
    </div>
    
    <div class="max-w-screen-2xl mx-auto border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-[10px] uppercase tracking-widest">Ac 2024 University of Minnesota Duluth - Consumer Insight &amp; Analytics</p>
        <div class="flex flex-wrap justify-center gap-4 text-[10px] uppercase tracking-widest text-gray-400">
            <a href="https://privacy.umn.edu/" class="hover:text-white">Privacy</a>
            <span class="opacity-50">|</span>
            <a href="https://accessibility.umn.edu/" class="hover:text-white">Accessibility</a>
            <span class="opacity-50">|</span>
            <a href="https://d.umn.edu/about-umd" class="hover:text-white">About UMD</a>
        </div>
    </div>
</footer>`;
    
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a'); 
    navLinks.forEach(link => {
        if (link.hasAttribute('href') && !link.classList.contains("bg-[#811026]") && !link.classList.contains("border-2") && !link.classList.contains("font-black")) {
            if (link.getAttribute('href') === currentPath) {
                link.className = "text-[#811026] dark:text-[#fecb32] border-b-2 border-[#811026] dark:border-[#fecb32] pb-1 transition-all duration-300 block py-2";
            } else {
                link.className = "text-[#2a2a2a] dark:text-[#e3e2e3] hover:text-[#811026] dark:hover:text-[#fecb32] transition-all duration-300 block py-2";
            }
        }
    });

    const nav = document.querySelector('nav');
    if (nav) {
        let desktopLinksContainer = null;
        const allDivs = nav.querySelectorAll('div');
        allDivs.forEach(div => {
            if (div.classList.contains('hidden') && div.classList.contains('md:flex') && div.classList.contains('space-x-8')) {
                desktopLinksContainer = div;
            }
        });
        const rightButtonsContainer = nav.querySelector('.flex.items-center.gap-4');
        const topBar = nav.querySelector('.flex.items-center.justify-between');
        
        if (topBar && !nav.querySelector('#mobile-hamburger')) {
            const hamburgerBtn = document.createElement('button');
            hamburgerBtn.id = 'mobile-hamburger';
            hamburgerBtn.className = 'md:hidden text-[#811026] dark:text-[#fecb32] focus:outline-none p-2 ml-auto';
            hamburgerBtn.innerHTML = '<span class="material-symbols-outlined text-3xl">menu</span>';
            topBar.appendChild(hamburgerBtn);
            
            const mobileMenu = document.createElement('div');
            mobileMenu.className = 'hidden md:hidden bg-white/95 dark:bg-[#1a1c1d]/95 backdrop-blur-md border-t border-outline-variant/30 overflow-hidden w-full';
            
            const mobileLinksDiv = document.createElement('div');
            mobileLinksDiv.className = 'flex flex-col px-8 py-6 space-y-4 font-["Work_Sans"] font-medium text-lg text-center';
            
            if (desktopLinksContainer) {
                Array.from(desktopLinksContainer.children).forEach(link => {
                    const clone = link.cloneNode(true);
                    clone.classList.remove('hidden', 'md:flex', 'md:inline-flex');
                    clone.className = clone.className + " block w-full";
                    mobileLinksDiv.appendChild(clone);
                });
            }
            if (rightButtonsContainer) {
                const separator = document.createElement('hr');
                separator.className = 'border-outline-variant/30 my-4 w-full';
                mobileLinksDiv.appendChild(separator);
                Array.from(rightButtonsContainer.children).forEach(btn => {
                    if (btn.id !== 'theme-toggle') {
                        const clone = btn.cloneNode(true);
                        clone.classList.remove('hidden', 'md:inline-flex', 'md:flex');
                        clone.className = clone.className + ' block w-full text-center mt-2';
                        mobileLinksDiv.appendChild(clone);
                    }
                });
            }
            mobileMenu.appendChild(mobileLinksDiv);
            nav.appendChild(mobileMenu);
            
            hamburgerBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        try {
            if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        } catch (e) {}

        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            try {
                if (document.documentElement.classList.contains('dark')) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }
            } catch (e) {}
        });
    }

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            observer.observe(el);
        });
    } else {
        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            el.classList.add('is-visible');
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }
});
