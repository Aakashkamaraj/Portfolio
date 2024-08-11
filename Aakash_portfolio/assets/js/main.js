/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 




// Function to create and insert the LeetCode social icon using an image
function addLeetCodeIcon() {
    // Create anchor element
    const leetCodeLink = document.createElement('a');
    leetCodeLink.href = "https://leetcode.com/Aakashkamaraj/";
    leetCodeLink.className = "home__social-icon";
    leetCodeLink.target = "_blank"; // Opens the link in a new tab

    // Create image element for the LeetCode logo
    const iconImg = document.createElement('img');
    iconImg.src = 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png'; // Source of the LeetCode logo
    iconImg.alt = 'LeetCode';
    iconImg.style.width = '24px';
    iconImg.style.height = '24px';

    // Append image to anchor
    leetCodeLink.appendChild(iconImg);

    // Insert the anchor into the desired location in your HTML
    const socialContainer = document.querySelector('.home__social');
    if (socialContainer) {
        socialContainer.appendChild(leetCodeLink);
    }
}
