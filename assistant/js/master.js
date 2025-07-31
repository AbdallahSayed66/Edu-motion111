// ملف JavaScript الخاص بمنصة EDU التعليمية

// شريط التنقل الثابت
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// القائمة المتنقلة
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    this.innerHTML = navLinks.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});


      animateElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
      });

      // تحسين تأثير الهوفر للكروت
      const cards = document.querySelectorAll('.feature-card, .grade-card');

      cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.03)';
            card.style.transition = 'transform 0.3s ease';
      });
      card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
      });
      });


      const animateElements = document.querySelectorAll('.animate');

      const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
            if (entry.isIntersecting) {
                  entry.target.style.opacity = 1;
                  entry.target.style.transform = 'translateY(0)';
                  observer.unobserve(entry.target);
            }
      });
      }, { threshold: 0.1 });

      animateElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
      });


  // استخدم false أو true لاختبار الحالة
  const isLoggedIn = true;

  document.addEventListener("DOMContentLoaded", () => {
    const authButtons = document.getElementById("auth-buttons");
    const accountMenu = document.getElementById("account-menu");

    if (isLoggedIn) {
      authButtons.style.display = "none";
      accountMenu.style.display = "flex";

      const toggle = accountMenu.querySelector(".account-icon");
      toggle.addEventListener("click", () => {
        accountMenu.classList.toggle("open");
      });
    }
  });

