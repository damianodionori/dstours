document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tour-booking-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            tour: document.getElementById('tour').value,
            date: document.getElementById('date').value,
            message: document.getElementById('message').value
        };
        
        // Basic form validation
        if (!formData.name || !formData.email || !formData.tour || !formData.date) {
            alert('Please fill in all required fields');
            return;
        }
        
        // In a real-world scenario, you'd send this data to a backend server
        console.log('Booking submitted:', formData);
        
        // Show success message
        alert('Tour booking request submitted! We will contact you soon.');
        
        // Reset form
        form.reset();
    });
});