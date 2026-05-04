document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.querySelector('#next');
    const prevBtn = document.querySelector('#prev');
    const list = document.querySelector('.carousel .list');
    const thumb = document.querySelectorAll('.carousel .thumbnail')[0];

    const moveSlider = (direction) => {
        const items = document.querySelectorAll('.carousel .list .item');
        const thumbs = document.querySelectorAll('.carousel .thumbnail .item');

        if (direction === 'next') {
            list.appendChild(items[0]);
            thumb.appendChild(thumbs[0]);
        } else {
            list.prepend(items[items.length - 1]);
            thumb.prepend(thumbs[thumbs.length - 1]);
        }
    };

    // Use 'click' as it handles both tap and mouse
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveSlider('next');
    });

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveSlider('prev');
    });

    // Auto-play
    let autoNext = setInterval(() => moveSlider('next'), 8000);

    // Reset timer on manual click
    const resetTimer = () => {
        clearInterval(autoNext);
        autoNext = setInterval(() => moveSlider('next'), 8000);
    };
    nextBtn.onclick = resetTimer;
    prevBtn.onclick = resetTimer;
});
