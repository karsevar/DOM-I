const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//=== Updating the navigation bar with the anchor fields:
const navBar = document.querySelectorAll('a');
navBar[0].textContent = siteContent.nav['nav-item-1'];
navBar[1].textContent = siteContent.nav['nav-item-2'];
navBar[2].textContent = siteContent.nav['nav-item-3'];
navBar[3].textContent = siteContent.nav['nav-item-4'];
navBar[4].textContent = siteContent.nav['nav-item-5'];
navBar[5].textContent = siteContent.nav['nav-item-6'];
// Not the best solution but the nav bar has been populated.

//=== .cta and .cta-text section of the html markup.
const header_text = document.querySelector('.cta-text h1'); 
header_text.textContent = siteContent.cta['h1'];

const header_button = document.querySelector('.cta-text button');
header_button.textContent = siteContent.cta['button'];

const header_img = document.querySelector('.cta img')
header_img.src = siteContent.cta['img-src'];

//=== img class middle-img
const middle_img = document.querySelector('.middle-img');
middle_img.src = siteContent['main-content']['middle-img-src'];

//=== section classname main-content top-content h4
const main_top_header = document.querySelectorAll('.top-content .text-content h4');
main_top_header[0].textContent = siteContent['main-content']['features-h4'];
main_top_header[1].textContent = siteContent['main-content']['about-h4'];

//=== section classname main-content topcontent p
const main_top_paragraphs = document.querySelectorAll('.top-content .text-content p');
main_top_paragraphs[0].textContent = siteContent['main-content']['features-content'];
main_top_paragraphs[1].textContent = siteContent['main-content']['about-content'];

//=== div classname bottom-content text-content h4
const main_bottom_header = document.querySelectorAll('.bottom-content .text-content h4');
main_bottom_header[0].textContent = siteContent['main-content']['services-h4'];
main_bottom_header[1].textContent = siteContent['main-content']['product-h4'];
main_bottom_header[2].textContent = siteContent['main-content']['vision-h4'];

//=== div classname bottom-content text-content p
const main_bottom_paragraphs = document.querySelectorAll('.bottom-content .text-content p');
main_bottom_paragraphs[0].textContent = siteContent['main-content']['services-content'];
main_bottom_paragraphs[1].textContent = siteContent['main-content']['product-content'];
main_bottom_paragraphs[2].textContent = siteContent['main-content']['vision-content'];

//=== section classname contact h4
const contact_header = document.querySelector('.contact h4');
contact_header.textContent = siteContent.contact['contact-h4'];

//=== section contact p
const contact_paragraphs = document.querySelectorAll('.contact p');
contact_paragraphs[0].textContent = siteContent['contact']['address'];
contact_paragraphs[1].textContent = siteContent['contact']['phone'];
contact_paragraphs[2].textContent = siteContent['contact']['email'];

//footer p
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

//=== Changing navigation text to green:
const navBarTexts = document.querySelectorAll('header nav a');
navBarTexts.forEach(navBarText => navBarText.style.color = 'green');





