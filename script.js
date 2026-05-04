document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.querySelector('#next');
    const prevBtn = document.querySelector('#prev');
    const items = document.querySelectorAll('.carousel .list .item');
    const thumbs = document.querySelectorAll('.carousel .thumbnail .item');
    
    let currentIndex = 0;
    let autoPlayInterval;

    
    const updateSlider = (index) => {
        
        items.forEach(item => item.classList.remove('active'));
        thumbs.forEach(thumb => thumb.classList.remove('active'));


        items[index].classList.add('active');
        thumbs[index].classList.add('active');
        
        currentIndex = index;
    };

   
    nextBtn.addEventListener('click', () => {
        let nextIndex = (currentIndex + 1) % items.length;
        updateSlider(nextIndex);
        resetAutoPlay();
    });

    
    prevBtn.addEventListener('click', () => {
        let prevIndex = (currentIndex - 1 + items.length) % items.length;
        updateSlider(prevIndex);
        resetAutoPlay();
    });

   
    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            updateSlider(index);
            resetAutoPlay();
        });
    });

   
    const startAutoPlay = () => {
        autoPlayInterval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % items.length;
            updateSlider(nextIndex);
        }, 9000); // ৯ সেকেন্ড পর পর চেঞ্জ হবে
    };

   
    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    };

    
    startAutoPlay();
});
