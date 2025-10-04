document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
    for (let link of mobileMenuLinks) {
        link.addEventListener('click', () => {
             mobileMenu.classList.add('hidden');
        });
    }

    // Swiper Slider Initialization
    const sliders = document.querySelectorAll('.project-slider');
    sliders.forEach(slider => {
        new Swiper(slider, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 }
            },
            pagination: {
                el: slider.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: slider.querySelector('.swiper-button-next'),
                prevEl: slider.querySelector('.swiper-button-prev'),
            },
        });
    });

    // Image Modal Functionality
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModalBtn = document.getElementById('closeModal');
    const sliderImages = document.querySelectorAll('.project-slider .swiper-slide img');
    
    sliderImages.forEach(img => {
        img.addEventListener('click', function() {
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    });
    
    const closeModalFunction = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    closeModalBtn.addEventListener('click', closeModalFunction);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModalFunction();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModalFunction();
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animate on scroll
    const animatedElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
