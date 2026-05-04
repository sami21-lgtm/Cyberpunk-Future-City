document.addEventListener('DOMContentLoaded', () => {
    let nextBtn = document.querySelector('#next');
    let prevBtn = document.querySelector('#prev');
    let carousel = document.querySelector('.carousel');
    let list = document.querySelector('.carousel .list');
    let thumb = document.querySelector('.carousel .thumbnail');

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
