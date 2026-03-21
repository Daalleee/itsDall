// Particles.js initialization
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#4e89ae'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#4e89ae',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Typing animation
const typingText = document.querySelector('.typing-text');
const text = "Informatics Student specializing in Artificial Intelligence and Software System Development";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.innerHTML = text.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing animation after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Skill bars animation - trigger when skills section is in view
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const position = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        }
    });
};

// Run animation when page loads
window.addEventListener('load', animateSkillBars);

// Run animation when scrolling
window.addEventListener('scroll', animateSkillBars);

// Enhanced form validation and submission
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

const showError = (elementId, message) => {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add('show');
};

const hideError = (elementId) => {
    const errorElement = document.getElementById(elementId);
    errorElement.classList.remove('show');
};

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validateForm = () => {
    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Name validation
    if (name === '') {
        showError('name-error', 'Name is required');
        isValid = false;
    } else if (name.length < 2) {
        showError('name-error', 'Name must be at least 2 characters');
        isValid = false;
    } else {
        hideError('name-error');
    }

    // Email validation
    if (email === '') {
        showError('email-error', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    } else {
        hideError('email-error');
    }

    // Subject validation
    if (subject === '') {
        showError('subject-error', 'Subject is required');
        isValid = false;
    } else if (subject.length < 5) {
        showError('subject-error', 'Subject must be at least 5 characters');
        isValid = false;
    } else {
        hideError('subject-error');
    }

    // Message validation
    if (message === '') {
        showError('message-error', 'Message is required');
        isValid = false;
    } else if (message.length < 10) {
        showError('message-error', 'Message must be at least 10 characters');
        isValid = false;
    } else {
        hideError('message-error');
    }

    return isValid;
};

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    // Show loading state
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    submitBtn.disabled = true;

    // Simulate form submission (since it's not connected to backend)
    setTimeout(() => {
        // Hide loading state
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;

        // Show success message
        formMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';

        // Reset form
        contactForm.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }, 2000);
});

// Real-time validation
document.getElementById('name').addEventListener('input', () => {
    const name = document.getElementById('name').value.trim();
    if (name !== '' && name.length >= 2) {
        hideError('name-error');
    }
});

document.getElementById('email').addEventListener('input', () => {
    const email = document.getElementById('email').value.trim();
    if (email !== '' && validateEmail(email)) {
        hideError('email-error');
    }
});

document.getElementById('subject').addEventListener('input', () => {
    const subject = document.getElementById('subject').value.trim();
    if (subject !== '' && subject.length >= 5) {
        hideError('subject-error');
    }
});

document.getElementById('message').addEventListener('input', () => {
    const message = document.getElementById('message').value.trim();
    if (message !== '' && message.length >= 10) {
        hideError('message-error');
    }
});

// Old form submission handling removed - replaced with enhanced version above

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements to animate
document.querySelectorAll('.project-card, .about-text, .about-stats, .contact-item, .contact-form, .skill-category').forEach(el => {
    el.classList.add('not-animated');
    observer.observe(el);
});

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Add animation to project links
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 500);
    });
});

// Dark/Light Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved theme preference or respect OS preference
const savedTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

let currentTheme = 'light';

// Set theme based on saved preference or OS preference
if (savedTheme) {
    currentTheme = savedTheme;
} else if (prefersDarkScheme.matches) {
    currentTheme = 'dark';
}

// Apply initial theme
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// Toggle theme function
function toggleTheme() {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        currentTheme = 'light';
    } else {
        body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        currentTheme = 'dark';
    }
    
    // Save theme preference
    localStorage.setItem('theme', currentTheme);
}

// Add event listener to theme toggle
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Listen for OS preference changes
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            body.classList.add('dark-theme');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            currentTheme = 'dark';
        } else {
            body.classList.remove('dark-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            currentTheme = 'light';
        }
        localStorage.setItem('theme', currentTheme);
    }
});

// ========================================
// Project Gallery & Full Gallery Functions
// ========================================

// Gallery data for each project - ALL SCREENSHOTS
const projectGalleries = {
    'playstation': {
        title: 'PlayStation Rental Application',
        images: [
            'project/project1/dashboard-admin.png',
            'project/project1/halaman-beranda-pelanggan.png',
            'project/project1/halaman-beranda-pelanggan2.png',
            'project/project1/halaman-beranda-pelanggan3.png',
            'project/project1/halaman-beranda-pelanggan4.png',
            'project/project1/halaman-beranda-pemilik.png',
            'project/project1/halaman-daftar-sewa-kasir.png',
            'project/project1/halaman-dashboard-kasir.png',
            'project/project1/halaman-keranjang-pelanggan.png',
            'project/project1/halaman-laporan-pendapatan-pemilik.png',
            'project/project1/halaman-login.png',
            'project/project1/halaman-register1.png',
            'project/project1/halaman-register2.png',
            'project/project1/halaman-riwayat-sewa-pelanggan.png',
            'project/project1/halaman-sewa-game-pelanggan.png',
            'project/project1/halaman-sewa-game2-pelanggan.png',
            'project/project1/halaman-sewa-ps-pelanggan.png',
            'project/project1/halaman-sewa-ps2-pelanggan.png',
            'project/project1/halaman-status-unit-pemilik.png',
            'project/project1/halaman-transaksi-kasir.png',
            'project/project1/h.png',
            'project/project1/laporan-admin.png',
            'project/project1/tambah-aksesoris-admin.png',
            'project/project1/tambah-game-admin.png',
            'project/project1/tambah-kasir-admin.png',
            'project/project1/tambah-pelanggan-admin.png',
            'project/project1/tambah-pemilik-admin.png',
            'project/project1/tambah-unit-ps-admin.png'
        ],
        captions: [
            'Dashboard Admin',
            'Beranda Pelanggan',
            'Beranda Pelanggan 2',
            'Beranda Pelanggan 3',
            'Beranda Pelanggan 4',
            'Beranda Pemilik',
            'Daftar Sewa Kasir',
            'Dashboard Kasir',
            'Keranjang Pelanggan',
            'Laporan Pendapatan',
            'Login',
            'Register 1',
            'Register 2',
            'Riwayat Sewa',
            'Sewa Game',
            'Sewa Game 2',
            'Sewa PS',
            'Sewa PS 2',
            'Status Unit',
            'Transaksi Kasir',
            'Home',
            'Laporan Admin',
            'Tambah Aksesoris',
            'Tambah Game',
            'Tambah Kasir',
            'Tambah Pelanggan',
            'Tambah Pemilik',
            'Tambah Unit PS'
        ],
        github: 'https://github.com/Daalleee/playstation.git'
    },
    'marketplace': {
        title: 'Marketplace Application',
        images: [
            'project/project2/01-authentication/login.png',
            'project/project2/01-authentication/register.png',
            'project/project2/01-authentication/login-customer-home.png',
            'project/project2/01-authentication/login-customer-home-2.png',
            'project/project2/02-homepage-marketplace/homepage-1.png',
            'project/project2/02-homepage-marketplace/homepage-2.png',
            'project/project2/02-homepage-marketplace/homepage-3.png',
            'project/project2/02-homepage-marketplace/marketplace.png',
            'project/project2/03-user-dashboard/sell-form.png',
            'project/project2/03-user-dashboard/sell-form-2.png',
            'project/project2/04-shopping-checkout/cart.png',
            'project/project2/05-order-management/orders.png',
            'project/project2/06-communication/messages.png'
        ],
        captions: [
            'Login',
            'Register',
            'Login Customer Home',
            'Login Customer Home 2',
            'Homepage 1',
            'Homepage 2',
            'Homepage 3',
            'Marketplace',
            'Sell Form',
            'Sell Form 2',
            'Shopping Cart',
            'Orders',
            'Messages'
        ],
        github: 'https://github.com/Daalleee/marketplace.git'
    },
    'dapur-roti': {
        title: 'Dapur Roti Application',
        images: [
            'project/project3/01-homepage.png',
            'project/project3/02-homepage-products.png',
            'project/project3/03-kategori.png',
            'project/project3/04-login.png',
            'project/project3/05-admin-dashboard.png',
            'project/project3/06-admin-orders.png',
            'project/project3/07-admin-add-product.png',
            'project/project3/08-admin-add-category.png',
            'project/project3/09-admin-reports.png'
        ],
        captions: [
            'Homepage',
            'Products',
            'Categories',
            'Login',
            'Admin Dashboard',
            'Admin Orders',
            'Add Product',
            'Add Category',
            'Reports'
        ],
        github: 'https://github.com/Daalleee/dapur-roti.git'
    },
    'rental-motor': {
        title: 'Rental Motor Application',
        images: [
            'project/project4/auth-login.png',
            'project/project4/auth-register.png',
            'project/project4/user-dashboard-motors.png',
            'project/project4/admin-motor-management.png',
            'project/project4/admin-rentals.png',
            'project/project4/kelola_pengguna_admin.png',
            'project/project4/kasir-daftar-sewa.png',
            'project/project4/kasir-status-sewa.png'
        ],
        captions: [
            'Login',
            'Register',
            'User Dashboard',
            'Motor Management',
            'Rentals Management',
            'User Management',
            'Daftar Sewa',
            'Status Sewa'
        ],
        github: 'https://github.com/Daalleee/project-rental-motor.git'
    }
};

// Full gallery state
let currentFullGalleryProject = null;
let currentFullGalleryIndex = 0;

// Slide gallery for project cards (mini slider)
function slideGallery(button, direction) {
    const gallery = button.closest('.project-gallery');
    const slider = gallery.querySelector('.project-image-slider');
    const screenshots = slider.querySelectorAll('.project-screenshot');
    const dots = gallery.querySelectorAll('.gallery-dots .dot');
    
    let activeIndex = 0;
    screenshots.forEach((img, index) => {
        if (img.classList.contains('active')) {
            activeIndex = index;
        }
    });
    
    let newIndex = activeIndex + direction;
    if (newIndex < 0) newIndex = screenshots.length - 1;
    if (newIndex >= screenshots.length) newIndex = 0;
    
    screenshots[activeIndex].classList.remove('active');
    screenshots[newIndex].classList.add('active');
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[newIndex].classList.add('active');
}

// Go to specific slide in project card
function goToSlide(dot, index) {
    const gallery = dot.closest('.project-card');
    const slider = gallery.querySelector('.project-image-slider');
    const screenshots = slider.querySelectorAll('.project-screenshot');
    const dots = gallery.querySelectorAll('.gallery-dots .dot');
    
    screenshots.forEach(img => img.classList.remove('active'));
    screenshots[index].classList.add('active');
    
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
}

// Open Full Gallery Modal
function openFullGallery(projectName) {
    const gallery = projectGalleries[projectName];
    if (!gallery) return;
    
    currentFullGalleryProject = projectName;
    currentFullGalleryIndex = 0;
    
    const modal = document.getElementById('fullGalleryModal');
    const galleryTitle = document.getElementById('gallery-title');
    const galleryImage = document.getElementById('fullGalleryImage');
    const galleryCaption = document.getElementById('fullGalleryCaption');
    const galleryDots = document.getElementById('fullGalleryDots');
    const githubLink = document.getElementById('fullGalleryGithubLink');
    
    // Set title
    galleryTitle.textContent = gallery.title;
    
    // Set initial image
    galleryImage.src = gallery.images[0];
    galleryCaption.textContent = gallery.captions[0];
    githubLink.href = gallery.github;
    
    // Generate dots
    galleryDots.innerHTML = '';
    gallery.images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.onclick = () => goToFullGalleryImage(index);
        galleryDots.appendChild(dot);
    });
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Full Gallery Modal
function closeFullGallery() {
    const modal = document.getElementById('fullGalleryModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentFullGalleryProject = null;
    currentFullGalleryIndex = 0;
}

// Change full gallery image
function changeFullGalleryImage(direction) {
    if (!currentFullGalleryProject) return;
    
    const gallery = projectGalleries[currentFullGalleryProject];
    let newIndex = currentFullGalleryIndex + direction;
    
    if (newIndex < 0) newIndex = gallery.images.length - 1;
    if (newIndex >= gallery.images.length) newIndex = 0;
    
    goToFullGalleryImage(newIndex);
}

// Go to specific image in full gallery
function goToFullGalleryImage(index) {
    const gallery = projectGalleries[currentFullGalleryProject];
    const galleryImage = document.getElementById('fullGalleryImage');
    const galleryCaption = document.getElementById('fullGalleryCaption');
    const galleryDots = document.getElementById('fullGalleryDots');
    
    currentFullGalleryIndex = index;
    
    // Fade out effect
    galleryImage.style.opacity = '0';
    
    setTimeout(() => {
        galleryImage.src = gallery.images[index];
        galleryCaption.textContent = gallery.captions[index];
        galleryImage.style.opacity = '1';
        
        // Update dots
        const dots = galleryDots.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }, 200);
}

// Keyboard navigation for full gallery
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('fullGalleryModal');
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeFullGallery();
    } else if (e.key === 'ArrowLeft') {
        changeFullGalleryImage(-1);
    } else if (e.key === 'ArrowRight') {
        changeFullGalleryImage(1);
    }
});

// Close modal when clicking outside image
document.getElementById('fullGalleryModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'fullGalleryModal') {
        closeFullGallery();
    }
});