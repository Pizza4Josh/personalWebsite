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

home_button.addEventListener('mouseenter', () => {
    home_img.src = "Photos/Home dark.png"
})

home_button.addEventListener('mouseleave', () => {
    home_img.src = "Photos/Home white.png"
})

projects_button.addEventListener('mouseenter', () => {
    projects_img.src = "Photos/Spanner dark.png"
})

projects_button.addEventListener('mouseleave', () => {
    projects_img.src = "Photos/Spanner white.png"
})

blog_button.addEventListener('mouseenter', () => {
    blog_img.src = "Photos/Blog dark.png"
})

blog_button.addEventListener('mouseleave', () => {
    blog_img.src = "Photos/Blog white.png"
})