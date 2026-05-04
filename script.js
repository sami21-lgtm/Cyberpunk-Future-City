document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.querySelector('#next');
    const prevBtn = document.querySelector('#prev');
    const list = document.querySelector('.carousel .list');
    const thumb = document.querySelector('.carousel .thumbnail');

    const moveSlider = (direction) => {
        
        let items = document.querySelectorAll('.carousel .list .item');
        let thumbs = document.querySelectorAll('.carousel .thumbnail .item');

        if (direction === 'next') {
            list.appendChild(items[0]);
            thumb.appendChild(thumbs[0]);
        } else {
            list.prepend(items[items.length - 1]);
            thumb.prepend(thumbs[thumbs.length - 1]);
        }
    };

    nextBtn.onclick = () => moveSlider('next');
    prevBtn.onclick = () => moveSlider('prev');

    setInterval(() => moveSlider('next'), 9000);
});
