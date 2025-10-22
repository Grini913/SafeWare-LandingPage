function toggleFaq(element) {
    console.log('FAQ clicked'); // Debug log

    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');

    console.log('Is active:', isActive); // Debug log

    // Close all FAQ items first
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const arrow = item.querySelector('.faq-arrow');
        if (arrow) {
            arrow.textContent = '▼';
        }
    });

    // If this item wasn't active, open it
    if (!isActive) {
        console.log('Opening FAQ item'); // Debug log
        faqItem.classList.add('active');
        const arrow = element.querySelector('.faq-arrow');
        if (arrow) {
            arrow.textContent = '▲';
        }
    } else {
        console.log('Closing FAQ item'); // Debug log
    }
}

// Ensure the function is available when the page loads
document.addEventListener('DOMContentLoaded', function () {
    console.log('FAQ script loaded');
});