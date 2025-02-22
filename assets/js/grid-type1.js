document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.grid-type1-item');

    items.forEach(item => {
        item.addEventListener('mouseover', function() {
            const img = item.querySelector('.grid-type1-img');
            img.style.opacity = '1';
        });

        item.addEventListener('mouseout', function() {
            const img = item.querySelector('.grid-type1-img');
            img.style.opacity = '0';
        });
    });
});