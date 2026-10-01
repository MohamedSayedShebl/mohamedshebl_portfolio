/* ========== TYPING EFFECT ========== */
const words = [
    'Flutter Developer',
    'Software Engineer',
    'FastAPI Enthusiast',
    'Fresh Graduate',
    'Problem Solver'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typingText');

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 500);
});

/* ========== NAVBAR SCROLL ========== */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* ========== MOBILE HAMBURGER ========== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

/* ========== THEME TOGGLE ========== */
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(isDark) {
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme === 'dark');
} else {
    setTheme(prefersDark.matches);
}

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
});

/* ========== SCROLL ANIMATIONS (AOS-like) ========== */
const animateElements = () => {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight - 80) {
            el.classList.add('aos-animate');
        }
    });
};

window.addEventListener('load', animateElements);
window.addEventListener('scroll', animateElements);
window.addEventListener('resize', animateElements);

/* ========== SKILL BAR ANIMATION ON SCROLL ========== */
const skillBars = () => {
    const fills = document.querySelectorAll('.skill-fill');
    fills.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight - 50) {
            const width = bar.getAttribute('style').match(/width:(\d+)%/);
            if (width) {
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width[1] + '%';
                }, 200);
            }
        }
    });
};

window.addEventListener('load', skillBars);

/* ========== ACTIVE NAV LINK HIGHLIGHT ========== */
const sections = document.querySelectorAll('.section, .hero');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

/* ========== PARALLAX GRADIENT SPHERES ========== */
document.addEventListener('mousemove', (e) => {
    const spheres = document.querySelectorAll('.gradient-sphere');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    spheres.forEach((sphere, i) => {
        const factor = i === 0 ? 1 : -0.5;
        sphere.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});

/* ========== SMOOTH REVEAL ON PAGE LOAD ========== */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

/* ========== PROJECT SCREENSHOT GALLERIES ==========
   Drop your screenshots into screenshots/<project>/ and list the file
   names below. Files that don't exist yet are simply skipped, so the
   placeholder stays visible until you add them. */
const projectScreenshots = {
    tourmate: [
        'screenshots/tourmate/1.png',
        'screenshots/tourmate/2.png',
        'screenshots/tourmate/3.png',
        'screenshots/tourmate/4.png',
        'screenshots/tourmate/5.png',
        'screenshots/tourmate/6.png',
        'screenshots/tourmate/7.png',
        'screenshots/tourmate/8.png',
        'screenshots/tourmate/9.png',
        'screenshots/tourmate/10.png',
        'screenshots/tourmate/11.png',
        'screenshots/tourmate/12.png',
        'screenshots/tourmate/13.png',
        'screenshots/tourmate/14.png'
    ],
    freshmart: [
        'screenshots/freshmart/Screenshot_20261001_124454.png',
        'screenshots/freshmart/Screenshot_20261001_124654.png',
        'screenshots/freshmart/Screenshot_20261001_124723.png',
        'screenshots/freshmart/Screenshot_20261001_124731.png',
        'screenshots/freshmart/Screenshot_20261001_124819.png',
        'screenshots/freshmart/Screenshot_20261001_124827.png',
        'screenshots/freshmart/Screenshot_20261001_124850.png',
        'screenshots/freshmart/Screenshot_20261001_124858.png',
        'screenshots/freshmart/Screenshot_20261001_124909.png',
        'screenshots/freshmart/Screenshot_20261001_124921.png',
        'screenshots/freshmart/Screenshot_20261001_124933.png'
    ],
    univa: [
        'screenshots/univa/1.png',
        'screenshots/univa/2.png',
        'screenshots/univa/3.png'
    ]
};

const galleries = {};

document.querySelectorAll('[data-gallery]').forEach(container => {
    const key = container.dataset.gallery;
    const main = container.querySelector('.gallery-main');
    const counter = container.querySelector('.gallery-counter');
    const candidates = projectScreenshots[key] || [];
    const results = new Array(candidates.length).fill(null);

    const gallery = {
        list: [],
        index: 0,
        current: null
    };

    gallery.render = () => {
        if (!gallery.list.length) return;
        gallery.index = (gallery.index + gallery.list.length) % gallery.list.length;
        gallery.current = gallery.list[gallery.index];
        main.src = gallery.current;
        main.hidden = false;
        container.classList.add('loaded');
        counter.textContent = (gallery.index + 1) + ' / ' + gallery.list.length;
        if (lightboxKey === key) syncLightbox();
    };

    gallery.step = dir => {
        if (!gallery.list.length) return;
        gallery.index += dir;
        gallery.render();
    };

    gallery.update = () => {
        gallery.list = results.filter(Boolean);
        if (!gallery.list.length) return;
        if (gallery.current && gallery.list.includes(gallery.current)) {
            gallery.index = gallery.list.indexOf(gallery.current);
            counter.textContent = (gallery.index + 1) + ' / ' + gallery.list.length;
        } else {
            gallery.index = 0;
            gallery.render();
        }
    };

    candidates.forEach((src, i) => {
        const img = new Image();
        img.onload = () => {
            results[i] = src;
            gallery.update();
        };
        img.src = src;
    });

    container.querySelector('.gallery-prev').addEventListener('click', e => {
        e.stopPropagation();
        gallery.step(-1);
    });
    container.querySelector('.gallery-next').addEventListener('click', e => {
        e.stopPropagation();
        gallery.step(1);
    });
    container.addEventListener('click', () => {
        if (container.classList.contains('loaded')) openLightbox(key);
    });

    galleries[key] = gallery;
});

/* ========== LIGHTBOX ========== */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCounter = document.getElementById('lightboxCounter');
let lightboxKey = null;

function syncLightbox() {
    const gallery = galleries[lightboxKey];
    if (!gallery || !gallery.list.length) return;
    lightboxImg.src = gallery.list[gallery.index];
    lightboxCounter.textContent = (gallery.index + 1) + ' / ' + gallery.list.length;
}

function openLightbox(key) {
    const gallery = galleries[key];
    if (!gallery || !gallery.list.length) return;
    lightboxKey = key;
    lightbox.hidden = false;
    requestAnimationFrame(() => lightbox.classList.add('open'));
    document.body.style.overflow = 'hidden';
    syncLightbox();
}

function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
        lightbox.hidden = true;
        lightboxImg.src = '';
    }, 300);
    lightboxKey = null;
}

function lightboxStep(dir) {
    const gallery = galleries[lightboxKey];
    if (!gallery) return;
    gallery.index += dir;
    gallery.render();
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => lightboxStep(-1));
document.getElementById('lightboxNext').addEventListener('click', () => lightboxStep(1));

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
    if (!lightboxKey) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxStep(-1);
    if (e.key === 'ArrowRight') lightboxStep(1);
});
