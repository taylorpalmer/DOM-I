const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let nav = document.querySelectorAll("a");
nav.forEach((e, i) => {
  e.textContent = siteContent["nav"][`nav-item-${i + 1}`];
});

let headline = document.querySelector("h1");
headline.textContent = siteContent.cta.h1;

let btn = document.querySelector("button");
btn.textContent = siteContent.cta.button;

let header = document.getElementById("cta-img");
header.setAttribute("src", siteContent["cta"]["img-src"]);

let feat = document.querySelectorAll(".top-content .text-content h4");
feat[0].textContent = siteContent["main-content"]["features-h4"];

let featText = document.querySelectorAll(".top-content .text-content p");
featText[0].textContent = siteContent["main-content"]["features-content"];

let about = document.querySelectorAll(".top-content .text-content h4");
about[1].textContent = siteContent["main-content"]["about-h4"];

let aboutText = document.querySelectorAll(".top-content .text-content p");
aboutText[1].textContent = siteContent["main-content"]["about-content"];

let mid = document.getElementById("middle-img");
mid.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let serv = document.querySelectorAll(".bottom-content .text-content h4");
serv[0].textContent = siteContent["main-content"]["services-h4"];

let servText = document.querySelectorAll(".bottom-content .text-content p");
servText[0].textContent = siteContent["main-content"]["services-content"];

let prod = document.querySelectorAll(".bottom-content .text-content h4");
prod[1].textContent = siteContent["main-content"]["product-h4"];

let prodText = document.querySelectorAll(".bottom-content .text-content p");
prodText[1].textContent = siteContent["main-content"]["product-content"];

let vis = document.querySelectorAll(".bottom-content .text-content h4");
vis[2].textContent = siteContent["main-content"]["vision-h4"];

let visText = document.querySelectorAll(".bottom-content .text-content p");
visText[2].textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelectorAll(".contact h4");
contact[0].textContent = siteContent["contact"]["contact-h4"];

let cont1 = document.querySelectorAll(".contact p");
cont1[0].textContent = siteContent["contact"]["address"];

let cont2 = document.querySelectorAll(".contact p");
cont2[1].textContent = siteContent["contact"]["phone"];

let cont3 = document.querySelectorAll(".contact p");
cont3[2].textContent = siteContent["contact"]["email"];

let foot = document.querySelectorAll("footer p");
foot[0].textContent = siteContent["footer"]["copyright"];

let newColor = document.querySelectorAll("header nav a");
newColor.forEach((e, i) => {
  e.style.color = "green";
});

const newNavItem = document.createElement("a");
newNavItem.textContent = "Confidential";
newNavItem.style.color = "green";
let newNav = document.querySelector("nav");
newNav.appendChild(newNavItem);

const newNavItem2 = document.createElement("a");
newNavItem2.textContent = "Secret";
newNavItem2.style.color = "green";
let newNav2 = document.querySelector("nav");
newNav2.prepend(newNavItem2);
