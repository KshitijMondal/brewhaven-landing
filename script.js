document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const ctaBtn = document.getElementById("ctaBtn");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");
  const contactForm = document.getElementById("contactForm");
  const priceBtns = document.querySelectorAll(".price-btn");
  const featureCards = document.querySelectorAll(".feature-card");
  const priceCards = document.querySelectorAll(".price-card");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  ctaBtn.addEventListener("click", function () {
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("active"), 10);
  });

  closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
    setTimeout(() => (modal.style.display = "none"), 300);
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
      setTimeout(() => (modal.style.display = "none"), 300);
    }
  });

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for subscribing! Check your email for confirmation.");
    contactForm.reset();
  });

  priceBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      alert("Selected plan! Redirecting to checkout...");
    });
  });

  function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    featureCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
    priceCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll();

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "none";
    }
  });
});
