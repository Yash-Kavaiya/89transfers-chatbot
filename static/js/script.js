// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Accounting for header height
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Wait for DOM to be fully loaded before initializing Dialogflow
document.addEventListener('DOMContentLoaded', function() {
    // Ensure Dialogflow messenger is correctly loaded
    const dfMessenger = document.querySelector('df-messenger');
    if (dfMessenger) {
        dfMessenger.addEventListener('df-messenger-loaded', function() {
            console.log('Dialogflow Messenger loaded successfully');
        });
        
        dfMessenger.addEventListener('df-user-input-entered', function(event) {
            console.log('User input:', event.detail.input);
        });
    }
});
