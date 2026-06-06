/* =====================================================
   মোহনা এন্টারপ্রাইজ — script.js
   - Mobile menu toggle
   - Navbar scroll background
   - Active link on scroll
   - Swiper for reviews (with loop)
   - ScrollReveal animations
   - Newsletter + booking form validation
   - Click outside to close mobile menu
===================================================== */

(function () {
    'use strict';

    /* ---------- Mobile Menu ---------- */
    const nav = document.getElementById('nav');
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    const navClose = document.getElementById('navClose');
    const navLinks = document.querySelectorAll('.nav__link');

    const openMenu = () => {
        if (navMenu) navMenu.classList.add('is-open');
        // Prevent body scroll when menu is open
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        if (navMenu) navMenu.classList.remove('is-open');
        // Restore body scroll
        document.body.style.overflow = '';
    };

    if (navToggle) navToggle.addEventListener('click', openMenu);
    if (navClose) navClose.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    /* ---------- Click outside to close mobile menu ---------- */
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('is-open')) {
            // Check if click is outside menu and not on toggle button
            if (!navMenu.contains(e.target) && navToggle && !navToggle.contains(e.target)) {
                closeMenu();
            }
        }
    });

    /* ---------- Navbar scroll background ---------- */
    const onScroll = () => {
        if (nav) {
            if (window.scrollY > 40) {
                nav.classList.add('is-scrolled');
            } else {
                nav.classList.remove('is-scrolled');
            }
        }

        // Active link on scroll
        const scrollY = window.pageYOffset;
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const top = section.offsetTop - 100;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav__link[href="#${id}"]`);

            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initialize on load

    /* ---------- Swiper (Reviews) ---------- */
    if (typeof Swiper !== 'undefined') {
        new Swiper('.reviews__swiper', {
            loop: true,              // ✅ ইনফিনিটি লুপ
            grabCursor: true,        // ✅ ড্র্যাগ করার সুবিধা
            spaceBetween: 24,        // ✅ কার্ডের মাঝে ফাঁকা
            autoplay: {
                delay: 4200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true   // ✅ মাউস দিলে অটোপ্লে থামে
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });
    } else {
        console.warn('Swiper library not loaded - reviews carousel disabled');
    }

    /* ---------- ScrollReveal ---------- */
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '40px',
            duration: 900,
            easing: 'cubic-bezier(0.5, 0.1, 0.2, 1)',
            reset: false,
            mobile: true,
        });

        sr.reveal('.hero__content, .section__head', { interval: 80 });
        sr.reveal('.hero__visual', { origin: 'right', delay: 150 });
        sr.reveal('.dest__card, .journey__card, .discover__card, .review__card', { interval: 120 });
        sr.reveal('.showcase__media', { origin: 'left' });
        sr.reveal('.showcase__content', { origin: 'right', delay: 120 });
        sr.reveal('.banner__grid', { scale: 0.96 });
        sr.reveal('.booking__info, .booking__form', { interval: 120 });
        sr.reveal('.footer__grid > *', { interval: 120 });
    } else {
        console.warn('ScrollReveal library not loaded - animations disabled');
    }

    /* ---------- Footer year ---------- */
    const yr = document.getElementById('yr');
    if (yr) {
        // English to Bangla numerals
        const en2bn = (n) => String(n).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
        yr.textContent = en2bn(new Date().getFullYear());
    }

    /* ---------- Booking form validation ---------- */
    const bookingForm = document.getElementById('bookingForm');
    const bookingFb = document.getElementById('bookingFeedback');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('bk-name')?.value.trim() || '';
            const phone = document.getElementById('bk-phone')?.value.trim() || '';
            const service = document.getElementById('bk-service')?.value || '';

            if (bookingFb) {
                bookingFb.classList.remove('success', 'error');
            }

            if (!name || !phone || !service) {
                if (bookingFb) {
                    bookingFb.textContent = 'অনুগ্রহ করে সব প্রয়োজনীয় তথ্য পূরণ করুন।';
                    bookingFb.classList.add('error');
                }
                return;
            }

            const phoneRegex = /^[0-9+\-\s]{8,16}$/;
            if (!phoneRegex.test(phone)) {
                if (bookingFb) {
                    bookingFb.textContent = 'অনুগ্রহ করে একটি সঠিক মোবাইল নম্বর দিন।';
                    bookingFb.classList.add('error');
                }
                return;
            }

            if (bookingFb) {
                bookingFb.textContent = '✅ ধন্যবাদ! আপনার বুকিং সফলভাবে পাঠানো হয়েছে — আমরা শীঘ্রই যোগাযোগ করব।';
                bookingFb.classList.add('success');
            }

            bookingForm.reset();

            // Optional: Scroll to feedback message
            bookingFb.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    /* ---------- Newsletter form (সংশোধিত) ---------- */
    const newsForm = document.getElementById('newsletterForm');
    const newsMsg = document.getElementById('newsletterMsg');

    if (newsForm) {
        newsForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = document.getElementById('newsEmail');
            const email = emailInput?.value.trim() || '';

            if (newsMsg) {
                newsMsg.classList.remove('success', 'error');
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                if (newsMsg) {
                    newsMsg.textContent = 'সঠিক ইমেইল ঠিকানা দিন।';
                    newsMsg.classList.add('error');
                }
                return;
            }

            if (newsMsg) {
                newsMsg.textContent = 'ধন্যবাদ! সফলভাবে সাবস্ক্রাইব হয়েছে।';
                newsMsg.classList.add('success');
            }

            newsForm.reset();
        });
    } else {
        // Fallback for newsletter button click
        const newsletterBtn = document.getElementById('newsletterBtn');
        if (newsletterBtn) {
            newsletterBtn.addEventListener('click', () => {
                const emailInput = document.getElementById('newsEmail');
                const email = emailInput?.value.trim() || '';
                const msgDiv = document.getElementById('newsletterMsg');

                if (msgDiv) {
                    msgDiv.classList.remove('success', 'error');
                }

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    if (msgDiv) {
                        msgDiv.textContent = 'সঠিক ইমেইল ঠিকানা দিন।';
                        msgDiv.classList.add('error');
                    }
                    return;
                }

                if (msgDiv) {
                    msgDiv.textContent = 'ধন্যবাদ! সফলভাবে সাবস্ক্রাইব হয়েছে।';
                    msgDiv.classList.add('success');
                }

                if (emailInput) emailInput.value = '';
            });
        }
    }

    /* ---------- Smooth scroll for anchor links with offset ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = nav?.offsetHeight || 76;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

})();