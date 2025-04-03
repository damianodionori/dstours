// Supported languages
const SUPPORTED_LANGUAGES = ['en', 'it'];

// Multilingual Dictionary with numeric tour IDs
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
            options: {
                1: "British Museum Private Tour",
                2: "National Gallery Private Tour",
                3: "Natural History Museum Private Tour"
            },
            britishMuseum: {
                title: "British Museum Private Tour",
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
                title: "National Gallery Private Tour",
                description: "Explore masterpieces from the Renaissance to Post-Impressionism.",
                duration: "Duration: 2 hours",
                price: "Price: From £100 per group of four",
                highlights: [
                    "Van Gogh's Sunflowers",
                    "Leonardo da Vinci's works",
                    "Impressionist and Renaissance art",
                    "In-depth artist stories"
                ]
            },
            naturalHistoryMuseum: {
                title: "Natural History Museum Private Tour",
                description: "Journey through Earth's wonders, from dinosaurs to diamonds.",
                duration: "Duration: 2 hours",
                price: "Price: From £100 per group of four",
                highlights: [
                    "Blue whale skeleton",
                    "Earthquake simulator experience",
                    "Dinosaur fossils and animatronic T-Rex",
                    "Gems and meteorites collection"
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
        aboutUs: {
            title: "Let us introduce ourselves!",
            team: [
                {
                    name: "Damiano",
                    title: "Languages and Modern Cultures Expert",
                    bio: "Born in beautiful Tuscany, Damiano brings authentic Italian passion to London's cultural scene. A graduate in Languages and Modern Cultures from Università della Tuscia, he's fluent in Italian and English, with conversational French and German. When he's not sharing fascinating historical insights at the Natural History Museum (his favorite spot), you might find him enjoying pizza, hiking, or cheering at motorsport events. His love for travel and animals makes his tours particularly engaging for visitors of all ages."
                },
                {
                    name: "Stefania",
                    title: "Theatre, Cinema and Arts Expert",
                    bio: "Hailing from Veneto, Stefania earned her Master's Degree in Arts from the prestigious Università Ca' Foscari in Venice. Fluent in Italian and English with some Spanish, she brings artistic flair to every tour. The National Gallery is her second home, though she knows all of London's cultural gems intimately. When not guiding, this pasta-loving, music-enthusiast can be found riding her motorbike or walking her dogs. Her vibrant personality and deep knowledge make every tour a memorable experience."
                }
            ]
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
            options: {
                1: "Tour Privato del British Museum",
                2: "Tour Privato della National Gallery",
                3: "Tour Privato del Natural History Museum"
            },
            britishMuseum: {
                title: "Tour Privato del British Museum",
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
                title: "Tour Privato della National Gallery",
                description: "Esplora capolavori dal Rinascimento al Post-Impressionismo.",
                duration: "Durata: 2 ore",
                price: "Prezzo: Da £100 per gruppo di quattro",
                highlights: [
                    "Girasoli di Van Gogh",
                    "Opere di Leonardo da Vinci",
                    "Arte Impressionista e Rinascimentale",
                    "Storie approfondite degli artisti"
                ]
            },
            naturalHistoryMuseum: {
                title: "Tour Privato del Museo di Storia Naturale",
                description: "Un viaggio attraverso le meraviglie della Terra, dai dinosauri ai diamanti.",
                duration: "Durata: 2 ore",
                price: "Prezzo: Da £100 per gruppo di quattro",
                highlights: [
                    "Scheletro di una balenottera azzurra",
                    "Simulatore di terremoti",
                    "Fossili di dinosauri e T-Rex animatronico",
                    "Collezione di gemme e meteoriti"
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
        aboutUs: {
            title: "Presentazione del nostro team!",
            team: [
                {
                    name: "Damiano",
                    title: "Esperto di Lingue e Culture Moderne",
                    bio: "Nato nella splendida Toscana, Damiano porta un'autentica passione italiana alla scena culturale di Londra. Laureato in Lingue e Culture Moderne presso l'Università della Tuscia, parla fluentemente italiano e inglese, con francese e tedesco a livello di conversazione. Quando non condivide affascinanti informazioni storiche al Natural History Museum (il suo luogo preferito), potresti trovarlo a gustare una pizza, fare escursioni o tifare per eventi motoristici. Il suo amore per i viaggi e gli animali rende i suoi tour particolarmente coinvolgenti per visitatori di tutte le età."
                },
                {
                    name: "Stefania",
                    title: "Esperta di Teatro, Cinema e Arti",
                    bio: "Originaria del Veneto, Stefania ha conseguito una Laurea Magistrale in Arti presso la prestigiosa Università Ca' Foscari di Venezia. Parla fluentemente italiano e inglese con alcune conoscenze di spagnolo, portando un tocco artistico ad ogni tour. La National Gallery è la sua seconda casa, sebbene conosca intimamente tutti i tesori culturali di Londra. Quando non fa da guida, questa appassionata di pasta e musica può essere trovata in giro con la sua moto o a passeggiare con i suoi cani. La sua personalità vivace e la sua profonda conoscenza rendono ogni tour un'esperienza memorabile."
                }
            ]
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
    if (tourTitles[2]) tourTitles[2].textContent = translations[lang].tours.naturalHistoryMuseum.title;
    if (tourDescriptions[0]) tourDescriptions[0].textContent = translations[lang].tours.britishMuseum.description;
    if (tourDescriptions[1]) tourDescriptions[1].textContent = translations[lang].tours.nationalGallery.description;
    if (tourDescriptions[2]) tourDescriptions[2].textContent = translations[lang].tours.naturalHistoryMuseum.description;

    // Update tour info (duration and price)
    if (tourInfoElements.length >= 2) {
        tourInfoElements[0].textContent = translations[lang].tours.britishMuseum.duration;
        tourInfoElements[1].textContent = translations[lang].tours.britishMuseum.price;
        tourInfoElements[2].textContent = translations[lang].tours.nationalGallery.duration;
        tourInfoElements[3].textContent = translations[lang].tours.nationalGallery.price;
        tourInfoElements[4].textContent = translations[lang].tours.naturalHistoryMuseum.duration;
        tourInfoElements[5].textContent = translations[lang].tours.naturalHistoryMuseum.price;
    }

    // Update tour highlights
    const tourHighlightLists = document.querySelectorAll('#tours .tour-details ul');
    if (tourHighlightLists.length >= 3) {
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

        // National Gallery highlights
        const naturalHistoryMuseumHighlights = tourHighlightLists[2].querySelectorAll('li');
        naturalHistoryMuseumHighlights.forEach((li, index) => {
            li.textContent = translations[lang].tours.naturalHistoryMuseum.highlights[index];
        });
    }

    const aboutUsTitle = document.querySelector('#about-us h2');
    if (aboutUsTitle) aboutUsTitle.textContent = translations[lang].aboutUs.title;
    
    // Update team members information
    const teamMembers = document.querySelectorAll('.team-member');
    if (teamMembers.length >= 2) {
        // Update first team member
        const member1Name = teamMembers[0].querySelector('h3');
        const member1Title = teamMembers[0].querySelector('h4');
        const member1Bio = teamMembers[0].querySelector('p');
        
        if (member1Name) member1Name.textContent = translations[lang].aboutUs.team[0].name;
        if (member1Title) member1Title.textContent = translations[lang].aboutUs.team[0].title;
        if (member1Bio) member1Bio.textContent = translations[lang].aboutUs.team[0].bio;
        
        // Update second team member
        const member2Name = teamMembers[1].querySelector('h3');
        const member2Title = teamMembers[1].querySelector('h4');
        const member2Bio = teamMembers[1].querySelector('p');
        
        if (member2Name) member2Name.textContent = translations[lang].aboutUs.team[1].name;
        if (member2Title) member2Title.textContent = translations[lang].aboutUs.team[1].title;
        if (member2Bio) member2Bio.textContent = translations[lang].aboutUs.team[1].bio;
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
                if (elementId === 'tour') {
                    firstOption.textContent = formTranslations.tourPlaceholder;
                    // Update all tour options
                    const tourOptions = translations[lang].tours.options;
                    for (let i = 1; i <= Object.keys(tourOptions).length; i++) {
                        const option = element.querySelector(`option[value="${i}"]`);
                        if (option) {
                            option.textContent = tourOptions[i];
                        }
                    }
                }
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
            emailjs.send('service_nqtc5gy', 'template_vb48wy2', templateParams)
                .then(function(response) {
                    console.log('Email sent!', response.status, response.text);
                    
                    const successMessage = currentLang === 'it' 
                        ? 'Prenotazione inviata con successo! Ti contatteremo presto.' 
                        : 'Tour booking request submitted! We will contact you soon.';
                    alert(successMessage);
                    
                    form.reset();
                    
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                })
                .catch(function(error) {
                    console.log('Email sending error:', error);
                    
                    const errorMessage = currentLang === 'it' 
                        ? 'Si è verificato un errore durante l\'invio. Riprova più tardi o contattaci direttamente.' 
                        : 'An error occurred while sending. Please try again later or contact us directly.';
                    alert(errorMessage);
                    
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                });
        } else {
            console.log('EmailJS not available. Form data:', formData);
            
            const fallbackMessage = currentLang === 'it' 
                ? 'Sistema di invio non disponibile. Ti preghiamo di contattarci direttamente.' 
                : 'Sending system not available. Please contact us directly.';
            alert(fallbackMessage);
            
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
            return;
        }
        
        if (typeof Pikaday === 'undefined' || typeof moment === 'undefined') {
            console.log('Pikaday or moment not available - using native date picker');
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const dd = String(today.getDate()).padStart(2, '0');
            const formattedToday = `${yyyy}-${mm}-${dd}`;
            
            dateInput.setAttribute('min', formattedToday);
            return;
        }
        
        const config = DATE_CONFIG['en'];
        const today = new Date();

        window.datePicker = new Pikaday({
            field: dateInput,
            format: config.format,
            formatStrict: config.format,
            defaultDate: null,
            setDefaultDate: false,
            minDate: today,
            disableDayFn: function(date) {
                return date < new Date(today.setHours(0, 0, 0, 0));
            },
            onSelect: function(date) {
                const formattedDate = moment(date).format('DD/MM/YYYY');
                dateInput.value = formattedDate;
                dateInput.setAttribute('data-selected-date', formattedDate);
            }
        });

        dateInput.setAttribute('placeholder', config.placeholder);

        if (dateInput.getAttribute('data-selected-date')) {
            const savedDate = dateInput.getAttribute('data-selected-date');
            dateInput.value = savedDate;
        }
    }

    // Modify switchLanguage to include date picker reinitialization
    const originalSwitchLanguage = switchLanguage;
    switchLanguage = function(lang) {
        originalSwitchLanguage.call(this, lang);
        initializeDatePicker();
    };

    // Additional event listener to handle manual input
    if (dateInput) {
        dateInput.addEventListener('change', function() {
            const config = DATE_CONFIG['en'];
            const inputDate = moment(this.value, config.format, true);
            
            if (inputDate.isValid()) {
                if (window.datePicker) {
                    window.datePicker.setDate(inputDate.toDate());
                }
            } else {
                this.value = '';
            }
        });
    }

    // Load Preferred Language on Page Load
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    console.log('Initializing with language:', savedLang);
    switchLanguage(savedLang);
    initializeDatePicker();
});