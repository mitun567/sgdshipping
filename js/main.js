// ========================================
// SGD Shipping - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== NAVIGATION FUNCTIONALITY ==========
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    function handleNavbarScroll() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Initial check
    handleNavbarScroll();
    
    // Scroll event listener
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // ========== SMOOTH SCROLLING ==========
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links (starting with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ========== SCROLL TO TOP BUTTON ==========
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    function handleScrollToTopVisibility() {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }
    
    // Initial check
    handleScrollToTopVisibility();
    
    // Scroll event listener
    window.addEventListener('scroll', handleScrollToTopVisibility);
    
    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ========== SCROLL ANIMATIONS ==========
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 200 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function handleScrollAnimations() {
        const animatedElements = document.querySelectorAll('.fade-in-up');
        
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.style.animationPlayState = 'running';
            }
        });
    }
    
    // Initial check
    handleScrollAnimations();
    
    // Scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);
    
    // ========== FORM VALIDATION & SUBMISSION ==========
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Add visual feedback for form fields
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        
        formInputs.forEach(input => {
            // Add focus event
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            // Add blur event
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
                
                // Validate on blur
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#ff4444';
                } else {
                    this.style.borderColor = '';
                }
            });
            
            // Add input event for real-time validation
            input.addEventListener('input', function() {
                if (this.hasAttribute('required')) {
                    if (this.value.trim()) {
                        this.style.borderColor = '#4CAF50';
                    } else {
                        this.style.borderColor = '';
                    }
                }
            });
        });
        
        // Email validation
        const emailInput = contactForm.querySelector('#email');
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (this.value && !emailPattern.test(this.value)) {
                    this.style.borderColor = '#ff4444';
                    showFormMessage('Please enter a valid email address', 'error');
                } else if (this.value) {
                    this.style.borderColor = '#4CAF50';
                }
            });
        }
        
        // Phone validation (optional field)
        const phoneInput = contactForm.querySelector('#phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function() {
                // Remove non-numeric characters except + and -
                this.value = this.value.replace(/[^\d+\-]/g, '');
            });
        }
        
        // Form submission
        contactForm.addEventListener('submit', function(e) {
            // Let Netlify handle the submission
            // Add loading state to button
            const submitBtn = this.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Netlify will handle the actual submission
            // This is just for UX feedback
        });
    }
    
    // Show form message function
    function showFormMessage(message, type) {
        // Remove any existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message form-message-${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 8px;
            font-weight: 500;
            text-align: center;
            animation: fadeInUp 0.5s ease-out;
            ${type === 'error' ? 'background: #ffe6e6; color: #cc0000; border: 1px solid #ff4444;' : ''}
            ${type === 'success' ? 'background: #e6f7e6; color: #006600; border: 1px solid #4CAF50;' : ''}
        `;
        
        contactForm.appendChild(messageDiv);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => messageDiv.remove(), 300);
        }, 5000);
    }
    
    // ========== ACTIVE NAVIGATION LINK ==========
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Initial check
    updateActiveNavLink();
    
    // Scroll event listener
    window.addEventListener('scroll', updateActiveNavLink);
    
    // ========== PARALLAX EFFECT ==========
    function handleParallax() {
        const scrolled = window.pageYOffset;
        
        // Hero background parallax
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const heroContent = heroSection.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        }
        
        // Wave parallax effect
        const waves = document.querySelectorAll('.waves');
        waves.forEach(wave => {
            wave.style.transform = `translateX(${-scrolled * 0.05}px)`;
        });
    }
    
    // Throttle parallax for better performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleParallax();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // ========== LAZY LOADING IMAGES ==========
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ========== ANIMATE NUMBERS ON SCROLL ==========
    function animateNumber(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    // Observe stat numbers
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = entry.target;
                const value = target.textContent.trim();
                
                // Extract number from text
                const numberMatch = value.match(/\d+/);
                if (numberMatch) {
                    const number = parseInt(numberMatch[0]);
                    target.classList.add('animated');
                    animateNumber(target, number);
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-number').forEach(stat => {
        statObserver.observe(stat);
    });
    
    // ========== KEYBOARD NAVIGATION ==========
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // ========== PERFORMANCE OPTIMIZATIONS ==========
    
    // Debounce function for resize events
    function debounce(func, wait) {
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
    
    // Handle window resize
    const handleResize = debounce(function() {
        // Close mobile menu on desktop view
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, 250);
    
    window.addEventListener('resize', handleResize);
    
    // ========== ACCESSIBILITY IMPROVEMENTS ==========
    
    // Add ARIA attributes dynamically
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileMenuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    
    mobileMenuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });
    
    // Focus trap for mobile menu
    const focusableElements = navMenu.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    navMenu.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
    
    // ========== CONSOLE WELCOME MESSAGE ==========
    console.log('%cSGD Shipping Website', 'font-size: 24px; font-weight: bold; color: #D4AF37;');
    console.log('%cPremier Barge Rental Services in Chittagong, Bangladesh', 'font-size: 14px; color: #001F3F;');
    console.log('%cWebsite loaded successfully! 🚢⚓', 'font-size: 12px; color: #666;');
    
    // ========== PERFORMANCE MONITORING ==========
    if (window.performance) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`%cPage Load Time: ${pageLoadTime}ms`, 'color: #4CAF50; font-weight: bold;');
            }, 0);
        });
    }
});

// ========== SERVICE WORKER REGISTRATION (Optional - for PWA) ==========
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment the following line if you add a service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

// ========== ERROR HANDLING ==========
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
});

// ========== NETLIFY FORM SUCCESS/ERROR HANDLING ==========
// Check URL parameters for Netlify form submission status
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('success')) {
    // Show success message
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success-message';
        successMessage.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #4CAF50, #45a049);
                color: white;
                padding: 2rem;
                border-radius: 15px;
                text-align: center;
                margin: 2rem auto;
                max-width: 600px;
                box-shadow: 0 10px 40px rgba(76, 175, 80, 0.3);
                animation: fadeInUp 0.8s ease-out;
            ">
                <i class="fas fa-check-circle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <h3 style="margin-bottom: 0.5rem; color: white;">Thank You!</h3>
                <p style="margin: 0; color: rgba(255,255,255,0.95);">
                    Your inquiry has been received successfully. We'll get back to you within 24 hours.
                </p>
            </div>
        `;
        contactSection.insertBefore(successMessage, contactSection.firstChild);
        
        // Scroll to success message
        setTimeout(() => {
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
        
        // Remove success parameter from URL
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    }
}