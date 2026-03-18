//  
// Author:     George Adams
// Date:       27.02.2026
// Message:    Why hello there! 
//


// // Change color of images on navigation buttons
// const home_button = document.getElementById("home_button")
// const home_img = document.getElementById("home_img")
// const projects_button = document.getElementById("projects_button")
// const projects_img = document.getElementById("projects_img")
// const blog_button = document.getElementById("blog_button")
// const blog_img = document.getElementById("blog_img")

// localStorage.current_state = 0;

// home_button.addEventListener('mouseenter', () => {
//     if (current_state != 0) {
//         make_light(home_button, home_img, "Photos/Home dark.png")
//     }
// })

// home_button.addEventListener('mouseleave', () => {
//     if (current_state != 0) {
//         make_dark(home_button, home_img, "Photos/Home white.png")
//     }
// })

// projects_button.addEventListener('mouseenter', () => {
//     if (current_state != 1) {
//         make_light(projects_button, projects_img, "Photos/Spanner dark.png")
//     }
// })

// projects_button.addEventListener('mouseleave', () => {
//     if (current_state != 1) {
//         make_dark(projects_button, projects_img, "Photos/Spanner white.png")
//     }
// })

// blog_button.addEventListener('mouseenter', () => {
//     if (current_state != 2) {
//         make_light(blog_button, blog_img, "Photos/Blog dark.png")
//     }
// })

// blog_button.addEventListener('mouseleave', () => {
//     if (current_state != 2) {
//         make_dark(blog_button, blog_img, "Photos/Blog white.png")
//     }
// })


// function make_light(button, img, img_path) {
//     img.src = img_path;
//     button.classList.remove('dark');
//     button.classList.add('light');
// }

// function make_dark(button, img, img_path) {
//     img.src = img_path;
//     button.classList.remove('light');
//     button.classList.add('dark')
// }


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