# 🚀 Pratham Goel - Interactive Developer Portfolio

A stunning, scroll-interactive portfolio website featuring 3D animations, developer-themed visuals, and smooth interactions built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

### 🎨 Visual Design
- **3D Animated Workspace**: Interactive developer workspace with monitors, laptop, and coffee cup
- **Scroll-Triggered Animations**: Elements animate as you scroll through the page
- **Parallax Effects**: Floating code snippets and grid overlays with parallax scrolling
- **Developer Theme**: Code editor, terminal windows, file explorer, and tech-inspired visuals
- **Responsive Design**: Fully responsive across all devices and screen sizes

### 🎭 Interactive Elements
- **Loading Screen**: Terminal-style loading animation with typing effect
- **3D Workspace Interactions**: Mouse-responsive 3D workspace that tilts and glows
- **Animated Code Editor**: Real-time code typing animation in the workspace
- **Hover Effects**: Cards lift and rotate on hover with smooth transitions
- **Counter Animations**: Animated statistics that count up when scrolled into view
- **Smooth Navigation**: Fixed navbar with smooth scrolling and active section highlighting

### 🛠 Technical Features
- **Vanilla JavaScript**: No frameworks - pure HTML, CSS, and JavaScript
- **Performance Optimized**: Throttled scroll events, debounced resize, and resource preloading
- **FontAwesome Integration**: Professional tech icons throughout the interface
- **Modern CSS**: CSS Grid, Flexbox, CSS Variables, and advanced animations
- **Cross-Browser Compatible**: Works on all modern browsers

### 🎮 Easter Eggs
- **Konami Code**: Enter ↑↑↓↓←→←→BA for a Matrix rain effect
- **Logo Click**: Click the logo 5 times for a spinning animation
- **Hidden Interactions**: Various subtle animations and effects throughout

## 🏗 Project Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript interactions and animations
└── README.md           # This documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. Clone or download the repository
2. Open `index.html` in your web browser
3. Or serve locally using a web server:
   ```bash
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 🎨 Customization Guide

### Personal Information
Edit the following sections in `index.html`:

#### Hero Section
```html
<span class="title-name">Your Name</span>
<span class="title-role">Your Title</span>
<p class="hero-subtitle">Your description</p>
```

#### About Section
```html
<p class="about-paragraph">Your about text</p>
```

#### Statistics
```html
<div class="stat-number" data-target="5">0</div>
<div class="stat-label">Years Experience</div>
```

### Projects
Add or modify projects in the projects section:

```html
<article class="project-card" data-project="project-name">
  <div class="project-header">
    <span class="project-icon">🎯</span>
    <div>
      <h3 class="project-title">Project Name</h3>
      <p class="project-date">Date</p>
    </div>
  </div>
  <p class="project-description">Project description</p>
  <div class="project-tech">
    <span class="tech-tag">Technology</span>
  </div>
  <div class="project-links">
    <a href="link" class="project-link" target="_blank">
      <i class="fab fa-github"></i>
      View Repository
    </a>
  </div>
</article>
```

### Skills
Modify skills in the skills section:

```html
<div class="skill-category" data-category="category">
  <div class="category-header">
    <i class="fas fa-icon"></i>
    <h4>Category Name</h4>
  </div>
  <ul class="skill-list">
    <li><span class="skill-tag"><i class="fab fa-icon"></i> Skill Name</span></li>
  </ul>
</div>
```

### Contact Information
Update contact links:

```html
<a href="your-linkedin" class="contact-link linkedin" target="_blank">
  <div class="contact-icon">
    <i class="fab fa-linkedin"></i>
  </div>
  <div class="contact-info">
    <span class="contact-label">LinkedIn</span>
    <span class="contact-value">your-username</span>
  </div>
</a>
```

### Colors and Styling
Modify CSS variables in `styles.css`:

```css
:root {
  --primary-color: #2563eb;      /* Main brand color */
  --primary-dark: #1d4ed8;       /* Darker shade */
  --accent-color: #f59e0b;       /* Accent color */
  --text-primary: #1e293b;       /* Primary text */
  --text-secondary: #475569;     /* Secondary text */
  --bg-primary: #ffffff;         /* Primary background */
  --bg-secondary: #f8fafc;       /* Secondary background */
}
```

## 🎯 Key Features Explained

### 3D Workspace Animation
The workspace uses CSS 3D transforms and JavaScript mouse tracking to create an interactive 3D effect:

```javascript
workspace.addEventListener('mousemove', (e) => {
  const mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
  const mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;
  
  const rotateX = mouseY * 10;
  const rotateY = mouseX * 10;
  
  workspace.style.transform = `
    perspective(1000px) 
    rotateX(${rotateX}deg) 
    rotateY(${rotateY}deg) 
    translateZ(20px)
  `;
});
```

### Scroll Animations
Uses Intersection Observer API for performance-optimized scroll animations:

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
```

### Performance Optimizations
- **Throttled scroll events** for smooth 60fps animations
- **Debounced resize events** to prevent excessive recalculations
- **Resource preloading** for critical assets
- **CSS transforms** instead of layout-triggering properties

## 🌟 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ⚠️ Internet Explorer (limited support)

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Mobile-first design approach
- Touch-friendly interactions
- Optimized 3D effects for mobile devices
- Collapsible navigation menu
- Scaled-down workspace for smaller screens

## 🎨 Animation Classes

Available CSS animation classes:
- `.fade-in` - Fade in from bottom
- `.slide-in-left` - Slide in from left
- `.slide-in-right` - Slide in from right
- `.scale-in` - Scale in from center

## 🔧 Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Minimize HTTP Requests**: Combine CSS/JS files
3. **Enable Gzip Compression**: On your web server
4. **Use CDN**: For FontAwesome and Google Fonts
5. **Lazy Load**: Non-critical images and content

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on push
3. Get a custom domain and SSL certificate

### Vercel
1. Import your GitHub repository
2. Deploy with zero configuration
3. Automatic deployments on push

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **FontAwesome** for the beautiful icons
- **Google Fonts** for Inter and JetBrains Mono fonts
- **CSS Grid and Flexbox** for modern layouts
- **Intersection Observer API** for scroll animations

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Built with ❤️ and lots of ☕ by Pratham Goel** 