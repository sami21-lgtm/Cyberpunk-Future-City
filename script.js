let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listItems = document.querySelector('.carousel .list');
let thumbItems = document.querySelector('.carousel .thumbnail');

nextBtn.onclick = () => showSlider('next');
prevBtn.onclick = () => showSlider('prev');

function showSlider(type) {
    let items = document.querySelectorAll('.carousel .list .item');
    let thumbs = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next') {
        listItems.appendChild(items[0]);
        thumbItems.appendChild(thumbs[0]);
        carousel.classList.add('next');
    } else {
        listItems.prepend(items[items.length - 1]);
        thumbItems.prepend(thumbs[thumbs.length - 1]);
        carousel.classList.add('prev');
    }

    setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, 500);
}

// Auto-run every 8 seconds
setInterval(() => { nextBtn.click(); }, 8000);
