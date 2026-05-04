document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.querySelector('#next');
    const prevBtn = document.querySelector('#prev');
    const carouselList = document.querySelector('.carousel .list');
    const thumbnailList = document.querySelector('.carousel .thumbnail');

    nextBtn.addEventListener('click', () => {
        moveSlider('next');
    });

    prevBtn.addEventListener('click', () => {
        moveSlider('prev');
    });

    function moveSlider(direction) {
        let items = document.querySelectorAll('.carousel .list .item');
        let thumbnails = document.querySelectorAll('.carousel .thumbnail .item');

        if (direction === 'next') {
            carouselList.appendChild(items[0]);
            thumbnailList.appendChild(thumbnails[0]);
        } else {
            carouselList.prepend(items[items.length - 1]);
            thumbnailList.prepend(thumbnails[thumbnails.length - 1]);
        }
    }
});
