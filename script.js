// Supported languages
const SUPPORTED_LANGUAGES = ['en', 'it'];

// Multilingual Dictionary
const translations = {
    en: {
        nav: {
            home: "Home",
            tours: "Tours",
            contact: "Book",
            "about-us": "About Us"
        },
        home: {
            title: "Discover London's Cultural Treasures",
            subtitle: "Immersive guided tours of London's most iconic museums",
            cta: "Explore Tours"
        },
        tours: {
            title: "Our Signature Tours",
            bookYourTour: "Book Your Tour",
            britishMuseum: {
                title: "British Museum Tour",
                description: "Embark on a journey through human history, art, and culture.",
                duration: "Duration: 2 hours",
                price: "Price: From £100 per group of four",
                highlights: [
                    "The Rosetta Stone",
                    "Ancient Egyptian Mummies",
                    "Parthenon Sculptures",
                    "World-renowned artifacts"
                ]
            },
            nationalGallery: {
                title: "National Gallery Art Tour",
                description: "Explore masterpieces from the Renaissance to Post-Impressionism.",
                duration: "Duration: 2 hours",
                price: "Price: From £100 per group of four",
                highlights: [
                    "Van Gogh's Sunflowers",
                    "Leonardo da Vinci's works",
                    "Impressionist and Renaissance art",
                    "In-depth artist stories"
                ]
            }
        },
        form: {
            name: "Full Name",
            email: "Email Address",
            tour: "Select Tour",
            tourPlaceholder: "Choose a Tour",
            date: "Preferred Date",
            time: "Preferred Tour Time",
            timePlaceholder: "Select Time Preference",
            language: "Preferred Tour Language",
            languagePlaceholder: "Select Language",
            message: "Additional Notes",
            submit: "Book Tour",
            morningTour: "Morning Tour (AM)",
            afternoonTour: "Afternoon Tour (PM)"
        },
        footer: {
            copyright: "© 2022 DS Tours | Tour Guide"
        }
    },
    it: {
        nav: {
            home: "Home",
            tours: "Tour",
            contact: "Prenota",
            "about-us": "Chi Siamo"
        },
        home: {
            title: "Scopri i Tesori Culturali di Londra",
            subtitle: "Tour guidati immersivi nei musei più iconici di Londra",
            cta: "Esplora i Tour"
        },
        tours: {
            title: "I Nostri Tour Esclusivi",
            bookYourTour: "Prenota il Tuo Tour",
            britishMuseum: {
                title: "Tour del British Museum",
                description: "Intraprendi un viaggio attraverso la storia umana, l'arte e la cultura.",
                duration: "Durata: 2 ore",
                price: "Prezzo: Da £100 per gruppo di quattro",
                highlights: [
                    "La Stele di Rosetta",
                    "Mummie Egizie Antiche",
                    "Sculture del Partenone",
                    "Manufatti di fama mondiale"
                ]
            },
            nationalGallery: {
                title: "Tour d'Arte della National Gallery",
                description: "Esplora capolavori dal Rinascimento al Post-Impressionismo.",
                duration: "Durata: 2 ore",
                price: "Prezzo: Da £100 per gruppo di quattro",
                highlights: [
                    "Girasoli di Van Gogh",
                    "Opere di Leonardo da Vinci",
                    "Arte Impressionista e Rinascimentale",
                    "Storie approfondite degli artisti"
                ]
            }
        },
        form: {
            name: "Nome Completo",
            email: "Indirizzo Email",
            tour: "Seleziona Tour",
            tourPlaceholder: "Scegli un Tour",
            date: "Data Preferita",
            time: "Ora Preferita del Tour",
            timePlaceholder: "Seleziona Ora Preferita",
            language: "Lingua Preferita del Tour",
            languagePlaceholder: "Seleziona Lingua",
            message: "Note Aggiuntive",
            submit: "Prenota Tour",
            morningTour: "Tour Mattutino (AM)",
            afternoonTour: "Tour Pomeridiano (PM)"
        },
        footer: {
            copyright: "© 2022 DS Tours | Guida Turistica"
        }
    }
};

const DATE_CONFIG = {
    en: {
        format: 'DD/MM/YYYY',  
        placeholder: 'dd/mm/yyyy' 
    }
};

function switchLanguage(lang) {
    // Validate language
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
        console.warn(`Unsupported language: ${lang}. Defaulting to English.`);
        lang = 'en';
    }

    // Update HTML language attribute
    document.documentElement.lang = lang;

    // Update navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    const navTexts = ['home', 'tours', 'contact', 'about-us'];
    navLinks.forEach((link, index) => {
        link.textContent = translations[lang].nav[navTexts[index]];
    });

    // Update home section
    const homeTitle = document.querySelector('#home h2');
    const homeSubtitle = document.querySelector('#home p');
    const homeCTA = document.querySelector('#home .cta-button');
    
    if (homeTitle) homeTitle.textContent = translations[lang].home.title;
    if (homeSubtitle) homeSubtitle.textContent = translations[lang].home.subtitle;
    if (homeCTA) homeCTA.textContent = translations[lang].home.cta;

    // Update tours section
    const toursTitle = document.querySelector('#tours > h2');
    const tourTitles = document.querySelectorAll('#tours .tour-details h3');
    const tourDescriptions = document.querySelectorAll('#tours .tour-details p');
    const tourInfoElements = document.querySelectorAll('#tours .tour-info span');
    
    if (toursTitle) toursTitle.textContent = translations[lang].tours.title;
    
    // Update tour titles and descriptions
    if (tourTitles[0]) tourTitles[0].textContent = translations[lang].tours.britishMuseum.title;
    if (tourTitles[1]) tourTitles[1].textContent = translations[lang].tours.nationalGallery.title;
    if (tourDescriptions[0]) tourDescriptions[0].textContent = translations[lang].tours.britishMuseum.description;
    if (tourDescriptions[1]) tourDescriptions[1].textContent = translations[lang].tours.nationalGallery.description;

    // Update tour info (duration and price)
    if (tourInfoElements.length >= 2) {
        tourInfoElements[0].textContent = translations[lang].tours.britishMuseum.duration;
        tourInfoElements[1].textContent = translations[lang].tours.britishMuseum.price;
        tourInfoElements[2].textContent = translations[lang].tours.nationalGallery.duration;
        tourInfoElements[3].textContent = translations[lang].tours.nationalGallery.price;
    }

    // Update tour highlights
    const tourHighlightLists = document.querySelectorAll('#tours .tour-details ul');
    if (tourHighlightLists.length >= 2) {
        // British Museum highlights
        const britishMuseumHighlights = tourHighlightLists[0].querySelectorAll('li');
        britishMuseumHighlights.forEach((li, index) => {
            li.textContent = translations[lang].tours.britishMuseum.highlights[index];
        });

        // National Gallery highlights
        const nationalGalleryHighlights = tourHighlightLists[1].querySelectorAll('li');
        nationalGalleryHighlights.forEach((li, index) => {
            li.textContent = translations[lang].tours.nationalGallery.highlights[index];
        });
    }

    // Update contact section title
    const contactTitle = document.querySelector('#contact h2');
    if (contactTitle) contactTitle.textContent = translations[lang].tours.bookYourTour;

    // Update form labels and placeholders
    const formTranslations = translations[lang].form;
    const labelMap = {
        'name': 'name',
        'email': 'email',
        'tour': 'tour',
        'date': 'date',
        'tour-time': 'time',
        'language-preference': 'language',
        'message': 'message'
    };

    Object.entries(labelMap).forEach(([elementId, translationKey]) => {
        const label = document.querySelector(`label[for="${elementId}"]`);
        const element = document.getElementById(elementId);

        if (label) label.textContent = formTranslations[translationKey];
        
        // Handle select elements
        if (element && element.tagName === 'SELECT') {
            const firstOption = element.querySelector('option');
            
            if (firstOption) {
                if (elementId === 'tour') firstOption.textContent = formTranslations.tourPlaceholder;
                if (elementId === 'tour-time') {
                    firstOption.textContent = formTranslations.timePlaceholder;
                    element.querySelectorAll('option')[1].textContent = formTranslations.morningTour;
                    element.querySelectorAll('option')[2].textContent = formTranslations.afternoonTour;
                }
                if (elementId === 'language-preference') firstOption.textContent = formTranslations.languagePlaceholder;
            }
        }
    });

    // Update submit button
    const submitButton = document.querySelector('.submit-button');
    if (submitButton) submitButton.textContent = formTranslations.submit;

    // Update footer
    const footerCopyright = document.querySelector('footer p');
    if (footerCopyright) footerCopyright.textContent = translations[lang].footer.copyright;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        btn.setAttribute('aria-label', `Switch to ${btnLang === 'en' ? 'English' : 'Italian'}`);
    });

    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Tour Booking Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tour-booking-form');
    const dateInput = document.getElementById('date');

    if (typeof emailjs !== 'undefined') {
        emailjs.init("Nxj6VliNcy5V2PG40");
    }
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            tour: document.getElementById('tour').value,
            tourText: document.getElementById('tour').options[document.getElementById('tour').selectedIndex].text,
            date: document.getElementById('date').value,
            tourTime: document.getElementById('tour-time').value,
            tourTimeText: document.getElementById('tour-time').options[document.getElementById('tour-time').selectedIndex].text,
            language: document.getElementById('language-preference').value,
            languageText: document.getElementById('language-preference').options[document.getElementById('language-preference').selectedIndex].text,
            message: document.getElementById('message').value
        };

        // Basic form validation
        if (!formData.name || !formData.email || !formData.tour || 
            !formData.date || !formData.tourTime || !formData.language) {
            const currentLang = localStorage.getItem('preferredLanguage') || 'en';
            const errorMessage = currentLang === 'it' 
                ? 'Per favore compila tutti i campi obbligatori' 
                : 'Please fill in all required fields';
            alert(errorMessage);
            return;
        }

        const currentLang = localStorage.getItem('preferredLanguage') || 'en';

        const submitButton = document.querySelector('.submit-button');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = currentLang === 'it' ? 'Invio in corso...' : 'Sending...';
        submitButton.disabled = true;

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            tour_type: formData.tourText,
            tour_date: formData.date,
            tour_time: formData.tourTimeText,
            language: formData.languageText,
            message: formData.message,
            site_language: currentLang
        };

        if (typeof emailjs !== 'undefined') {
            // Invia l'email usando EmailJS
            emailjs.send('TUO_SERVICE_ID', 'TUO_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('Email inviata!', response.status, response.text);
                    
                    // Messaggio di successo
                    const successMessage = currentLang === 'it' 
                        ? 'Prenotazione inviata con successo! Ti contatteremo presto.' 
                        : 'Tour booking request submitted! We will contact you soon.';
                    alert(successMessage);
                    
                    // Reset form
                    form.reset();
                    
                    // Ripristina il pulsante
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                })
                .catch(function(error) {
                    console.log('Errore nell\'invio dell\'email:', error);
                    
                    // Messaggio di errore
                    const errorMessage = currentLang === 'it' 
                        ? 'Si è verificato un errore durante l\'invio. Riprova più tardi o contattaci direttamente.' 
                        : 'An error occurred while sending. Please try again later or contact us directly.';
                    alert(errorMessage);
                    
                    // Ripristina il pulsante
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                });
        } else {
            // Fallback se EmailJS non è caricato
            console.log('EmailJS non disponibile. Dati del form:', formData);
            
            // Messaggio di successo (fallback)
            const fallbackMessage = currentLang === 'it' 
                ? 'Sistema di invio non disponibile. Ti preghiamo di contattarci direttamente.' 
                : 'Sending system not available. Please contact us directly.';
            alert(fallbackMessage);
            
            // Ripristina il pulsante
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });
    
    // Event Listeners for Language Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            console.log('Language button clicked:', lang);
            switchLanguage(lang);
        });
    });

    // Date Picker Initialization Function
    function initializeDatePicker() {
    const dateInput = document.getElementById('date');
    if (!dateInput) {
        console.log('No date input found, skipping datepicker initialization');
        return; // Exit the function if no date input
    }
    
    // Check if Pikaday is available
    if (typeof Pikaday === 'undefined' || typeof moment === 'undefined') {
        console.log('Pikaday or moment not available - using native date picker');
        return;
    }
    
    const config = DATE_CONFIG['en'];

        // Create new Pikaday instance with minimal configuration
        window.datePicker = new Pikaday({
            field: dateInput,
            format: config.format,
            formatStrict: config.format,
            defaultDate: null,
            setDefaultDate: false,
            onSelect: function(date) {
                const formattedDate = moment(date).format('DD/MM/YYYY');
                dateInput.value = formattedDate;
                dateInput.setAttribute('data-selected-date', formattedDate);
            }
        });

        // Update placeholder
        dateInput.setAttribute('placeholder', config.placeholder);

        // Ensure input field shows selected date in correct format
        if (dateInput.getAttribute('data-selected-date')) {
            const savedDate = dateInput.getAttribute('data-selected-date');
            dateInput.value = savedDate;
        }
    }

    // Modify switchLanguage to include date picker reinitialization
    const originalSwitchLanguage = switchLanguage;
    switchLanguage = function(lang) {
        // Call original switchLanguage
        originalSwitchLanguage.call(this, lang);

        // Always reinitialize date picker with English configuration
        initializeDatePicker();
    };

    // Additional event listener to handle manual input
    dateInput.addEventListener('change', function() {
        const config = DATE_CONFIG['en'];
        
        const inputDate = moment(this.value, config.format, true);
        
        if (inputDate.isValid()) {
            // If valid, update the Pikaday instance
            if (window.datePicker) {
                window.datePicker.setDate(inputDate.toDate());
            }
        } else {
            // Clear if invalid
            this.value = '';
        }
    });

    // Load Preferred Language on Page Load
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    console.log('Initializing with language:', savedLang);
    switchLanguage(savedLang);
    initializeDatePicker();
});