document.addEventListener('DOMContentLoaded', function() {
    var nextBtn = document.getElementById('nextBtn');
    var prevBtn = document.getElementById('prevBtn');
    var slides = document.querySelectorAll('.bg-slide');
    var colorOverlay = document.querySelector('.color-overlay');
    
    var current = 0;

    function changeBg(direction) {
       
        slides[current].classList.remove('active');

        if (direction === 'next') {
            current = (current + 1) % slides.length; // পরের ছবিতে যাচ্ছি
        } else {
            current = (current - 1 + slides.length) % slides.length; // আগের ছবিতে যাচ্ছি
        }

      
        slides[current].classList.add('active');

    
        var newColor = slides[current].getAttribute('data-color');
        colorOverlay.style.background = newColor;
    }

   
    nextBtn.addEventListener('click', function() { changeBg('next'); });
    prevBtn.addEventListener('click', function() { changeBg('prev'); });
});
