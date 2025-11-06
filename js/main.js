/* ============================================
   SGD SHIPPING - COMPLETE JAVASCRIPT
   ============================================ */

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Scrolling
    initSmoothScroll();
    
    // Navbar Scroll Effect
    initNavbarScroll();
    
    // Mobile Menu
    initMobileMenu();
    
    // Scroll Animations
    initScrollAnimations();
    
    // Form Handling
    initFormHandling();
    
});

// ===== SMOOTH SCROLLING =====
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links (starting with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Close mobile menu if open
                    const navMenu = document.getElementById('navMenu');
                    if (navMenu) {
                        navMenu.classList.remove('active');
                    }
                    
                    // Scroll to section
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Smooth scroll for buttons
    const ctaButtons = document.querySelectorAll('a[href^="#"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// ===== MOBILE MENU TOGGLE =====
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll('.about-card, .service-card, .feature-card, .spec-card');
    animateElements.forEach(el => observer.observe(el));
}

// ===== FORM HANDLING =====
function initFormHandling() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (!form || !successMessage) return;
    
    // Check if form was successfully submitted (via URL parameter)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showSuccessMessage();
    }
    
    // Add form submission handler for better UX
    form.addEventListener('submit', function(e) {
        // Let Netlify handle the submission
        // This is just for UI feedback
        const submitButton = form.querySelector('.btn-submit');
        if (submitButton) {
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
        }
    });
}

// ===== SHOW SUCCESS MESSAGE =====
function showSuccessMessage() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (!form || !successMessage) return;
    
    // Hide form
    form.classList.add('form-hidden');
    
    // Show success message
    successMessage.style.display = 'block';
    
    // Scroll to success message smoothly
    setTimeout(() => {
        successMessage.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }, 100);
    
    // Clear form fields
    form.reset();
    
    // Confetti effect (optional - subtle celebration)
    createConfetti();
}

// ===== RESET FORM (Send Another Message) =====
function resetForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (!form || !successMessage) return;
    
    // Hide success message with fade out
    successMessage.style.opacity = '0';
    setTimeout(() => {
        successMessage.style.display = 'none';
        successMessage.style.opacity = '1';
    }, 300);
    
    // Show form
    form.classList.remove('form-hidden');
    
    // Scroll to form
    setTimeout(() => {
        form.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }, 400);
    
    // Remove success parameter from URL
    const url = new URL(window.location);
    url.searchParams.delete('success');
    window.history.replaceState({}, document.title, url.pathname + url.hash);
}

// ===== CONFETTI EFFECT (Optional) =====
function createConfetti() {
    // Simple confetti effect for celebration
    const colors = ['#D4AF37', '#001F3F', '#ffffff'];
    const confettiCount = 30;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            createConfettiPiece(colors[Math.floor(Math.random() * colors.length)]);
        }, i * 30);
    }
}

function createConfettiPiece(color) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = color;
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.opacity = '1';
    confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
    confetti.style.transition = 'all 3s ease-out';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    confetti.style.borderRadius = '50%';
    
    document.body.appendChild(confetti);
    
    // Animate falling
    setTimeout(() => {
        confetti.style.top = window.innerHeight + 'px';
        confetti.style.opacity = '0';
        confetti.style.transform = 'rotate(' + (Math.random() * 720) + 'deg)';
    }, 50);
    
    // Remove after animation
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// ===== COUNTER ANIMATION FOR STATS =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ===== INITIALIZE COUNTERS WHEN IN VIEW =====
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const target = parseInt(statNumber.textContent);
            animateCounter(statNumber, target);
            statsObserver.unobserve(statNumber);
        }
    });
}, { threshold: 0.5 });

// Observe stat numbers
document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// ===== LAZY LOADING FOR IMAGES =====
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

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Add keyboard navigation for mobile menu
document.addEventListener('keydown', function(e) {
    const navMenu = document.getElementById('navMenu');
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        document.getElementById('mobileMenuToggle').focus();
    }
});

// ===== FORM VALIDATION ENHANCEMENT =====
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = '#ff4444';
        } else {
            this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
    });
    
    input.addEventListener('input', function() {
        if (this.style.borderColor === 'rgb(255, 68, 68)') {
            this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
    });
});

// ===== CONSOLE MESSAGE =====
console.log('%c🚢 SGD Shipping Website', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
console.log('%cReliable Barge Rental Services in Chittagong', 'color: #001F3F; font-size: 14px;');
console.log('%cBuilt with excellence ⚓', 'color: #666; font-size: 12px;');
