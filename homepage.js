// import { Application } from '@splinetool/runtime';

// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/5foNd0rLoq8ksqHl/scene.splinecode');
// JavaScript to highlight the active link
// JavaScript to add the "active" class to the current page's link
// JavaScript to add the "active" class to the current page's link
var currentPage = window.location.pathname.split('/').pop();
var navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    var linkHref = link.getAttribute('href').split('/').pop();
    if (linkHref === currentPage) {
        link.classList.add('active');
    }
});

window.addEventListener('scroll',reveal);
function reveal(){
    let reveals= document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length;i++){
        var windowheight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=150;

        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

const introContainer = document.querySelector('.intro');
const animationBox = document.querySelector('.animationbox');
const content = document.querySelector('.content');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const animationOffset = 120;

  // Move the animation box to the left based on scroll position
  animationBox.style.transform = `translateX(-${scrollY - animationOffset}px)`;
  
  // Adjust the margin of the content to create space for the moving loader
  content.style.marginLeft = `${scrollY - animationOffset}px`;
});

// Initial position of the animation box and content
animationBox.style.transform = 'translateX(0)';
content.style.marginLeft = '0';
