/* =========================================
   RS TEXTILE - script.js
========================================= */

/* ==============================
   HERO SLIDER
============================== */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

   slides.forEach((slide) => {
      slide.classList.remove("active");
   });

   slides[index].classList.add("active");

}

if (slides.length > 0) {

   showSlide(currentSlide);

   setInterval(() => {

      currentSlide++;

      if (currentSlide >= slides.length) {
         currentSlide = 0;
      }

      showSlide(currentSlide);

   }, 4000);

}

/* ==============================
   FAQ
============================== */

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((button) => {

   button.addEventListener("click", () => {

      const answer = button.nextElementSibling;

      if (answer.style.display === "block") {

         answer.style.display = "none";

      } else {

         document.querySelectorAll(".faq-answer").forEach((item) => {
            item.style.display = "none";
         });

         answer.style.display = "block";

      }

   });

});

/* ==============================
   SCROLL TO TOP
============================== */

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

   if (!scrollBtn) return;

   if (window.scrollY > 300) {

      scrollBtn.style.display = "block";

   } else {

      scrollBtn.style.display = "none";

   }

});

if (scrollBtn) {

   scrollBtn.addEventListener("click", () => {

      window.scrollTo({

         top: 0,

         behavior: "smooth"

      });

   });

}

/* ==============================
   COUNTER
============================== */

const counters = document.querySelectorAll(".counter");

function startCounter() {

   counters.forEach(counter => {

      const target = Number(counter.dataset.target);

      let count = 0;

      const speed = target / 100;

      const update = () => {

         if (count < target) {

            count += speed;

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(update);

         } else {

            counter.innerText = target;

         }

      };

      update();

   });

}

const statsSection = document.querySelector(".stats");

if (statsSection) {

   const observer = new IntersectionObserver((entries) => {

      if (entries[0].isIntersecting) {

         startCounter();

         observer.disconnect();

      }

   });

   observer.observe(statsSection);

}

/* ==============================
   TESTIMONIAL SLIDER
============================== */

const testimonials = document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

if (testimonials.length > 0) {

   testimonials.forEach((item, index) => {

      if (index !== 0) {
         item.style.display = "none";
      }

   });

   setInterval(() => {

      testimonials[testimonialIndex].style.display = "none";

      testimonialIndex++;

      if (testimonialIndex >= testimonials.length) {

         testimonialIndex = 0;

      }

      testimonials[testimonialIndex].style.display = "block";

   }, 5000);

}