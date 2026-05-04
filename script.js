document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.querySelector('#next');
    const prevBtn = document.querySelector('#prev');
    const list = document.querySelector('.carousel .list');
    const thumb = document.querySelector('.carousel .thumbnail');

    // Button click logic
    const moveSlider = (direction) => {
        const items = document.querySelectorAll('.carousel .list .item');
        const thumbs = document.querySelectorAll('.carousel .thumbnail .item');

        if (direction === 'next') {
            list.appendChild(items[0]);
            thumb.appendChild(thumbs[0]);
        } else {
            list.prepend(items[items.length - 1]);
            thumb.prepend(thumbs[thumbs.length - 1]);
        }
    };

    nextBtn.addEventListener('click', () => moveSlider('next'));
    prevBtn.addEventListener('click', () => moveSlider('prev'));

    // Auto-play every 7 seconds
    setInterval(() => moveSlider('next'), 7000);
});
