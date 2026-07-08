
document.addEventListener('DOMContentLoaded', () => {
    initCategoryFilters();
});

function initCategoryFilters() {
    const filters = document.querySelectorAll('.filter-tab');
    const cards = document.querySelectorAll('.service-card');

    if (!filters.length || !cards.length) return;

    filters.forEach(tab => {
        tab.addEventListener('click', () => {
            const currentFilter = tab.getAttribute('data-filter');

            // Update interactive tab button styles
            filters.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white', 'shadow-sm');
                btn.classList.add('bg-white', 'text-gray-600', 'hover:bg-gray-100', 'dark:bg-gray-900', 'dark:text-gray-300', 'dark:hover:bg-gray-800');
            });

            tab.classList.add('bg-blue-600', 'text-white', 'shadow-sm');
            tab.classList.remove('bg-white', 'text-gray-600', 'hover:bg-gray-100', 'dark:bg-gray-900', 'dark:text-gray-300', 'dark:hover:bg-gray-800');

            // Filter system matrix records smoothly
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (currentFilter === 'all' || cardCategory === currentFilter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}
