document.addEventListener("DOMContentLoaded", function () {
  const options = {
    strings: ["Web Developer", "Designer", "UI/UX Designer", "Freelancer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    cursorChar: "|",
  };

  const typed = new Typed(".typed-text", options);
});

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 200,
});

// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form submission (you would typically send this data to a server)
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! We'll get back to you soon.");
  this.reset();
});