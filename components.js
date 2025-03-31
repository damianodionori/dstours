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
        initializeCarousel();
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

// New function to initialize the carousel
function initializeCarousel() {
    // Check if jQuery and Slick are available
    if (typeof jQuery === 'undefined' || typeof jQuery.fn.slick === 'undefined') {
        console.error('jQuery or Slick carousel not loaded');
        return;
    }

    // Initialize the reviews carousel
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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    variableWidth: false
                }
            }
        ]
    });
}