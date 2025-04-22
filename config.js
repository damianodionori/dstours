// Configuration object with default values
const config = {
    GOOGLE_ANALYTICS_ID: 'G-MJT1TDT7WP',
    COOKIEBOT_ID: 'c2124be9-03d0-42d3-8f69-3aab2ce71df7'
};

// Function to load environment variables
async function loadConfig() {
    try {
        const response = await fetch('.env');
        const text = await response.text();
        const lines = text.split('\n');
        
        lines.forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                config[key.trim()] = value.trim();
            }
        });
    } catch (error) {
        console.warn('Could not load .env file, using default values');
    }
}

// Load config and make it available globally
loadConfig().then(() => {
    window.config = config;
}); 