document.addEventListener("DOMContentLoaded", function () {
  const options = {
    strings: ["Game Developer", "Unity Developer", "Simulator Developer", "Shader Programmer", "Unity Tutor", "Unreal Developer", "Freelancer"],
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
  once: false,
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

// Form submission
document.addEventListener("DOMContentLoaded", () => {
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  if (!successMessage || !errorMessage) {
    console.error("Feedback message elements not found in the DOM");
    return;
  }

  // Initialize EmailJS with your Public Key
  emailjs.init("DvMm89O8_86UI001k");

  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_8njl0co", "template_la6unyf", this)
      .then(function () {
        successMessage.style.display = "block";
        document.getElementById("contact-form").reset();
      }, function (error) {
        errorMessage.style.display = "block";
        console.error("Error:", error);
      });
  });
});
