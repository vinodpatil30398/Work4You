// Header Scroll Effect
const header = document.querySelector('.sticky-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});


document.addEventListener('DOMContentLoaded', function() {
  // Animate stats counting
  const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-count'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          stat.textContent = target + (stat.getAttribute('data-count') === '98' ? '%' : '');
        } else {
          stat.textContent = Math.floor(current) + (stat.getAttribute('data-count') === '98' ? '%' : '');
        }
      }, 16);
    });
  };

// About Us Section - Freelance Startup JS
document.addEventListener('DOMContentLoaded', function() {
  // Add intersection observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('w4u-animate');
      }
    });
  }, { threshold: 0.1 });
  
  // Observe all cards
  document.querySelectorAll('.w4u-card').forEach(card => {
    observer.observe(card);
  });
  
  // Floating icons animation
  const floatingIcons = document.querySelectorAll('.w4u-icon');
  floatingIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.5}s`;
  });
  
  // Service items animation
  const serviceItems = document.querySelectorAll('.w4u-service-list li');
  serviceItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
  });
});

  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        if (entry.target.classList.contains('stats-section')) {
          animateStats();
        }
      }
    });
  }, { threshold: 0.2 });

  // Observe elements
  document.querySelectorAll('.glass-card, .stats-section').forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Services Tab Functionality
  const serviceTabButtons = document.querySelectorAll('.freelancer-tab-btn');
  const serviceCards = document.querySelectorAll('.freelancer-service-card');
  
  // First hide all cards except the default active tab's cards
  function initializeServices() {
    const defaultTab = document.querySelector('.freelancer-tab-btn.active');
    if (defaultTab) {
      const category = defaultTab.getAttribute('data-freelancer-tab');
      showServiceCards(category);
    }
  }
  
  function showServiceCards(category) {
    // First fade out all currently visible cards
    const visibleCards = document.querySelectorAll('.freelancer-service-card[style*="display: block"]');
    
    visibleCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
    });
    
    // After fade out completes, hide them and show the new ones
    setTimeout(() => {
      // Hide all cards
      serviceCards.forEach(card => {
        card.style.display = 'none';
      });
      
      // Show cards for the selected category
      serviceCards.forEach(card => {
        if (category === 'all' || card.classList.contains(`${category}-service`)) {
          card.style.display = 'block';
          // Force reflow before applying animation
          void card.offsetWidth;
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }
      });
    }, 300); // Match this duration with your CSS transition time
  }
  
  serviceTabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      serviceTabButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      // Get the category to show
      const category = this.getAttribute('data-freelancer-tab');
      showServiceCards(category);
    });
  });
  
  // Initialize services
  initializeServices();
});
// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                    otherItem.querySelector('.faq-answer').style.padding = '0';
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '0 1.5rem 1.5rem';
            } else {
                answer.style.maxHeight = '0';
                answer.style.padding = '0';
            }
        });
    });
    
    // Open first item by default
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
        const firstAnswer = faqItems[0].querySelector('.faq-answer');
        firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
        firstAnswer.style.padding = '0 1.5rem 1.5rem';
    }
});
// Animate Stats Counting
const statNumbers = document.querySelectorAll('.stat-number');

const animateStats = () => {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const counter = setInterval(() => {
            current += step;
            if (current >= target) {
                clearInterval(counter);
                stat.textContent = target;
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 16);
    });
};

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });
});

// Initialize stats animation when About section is in view
ScrollTrigger.create({
    trigger: '.about',
    start: 'top 80%',
    onEnter: animateStats,
    once: true
});

// Auto-scroll testimonials
const testimonialSlider = document.querySelector('.testimonial-slider');
let isDown = false;
let startX;
let scrollLeft;

testimonialSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - testimonialSlider.offsetLeft;
    scrollLeft = testimonialSlider.scrollLeft;
});

testimonialSlider.addEventListener('mouseleave', () => {
    isDown = false;
});

testimonialSlider.addEventListener('mouseup', () => {
    isDown = false;
});

testimonialSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - testimonialSlider.offsetLeft;
    const walk = (x - startX) * 2;
    testimonialSlider.scrollLeft = scrollLeft - walk;
});

// Auto-scroll for testimonials
let autoScrollInterval = setInterval(() => {
    testimonialSlider.scrollBy({
        left: 350,
        behavior: 'smooth'
    });

    if (testimonialSlider.scrollLeft + testimonialSlider.clientWidth >= testimonialSlider.scrollWidth - 50) {
        testimonialSlider.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    }
}, 5000);

testimonialSlider.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
});

testimonialSlider.addEventListener('mouseleave', () => {
    autoScrollInterval = setInterval(() => {
        testimonialSlider.scrollBy({
            left: 350,
            behavior: 'smooth'
        });

        if (testimonialSlider.scrollLeft + testimonialSlider.clientWidth >= testimonialSlider.scrollWidth - 50) {
            testimonialSlider.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        }
    }, 5000);
});


document.addEventListener('DOMContentLoaded', function() {
  // Dynamic Text Rotation
  const words = document.querySelectorAll('.word');
  let currentWord = 0;
  
  function rotateWords() {
    const activeWord = document.querySelector('.word.active');
    if (activeWord) {
      activeWord.classList.remove('active');
      currentWord = (currentWord + 1) % words.length;
      words[currentWord].classList.add('active');
    }
  }
  
  // Start rotation every 3 seconds
  if (words.length > 0) {
    setInterval(rotateWords, 3000);
  }
  
  // Scroll down button functionality
  const scrollDown = document.querySelector('.scroll-indicator');
  if (scrollDown) {
    scrollDown.addEventListener('click', function() {
      const nextSection = document.querySelector('section:nth-of-type(2)');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  // Initialize tooltips for tech icons
  const techIcons = document.querySelectorAll('.tech-icon');
  techIcons.forEach(icon => {
    const tooltip = icon.getAttribute('data-tooltip');
    icon.setAttribute('aria-label', tooltip);
  });
  
  // Floating elements animation
  const floatElements = document.querySelectorAll('.shape');
  floatElements.forEach((el, index) => {
    // Randomize animation duration and delay
    const duration = 12 + Math.random() * 6;
    const delay = Math.random() * 8;
    el.style.animation = `float ${duration}s infinite ease-in-out ${delay}s`;
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize testimonial slider
    const slider = document.querySelector('.testimonial-slider');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    // Create dots
    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            scrollToCard(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dot');
    
    // Scroll to specific card
    function scrollToCard(index) {
        const card = cards[index];
        slider.scrollTo({
            left: card.offsetLeft - slider.offsetLeft,
            behavior: 'smooth'
        });
        updateDots(index);
    }
    
    // Update active dot
    function updateDots(activeIndex) {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }
    
    // Previous button
    prevBtn.addEventListener('click', () => {
        const currentCardIndex = Math.round(slider.scrollLeft / (cards[0].offsetWidth + 30));
        const prevIndex = currentCardIndex > 0 ? currentCardIndex - 1 : cards.length - 1;
        scrollToCard(prevIndex);
    });
    
    // Next button
    nextBtn.addEventListener('click', () => {
        const currentCardIndex = Math.round(slider.scrollLeft / (cards[0].offsetWidth + 30));
        const nextIndex = currentCardIndex < cards.length - 1 ? currentCardIndex + 1 : 0;
        scrollToCard(nextIndex);
    });
    
    // Update dots on scroll
    slider.addEventListener('scroll', () => {
        const currentCardIndex = Math.round(slider.scrollLeft / (cards[0].offsetWidth + 30));
        updateDots(currentCardIndex);
    });
    
    // Auto-scroll (optional)
    // setInterval(() => {
    //     const currentCardIndex = Math.round(slider.scrollLeft / (cards[0].offsetWidth + 30));
    //     const nextIndex = currentCardIndex < cards.length - 1 ? currentCardIndex + 1 : 0;
    //     scrollToCard(nextIndex);
    // }, 5000);
});

// Add interactive effects to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.removeProperty('--mouse-x');
            button.style.removeProperty('--mouse-y');
        });
    });
    
    // Animate particles on scroll
    const particles = document.querySelectorAll('.cta-particle');
    
    function animateParticles() {
        particles.forEach((particle, index) => {
            const speed = index * 0.5 + 1;
            particle.style.animationDuration = `${10/speed}s`;
        });
    }
    
    animateParticles();
});

// Newsletter Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletterForm');
    const formMessage = document.getElementById('formMessage');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        
        // Simulate form submission (replace with actual AJAX call)
        setTimeout(() => {
            // This is just for demo - replace with actual form handling
            console.log('Submitted:', { name, email });
            
            // Show success message
            formMessage.textContent = 'Thank you for subscribing! We\'ll be in touch soon.';
            formMessage.className = 'form-message success';
            
            // Reset form
            form.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 1000);
        
        // For actual implementation, you would use:
        /*
        fetch('your-email-service-endpoint', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle success
            formMessage.textContent = 'Thank you for subscribing!';
            formMessage.className = 'form-message success';
            form.reset();
        })
        .catch(error => {
            // Handle error
            formMessage.textContent = 'Error submitting form. Please try again.';
            formMessage.className = 'form-message error';
        });
        */
    });
    
    // Form validation
    form.addEventListener('input', function(e) {
        if (e.target.name === 'email' && e.target.validity.typeMismatch) {
            e.target.setCustomValidity('Please enter a valid email address');
        } else {
            e.target.setCustomValidity('');
        }
    });
});