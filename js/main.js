/* ============================================
   AUTEVES ACADEMY - MAIN JAVASCRIPT
   Premium Educational Website
   ============================================ */

(function() {
    'use strict';

    /* ============ PRELOADER ============ */
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.classList.add('loaded');
            setTimeout(() => preloader.remove(), 600);
            initAnimations();
        }, 1800);
    });

    /* ============ LOGO ANIMATION (handled in CSS) ============ */

    /* ============ CUSTOM CURSOR ============ */
    const cursor = document.querySelector('.custom-cursor');
    const follow = document.querySelector('.cursor-follow');
    if (cursor && follow && window.innerWidth > 991) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            setTimeout(() => {
                follow.style.left = e.clientX + 'px';
                follow.style.top = e.clientY + 'px';
            }, 80);
        });
        document.querySelectorAll('a, button, .course-card, .ai-card, .feature-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                follow.style.width = '60px';
                follow.style.height = '60px';
                follow.style.borderColor = 'var(--accent)';
            });
            el.addEventListener('mouseleave', () => {
                follow.style.width = '36px';
                follow.style.height = '36px';
                follow.style.borderColor = 'var(--highlight)';
            });
        });
    }

    /* ============ NAVBAR SCROLL ============ */
    const navbar = document.getElementById('mainNav');
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        if (window.scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ============ SMOOTH SCROLL ============ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                // Close mobile menu
                const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('mobileMenu'));
                if (offcanvas) offcanvas.hide();
            }
        });
    });

    /* ============ TYPING EFFECT ============ */
    const typedWords = ['Tomorrow.', 'Careers.', 'Success.', 'Futures.', 'Dreams.'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedEl = document.getElementById('typed');

    function typeEffect() {
        const current = typedWords[wordIndex];
        if (isDeleting) {
            typedEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 60 : 120;

        if (!isDeleting && charIndex === current.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % typedWords.length;
            speed = 400;
        }

        setTimeout(typeEffect, speed);
    }

    /* ============ ANIMATED COUNTERS ============ */
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            updateCounter();
        });
    }

    /* ============ PARTICLES ============ */
    function createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.width = (Math.random() * 4 + 2) + 'px';
            particle.style.height = particle.style.width;
            container.appendChild(particle);
        }
    }

    /* ============ COURSES DATA ============ */
    const coursesData = {
        computer: [
            { title: 'HTML5', icon: 'fa-brands fa-html5', duration: '2 Weeks', projects: 3, level: 'Beginner', fee: '₹2,999' },
            { title: 'CSS3', icon: 'fa-brands fa-css3-alt', duration: '3 Weeks', projects: 4, level: 'Beginner', fee: '₹3,499' },
            { title: 'JavaScript', icon: 'fa-brands fa-js', duration: '6 Weeks', projects: 6, level: 'Intermediate', fee: '₹6,999' },
            { title: 'Bootstrap 5', icon: 'fa-brands fa-bootstrap', duration: '2 Weeks', projects: 3, level: 'Intermediate', fee: '₹3,499' },
            { title: 'MS Office Mastery', icon: 'fa-brands fa-microsoft', duration: '4 Weeks', projects: 4, level: 'Beginner', fee: '₹4,999' },
            { title: 'Excel Mastery', icon: 'fa-solid fa-file-excel', duration: '3 Weeks', projects: 3, level: 'Intermediate', fee: '₹3,999' },
            { title: 'MySQL', icon: 'fa-solid fa-database', duration: '4 Weeks', projects: 4, level: 'Intermediate', fee: '₹5,499' },
            { title: 'MongoDB', icon: 'fa-solid fa-leaf', duration: '3 Weeks', projects: 3, level: 'Intermediate', fee: '₹4,999' },
            { title: 'Java', icon: 'fa-brands fa-java', duration: '8 Weeks', projects: 6, level: 'Intermediate', fee: '₹9,999' },
            { title: 'Spring Boot', icon: 'fa-solid fa-seedling', duration: '6 Weeks', projects: 4, level: 'Advanced', fee: '₹8,999' },
            { title: 'Python', icon: 'fa-brands fa-python', duration: '8 Weeks', projects: 6, level: 'Beginner', fee: '₹8,999' },
            { title: 'Data Analytics', icon: 'fa-solid fa-chart-line', duration: '10 Weeks', projects: 5, level: 'Intermediate', fee: '₹12,999' },
            { title: 'React.js', icon: 'fa-brands fa-react', duration: '8 Weeks', projects: 5, level: 'Advanced', fee: '₹11,999' },
            { title: 'Node.js', icon: 'fa-brands fa-node-js', duration: '6 Weeks', projects: 4, level: 'Advanced', fee: '₹9,999' },
            { title: 'Express.js', icon: 'fa-solid fa-server', duration: '3 Weeks', projects: 3, level: 'Advanced', fee: '₹5,999' },
            { title: 'NestJS', icon: 'fa-solid fa-cat', duration: '4 Weeks', projects: 3, level: 'Advanced', fee: '₹7,999' },
            { title: 'Next.js', icon: 'fa-solid fa-n', duration: '4 Weeks', projects: 3, level: 'Advanced', fee: '₹7,999' },
            { title: 'Git & GitHub', icon: 'fa-brands fa-github', duration: '1 Week', projects: 2, level: 'Beginner', fee: '₹1,999' },
            { title: 'Version Control', icon: 'fa-solid fa-code-branch', duration: '1 Week', projects: 2, level: 'Beginner', fee: '₹1,999' },
            { title: '10 Live Projects', icon: 'fa-solid fa-laptop-code', duration: '12 Weeks', projects: 10, level: 'Advanced', fee: '₹14,999' },
            { title: 'AI Tools', icon: 'fa-solid fa-robot', duration: '2 Weeks', projects: 3, level: 'All Levels', fee: '₹3,999' },
            { title: 'Prompt Engineering', icon: 'fa-solid fa-wand-magic-sparkles', duration: '2 Weeks', projects: 3, level: 'All Levels', fee: '₹3,499' },
            { title: 'ChatGPT Mastery', icon: 'fa-solid fa-comments', duration: '1 Week', projects: 2, level: 'Beginner', fee: '₹2,499' },
            { title: 'GitHub Copilot', icon: 'fa-brands fa-github', duration: '1 Week', projects: 2, level: 'Intermediate', fee: '₹2,999' },
            { title: 'VS Code AI', icon: 'fa-solid fa-code', duration: '1 Week', projects: 2, level: 'Beginner', fee: '₹1,999' }
        ],
        accounting: [
            { title: 'Manual Accounting', icon: 'fa-solid fa-book', duration: '4 Weeks', projects: 3, level: 'Beginner', fee: '₹4,999' },
            { title: 'MS Office', icon: 'fa-brands fa-microsoft', duration: '4 Weeks', projects: 4, level: 'Beginner', fee: '₹4,999' },
            { title: 'Tally Prime', icon: 'fa-solid fa-calculator', duration: '6 Weeks', projects: 5, level: 'Intermediate', fee: '₹7,999' },
            { title: 'GST', icon: 'fa-solid fa-file-invoice', duration: '3 Weeks', projects: 3, level: 'Intermediate', fee: '₹5,499' },
            { title: 'Zoho Books', icon: 'fa-solid fa-book-open', duration: '4 Weeks', projects: 4, level: 'Intermediate', fee: '₹6,499' },
            { title: 'Gulf VAT', icon: 'fa-solid fa-landmark', duration: '3 Weeks', projects: 3, level: 'Intermediate', fee: '₹5,999' },
            { title: 'DIFA', icon: 'fa-solid fa-certificate', duration: '6 Months', projects: 8, level: 'Advanced', fee: '₹24,999' },
            { title: 'PGDIFA', icon: 'fa-solid fa-award', duration: '1 Year', projects: 12, level: 'Professional', fee: '₹39,999' }
        ],
        technical: [
            { title: 'Laptop Repairing', icon: 'fa-solid fa-laptop', duration: '3 Months', projects: 6, level: 'Beginner', fee: '₹14,999' },
            { title: 'Desktop Repairing', icon: 'fa-solid fa-computer', duration: '2 Months', projects: 5, level: 'Beginner', fee: '₹11,999' },
            { title: 'Printer Repairing', icon: 'fa-solid fa-print', duration: '1 Month', projects: 3, level: 'Beginner', fee: '₹6,999' },
            { title: 'Networking', icon: 'fa-solid fa-network-wired', duration: '3 Months', projects: 5, level: 'Intermediate', fee: '₹16,999' },
            { title: 'Automation', icon: 'fa-solid fa-gears', duration: '2 Months', projects: 4, level: 'Intermediate', fee: '₹12,999' },
            { title: 'CCTV Installation', icon: 'fa-solid fa-video', duration: '1 Month', projects: 3, level: 'Beginner', fee: '₹7,999' },
            { title: 'Hardware Troubleshooting', icon: 'fa-solid fa-screwdriver-wrench', duration: '2 Months', projects: 5, level: 'Intermediate', fee: '₹10,999' }
        ]
    };

    function renderCourses(category) {
        const grid = document.getElementById(category + '-courses');
        if (!grid) return;
        grid.innerHTML = coursesData[category].map(course => `
            <div class="course-card">
                <div class="course-image">
                    <i class="${course.icon}"></i>
                    <span class="course-level">${course.level}</span>
                </div>
                <div class="course-body">
                    <h5 class="course-title">${course.title}</h5>
                    <div class="course-meta">
                        <div class="course-meta-item">
                            <i class="bi bi-clock"></i>
                            <span>${course.duration}</span>
                        </div>
                        <div class="course-meta-item">
                            <i class="bi bi-kanban"></i>
                            <span>${course.projects} Projects</span>
                        </div>
                    </div>
                    <div class="course-footer">
                        <div class="course-fee">
                            ${course.fee}
                            <small>Complete Course</small>
                        </div>
                        <a href="#contact" class="btn-enroll">Enroll Now</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Initial render
    renderCourses('computer');
    renderCourses('accounting');
    renderCourses('technical');

    // Course tabs
    document.querySelectorAll('.course-tabs .nav-link').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.course-tabs .nav-link').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-course');
            document.querySelectorAll('.course-grid').forEach(g => g.classList.add('d-none'));
            document.getElementById(category + '-courses').classList.remove('d-none');
        });
    });

    /* ============ INIT ANIMATIONS ============ */
    function initAnimations() {
        // AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true,
                offset: 80
            });
        }

        // Typing effect
        typeEffect();

        // Counter animation with IntersectionObserver
        const counterSection = document.querySelector('.hero-stats');
        if (counterSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        observer.disconnect();
                    }
                });
            }, { threshold: 0.3 });
            observer.observe(counterSection);
        }

        // Particles
        createParticles();

        // GSAP Hero Animation
        if (typeof gsap !== 'undefined') {
            gsap.from('.hero-badge', { opacity: 0, y: 30, duration: 1, delay: 0.2 });
            gsap.from('.hero-title .title-line', {
                opacity: 0, y: 50, duration: 1, stagger: 0.2, delay: 0.4,
                ease: 'power3.out'
            });
            gsap.from('.hero-subtitle', { opacity: 0, y: 30, duration: 1, delay: 1 });
            gsap.from('.stat-item', {
                opacity: 0, y: 30, duration: 0.8, stagger: 0.1, delay: 1.5
            });
        }

        // Swiper - Projects
        if (typeof Swiper !== 'undefined') {
            new Swiper('.projectsSwiper', {
                slidesPerView: 1,
                spaceBetween: 24,
                loop: true,
                autoplay: { delay: 3000, disableOnInteraction: false },
                pagination: { el: '.projectsSwiper .swiper-pagination', clickable: true },
                breakpoints: {
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 }
                }
            });

            // Swiper - Testimonials
            new Swiper('.testimonialsSwiper', {
                slidesPerView: 1,
                spaceBetween: 24,
                loop: true,
                autoplay: { delay: 4000, disableOnInteraction: false },
                pagination: { el: '.testimonialsSwiper .swiper-pagination', clickable: true },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 }
                }
            });

            // Swiper - Partners
            new Swiper('.partnersSwiper', {
                slidesPerView: 2,
                spaceBetween: 20,
                loop: true,
                autoplay: { delay: 2000, disableOnInteraction: false },
                breakpoints: {
                    576: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    992: { slidesPerView: 5 },
                    1200: { slidesPerView: 6 }
                }
            });
        }

        // GSAP ScrollTrigger animations
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            // Feature cards stagger
            gsap.utils.toArray('.feature-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: { trigger: card, start: 'top 85%' },
                    opacity: 0, y: 50, duration: 0.8, delay: i * 0.1
                });
            });

            // Parallax blobs
            gsap.to('.blob-1', {
                scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1 },
                y: -100
            });
            gsap.to('.blob-2', {
                scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1 },
                y: 100
            });
        }
    }

    /* ============ CONTACT FORM ============ */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Form validation
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const course = document.getElementById('course').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate required fields
            if (!name) {
                alert('Please enter your name');
                return;
            }
            if (!phone) {
                alert('Please enter your phone number');
                return;
            }
            // Validate phone number (10 digits)
            if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
                alert('Please enter a valid 10-digit phone number');
                return;
            }
            if (!email) {
                alert('Please enter your email address');
                return;
            }
            // Validate email format
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            if (!course) {
                alert('Please select a course');
                return;
            }

            // Send to WhatsApp
            const whatsappMessage = `Hello Auteves Academy,%0A%0AI am interested in your courses.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${phone}%0AEmail: ${encodeURIComponent(email)}%0ACourse: ${encodeURIComponent(course)}%0AMessage: ${encodeURIComponent(message || 'No additional message')}%0A%0AThank you!`;
            const whatsappUrl = `https://wa.me/919446447841?text=${whatsappMessage}`;

            const btn = this.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Opening WhatsApp...';
            btn.style.background = 'linear-gradient(135deg, #4ade80, #22c55e)';
            btn.disabled = true;

            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.disabled = false;
                this.reset();
            }, 1000);
        });
    }

    /* ============ NEWSLETTER ============ */
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const original = btn.innerHTML;
            btn.innerHTML = '<i class="bi bi-check-lg"></i>';
            setTimeout(() => {
                btn.innerHTML = original;
                this.reset();
            }, 2000);
        });
    }

    /* ============ MOUSE PARALLAX ============ */
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        document.querySelectorAll('.floating-icon').forEach((icon, i) => {
            const speed = (i + 1) * 0.5;
            icon.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });

    /* ============ ACTIVE NAV LINK ON SCROLL ============ */
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 100;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

})();