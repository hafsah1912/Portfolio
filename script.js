// let menuIcon=document.querySelector('#menu-icon');
// let navbar=document.querySelector('.navbar');

// menuIcon.onclick=()=>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };


// let sections=document.querySelectorAll('section');
// let navLinks=document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };

//     });
//     let header=document.querySelector('header');

//     header.classList.toggle('sticky',window.screenY>100);
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };

// ScrollReveal({
//     //reset:true,
//     distance:'80px',
//     duration:2000,
//     delay:200
// });

// ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
// ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
// ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
// ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

// const typed = new Typed('.multiple-text',{
//     strings:['CSE Student at LJIET ','FullStack developer',"AIML Developer"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// });


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ScrollReveal configuration
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js configuration
const typed = new Typed('.multiple-text', {
    strings: ['CSE Student at LJIET', 'Full Stack Developer', 'AIML Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Filter functionality for certifications
function filterSelection(category) {
    let cards = document.getElementsByClassName('card');
    let buttons = document.getElementsByClassName('filter-item');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    document.querySelector(`button[onclick="filterSelection('${category}')"]`).classList.add('active');

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
        if (category === 'all' || cards[i].classList.contains(category)) {
            cards[i].style.display = 'block';
        }
    }
}

// Initialize filter to show all certifications
filterSelection('all');