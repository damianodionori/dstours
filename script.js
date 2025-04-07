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
            cta: "Explore Tours",
            reviews: {
                title: "Visitor Testimonials"
            },
        },
        tours: {
            title: "Our Signature Tours",
            bookYourTour: "Book Your Tour",
            options: {
                1: "British Museum Private Tour",
                2: "National Gallery Private Tour",
                3: "Natural History Museum Private Tour",
                4: "Westminster Area Private Walking Tour"
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
            },
            westminsterWalkingTour: {
                title: "Westminster Area Private Walking Tour",
                description: "Explore London's iconic landmarks and royal heritage on foot.",
                duration: "Duration: 3 hours",
                price: "Price: From £150 per group of four",
                highlights: [
                    "Big Ben & Houses of Parliament",
                    "Westminster Abbey",
                    "Buckingham Palace",
                    "St. James's Park"
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
            hero: {
                title: "Meet Our Team",
                subtitle: "Passionate guides ready to show you the best of London"
            },
            guideDetails: {
                from: "From",
                languages: "Languages",
                favoriteSpot: "Favorite Spot",
                locations: {
                    tuscany: "Tuscany, Italy",
                    veneto: "Veneto, Italy"
                },
                languagesList: {
                    damiano: "Italian, English, French, German",
                    stefania: "Italian, English, Spanish"
                },
                spots: {
                    damiano: "Natural History Museum",
                    stefania: "National Gallery"
                }
            },
            intro: {
                title: "Let us introduce ourselves!",
                description: "We are a team of passionate London tour guides dedicated to providing unforgettable experiences. With years of experience and deep knowledge of the city's history, culture, and hidden gems, we're here to make your visit truly special."
            },
            company: {
                title: "Our Story",
                description1: "DS Tours London was founded with a simple mission: to share our love for this incredible city through authentic, engaging experiences led by passionate locals.",
                description2: "What started as two Italian friends showing their families around London has grown into a specialized tour company that combines local expertise with Italian warmth and hospitality.",
                description3: "We believe that the best way to experience London is through the eyes of those who call it home and love it dearly. Our guides aren't just knowledgeable—they're passionate storytellers who bring history and culture to life.",
                values: {
                    passion: "Passion",
                    personalTouch: "Personal Touch",
                    knowledge: "Knowledge"
                }
            },
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
            connectWithUs: "Connect With Us",
            tagline: "Exploring London's History & Culture",
            copyright: "© 2022-2025 DS Tours | Tour Guide",
            signature: "Website created by Damiano Dionori",
            socialLinks: {
                instagram: "Instagram",
                tripadvisor: "TripAdvisor",
                email: "Email",
                whatsapp: "WhatsApp"
            }
        },
        reviews: {
            title: "Visitor Testimonials",
            altText: "5-star Airbnb review"
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
            cta: "Esplora i Tour",
            reviews: {
                title: "Recensioni dei Visitatori"
            },
        },
        tours: {
            title: "I Nostri Tour Esclusivi",
            bookYourTour: "Prenota il Tuo Tour",
            options: {
                1: "Tour Privato del British Museum",
                2: "Tour Privato della National Gallery",
                3: "Tour Privato del Natural History Museum",
                4: "Tour Privato della zona di Westminster"
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
            },
            westminsterWalkingTour: {
                title: "Tour Privato della zona di Westminster",
                description: "Esplora i luoghi iconici di Londra e il patrimonio reale a piedi.",
                duration: "Durata: 3 ore",
                price: "Prezzo: Da £150 per gruppo di quattro",
                highlights: [
                    "Big Ben & Palazzo del Parlamento",
                    "Abbazia di Westminster",
                    "Buckingham Palace",
                    "Parco di St. James"
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
            hero: {
                title: "Il Nostro Team",
                subtitle: "Guide appassionate pronte a mostrarti il meglio di Londra"
            },
            guideDetails: {
                from: "Da",
                languages: "Lingue",
                favoriteSpot: "Luogo Preferito",
                locations: {
                    tuscany: "Toscana, Italia",
                    veneto: "Veneto, Italia"
                },
                languagesList: {
                    damiano: "Italiano, Inglese, Francese, Tedesco",
                    stefania: "Italiano, Inglese, Spagnolo"
                },
                spots: {
                    damiano: "Museo di Storia Naturale",
                    stefania: "National Gallery"
                }
            },
            intro: {
                title: "Lasciaci presentare!",
                description: "Siamo un team di guide turistiche londinesi appassionate dedite a fornire esperienze indimenticabili. Con anni di esperienza e profonda conoscenza della storia della città, della cultura e dei luoghi nascosti, siamo qui per rendere la tua visita davvero speciale."
            },
            company: {
                title: "La Nostra Storia",
                description1: "DS Tours London è stata fondata con una missione semplice: condividere il nostro amore per questa incredibile città attraverso esperienze autentiche e coinvolgenti guidate da locals appassionati.",
                description2: "Quello che è iniziato come due amici italiani che mostravano Londra alle loro famiglie si è trasformato in una società di tour specializzata che combina competenza locale con il calore e l'ospitalità italiana.",
                description3: "Crediamo che il modo migliore per vivere Londra sia attraverso gli occhi di chi la chiama casa e la ama profondamente. Le nostre guide non sono solo preparate, sono narratrici appassionate che danno vita alla storia e alla cultura.",
                values: {
                    passion: "Passione",
                    personalTouch: "Tocco Personale",
                    knowledge: "Conoscenza"
                }
            },
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
            connectWithUs: "Contattaci",
            tagline: "Esplora la Storia e la Cultura di Londra",
            copyright: "© 2022-2025 DS Tours | Guida Turistica",
            signature: "Sito web creato da Damiano Dionori",
            socialLinks: {
                instagram: "Instagram",
                tripadvisor: "TripAdvisor",
                email: "Email",
                whatsapp: "WhatsApp"
            }
        },
        reviews: {
            title: "Recensioni dei Visitatori",
            altText: "Recensione 5 stelle su Airbnb"
        }
    }
};

const DATE_CONFIG = {
    en: {
        format: 'DD/MM/YYYY',  
        placeholder: 'dd/mm/yyyy' 
    }
};

// Function to switch language
function switchLanguage(lang) {
    // Only proceed if the language is supported
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
        console.error('Unsupported language:', lang);
        return;
    }

    // Save the preferred language
    localStorage.setItem('preferredLanguage', lang);

    // Update the language switcher UI
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Update all translatable elements
    updateTranslatableElements(lang);
}

// Function to update all translatable elements
function updateTranslatableElements(lang) {
    // Update elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];
        for (const k of keys) {
            translation = translation?.[k];
        }
        if (translation) {
            element.textContent = translation;
        }
    });

    // Update navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const key = link.getAttribute('data-translate');
        if (key && translations[lang]?.nav?.[key]) {
            link.textContent = translations[lang].nav[key];
        }
    });

    // Get the current page
    const currentPath = window.location.pathname;
    const isHomePage = currentPath.endsWith('index.html') || currentPath.endsWith('/');
    const isToursPage = currentPath.includes('tours.html');
    const isContactPage = currentPath.includes('contact.html');
    const isAboutPage = currentPath.includes('about-us.html');

    // Update Home page content
    if (isHomePage) {
        const heroTitle = document.querySelector('.hero-content h2');
        const heroSubtitle = document.querySelector('.hero-content p');
        const ctaButton = document.querySelector('.hero-content .cta-button');
    const reviewsTitle = document.querySelector('.reviews h2');

        if (heroTitle) heroTitle.textContent = translations[lang].home.title;
        if (heroSubtitle) heroSubtitle.textContent = translations[lang].home.subtitle;
        if (ctaButton) ctaButton.textContent = translations[lang].home.cta;
    if (reviewsTitle) reviewsTitle.textContent = translations[lang].home.reviews.title;
    }

    // Update Tours page content
    if (isToursPage) {
        const toursTitle = document.querySelector('.tours-section h2');
    if (toursTitle) toursTitle.textContent = translations[lang].tours.title;
    
        // Update tour cards
        const tourCards = document.querySelectorAll('.tour-card');
        tourCards.forEach(card => {
            const tourId = card.getAttribute('data-tour-id');
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            const highlights = card.querySelectorAll('ul li');
            const tourInfo = card.querySelectorAll('.tour-info span');

            let tourKey;
            switch(tourId) {
                case '1': tourKey = 'britishMuseum'; break;
                case '2': tourKey = 'nationalGallery'; break;
                case '3': tourKey = 'naturalHistoryMuseum'; break;
                case '4': tourKey = 'westminsterWalkingTour'; break;
            }

            if (tourKey) {
                if (title) title.textContent = translations[lang].tours[tourKey].title;
                if (description) description.textContent = translations[lang].tours[tourKey].description;
                if (highlights && translations[lang].tours[tourKey].highlights) {
                    highlights.forEach((li, index) => {
                        if (translations[lang].tours[tourKey].highlights[index]) {
                            li.textContent = translations[lang].tours[tourKey].highlights[index];
                        }
                    });
                }
                if (tourInfo && tourInfo[0]) tourInfo[0].textContent = translations[lang].tours[tourKey].duration;
                if (tourInfo && tourInfo[1]) tourInfo[1].textContent = translations[lang].tours[tourKey].price;
            }
        });
    }

    // Update Contact page content
    if (isContactPage) {
        const bookingTitle = document.querySelector('.contact-section h2');
        if (bookingTitle) bookingTitle.textContent = translations[lang].tours.bookYourTour;

        // Update form labels and placeholders
        const formLabels = {
            'name': translations[lang].form.name,
            'email': translations[lang].form.email,
            'tour': translations[lang].form.tour,
            'date': translations[lang].form.date,
            'tour-time': translations[lang].form.time,
            'language-preference': translations[lang].form.language,
            'message': translations[lang].form.message
        };

        // Update labels
        Object.keys(formLabels).forEach(id => {
            const label = document.querySelector(`label[for="${id}"]`);
            if (label) label.textContent = formLabels[id];
        });

        // Update select options
        const tourSelect = document.getElementById('tour');
        if (tourSelect) {
            tourSelect.options[0].text = translations[lang].form.tourPlaceholder;
            Object.keys(translations[lang].tours.options).forEach(key => {
                const option = tourSelect.querySelector(`option[value="${key}"]`);
                if (option) option.text = translations[lang].tours.options[key];
            });
        }

        const timeSelect = document.getElementById('tour-time');
        if (timeSelect) {
            timeSelect.options[0].text = translations[lang].form.timePlaceholder;
            if (timeSelect.options[1]) timeSelect.options[1].text = translations[lang].form.morningTour;
            if (timeSelect.options[2]) timeSelect.options[2].text = translations[lang].form.afternoonTour;
        }

        const languageSelect = document.getElementById('language-preference');
        if (languageSelect) {
            languageSelect.options[0].text = translations[lang].form.languagePlaceholder;
        }

        // Update submit button
        const submitButton = document.querySelector('.submit-button');
        if (submitButton) submitButton.textContent = translations[lang].form.submit;
    }

    // Update About page content
    if (isAboutPage) {
        const pageTitle = document.querySelector('.about-hero-content h1');
        if (pageTitle && translations[lang]?.aboutUs?.hero?.title) {
            pageTitle.textContent = translations[lang].aboutUs.hero.title;
        }

        const pageSubtitle = document.querySelector('.about-hero-content p');
        if (pageSubtitle && translations[lang]?.aboutUs?.hero?.subtitle) {
            pageSubtitle.textContent = translations[lang].aboutUs.hero.subtitle;
        }

        const introTitle = document.querySelector('.about-intro h2');
        if (introTitle && translations[lang]?.aboutUs?.intro?.title) {
            introTitle.textContent = translations[lang].aboutUs.intro.title;
        }

        const introDescription = document.querySelector('.about-intro p');
        if (introDescription && translations[lang]?.aboutUs?.intro?.description) {
            introDescription.textContent = translations[lang].aboutUs.intro.description;
        }

        const companyTitle = document.querySelector('.about-company h2');
        if (companyTitle && translations[lang]?.aboutUs?.company?.title) {
            companyTitle.textContent = translations[lang].aboutUs.company.title;
        }

        const companyDescriptions = document.querySelectorAll('.about-company-text p');
        if (companyDescriptions.length > 0 && translations[lang]?.aboutUs?.company) {
            companyDescriptions[0].textContent = translations[lang].aboutUs.company.description1;
            companyDescriptions[1].textContent = translations[lang].aboutUs.company.description2;
            companyDescriptions[2].textContent = translations[lang].aboutUs.company.description3;
        }

        const valueItems = document.querySelectorAll('.value-item h4');
        if (valueItems.length > 0 && translations[lang]?.aboutUs?.company?.values) {
            valueItems[0].textContent = translations[lang].aboutUs.company.values.passion;
            valueItems[1].textContent = translations[lang].aboutUs.company.values.personalTouch;
            valueItems[2].textContent = translations[lang].aboutUs.company.values.knowledge;
        }

        // Update team member information
        const teamMembers = document.querySelectorAll('.team-member');
        if (teamMembers.length > 0 && translations[lang]?.aboutUs?.team) {
            teamMembers.forEach((member, index) => {
                const name = member.querySelector('.guide-name');
                const title = member.querySelector('.guide-title');
                const bio = member.querySelector('.guide-bio');
                
                // Update guide details labels and content
                const detailsLabels = member.querySelectorAll('.guide-detail');
                detailsLabels.forEach(detail => {
                    const icon = detail.querySelector('i');
                    if (icon) {
                        const guideName = index === 0 ? 'damiano' : 'stefania';
                        if (icon.classList.contains('fa-map-marker-alt')) {
                            const location = index === 0 ? translations[lang].aboutUs.guideDetails.locations.tuscany : translations[lang].aboutUs.guideDetails.locations.veneto;
                            detail.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${translations[lang].aboutUs.guideDetails.from}: ${location}`;
                        } else if (icon.classList.contains('fa-language')) {
                            const languages = translations[lang].aboutUs.guideDetails.languagesList[guideName];
                            detail.innerHTML = `<i class="fas fa-language"></i> ${translations[lang].aboutUs.guideDetails.languages}: ${languages}`;
                        } else if (icon.classList.contains('fa-heart')) {
                            const spot = translations[lang].aboutUs.guideDetails.spots[guideName];
                            detail.innerHTML = `<i class="fas fa-heart"></i> ${translations[lang].aboutUs.guideDetails.favoriteSpot}: ${spot}`;
                        }
                    }
                });

                if (name && translations[lang].aboutUs.team[index]?.name) {
                    name.textContent = translations[lang].aboutUs.team[index].name;
                }
                if (title && translations[lang].aboutUs.team[index]?.title) {
                    title.textContent = translations[lang].aboutUs.team[index].title;
                }
                if (bio && translations[lang].aboutUs.team[index]?.bio) {
                    bio.textContent = translations[lang].aboutUs.team[index].bio;
                }
            });
        }
    }

    // Update footer content
    const footerTitle = document.querySelector('.footer-title');
    if (footerTitle && translations[lang]?.footer?.connectWithUs) {
        footerTitle.textContent = translations[lang].footer.connectWithUs;
    }

    const footerTagline = document.querySelector('.footer-tagline');
    if (footerTagline && translations[lang]?.footer?.tagline) {
        footerTagline.textContent = translations[lang].footer.tagline;
    }

    const socialLinks = document.querySelectorAll('.social-links a');
    if (socialLinks.length > 0 && translations[lang]?.footer?.socialLinks) {
        socialLinks.forEach(link => {
            const platform = link.getAttribute('data-platform');
            if (platform && translations[lang].footer.socialLinks[platform]) {
                link.setAttribute('title', translations[lang].footer.socialLinks[platform]);
            }
        });
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize language if it hasn't been initialized yet and components are loaded
    if (!window.languageInitialized && document.getElementById('header-placeholder').innerHTML) {
        const savedLang = localStorage.getItem('preferredLanguage') || 'en';
        switchLanguage(savedLang);
        window.languageInitialized = true;
    }
});

// Tour Booking Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tour-booking-form');
    
    if (form) {
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
        if (!window.languageInitialized) {
            switchLanguage(savedLang);
            window.languageInitialized = true;
        }
        initializeDatePicker();
    }
});

// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });

        // Close menu when clicking on a link
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
    }
});