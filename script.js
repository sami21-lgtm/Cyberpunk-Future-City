document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.querySelector('#next');
    const prevBtn = document.querySelector('#prev');
    const list = document.querySelector('.carousel .list');
    const thumb = document.querySelector('.carousel .thumbnail');
    
    let canClick = true; // দ্রুত ক্লিক আটকাতে

    nextBtn.onclick = () => {
        if(!canClick) return;
        canClick = false;

        let items = document.querySelectorAll('.carousel .list .item');
        let thumbs = document.querySelectorAll('.carousel .thumbnail .item');
        
        list.appendChild(items[0]);
        thumb.appendChild(thumbs[0]);

        setTimeout(() => { canClick = true; }, 500); // অ্যানিমেশন শেষ হওয়া পর্যন্ত ওয়েট
    };

    prevBtn.onclick = () => {
        if(!canClick) return;
        canClick = false;

        let items = document.querySelectorAll('.carousel .list .item');
        let thumbs = document.querySelectorAll('.carousel .thumbnail .item');
        
        list.prepend(items[items.length - 1]);
        thumb.prepend(thumbs[thumbs.length - 1]);

        setTimeout(() => { canClick = true; }, 500);
    };
});
