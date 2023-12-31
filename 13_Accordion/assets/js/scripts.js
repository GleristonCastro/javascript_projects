const headers = document.querySelectorAll('.accordion-header');

headers.forEach((header) => {
  header.addEventListener('click', function () {

    const item = this.parentNode;

    const items = document.querySelectorAll('.accordion-item');

    const isActive = item.classList.contains('accordion-item--active');

    items.forEach((item) => {
      item.classList.remove('accordion-item--active');
      item.classList.add('accordion-item--closed');
    });

    if (!isActive) {
      item.classList.add('accordion-item--active');
      item.classList.remove('accordion-item--closed');
    }
  });
});