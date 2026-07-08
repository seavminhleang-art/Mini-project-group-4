// app.js - Adding interactive features to the PDR Express App

document.addEventListener('DOMContentLoaded', () => {
    const quoteButton = document.getElementById('quoteBtn');

    if (quoteButton) {
        quoteButton.addEventListener('click', () => {
            alert('Redirecting to the Local Pricing Calculator System...');
        });
    }

    // Example dynamic handler for service cards click tracking
    const networkCards = document.querySelectorAll('.border-gray-200');
    networkCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            console.log(`Selected service item index: ${index + 1}`);
        });
    });
});