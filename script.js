let currentSlide = 0;
const slides = document.querySelectorAll('.slide-bg');
const thumbs = document.querySelectorAll('.thumb');
const totalSlides = slides.length;


function changeSlide(index) {
   
    slides.forEach(slide => slide.classList.remove('active'));
    thumbs.forEach(thumb => thumb.classList.remove('active'));


    slides[index].classList.add('active');
    thumbs[index].classList.add('active');
    
    currentSlide = index;
}

document.getElementById('next').addEventListener('click', () => {
    let nextIndex = (currentSlide + 1) % totalSlides;
    changeSlide(nextIndex);
});


document.getElementById('prev').addEventListener('click', () => {
    let prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    changeSlide(prevIndex);
});


window.goToSlide = function(index) {
    changeSlide(index);
};
