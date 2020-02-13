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

let ctaImg = document.getElementById("cta-img");
let middleImg = document.getElementById("middle-img");
ctaImg.src = 'img/header-img.png';
middleImg.src = 'img/mid-page-accent.jpg';

let navArray = document.getElementsByTagName('a');
navArray[0].textContent = 'Services' ;
navArray[1].textContent = 'Product' ;
navArray[2].textContent = 'Vision'; 
navArray[3].textContent = 'Features';
navArray[4].textContent = 'About'; 
navArray[5].textContent = 'Contact'; 
// console.log(navArray)

Array.from(navArray).forEach(link => {
  link.style.color ='Cyan';
  link.style.background = 'black';
  link.style.borderRadius ='5px';
  link.style.padding = '1% 2% 1% 2%';
})

let ctaTextH1 = document.getElementsByTagName('h1');
// console.log(ctaTextH1);
ctaTextH1[0].innerHTML ='DOM<BR> IS<BR> AWESOME';
let ctaButtonText = document.getElementsByTagName('button');
ctaButtonText[0].textContent ='Get Started';

let sectionHeader = document.getElementsByTagName('h4');
// console.log(sectionHeader);
sectionHeader[0].textContent = 'Features' ;
sectionHeader[1].textContent = 'About' ;
sectionHeader[2].textContent = 'Services'; 
sectionHeader[3].textContent = 'Product';
sectionHeader[4].textContent = 'Vision'; 
sectionHeader[5].textContent = 'Contact'; 

Array.from(sectionHeader).forEach( title => {
  title.style.color ='Cyan';
  title.style.background = 'black';
  title.style.borderRadius ='5px';
  title.style.padding = '1% 2% 1% 2%';
  title.style.width = 'fit-content'
  title.style.boxShadow = "5px 3px cyan"
})


let sectionText = document.getElementsByTagName('p');
console.log(sectionText)
sectionText[0].textContent ='Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
sectionText[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
sectionText[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
sectionText[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
sectionText[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
sectionText[5].innerHTML = '123 Way 456 Street<br> Somewhere, USA';
sectionText[6].textContent = '1 (888) 888-8888';
sectionText[7].textContent = 'sales@greatidea.io';
sectionText[8].textContent = 'Copyright Great Idea! 2018';

let newContent = document.createElement('a');
newContent.textContent = 'Prepend'
newContent.style.color ='Cyan';
newContent.style.background = 'black';
newContent.style.borderRadius ='5px'
newContent.style.padding = '1% 2% 1% 2%';
let parentElement = document.querySelector('nav');
parentElement.prepend(newContent);

let newContent2 = document.createElement('a');
newContent2.textContent = 'appendChild';
newContent2.style.color ='Cyan';
newContent2.style.background = 'black';
newContent2.style.borderRadius ='5px'
newContent2.style.padding = '1% 2% 1% 2%';
let parent2 = document.querySelector('nav');
parent2.appendChild(newContent2);

