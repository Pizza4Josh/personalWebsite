//  
// Author:     George Adams
// Date:       27.02.2026
// Message:    Why hello there! 
//


// Change color of images on navigation buttons
const home_button = document.getElementById("home_button")
const home_img = document.getElementById("home_img")
const projects_button = document.getElementById("projects_button")
const projects_img = document.getElementById("projects_img")
const blog_button = document.getElementById("blog_button")
const blog_img = document.getElementById("blog_img")

let current_state = 0;

home_button.addEventListener('mouseenter', () => {
    if (current_state != 0) {
        make_light(home_button, home_img, "Photos/Home dark.png")
    }
})

home_button.addEventListener('mouseleave', () => {
    if (current_state != 0) {
        make_dark(home_button, home_img, "Photos/Home white.png")
    }
})

projects_button.addEventListener('mouseenter', () => {
    if (current_state != 1) {
        make_light(projects_button, projects_img, "Photos/Spanner dark.png")
    }
})

projects_button.addEventListener('mouseleave', () => {
    if (current_state != 1) {
        make_dark(projects_button, projects_img, "Photos/Spanner white.png")
    }
})

blog_button.addEventListener('mouseenter', () => {
    if (current_state != 2) {
        make_light(blog_button, blog_img, "Photos/Blog dark.png")
    }
})

blog_button.addEventListener('mouseleave', () => {
    if (current_state != 2) {
        make_dark(blog_button, blog_img, "Photos/Blog white.png")
    }
})


function make_light(button, img, img_path) {
    img.src = img_path;
    button.classList.remove('dark');
    button.classList.add('light');
}

function make_dark(button, img, img_path) {
    img.src = img_path;
    button.classList.remove('light');
    button.classList.add('dark')
}


// Switching tabs
const home = document.getElementById('home')
const projects = document.getElementById('projects')
const blog = document.getElementById('blog')
let tabs = [home, projects, blog]

change_state(0); 

function change_tab(state) {
    for (let i = 0; i < tabs.length; i++) {
        console.log(i)
        if (i == state) {
            console.log("removed hidden from ^")
            tabs[i].classList.remove('hidden')
        } else {
            tabs[i].classList.add('hidden') 
        }
        
    }
}

function change_state(state) {
    if (current_state != state) {
        current_state = state;
    }

    change_tab(state);

    // Home button
    if (current_state == 0) {
        make_light(home_button, home_img, "Photos/Home dark.png")
        make_dark(projects_button, projects_img, "Photos/Spanner white.png")
        make_dark(blog_button, blog_img, "Photos/Blog white.png")

    // Projects button
    } if (current_state == 1) {
        make_dark(home_button, home_img, "Photos/Home white.png")
        make_light(projects_button, projects_img, "Photos/Spanner dark.png")
        make_dark(blog_button, blog_img, "Photos/Blog white.png") 

    // Blog button
    } if (current_state == 2) {
        make_dark(home_button, home_img, "Photos/Home white.png")
        make_dark(projects_button, projects_img, "Photos/Spanner white.png")
        make_light(blog_button, blog_img, "Photos/Blog dark.png")
    }
}