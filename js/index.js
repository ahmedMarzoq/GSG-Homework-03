const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here

// logo src
document.getElementById("logo-img").setAttribute('src', siteContent["nav"]["img-src"]);

// a at Navbar
let navBar = document.querySelectorAll('body > div.container > header > nav > a');
const navBarList = [...navBar];
navBarList[0].textContent = siteContent.nav['nav-item-1'];
navBarList[1].textContent = siteContent.nav['nav-item-2'];
navBarList[2].textContent = siteContent.nav['nav-item-3'];
navBarList[3].textContent = siteContent.nav['nav-item-4'];
navBarList[4].textContent = siteContent.nav['nav-item-5'];
navBarList[5].textContent = siteContent.nav['nav-item-6'];

// section CTA
let sectionCTA = document.querySelector('.cta');
sectionCTA.querySelector('h1').textContent = siteContent.cta.h1;
sectionCTA.querySelector('button').textContent = siteContent.cta.button;
sectionCTA.querySelector('#cta-img').src = siteContent.cta["img-src"];

// MAIN CONTENT
// MAIN CONTENT -- top-content
let mainContent = document.querySelector('.main-content');
let topContent = mainContent.querySelectorAll('.top-content .text-content');
// console.log(topContent);
const topContentArray = [...topContent];
topContentArray[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
topContentArray[0].querySelector('p').textContent = siteContent['main-content']['features-content'];
topContentArray[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
topContentArray[1].querySelector('p').textContent = siteContent['main-content']['about-content'];

// MAIN CONTENT -- middle-img
mainContent.querySelector('#middle-img').setAttribute('src',siteContent['main-content']['middle-img-src']);

// MAIN CONTENT -- bottom-content
let bottomContent = mainContent.querySelectorAll('.bottom-content .text-content');
// console.log(bottomContent);
const bottomContentArray = [...bottomContent];
// console.log(bottomContentArray);
bottomContentArray[0].querySelector('p').textContent = siteContent['main-content']['services-content'];
bottomContentArray[0].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
bottomContentArray[1].querySelector('h4').textContent = siteContent['main-content']['product-h4'];
bottomContentArray[1].querySelector('p').textContent = siteContent['main-content']['product-content'];
bottomContentArray[2].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
bottomContentArray[2].querySelector('p').textContent = siteContent['main-content']['vision-content'];

// CONTACT
let contactSection = document.querySelector('.contact').children;
// console.log(contactSection);
let contactSectionArray = [...contactSection];
contactSectionArray[0].textContent = siteContent.contact['contact-h4'];
contactSectionArray[1].textContent = siteContent.contact.address;
contactSectionArray[2].textContent = siteContent.contact.phone;
contactSectionArray[3].textContent = siteContent.contact.email;

//FOOTER
let footerSection = document.querySelector('footer');
footerSection.querySelector('p').textContent = siteContent.footer.copyright;