// ========================================
// Sara Celentani Property Manager
// Main JavaScript
// ========================================

// Navigation & Mobile Menu
// ========================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Navbar Scroll Effect
// ========================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Anchor Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Animations
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.service-card, .property-card, .vantaggio-card, .card, .testimonial-card, .stat-box, .experience-card'
    );
    
    animatedElements.forEach(el => observer.observe(el));
});

// Form Validation & Submission
// ========================================

const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Log data (in production, send to backend)
        console.log('Form submitted:', data);
        
        // Show success notification
        showNotification('Grazie! Ti contatterò presto.', 'success');
        
        // Reset form
        this.reset();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Notification System
// ========================================

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Set notification colors based on type
    const colors = {
        success: '#FFD700',
        error: '#D4AF37',
        info: '#FFC300'
    };
    
    notification.innerHTML = `
        <span class="notification-text">${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        background: colors[type] || colors.info,
        color: '#1a1a1a',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        maxWidth: '400px'
    });
    
    // Add close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    Object.assign(closeBtn.style, {
        background: 'none',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
        padding: '0',
        lineHeight: '1',
        color: '#1a1a1a'
    });
    
    // Add animation keyframes if not already added
    if (!document.querySelector('#notificationStyles')) {
        const style = document.createElement('style');
        style.id = 'notificationStyles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Append to body
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Form Input Enhancement
// ========================================

document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
        
        if (this.hasAttribute('required') && !this.value) {
            this.style.borderColor = '#D4AF37';
        } else if (this.value) {
            this.style.borderColor = '#FFD700';
        }
    });
    
    input.addEventListener('input', function() {
        if (this.style.borderColor) {
            this.style.borderColor = '';
        }
    });
});

// Lazy Loading Images
// ========================================

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Back to Top Button
// ========================================

function createBackToTop() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Torna su');
    
    Object.assign(button.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        background: '#FFD700',
        color: '#1a1a1a',
        border: 'none',
        borderRadius: '50%',
        fontSize: '1.5rem',
        cursor: 'pointer',
        zIndex: '999',
        opacity: '0',
        visibility: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    document.body.appendChild(button);
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTop);

// Console Welcome Message
// ========================================

console.log(
    '%c👋 Benvenuto sul sito di Sara Celentani Property Manager!',
    'color: #FFD700; font-size: 18px; font-weight: bold; font-family: Playfair Display, serif;'
);

console.log(
    '%c✨ Sito web creato con passione per l\'ospitalità toscana',
    'color: #1a1a1a; font-size: 14px; font-family: Poppins, sans-serif;'
);

// Performance Monitoring
// ========================================

window.addEventListener('load', () => {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`⚡ Pagina caricata in ${loadTime}ms`);
});

// Prevent FOUC (Flash of Unstyled Content)
// ========================================

document.documentElement.style.visibility = 'visible';

document.querySelectorAll('[data-gallery]').forEach(gallery => {
    const slides = gallery.querySelectorAll('.slide');
    const prev = gallery.querySelector('.prev');
    const next = gallery.querySelector('.next');
    let index = 0;
    let interval;

    const showSlide = i => {
        slides[index].classList.remove('active');
        index = (i + slides.length) % slides.length;
        slides[index].classList.add('active');
    };

    const startAuto = () => {
        interval = setInterval(() => showSlide(index + 1), 4000);
    };

    const stopAuto = () => clearInterval(interval);

    next.addEventListener('click', () => showSlide(index + 1));
    prev.addEventListener('click', () => showSlide(index - 1));

    gallery.addEventListener('mouseenter', stopAuto);
    gallery.addEventListener('mouseleave', startAuto);

    startAuto();
});
