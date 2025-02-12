// Booking link configuration
const BOOKING_LINK = 'https://calendly.com/rayyanulhaq365/consulting-call';

// Benefits data
const benefits = [
    "Seamless integration with existing systems",
    "Real-time data processing and analytics",
    "Custom automation workflows",
    "24/7 premium support",
    "No coding required",
    "Enterprise-grade security"
];

// Handle booking button clicks
function handleBooking() {
    window.open(BOOKING_LINK, '_blank');
}

// Create benefits cards
function createBenefitsCards() {
    const benefitsGrid = document.getElementById('benefitsGrid');
    const fragment = document.createDocumentFragment();  // Use document fragment for better performance

    benefits.forEach(benefit => {
        const benefitCard = document.createElement('div');
        benefitCard.className = 'benefit-card';
        
        const starIcon = document.createElement('div');
        starIcon.innerHTML = ` 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
        `;
        starIcon.className = 'icon';
        
        const text = document.createElement('span');
        text.className = 'benefit-text';
        text.textContent = benefit;
        
        benefitCard.appendChild(starIcon);
        benefitCard.appendChild(text);
        
        // Add the benefit card to the fragment
        fragment.appendChild(benefitCard);

        // Add animation observer to each benefit card
        observeScroll(benefitCard);
    });

    // Append all cards at once for performance
    benefitsGrid.appendChild(fragment);
}

// Function to observe the scroll animation
function observeScroll(element) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 }); // Trigger animation when 20% of the element is visible

    observer.observe(element);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    createBenefitsCards();

    // Typed.js animations for header
    const typed1 = new Typed(".auto-type-1", {
        strings: ['<span class="gold-text">Automate</span> Your <span class="blue-text">Workflow</span>.'],
        typeSpeed: 100,
        backSpeed: 80,  // Speed of deleting
        startDelay: 500, // Delay before typing starts
        backDelay: 1500, // How long it stays before deleting
        loop: true, // Keep looping
        showCursor: true,
    });

    const typed2 = new Typed(".auto-type-2", {
        strings: ['<span class="blue-text">Focus</span> on What <span class="gold-text">Matters</span>.'],
        typeSpeed: 100,
        backSpeed: 80, 
        startDelay: 2500, // Delay after first phrase starts
        backDelay: 1500,  
        loop: true,
        showCursor: true,
    });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effects
const cards = document.querySelectorAll('.feature-card, .benefit-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
