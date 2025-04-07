// Wait for DOM to be fully loaded before fetching components
document.addEventListener('DOMContentLoaded', function() {
    // Ensure Font Awesome is loaded
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fontAwesome);
    }

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
            
            // Fix TripAdvisor icon if needed
            fixTripAdvisorIcon();
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            document.getElementById('footer-placeholder').innerHTML = '<p>Error loading footer. Please refresh the page.</p>';
        });
        
    // Initialize features
    function initializeFeatures() {
        // Initialize carousel if jQuery and Slick are available
        if (typeof $ !== 'undefined' && typeof $.fn.slick !== 'undefined') {
            initializeCarousel();
            handleCarouselInteractions();
        } else {
            console.warn('jQuery or Slick carousel not loaded, skipping carousel initialization');
        }
        
        initializeTourCards();
        
        if (document.getElementById('tour') && sessionStorage.getItem('selectedTourId')) {
            const tourSelect = document.getElementById('tour');
            const selectedTourId = sessionStorage.getItem('selectedTourId');
            
            // Simply set the value - language switching will handle the text
            tourSelect.value = selectedTourId;
            
            // Clear the session storage
            sessionStorage.removeItem('selectedTourId');
        }
    }

    // Call the initialization function
    initializeFeatures();

    // Initialize scroll-to-top functionality
    function initializeScrollToTop() {
        const scrollTopBtn = document.querySelector('.scroll-top');
        console.log('Initializing scroll-to-top, button found:', !!scrollTopBtn);
        
        if (scrollTopBtn) {
            // Show/hide button based on scroll position
            const handleScroll = function() {
                if (window.pageYOffset > 300) {
                    scrollTopBtn.classList.add('show');
                } else {
                    scrollTopBtn.classList.remove('show');
                }
            };
            
            // Initial check
            handleScroll();
            
            // Add scroll event listener
            window.addEventListener('scroll', handleScroll);
            
            // Scroll to top when button is clicked
            scrollTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            console.log('Scroll-to-top functionality initialized successfully');
        } else {
            console.warn('Scroll-to-top button not found in the DOM');
        }
    }

    // Call the initialization function
    initializeScrollToTop();
});

// Function to fix TripAdvisor icon if it's not displaying correctly
function fixTripAdvisorIcon() {
    // Check if TripAdvisor icon exists and is not rendering properly
    const tripAdvisorLinks = document.querySelectorAll('a[href*="tripadvisor"]');
    
    tripAdvisorLinks.forEach(link => {
        const icon = link.querySelector('i.fa-brands.fa-tripadvisor');
        
        // Check if icon exists but is not rendering properly (no width/empty)
        if (icon && (getComputedStyle(icon).width === '0px' || !icon.offsetWidth)) {
            // Try alternative class
            icon.className = 'fab fa-tripadvisor';
            
            // If still not working after a short delay, use text alternative
            setTimeout(() => {
                if (!icon.offsetWidth) {
                    const textSpan = document.createElement('span');
                    textSpan.className = 'icon-text';
                    textSpan.textContent = 'TA';
                    link.insertBefore(textSpan, icon);
                    icon.remove();
                    
                    // Add CSS for text alternative if not already in document
                    if (!document.querySelector('style#trip-advisor-fix')) {
                        const style = document.createElement('style');
                        style.id = 'trip-advisor-fix';
                        style.textContent = `
                            .icon-text {
                                display: inline-block;
                                width: 24px;
                                height: 24px;
                                line-height: 24px;
                                text-align: center;
                                background-color: #00af87;
                                color: white;
                                border-radius: 50%;
                                font-size: 0.7rem;
                                font-weight: bold;
                                margin-right: 10px;
                            }
                        `;
                        document.head.appendChild(style);
                    }
                }
            }, 300);
        }
    });
}

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
    
    $('.tour-carousel').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    // Piccolo delay per assicurarsi che il carousel sia completamente inizializzato
    setTimeout(function() {
        $(window).trigger('resize');
    }, 100);
}

function handleCarouselInteractions() {
    // Previene la propagazione del click sugli elementi del carousel
    // per evitare che il click sui controlli del carousel attivi anche il click sul tour card
    $('.tour-carousel').on('click', '.slick-arrow, .slick-dots', function(e) {
        e.stopPropagation();
    });
    
    // Previene la propagazione anche per i click sulle immagini del carousel
    // quando si fa click su di esse per navigare tra le slide
    $('.tour-carousel').on('click', function(e) {
        // Ferma la propagazione solo se è un click sugli elementi di navigazione
        // o se si sta trascinando (Slick usa il dragging per navigare)
        if ($(this).hasClass('slick-initialized') && 
            ($(e.target).closest('.slick-arrow, .slick-dots').length || 
             $(this).hasClass('slick-dragging'))) {
            e.stopPropagation();
        }
    });
}