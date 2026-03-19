//  
// Author:     George Adams
// Date:       27.02.2026
// Message:    Why hello there! 
//

let current_img = 0;
const track = document.getElementById('carousel-track');
const dotsContainer = document.getElementById('carousel-dots');
const total = track ? track.children.length : 0;

// Build dots
for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToImg(i));
    dotsContainer.appendChild(dot);
}

function moveCarousel(direction) {
    goToImg((current_img + direction + total) % total);
}

function goToImg(index) {
    current_img = index;
    track.style.transform = `translateX(-${current_img * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === current_img);
    });
}

goToImg(0);


function goToImg(index) {
    current_img = index;
    track.style.transform = `translateX(-${current_img * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === current_img);
    });
    const caption = document.getElementById('carousel-caption');
    const imgs = track.querySelectorAll('.carousel-img');
    caption.textContent = imgs[current_img].dataset.caption || '';
}