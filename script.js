// ===== LANGUAGE SYSTEM =====
let currentLang = 'uk';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update all elements with data-uk / data-en attributes
    document.querySelectorAll('[data-uk][data-en]').forEach(el => {
        el.innerHTML = el.getAttribute('data-' + lang);
    });

    // Update lang toggle button
    const toggle = document.getElementById('langToggle');
    if (toggle) {
        const flag = toggle.querySelector('.lang-flag');
        const code = toggle.querySelector('.lang-code');
        if (lang === 'uk') {
            flag.textContent = '🇬🇧';
            code.textContent = 'EN';
        } else {
            flag.textContent = '🇺🇦';
            code.textContent = 'UA';
        }
    }

    // Update page title
    document.title = lang === 'uk'
        ? 'FormulyWord — Формули з фото у Word'
        : 'FormulyWord — Formulas from photos to Word';

    // Save preference
    try { localStorage.setItem('fw-lang', lang); } catch (e) {}
}

// ===== MAIN INIT =====
document.addEventListener('DOMContentLoaded', () => {

    // ===== LANGUAGE TOGGLE =====
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            setLanguage(currentLang === 'uk' ? 'en' : 'uk');
        });
    }

    // Restore saved language
    try {
        const saved = localStorage.getItem('fw-lang');
        if (saved && (saved === 'en' || saved === 'uk')) {
            setLanguage(saved);
        }
    } catch (e) {}

    // ===== BURGER MENU =====
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            burger.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                burger.classList.remove('active');
            });
        });
    }

    // ===== USAGE TABS =====
    const tabs = document.querySelectorAll('.usage-tab');
    const contents = document.querySelectorAll('.usage-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const targetEl = document.getElementById('tab-' + target);
            if (targetEl) targetEl.classList.add('active');
        });
    });

    // ===== SCROLL ANIMATIONS =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.feature-card, .pipeline-step, .req-card, .download-box, .donate-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== HEADER SHADOW =====
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.style.boxShadow = window.scrollY > 10
            ? '0 4px 20px rgba(0,0,0,0.4)'
            : 'none';
    });

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ===== TYPING EFFECT =====
    const badge = document.querySelector('.terminal-badge');
    if (badge) {
        const text = badge.textContent;
        badge.textContent = '';
        let i = 0;
        const typeInterval = setInterval(() => {
            badge.textContent += text[i];
            i++;
            if (i >= text.length) clearInterval(typeInterval);
        }, 60);
    }
});
