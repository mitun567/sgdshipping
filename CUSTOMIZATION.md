# 🎨 SGD Shipping - Customization Guide

This guide shows you how to easily customize your SGD Shipping website without breaking anything!

---

## 📝 Quick Reference

| What to Change | Where to Find It | Difficulty |
|---------------|------------------|------------|
| Phone Number | `index.html` (multiple locations) | ⭐ Easy |
| Email Address | `index.html` (multiple locations) | ⭐ Easy |
| Company Name | `index.html` throughout | ⭐ Easy |
| Barge Specs | Fleet Section in `index.html` | ⭐ Easy |
| Colors | `css/style.css` root variables | ⭐⭐ Medium |
| Fonts | `css/style.css` font imports | ⭐⭐ Medium |
| Images | Image URLs in `index.html` | ⭐⭐ Medium |
| Text Content | Sections in `index.html` | ⭐ Easy |
| Animations | `css/style.css` keyframes | ⭐⭐⭐ Advanced |
| Layout | `css/style.css` grid/flexbox | ⭐⭐⭐ Advanced |

---

## 🔧 Basic Customizations

### 1. Change Contact Information

#### Phone Number
**Location:** `index.html` (appears 6 times)

Search for: `+880-XXX-XXXXXXX`

**Where it appears:**
1. Hero section stats
2. Contact section (contact card)
3. Footer (contact column)

**Example:**
```html
<!-- Before -->
<p>+880-XXX-XXXXXXX<br>Available 24/7</p>

<!-- After -->
<p>+880-123-456-7890<br>Available 24/7</p>
```

#### Email Address
**Location:** `index.html` (appears 8 times)

Search for: `hello@gmail.com`

**Where it appears:**
1. Netlify form action
2. Contact section (contact card)
3. Footer (contact column)

**Example:**
```html
<!-- Before -->
<span>hello@gmail.com</span>

<!-- After -->
<span>info@sgdshipping.com</span>
```

#### Office Address
**Location:** `index.html`

Search for: `Chittagong, Bangladesh`

**Example:**
```html
<!-- Before -->
<p>Chittagong, Bangladesh<br>Port Area</p>

<!-- After -->
<p>123 Port Road, Chittagong<br>Bangladesh - 4100</p>
```

---

### 2. Update Barge Specifications

**Location:** Fleet Section in `index.html`

Find the specifications grid and update values:

```html
<div class="spec-card">
    <div class="spec-icon">
        <i class="fas fa-arrows-alt-h"></i>
    </div>
    <div class="spec-content">
        <div class="spec-label">Length O.A.</div>
        <div class="spec-values">
            <!-- Update these values -->
            <span class="spec-metric">53.65 M</span>
            <span class="spec-imperial">176.02 ft</span>
        </div>
    </div>
</div>
```

**To convert meters to feet:** Multiply by 3.28084

**Example:**
- 50 M = 164.04 ft
- 15 M = 49.21 ft
- 3 M = 9.84 ft

---

### 3. Update Fleet Capacity

**Location:** Multiple places in `index.html`

Search for: `1500 Tons` or `1500`

**Where it appears:**
1. Hero stats section
2. Fleet showcase badge
3. Capacity highlight card
4. Specifications table

**Example:**
```html
<!-- Before -->
<div class="capacity-number">1500 Tons</div>

<!-- After -->
<div class="capacity-number">2000 Tons</div>
```

---

### 4. Change Section Text

#### Hero Section Headline
```html
<!-- Find in Hero section -->
<h1 class="hero-title">Reliable Barge Rental Services in Chittagong</h1>

<!-- Change to: -->
<h1 class="hero-title">Your Custom Headline Here</h1>
```

#### Hero Section Subheadline
```html
<p class="hero-subtitle">
    Professional maritime transportation solutions for Bangladesh's growing trade industry.
</p>

<!-- Change to your custom text -->
```

#### About Section Content
```html
<!-- Find in About section -->
<h3>Why Choose SGD Shipping?</h3>
<p>Your custom about text here...</p>
```

---

### 5. Update Social Media Links

**Location:** Contact Section and Footer in `index.html`

Search for: `<a href="#" aria-label="Facebook">`

**Example:**
```html
<!-- Before -->
<a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>

<!-- After -->
<a href="https://facebook.com/sgdshipping" aria-label="Facebook">
    <i class="fab fa-facebook-f"></i>
</a>
```

**Update for all platforms:**
- Facebook: `https://facebook.com/yourpage`
- LinkedIn: `https://linkedin.com/company/yourcompany`
- Twitter: `https://twitter.com/yourhandle`
- Instagram: `https://instagram.com/yourprofile`

---

## 🎨 Design Customizations

### 1. Change Color Scheme

**Location:** `css/style.css` at the very top

Find the `:root` section:

```css
:root {
    --navy-blue: #001F3F;      /* Primary color */
    --navy-dark: #001529;      /* Darker navy */
    --navy-light: #003366;     /* Lighter navy */
    --gold: #D4AF37;           /* Accent color */
    --gold-light: #E5C158;     /* Lighter gold */
    --gold-dark: #B8941F;      /* Darker gold */
    --white: #FFFFFF;
    --light-gray: #F5F5F5;
    --medium-gray: #666666;
    --dark-gray: #333333;
}
```

**Example - Change to Blue & Orange:**
```css
:root {
    --navy-blue: #003D7A;      /* Deep blue */
    --navy-dark: #002952;      /* Darker blue */
    --navy-light: #0051A3;     /* Lighter blue */
    --gold: #FF8C00;           /* Orange */
    --gold-light: #FFA733;     /* Lighter orange */
    --gold-dark: #CC7000;      /* Darker orange */
    /* Keep other colors the same */
}
```

**Popular Color Combinations:**

**Maritime Professional:**
- Primary: `#001F3F` (Navy Blue)
- Accent: `#D4AF37` (Gold) ✅ Current

**Modern Tech:**
- Primary: `#2C3E50` (Dark Blue-Gray)
- Accent: `#E74C3C` (Red)

**Ocean Fresh:**
- Primary: `#006994` (Ocean Blue)
- Accent: `#00D4FF` (Cyan)

**Traditional Maritime:**
- Primary: `#1B4F72` (Deep Navy)
- Accent: `#F39C12` (Amber)

---

### 2. Change Fonts

**Location:** `index.html` head section and `css/style.css`

#### In HTML (head section):
```html
<!-- Current fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

#### In CSS:
```css
/* Change heading font */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif; /* Change this */
}

/* Change body font */
body {
    font-family: 'Inter', sans-serif; /* Change this */
}
```

**Popular Font Combinations:**

**Professional & Clean:**
- Headings: `Montserrat` (sans-serif)
- Body: `Open Sans` (sans-serif)

**Elegant & Classic:**
- Headings: `Playfair Display` (serif) ✅ Current
- Body: `Inter` (sans-serif) ✅ Current

**Modern & Bold:**
- Headings: `Poppins` (sans-serif)
- Body: `Roboto` (sans-serif)

**To add new fonts:**
1. Go to [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Copy the `<link>` code
4. Replace in `index.html` head section
5. Update font names in `css/style.css`

---

### 3. Replace Images

#### Hero Background Image
**Location:** `css/style.css`

Find:
```css
.hero-bg {
    background-image: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920');
}
```

**Replace with:**
- Your own image URL
- Different Unsplash image
- Pexels image URL

**Important:** Use copyright-free sources only!

#### Fleet Barge Image
**Location:** `index.html` Fleet Section

Find:
```html
<img src="https://images.pexels.com/photos/1402850/pexels-photo-1402850.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Industrial Barge" class="fleet-image">
```

**Replace URL** with your barge photo URL.

**Free Image Sources:**
- [Unsplash](https://unsplash.com) - High-quality free images
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images and videos

---

### 4. Adjust Spacing and Layout

#### Section Padding
**Location:** `css/style.css`

Find:
```css
section {
    padding: 6rem 0; /* Top/Bottom padding */
}
```

**Increase for more space:**
```css
section {
    padding: 8rem 0; /* More space */
}
```

**Decrease for tighter layout:**
```css
section {
    padding: 4rem 0; /* Less space */
}
```

#### Container Width
Find:
```css
.container {
    max-width: 1200px; /* Maximum width */
    margin: 0 auto;
    padding: 0 2rem;
}
```

**For wider layout:**
```css
.container {
    max-width: 1400px; /* Wider */
}
```

**For narrower layout:**
```css
.container {
    max-width: 1000px; /* Narrower */
}
```

---

## 🚀 Advanced Customizations

### 1. Add New Section

**Location:** `index.html` (before footer)

**Template:**
```html
<!-- New Section -->
<section id="new-section" class="new-section">
    <div class="container">
        <div class="section-header text-center fade-in-up">
            <span class="section-badge">Section Badge</span>
            <h2 class="section-title">Section Title</h2>
            <p class="section-subtitle">Section description</p>
        </div>
        
        <div class="content-grid fade-in-up">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

**Add to navigation:**
```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

**Add styling in `css/style.css`:**
```css
.new-section {
    background: var(--light-gray);
}

.content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
```

---

### 2. Modify Wave Animations

**Location:** `css/style.css`

Find wave animation:
```css
@keyframes wave {
    0% {
        transform: translateX(0) translateZ(0) scaleY(1);
    }
    50% {
        transform: translateX(-25%) translateZ(0) scaleY(0.55);
    }
    100% {
        transform: translateX(-50%) translateZ(0) scaleY(1);
    }
}
```

**Make waves faster:**
```css
.waves {
    animation: wave 10s /* change to 7s */ cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
}
```

**Make waves slower:**
```css
.waves {
    animation: wave 10s /* change to 20s */ cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
}
```

**Disable waves:**
```css
.waves-container {
    display: none; /* Hide waves */
}
```

---

### 3. Change Button Styles

**Location:** `css/style.css`

Find button styles:
```css
.btn-primary {
    background: var(--gold);
    color: var(--navy-blue);
    /* Modify these properties */
}
```

**Square buttons (remove rounded edges):**
```css
.btn {
    border-radius: 0; /* Change from 50px to 0 */
}
```

**Larger buttons:**
```css
.btn {
    padding: 1.25rem 3rem; /* Increase from 1rem 2.5rem */
    font-size: 1.2rem; /* Increase from 1.1rem */
}
```

**Different hover effect:**
```css
.btn-primary:hover {
    background: var(--gold-light);
    transform: scale(1.05); /* Scale instead of translate */
    box-shadow: 0 8px 30px rgba(212, 175, 55, 0.5);
}
```

---

### 4. Modify Card Layouts

#### Change Grid Columns
**Location:** `css/style.css`

Find grid layouts like:
```css
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
}
```

**Force 2 columns:**
```css
.services-grid {
    grid-template-columns: repeat(2, 1fr); /* Always 2 columns */
}
```

**Force 4 columns:**
```css
.services-grid {
    grid-template-columns: repeat(4, 1fr); /* Always 4 columns */
}
```

---

### 5. Add Custom Animations

**Location:** `css/style.css`

**Create new animation:**
```css
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

**Apply to elements:**
```css
.custom-element {
    animation: slideInLeft 0.8s ease-out;
}
```

---

## 📱 Mobile Customizations

### Adjust Mobile Breakpoints

**Location:** `css/style.css` (bottom section)

Current breakpoints:
```css
/* Tablet */
@media (max-width: 1024px) { }

/* Mobile */
@media (max-width: 768px) { }

/* Small Mobile */
@media (max-width: 480px) { }
```

**Change tablet breakpoint:**
```css
@media (max-width: 900px) { /* Changed from 1024px */ }
```

### Mobile-Specific Styles

**Example - Smaller headings on mobile:**
```css
@media (max-width: 768px) {
    h1 { font-size: 2rem; /* Smaller */ }
    h2 { font-size: 1.75rem; }
    h3 { font-size: 1.5rem; }
}
```

---

## 🔧 Quick Fixes

### Issue: Text Too Small on Mobile

**Solution:**
```css
@media (max-width: 768px) {
    html {
        font-size: 16px; /* Increase from 14px */
    }
}
```

### Issue: Too Much White Space

**Solution:**
```css
section {
    padding: 4rem 0; /* Decrease from 6rem */
}
```

### Issue: Cards Too Wide on Desktop

**Solution:**
```css
.service-card,
.about-card {
    max-width: 400px; /* Add max-width */
    margin: 0 auto; /* Center */
}
```

### Issue: Logo Too Big/Small

**Solution in `css/style.css`:**
```css
.logo {
    height: 50px; /* Adjust from 60px */
}
```

---

## ✅ Testing Your Changes

After making changes:

1. **Save all files**
2. **Open in browser** (or refresh)
3. **Test on mobile** (browser DevTools → Device toolbar)
4. **Check all sections** work correctly
5. **Test form submission**
6. **Validate HTML** at [validator.w3.org](https://validator.w3.org)
7. **Check CSS** at [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)

---

## 🚫 Things to Avoid

❌ **Don't** remove the Netlify form attributes  
❌ **Don't** change file structure (keep css/, js/ folders)  
❌ **Don't** remove important IDs (used for navigation)  
❌ **Don't** use copyrighted images without permission  
❌ **Don't** inline critical CSS (keep external file)  
❌ **Don't** remove responsive breakpoints  
❌ **Don't** forget to test on mobile  

---

## 💾 Backup Before Customizing

Always keep a backup:

```bash
# Create backup
cp index.html index.html.backup
cp css/style.css css/style.css.backup
cp js/main.js js/main.js.backup
```

Or commit to Git:
```bash
git add .
git commit -m "Backup before customization"
```

---

## 🆘 Restore from Backup

If something breaks:

**From backup files:**
```bash
cp index.html.backup index.html
cp css/style.css.backup css/style.css
```

**From Git:**
```bash
git checkout -- index.html
git checkout -- css/style.css
```

---

## 📚 Additional Resources

- **HTML Tutorial**: [w3schools.com/html](https://www.w3schools.com/html/)
- **CSS Tutorial**: [w3schools.com/css](https://www.w3schools.com/css/)
- **Color Picker**: [coolors.co](https://coolors.co)
- **Google Fonts**: [fonts.google.com](https://fonts.google.com)
- **Icons**: [fontawesome.com](https://fontawesome.com)
- **Free Images**: [unsplash.com](https://unsplash.com)

---

## 💡 Pro Tips

1. **Make small changes** and test frequently
2. **Use browser DevTools** (F12) to preview CSS changes
3. **Keep backups** before major changes
4. **Test on real devices** not just browser emulation
5. **Use Git** for version control
6. **Comment your code** to remember changes
7. **Ask for help** if stuck (see README.md for support)

---

## 🎉 You're Ready to Customize!

Start with simple changes like text and colors, then move to more advanced customizations as you get comfortable.

**Remember:** It's hard to break anything permanently if you have backups!

---

**Need more help?** Check [README.md](README.md) or [DEPLOYMENT.md](DEPLOYMENT.md)

**Built with excellence for SGD Shipping** 🚢⚓✨  
*Last Updated: November 2024*