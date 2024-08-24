document.addEventListener('DOMContentLoaded', function() {
    const sectionData = [
        {
            title: "Marketplace",
            imgUrl: "../../img/mainWebsite/shopping-cart.svg",
            subTitle: "Connects buyers and sellers globally. By leveraging advanced blockchain technology.",
        },
        {
            title: "Transport & Logistics",
            imgUrl: "../../img/mainWebsite/truck.svg",
            subTitle: "Apply as a truck driver/owner, search for drivers, rent a warehouse, rent farm machineries e.t.c",
        },
        {
            title: "Education",
            imgUrl: "../../img/mainWebsite/book.svg",
            subTitle: "Predictive farming using A.I, Get insights on regional weather forecasts, crops & livestock treatment and diagnosis, e.t.c",
        },
        {
            title: "Finance",
            imgUrl: "../../img/mainWebsite/binance-usd-(busd).svg",
            subTitle: "Unlock multiple financial tools- Agro insurance, Defi, Caf token and keep a secure farm record and inventory.",
        },
    ];

    const testimonials = [
        // {
        //     name: "Mohammed",
        //     content: "Supplied total 150kg of carrots, cabbage and cucumber vegetables via the marketplace from North to Onitsha. The reliability about the platform's advanced escrow in securing the transactions for all parties involved kept my mind at ease. Highly recommend.",
        //     occupation: "Organic Farmer",
        //     img: "FBH-20.jpg",
        //     location: "Zaria, Nigeria.",
        // },
        {
            name: "Tobe Obi",
            content: "Purchased pack of maize and bell pepper seeds via the Caf marketplace, the delivery and transactions was a seamless experience. Overall a reliable customer support.",
            occupation: "Distributor",
            img: "../../img/mainWebsite/FBH-21.jpg",
            location: "Owerri, Nigeria.",
        },
        {
            name: "Mohammed",
            content: "Supplied total 150kg of carrots, cabbage and cucumber vegetables via the marketplace from North to Onitsha. The reliability about the platform's advanced escrow in securing the transactions for all parties involved kept my mind at ease. Highly recommend.",
            occupation: "Organic Farmer",
            img: "../../img/mainWebsite/FBH-20.jpg",
            location: "Zaria, Nigeria.",
        },
    ];

    function createSectionCards() {
        const sectionCardsContainer = document.querySelector('.section-cards');
        sectionData.forEach(section => {
            const card = document.createElement('div');
            card.className = 'section-card';
            card.innerHTML = `
                <img src="${section.imgUrl}" alt="${section.title}">
                <h4>${section.title}</h4>
                <p>${section.subTitle}</p>
            `;
            sectionCardsContainer.appendChild(card);
        });
    }

    function createTestimonials() {
        const testimonialSlider = document.querySelector('.testimonial-slider');
        const sliderDots = document.querySelector('.slider-dots');
        testimonials.forEach((testimonial, index) => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.innerHTML = `
                <div class="testimonial-content">${testimonial.content}</div>
                <div class="testimonial-author">
                    <div class="author-image">
                        <img src="${testimonial.img}" alt="${testimonial.name}">
                    </div>
                    <div class="author-info">
                        <h4 class="author-name">${testimonial.name}</h4>
                        <div class="author-details">
                            <span>${testimonial.occupation}</span>
                            <div class="separator"></div>
                            <span>${testimonial.location}</span>
                        </div>
                    </div>
                    <div class="rating">
                        ${Array(5).fill('<img src="../../img/mainWebsite/teenyicons_star-outline.svg" alt="star">').join('')}
                    </div>
                </div>
            `;
            testimonialSlider.appendChild(card);

            const dot = document.createElement('div');
            dot.className = 'dot';
            if (index === 0) dot.classList.add('active');
            sliderDots.appendChild(dot);
        });
    }

    function initializeTestimonialSlider() {
        const slider = document.querySelector('.testimonial-slider');
        const dots = document.querySelectorAll('.slider-dots .dot');
        
        slider.addEventListener('scroll', () => {
            const index = Math.round(slider.scrollLeft / slider.offsetWidth);
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                slider.scrollTo({
                    left: index * slider.offsetWidth,
                    behavior: 'smooth'
                });
            });
        });
    }

    function initializeLoginButton() {
        const loginButton = document.querySelector('.login-button');
        loginButton.addEventListener('click', function() {
            const emailInput = document.querySelector('.email-input');
            const email = emailInput.value;
            if (email) {
                console.log('Logging in with email:', email);
                // Here you would typically send this data to a server
                alert('Login attempt with email: ' + email);
            } else {
                alert('Please enter an email address');
            }
        });
    }

    function initializeLearnMoreButton() {
        const learnMoreButton = document.querySelector('.learn-more-button');
        learnMoreButton.addEventListener('click', function() {
            // Implement navigation to about page
            console.log('Navigating to About page');
            // For now, we'll just log. In a real app, you might use:
            // window.location.href = '/about';
        });
    }

    function initializeNavButtons() {
        const leftButton = document.querySelector('.nav-button:first-child');
        const rightButton = document.querySelector('.nav-button:last-child');

        leftButton.addEventListener('click', function() {
            console.log('Navigate left');
            // Implement left navigation logic
        });

        rightButton.addEventListener('click', function() {
            console.log('Navigate right');
            // Implement right navigation logic
        });
    }

    // Initialize everything
    createSectionCards();
    createTestimonials();
    initializeTestimonialSlider();
    initializeLoginButton();
    initializeLearnMoreButton();
    initializeNavButtons();
});

const navMenuToggle = document.querySelector('.menu');
const navMenu = document.querySelector('.mobile-nav');
const dropdownHandler = document.querySelectorAll('.dropdown-handler');
const dropdownHandlerArray = Array.from(dropdownHandler);
const dropdown = document.querySelectorAll('.dropdown');

navMenuToggle.addEventListener('click', function(){
    navMenu.classList.toggle('active');
    navMenu.classList.toggle('mobile-nav-animation');
})

console.log(dropdownHandler, "kacmsmc ", dropdownHandlerArray)

Array.from(dropdownHandler).forEach((handler) => {
    handler.addEventListener('mouseover', function(){
        handler.childNodes[3].style.display = 'flex';
    });

    handler.addEventListener('mouseleave', function(){
        handler.childNodes[3].style.display = 'none';
    });
});