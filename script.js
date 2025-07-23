// Professional Portfolio JavaScript with Dark Theme and Technical UI

class PortfolioAnimations {
  constructor() {
    this.init();
  }

  init() {
    this.setupLoadingScreen();
    this.setupNavigation();
    this.setupScrollAnimations();
    this.setupWorkspace3D();
    this.setupParallaxEffects();
    this.setupTypingAnimation();
    this.setupCounterAnimations();
    this.setupProjectCards();
    this.setupSkillCategories();
    this.setupSmoothScrolling();
    this.setupFloatingElements();
  }

  // Loading Screen with Faster Terminal Animation
  setupLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const typingText = document.getElementById('typingText');
    
    console.log('Loading screen setup started');
    console.log('Loading screen element:', loadingScreen);
    console.log('Typing text element:', typingText);
    
    if (!loadingScreen || !typingText) {
      console.log('Loading screen elements not found, skipping...');
      return;
    }

    // Ensure loading screen is visible
    loadingScreen.style.display = 'flex';
    loadingScreen.style.opacity = '1';
    loadingScreen.style.zIndex = '9999';
    
    console.log('Loading screen made visible');

    const loadingMessages = [
      'Initializing portfolio...',
      'Loading 3D workspace...',
      'Setting up animations...',
      'Connecting to GitHub...',
      'Portfolio ready! 🚀'
    ];

    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeWriter = () => {
      const currentMessage = loadingMessages[messageIndex];
      
      if (isDeleting) {
        typingText.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingText.textContent = currentMessage.substring(0, charIndex + 1);
        charIndex++;
      }

      // Faster typing speed
      let typeSpeed = isDeleting ? 30 : 60;

      if (!isDeleting && charIndex === currentMessage.length) {
        typeSpeed = 800; // Shorter pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % loadingMessages.length;
        typeSpeed = 200; // Shorter pause before next message
      }

      setTimeout(typeWriter, typeSpeed);
    };

    // Start typing animation
    console.log('Starting typing animation');
    setTimeout(typeWriter, 500);

    // Hide loading screen after all messages
    setTimeout(() => {
      console.log('Hiding loading screen');
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        console.log('Loading screen hidden completely');
      }, 500);
    }, 5000); // Increased to 5 seconds to show all messages
  }

  // Navigation with Smooth Scrolling
  setupNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
      });

      // Close menu when clicking on a link
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navToggle.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });
    }

    // Active link highlighting
    this.updateActiveNavLink();
    window.addEventListener('scroll', () => this.updateActiveNavLink());
  }

  updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  // Scroll-triggered Animations
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.section, .skill-category, .project-card, .research-item, .stat-item');
    animatedElements.forEach((el, index) => {
      el.classList.add('fade-in');
      el.style.animationDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    // Staggered animations for skills
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
      category.style.animationDelay = `${index * 0.2}s`;
    });

    // Staggered animations for projects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.15}s`;
    });
  }

  // 3D Workspace Interactions
  setupWorkspace3D() {
    const workspace = document.getElementById('workspace3d');
    if (!workspace) return;

    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    // Mouse move effect
    workspace.addEventListener('mousemove', (e) => {
      if (!isHovering) return;
      
      const rect = workspace.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
      mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;

      const rotateX = mouseY * 10;
      const rotateY = mouseX * 10;

      workspace.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateZ(20px)
      `;
    });

    workspace.addEventListener('mouseenter', () => {
      isHovering = true;
    });

    workspace.addEventListener('mouseleave', () => {
      isHovering = false;
      workspace.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });

    // Monitor glow effect with cyberpunk colors
    const monitors = document.querySelectorAll('.monitor');
    monitors.forEach((monitor, index) => {
      setInterval(() => {
        const glowIntensity = 10 + Math.random() * 15;
        const glowColor = `rgba(0, 212, 255, ${0.3 + Math.random() * 0.4})`;
        monitor.style.filter = `drop-shadow(0 0 ${glowIntensity}px ${glowColor})`;
      }, 2000 + index * 1000);
    });

    // Code editor typing effect
    this.setupCodeTyping();
  }

  setupCodeTyping() {
    const codeLines = document.querySelectorAll('.code-line');
    if (codeLines.length === 0) return;

    codeLines.forEach((line, index) => {
      const originalText = line.innerHTML;
      line.innerHTML = '';
      line.style.opacity = '0';

      setTimeout(() => {
        line.style.opacity = '1';
        this.typeCode(line, originalText, 0);
      }, index * 300); // Faster typing
    });
  }

  typeCode(element, text, index) {
    if (index < text.length) {
      element.innerHTML += text[index];
      setTimeout(() => this.typeCode(element, text, index + 1), 30); // Faster character typing
    }
  }

  // Parallax Effects
  setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.floating-code, .grid-overlay');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  // Floating Elements Animation
  setupFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-code');
    
    floatingElements.forEach((element, index) => {
      // Random initial position
      const randomX = Math.random() * 20 - 10;
      const randomY = Math.random() * 20 - 10;
      element.style.transform = `translate(${randomX}px, ${randomY}px)`;
      
      // Continuous floating animation
      setInterval(() => {
        const newX = Math.random() * 20 - 10;
        const newY = Math.random() * 20 - 10;
        element.style.transform = `translate(${newX}px, ${newY}px)`;
      }, 3000 + index * 1000);
    });
  }

  // Typing Animation for Hero Title
  setupTypingAnimation() {
    const titleName = document.querySelector('.title-name');
    if (!titleName) return;

    const originalText = titleName.textContent;
    titleName.textContent = '';
    titleName.style.opacity = '0';

    setTimeout(() => {
      titleName.style.opacity = '1';
      this.typeText(titleName, originalText, 0);
    }, 1000);
  }

  typeText(element, text, index) {
    if (index < text.length) {
      element.textContent += text[index];
      setTimeout(() => this.typeText(element, text, index + 1), 80); // Faster typing
    }
  }

  // Counter Animations for Stats
  setupCounterAnimations() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
      const target = parseInt(element.dataset.target);
      const duration = 1500; // Faster animation
      const step = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        element.textContent = Math.floor(current);
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(number => observer.observe(number));
  }

  // Project Cards Hover Effects
  setupProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) rotateX(10deg) scale(1.02)';
        card.style.boxShadow = '0 25px 50px -12px rgba(0, 212, 255, 0.3)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
        card.style.boxShadow = '';
      });

      // Add click effect
      card.addEventListener('click', () => {
        card.style.transform = 'translateY(-5px) scale(0.98)';
        setTimeout(() => {
          card.style.transform = '';
        }, 150);
      });
    });
  }

  // Skill Categories Interactive Effects
  setupSkillCategories() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
      const skillTags = category.querySelectorAll('.skill-tag');
      
      category.addEventListener('mouseenter', () => {
        skillTags.forEach((tag, index) => {
          setTimeout(() => {
            tag.style.transform = 'scale(1.1) rotate(2deg)';
          }, index * 50);
        });
      });

      category.addEventListener('mouseleave', () => {
        skillTags.forEach(tag => {
          tag.style.transform = 'scale(1) rotate(0deg)';
        });
      });
    });
  }

  // Smooth Scrolling for Navigation Links
  setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Utility Functions
class Utils {
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  static throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  static isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}

// Performance Optimizations
class PerformanceOptimizer {
  constructor() {
    this.setupOptimizations();
  }

  setupOptimizations() {
    // Throttle scroll events
    const throttledScroll = Utils.throttle(() => {
      // Scroll-based animations
    }, 16); // ~60fps

    window.addEventListener('scroll', throttledScroll);

    // Debounce resize events
    const debouncedResize = Utils.debounce(() => {
      // Handle responsive adjustments
    }, 250);

    window.addEventListener('resize', debouncedResize);

    // Preload critical resources
    this.preloadResources();
  }

  preloadResources() {
    // Preload FontAwesome icons
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'preload';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    fontAwesomeLink.as = 'style';
    document.head.appendChild(fontAwesomeLink);

    // Preload Google Fonts
    const googleFontsLink = document.createElement('link');
    googleFontsLink.rel = 'preload';
    googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap';
    googleFontsLink.as = 'style';
    document.head.appendChild(googleFontsLink);
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing portfolio...');
  
  // Initialize performance optimizations
  new PerformanceOptimizer();
  
  // Initialize portfolio animations
  new PortfolioAnimations();
  
  // Add some fun easter eggs
  setupEasterEggs();
  
  // Test loading screen manually if needed
  setTimeout(() => {
    const loadingScreen = document.getElementById('loadingScreen');
    
    console.log('Checking loading screen status...');
    console.log('Loading screen display:', loadingScreen?.style.display);
    console.log('Loading screen opacity:', loadingScreen?.style.opacity);
    
    // If loading screen is still visible after 7 seconds, force hide it
    if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
      console.log('Forcing loading screen to hide...');
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }
  }, 7000);
  
  // Fallback: Ensure loading screen is hidden after 6 seconds
  setTimeout(() => {
    const loadingScreen = document.getElementById('loadingScreen');
    
    if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
      console.log('Fallback: Hiding loading screen');
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }
  }, 6000);
});

// Fun Easter Eggs
function setupEasterEggs() {
  // Konami Code Easter Egg
  let konamiCode = [];
  const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

  document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
      konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
      activateEasterEgg();
    }
  });

  // Click counter easter egg
  let clickCount = 0;
  const logo = document.querySelector('.nav-logo');
  if (logo) {
    logo.addEventListener('click', () => {
      clickCount++;
      if (clickCount === 5) {
        logo.style.animation = 'spin 1s ease-in-out';
        setTimeout(() => {
          logo.style.animation = '';
        }, 1000);
        clickCount = 0;
      }
    });
  }
}

function activateEasterEgg() {
  // Matrix rain effect with cyberpunk colors
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '9999';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  const matrixArray = matrix.split("");

  const fontSize = 10;
  const columns = canvas.width / fontSize;
  const drops = [];

  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Cyberpunk green color
    ctx.fillStyle = '#00ff88';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  const interval = setInterval(draw, 35);

  // Remove after 5 seconds
  setTimeout(() => {
    clearInterval(interval);
    document.body.removeChild(canvas);
  }, 5000);
}

// Add CSS for spin animation
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PortfolioAnimations, Utils, PerformanceOptimizer };
} 