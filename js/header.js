// js/header.js
class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        :root {
          --primary: #00f0ff;
          --w4u-orange: #ff6b00;
          --dark: #0f0f1a;
          --darker: #0a0a12;
          --light: #ffffff;
        }
        
        #w4u-header {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 2.2rem 0;
          background: transparent;
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        #w4u-header.scrolled {
          background: rgba(0, 0, 0, 0.7);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          padding: 2.2rem 0;
        }
        
        .w4u-header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
        }
        
        .w4u-header-sep-logo {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }
        
        .w4u-header-sep-nav {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        
        .w4u-header-sep-cta {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }
        
        .w4u-logo-text {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(90deg, #00f0ff, #00ff9d);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
          animation: w4u-glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes w4u-glow {
          from {
            text-shadow: 0 0 5px rgba(0, 240, 255, 0.5);
          }
          to {
            text-shadow: 0 0 15px rgba(0, 240, 255, 0.8), 0 0 20px rgba(0, 240, 255, 0.4);
          }
        }
        
        .w4u-desktop-nav {
          display: flex;
          gap: 1.5rem;
        }
        
        .w4u-desktop-nav a {
          color: #f9f9f9;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          white-space: nowrap;
        }
        
        .w4u-desktop-nav a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: all 0.3s ease;
        }
        
        .w4u-desktop-nav a:hover::after {
          width: 100%;
        }
        
        .w4u-mobile-menu {
          position: fixed;
          top: 70px;
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.95);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          transform: translateY(-150%);
          transition: all 0.4s ease;
          z-index: 999;
        }
        
        .w4u-mobile-menu.active {
          transform: translateY(0);
        }
        
        .w4u-mobile-menu a {
          color: #f9f9f9;
          text-decoration: none;
          font-size: 1.1rem;
        }
        
        .w4u-mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #f9f9f9;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 5px;
        }
        
        .w4u-btn-cta, .w4u-mobile-cta {
          background: var(--w4u-orange);
          color: var(--dark);
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
          border: none;
          cursor: pointer;
        }
        
        .w4u-btn-cta:hover, 
        .w4u-mobile-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 107, 0, 0.4);
          background: #ff7b20;
        }
        
        @media (max-width: 768px) {
          .w4u-desktop-nav, 
          .w4u-btn-cta {
            display: none;
          }
          
          .w4u-mobile-menu-toggle {
            display: block;
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
          }
          
          .w4u-header-sep-nav {
            display: none;
          }
          
          .w4u-header-sep-cta {
            display: none;
          }
        }
      </style>

      <header id="w4u-header">
        <div class="w4u-header-container">
          <div class="w4u-header-sep-logo">
            <a href="/index.html" class="logo">
              <span class="w4u-logo-text">Work4You</span>
            </a>
          </div>
          
          <div class="w4u-header-sep-nav">
            <nav class="w4u-desktop-nav">
              <a href="E:/Freelance Site/services.html">Services</a>
              <a href="E:/Freelance Site/process.html">Process</a>
              <a href="E:/Freelance Site/about-us.html">About</a>
              <a href="E:/Freelance Site/contact-us.html">Contact us</a>
            </nav>
          </div>
          
          <div class="w4u-header-sep-cta">
            <a href="#contact" class="w4u-btn-cta">Hire Us</a>
            <button class="w4u-mobile-menu-toggle" aria-label="Toggle menu">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
        
        <nav class="w4u-mobile-menu">
          <a href="E:/Freelance Site/services.html">Services</a>
          <a href="E:/Freelance Site/process.html">Process</a>
            <a href="E:/Freelance Site/about-us.html">About</a>
            <a href="E:/Freelance Site/contact-us.html">Contact us</a>
          <a href="#contact" class="w4u-mobile-cta">Hire Us</a>
        </nav>
      </header>
    `;

    this.initHeader();
  }

  initHeader() {
    const header = this.querySelector('#w4u-header');
    
    // Scroll Effect
    const scrollHandler = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    
    // Use requestAnimationFrame for performance
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          scrollHandler();
          ticking = false;
        });
        ticking = true;
      }
    });
    
    // Mobile Menu Toggle
    const mobileMenuToggle = this.querySelector('.w4u-mobile-menu-toggle');
    const mobileMenu = this.querySelector('.w4u-mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
      const toggleMenu = () => {
        mobileMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
      };
      
      mobileMenuToggle.addEventListener('click', toggleMenu);
      
      // Close menu when clicking links
      this.querySelectorAll('.w4u-mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
        });
      });
    }
  }
}

// Register the custom element
if (!customElements.get('header-component')) {
  customElements.define('header-component', HeaderComponent);
}