document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const slides = document.querySelectorAll('.bg-slide');
    
    let current = 0;

   
    function changeBg(direction) {
      
        slides[current].classList.remove('active');

        if (direction === 'next') {
            current = (current + 1) % slides.length; // পরের ছবিতে যাচ্ছি
        } else {
            current = (current - 1 + slides.length) % slides.length; // আগের ছবিতে যাচ্ছি
        }

      
        slides[current].classList.add('active');
    }

    
    nextBtn.addEventListener('click', () => changeBg('next'));
    prevBtn.addEventListener('click', () => changeBg('prev'));
});
