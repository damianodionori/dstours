// Wait for DOM to be fully loaded before fetching components
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('components/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok for header');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // Re-initialize language switchers after header is loaded
            initializeLanguageSwitcher();
            
            // Apply current language
            const savedLang = localStorage.getItem('preferredLanguage') || 'en';
            if (typeof switchLanguage === 'function') {
                switchLanguage(savedLang);
            }
        })
        .catch(error => {
            console.error('Error loading header:', error);
            document.getElementById('header-placeholder').innerHTML = '<p>Error loading header. Please refresh the page.</p>';
        });

    // Load footer
    fetch('components/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok for footer');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            document.getElementById('footer-placeholder').innerHTML = '<p>Error loading footer. Please refresh the page.</p>';
        });
        
    // Initialize features
    initializeCarousel();
    initializeTourCards();
    
    if (document.getElementById('tour') && sessionStorage.getItem('selectedTourId')) {
        const tourSelect = document.getElementById('tour');
        const selectedTourId = sessionStorage.getItem('selectedTourId');
        
        // Simply set the value - language switching will handle the text
        tourSelect.value = selectedTourId;
        
        // Clear the session storage
        sessionStorage.removeItem('selectedTourId');
    }
});

// Function to initialize language switcher
function initializeLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    if (langButtons.length > 0) {
        langButtons.forEach(button => {
            button.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                console.log('Switching to language:', lang);
                
                // Call the main switchLanguage function from your original script
                if (typeof switchLanguage === 'function') {
                    switchLanguage(lang);
                } else {
                    console.error('switchLanguage function not found');
                }
            });
        });
    }
}

// Updated function to initialize the tour cards
function initializeTourCards() {
    const tourCards = document.querySelectorAll('.tour-card');
    if (tourCards.length > 0) {
        tourCards.forEach(card => {
            // Make the card visually appear clickable
            card.style.cursor = 'pointer';
            
            // Remove any existing tour-book-button or cta-button elements
            const bookButtons = card.querySelectorAll('.tour-book-button, .cta-button');
            bookButtons.forEach(btn => btn.remove());
            
            // Add click event to redirect to booking page
            card.addEventListener('click', function() {
                // Get the tour ID from the data attribute
                const tourId = this.getAttribute('data-tour-id');
                const tourTitle = this.querySelector('h3').textContent;
                console.log('Tour card clicked:', tourTitle, 'with ID:', tourId);
                
                if (!tourId) {
                    console.warn('No data-tour-id found on tour card:', tourTitle);
                    return;
                }
                
                // Save selected tour ID in session storage
                sessionStorage.setItem('selectedTourId', tourId);
                
                // Redirect to the contact/booking page
                window.location.href = 'contact.html';
            });
            
            // Add hover effects - but don't add any booking button or other elements
            card.addEventListener('mouseenter', function() {
                this.classList.add('tour-card-hover');
            });
            
            card.addEventListener('mouseleave', function() {
                this.classList.remove('tour-card-hover');
            });
        });
    }
}

// Function to initialize the carousel
function initializeCarousel() {
    // Check if jQuery and Slick are available
    if (typeof jQuery === 'undefined' || typeof jQuery.fn.slick === 'undefined') {
        console.error('jQuery or Slick carousel not loaded');
        return;
    }

    // Initialize the reviews carousel with ottimizzazioni per i dots
    $('.reviews-carousel').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dotsClass: 'slick-dots', // Classe esplicita per i dots
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    variableWidth: false,
                    dots: true,
                    adaptiveHeight: true
                }
            }
        ]
    });
    
    // Piccolo delay per assicurarsi che il carousel sia completamente inizializzato
    setTimeout(function() {
        $(window).trigger('resize');
    }, 100);
}