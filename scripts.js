const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        accordionItems.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
            }
        });

        item.classList.toggle('active');
    });
});