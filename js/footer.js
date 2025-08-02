// footer.js
class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        :root {
          --w4u-primary: #00f0ff;
          --w4u-orange: #ff6b00;
          --w4u-purple: #b400ff;
          --w4u-dark: #0f0f1a;
          --w4u-darker: #0a0a12;
          --w4u-light: #ffffff;
          --w4u-footer-bg: rgba(10, 10, 18, 0.98);
        }
        
        #w4u-footer {
          width: 100%;
          background: var(--w4u-footer-bg);
          padding: 5rem 0 2rem;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(0, 240, 255, 0.1);
          isolation: isolate;
        }
        
        /* Animated Background Elements */
        #w4u-footer::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -10%;
          width: 30%;
          height: 200%;
          background: radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, transparent 70%);
          animation: w4u-rotate 25s linear infinite;
          z-index: -1;
        }
        
        #w4u-footer::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(180, 0, 255, 0.03) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(255, 107, 0, 0.03) 0%, transparent 30%);
          z-index: -1;
        }
        
        @keyframes w4u-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .w4u-footer-bg-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.15;
          z-index: -1;
        }
        
        .w4u-circle-1 {
          width: 300px;
          height: 300px;
          background: var(--w4u-primary);
          top: -150px;
          right: -150px;
          animation: w4u-float 8s ease-in-out infinite alternate;
        }
        
        .w4u-circle-2 {
          width: 200px;
          height: 200px;
          background: var(--w4u-orange);
          bottom: -100px;
          left: -100px;
          animation: w4u-float 12s ease-in-out infinite alternate-reverse;
        }
        
        @keyframes w4u-float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-50px, -50px); }
          100% { transform: translate(0, 0); }
        }
        
        /* Floating Elements */
        .w4u-floating-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 240, 255, 0.1);
          backdrop-filter: blur(5px);
          border-radius: 10px;
          animation: w4u-float-small 6s ease-in-out infinite;
        }
        
        .w4u-float-1 {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 5%;
          animation-delay: 0s;
        }
        
        .w4u-float-2 {
          width: 60px;
          height: 60px;
          bottom: 15%;
          right: 8%;
          animation-delay: 1s;
        }
        
        @keyframes w4u-float-small {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        /* Main Content */
        .w4u-footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          position: relative;
          z-index: 2;
        }
        
        .w4u-footer-logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .w4u-footer-logo-text {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--w4u-primary), var(--w4u-purple));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
          animation: w4u-glow 3s ease-in-out infinite alternate;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }
        
        .w4u-footer-logo-text::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--w4u-primary), transparent);
        }
        
        @keyframes w4u-glow {
          0% {
            text-shadow: 0 0 10px rgba(0, 240, 255, 0.5),
                         0 0 20px rgba(180, 0, 255, 0.3);
          }
          100% {
            text-shadow: 0 0 20px rgba(0, 240, 255, 0.8),
                         0 0 40px rgba(180, 0, 255, 0.5),
                         0 0 60px rgba(0, 240, 255, 0.3);
          }
        }
        
        .w4u-footer-about {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          max-width: 350px;
          margin-bottom: 2rem;
        }
        
        /* Footer Columns */
        .w4u-footer-col {
          display: flex;
          flex-direction: column;
        }
        
        .w4u-footer-heading {
          color: var(--w4u-light);
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1.8rem;
          position: relative;
          display: inline-block;
        }
        
        .w4u-footer-heading::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, var(--w4u-orange), transparent);
          border-radius: 3px;
        }
        
        /* Links Styling */
        .w4u-footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 1rem;
        }
        
        .w4u-footer-links li {
          transition: all 0.3s ease;
        }
        
        .w4u-footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
        }
        
        .w4u-footer-links a:hover {
          color: var(--w4u-primary);
          transform: translateX(5px);
        }
        
        .w4u-footer-links a i {
          font-size: 0.7rem;
          color: var(--w4u-primary);
          transition: all 0.3s ease;
        }
        
        .w4u-footer-links a:hover i {
          transform: rotate(90deg);
        }
        
        /* Contact Info */
        .w4u-contact-info {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 1.2rem;
        }
        
        .w4u-contact-info li {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        .w4u-contact-info i {
          color: var(--w4u-primary);
          font-size: 1.1rem;
          min-width: 20px;
        }
        
        /* Social Links */
        .w4u-social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .w4u-social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: var(--w4u-light);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0, 240, 255, 0.1);
        }
        
        .w4u-social-links a::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.1), transparent);
          transition: all 0.6s ease;
        }
        
        .w4u-social-links a:hover {
          background: var(--w4u-primary);
          color: var(--w4u-dark);
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 5px 20px rgba(0, 240, 255, 0.3);
        }
        
        .w4u-social-links a:hover::before {
          left: 100%;
        }
        
        /* Footer Bottom */
        .w4u-footer-bottom {
          margin-top: 5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          position: relative;
        }
        
        .w4u-footer-bottom::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--w4u-primary), transparent);
        }
        
        .w4u-footer-bottom p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
          margin: 0;
        }
        
        .w4u-footer-bottom p a {
          color: var(--w4u-primary);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .w4u-footer-bottom p a:hover {
          text-decoration: underline;
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
          .w4u-footer-container {
            grid-template-columns: 1fr 1fr;
          }
          
          .w4u-footer-logo {
            grid-column: 1 / -1;
          }
        }
        
        @media (max-width: 576px) {
          .w4u-footer-container {
            grid-template-columns: 1fr;
          }
          
          #w4u-footer {
            padding: 3rem 0 2rem;
          }
          
          .w4u-footer-logo-text {
            font-size: 2rem;
          }
        }
      </style>

      <footer id="w4u-footer">
        <!-- Animated Background Elements -->
        <div class="w4u-footer-bg-circle w4u-circle-1"></div>
        <div class="w4u-footer-bg-circle w4u-circle-2"></div>
        <div class="w4u-floating-element w4u-float-1"></div>
        <div class="w4u-floating-element w4u-float-2"></div>
        
        <div class="w4u-footer-container">
          <!-- Logo Column -->
          <div class="w4u-footer-logo">
            <span class="w4u-footer-logo-text">Work4You</span>
            <p class="w4u-footer-about">
              We create digital experiences that blend cutting-edge technology with stunning design to propel your business into the future.
            </p>
            <div class="w4u-social-links">
              <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Dribbble"><i class="fab fa-dribbble"></i></a>
            </div>
          </div>
          
          <!-- Quick Links Column -->
          <div class="w4u-footer-col">
            <h3 class="w4u-footer-heading">Explore</h3>
            <ul class="w4u-footer-links">
              <li><a href="#"><i class="fas fa-chevron-right"></i> Home</a></li>
              <li><a href="#services"><i class="fas fa-chevron-right"></i> Services</a></li>
              <li><a href="#portfolio"><i class="fas fa-chevron-right"></i> Portfolio</a></li>
              <li><a href="#about"><i class="fas fa-chevron-right"></i> About Us</a></li>
              <li><a href="#blog"><i class="fas fa-chevron-right"></i> Blog</a></li>
            </ul>
          </div>
          
          <!-- Services Column -->
          <div class="w4u-footer-col">
            <h3 class="w4u-footer-heading">Services</h3>
            <ul class="w4u-footer-links">
              <li><a href="#"><i class="fas fa-chevron-right"></i> Web Development</a></li>
              <li><a href="#"><i class="fas fa-chevron-right"></i> Mobile Apps</a></li>
              <li><a href="#"><i class="fas fa-chevron-right"></i> UI/UX Design</a></li>
              <li><a href="#"><i class="fas fa-chevron-right"></i> AI Solutions</a></li>
              <li><a href="#"><i class="fas fa-chevron-right"></i> Blockchain</a></li>
            </ul>
          </div>
          
          <!-- Contact Column -->
          <div class="w4u-footer-col">
            <h3 class="w4u-footer-heading">Contact</h3>
            <ul class="w4u-contact-info">
              <li>
                <i class="fas fa-map-marker-alt"></i>
                <span>Pune, Maharashtra, India</span>
              </li>
              <li>
                <i class="fas fa-phone-alt"></i>
                <span>+91 98765 43210</span>
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                <span>contact@work4you.com</span>
              </li>
              <li>
                <i class="fas fa-clock"></i>
                <span>Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="w4u-footer-bottom">
          <p>&copy; ${new Date().getFullYear()} <a href="#">Work4You</a>. All Rights Reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </div>
      </footer>
    `;
  }
}

// Register the custom element
if (!customElements.get('footer-component')) {
  customElements.define('footer-component', FooterComponent);
}