let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.imgc');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);
