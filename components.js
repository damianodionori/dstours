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
    
    // Handle pre-selected tour if on contact page
    if (document.getElementById('tour') && sessionStorage.getItem('selectedTour')) {
        const tourSelect = document.getElementById('tour');
        const selectedTour = sessionStorage.getItem('selectedTour');
        
        // Log for debugging
        console.log('Pre-selecting tour:', selectedTour);
        console.log('Available options:', Array.from(tourSelect.options).map(o => o.text));
        
        // Find the option matching the selected tour and set it as selected
        let found = false;
        Array.from(tourSelect.options).forEach(option => {
            // Normalize text comparison by trimming whitespace and converting to lowercase
            if (option.text.trim().toLowerCase() === selectedTour.trim().toLowerCase()) {
                option.selected = true;
                found = true;
                console.log('Match found for:', option.text);
            }
        });
        
        if (!found) {
            console.warn('No matching option found for:', selectedTour);
        }
        
        // Clear the session storage to avoid issues on page refresh
        sessionStorage.removeItem('selectedTour');
    }
    
    // Remove "Book Your Tour Now" button if it exists
    const bookNowCta = document.querySelector('.book-now-cta');
    if (bookNowCta) {
        bookNowCta.style.display = 'none';
    }
    
    // Add CSS to override any hover button styles
    const style = document.createElement('style');
    style.textContent = `
        .tour-card:hover .tour-book-button,
        .tour-card-hover .tour-book-button,
        .tour-card:hover .cta-button,
        .tour-card-hover .cta-button {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
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
                // Get the tour name to pre-select in the booking form
                const tourTitle = this.querySelector('h3').textContent;
                console.log('Tour card clicked:', tourTitle);
                
                // Save selected tour in session storage
                sessionStorage.setItem('selectedTour', tourTitle);
                
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