document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.querySelector('#next');
    const prevBtn = document.querySelector('#prev');
    const list = document.querySelector('.carousel .list');
    const thumb = document.querySelector('.carousel .thumbnail');

    nextBtn.addEventListener('click', () => {
        let items = document.querySelectorAll('.carousel .list .item');
        let thumbs = document.querySelectorAll('.carousel .thumbnail .item');
        
        list.appendChild(items[0]);
        thumb.appendChild(thumbs[0]);
    });

    prevBtn.addEventListener('click', () => {
        let items = document.querySelectorAll('.carousel .list .item');
        let thumbs = document.querySelectorAll('.carousel .thumbnail .item');
        
        list.prepend(items[items.length - 1]);
        thumb.prepend(thumbs[thumbs.length - 1]);
    });
});
