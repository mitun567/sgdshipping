# 🚀 SGD Shipping - Complete Deployment Guide

This guide will walk you through deploying your SGD Shipping website to Netlify and connecting your Namecheap domain.

---

## 📋 Prerequisites

Before you begin, make sure you have:

- [ ] Completed website files (index.html, css/style.css, js/main.js)
- [ ] A GitHub account ([Sign up here](https://github.com/join))
- [ ] A Netlify account ([Sign up here](https://app.netlify.com/signup))
- [ ] Your Namecheap domain purchased and accessible
- [ ] Git installed on your computer ([Download here](https://git-scm.com/downloads))
- [ ] A text editor (VS Code, Sublime Text, etc.)

---

## 🎯 Deployment Overview

The deployment process has 4 main steps:

1. **Customize your website** (update contact info)
2. **Push to GitHub** (version control & backup)
3. **Deploy to Netlify** (hosting & forms)
4. **Connect Namecheap domain** (custom domain)

**Total Time:** 15-30 minutes (plus DNS propagation wait)

---

## Step 1: Customize Your Website

### 1.1 Update Contact Information

Open `index.html` in your text editor and update:

**Phone Number** (appears in multiple places):
```html
<!-- Search for: +880-XXX-XXXXXXX -->
<!-- Replace with: Your actual phone number -->

<!-- Example locations: -->
<!-- Contact section -->
<p>+880-XXX-XXXXXXX<br>Available 24/7</p>

<!-- Footer -->
<span>+880-XXX-XXXXXXX</span>
```

**Email Address** (appears in multiple places):
```html
<!-- Search for: hello@gmail.com -->
<!-- Replace with: Your actual email -->

<!-- Example locations: -->
<!-- Contact section -->
<p>hello@gmail.com<br>Quick response guaranteed</p>

<!-- Footer -->
<span>hello@gmail.com</span>
```

### 1.2 Verify Barge Specifications (Optional)

The fleet section already includes D.B. SONAR TORY SGD-1 specifications. If you need to update:

```html
<!-- Find in Fleet Section -->
<div class="spec-card">
    <div class="spec-label">Length O.A.</div>
    <div class="spec-values">
        <span class="spec-metric">53.65 M</span>
        <span class="spec-imperial">176.02 ft</span>
    </div>
</div>
```

### 1.3 Update Social Media Links (Optional)

```html
<!-- Find in Contact and Footer sections -->
<a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
<!-- Replace # with your actual social media URLs -->
```

### 1.4 Save All Changes

Make sure to save all your changes before proceeding!

---

## Step 2: Push to GitHub

### 2.1 Install Git

**Check if Git is installed:**
```bash
git --version
```

If not installed, download from [git-scm.com](https://git-scm.com/downloads)

### 2.2 Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`, type `cmd`, press Enter

**Mac:**
- Press `Cmd + Space`, type `terminal`, press Enter

**Linux:**
- Press `Ctrl + Alt + T`

### 2.3 Navigate to Project Folder

```bash
# Replace with your actual project path
cd path/to/sgd-shipping
```

**Example:**
```bash
# Windows
cd C:\Users\YourName\Documents\sgd-shipping

# Mac/Linux
cd ~/Documents/sgd-shipping
```

### 2.4 Initialize Git Repository

```bash
# Initialize git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - SGD Shipping website"
```

### 2.5 Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **"+"** icon in top-right
3. Select **"New repository"**
4. Repository name: `sgd-shipping` (or your preferred name)
5. Description: "SGD Shipping - Barge Rental Services Website"
6. Select **"Public"** (or Private if you prefer)
7. **DO NOT** check "Add README" or other options
8. Click **"Create repository"**

### 2.6 Connect Local Repository to GitHub

GitHub will show you commands. Copy and paste them:

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR-USERNAME/sgd-shipping.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace** `YOUR-USERNAME` with your actual GitHub username!

### 2.7 Verify Upload

Refresh your GitHub repository page. You should see all your files!

---

## Step 3: Deploy to Netlify

### 3.1 Sign Up for Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"Sign up"**
3. Choose **"Sign up with GitHub"**
4. Authorize Netlify to access your GitHub

### 3.2 Create New Site

1. Click **"Add new site"** button
2. Select **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify (if prompted)

### 3.3 Select Repository

1. Find your `sgd-shipping` repository in the list
2. Click on it to select

### 3.4 Configure Build Settings

**Most settings should be auto-detected. Verify:**

- **Branch to deploy:** `main`
- **Build command:** Leave empty (static site)
- **Publish directory:** Leave empty or enter `/`

Click **"Deploy site"**

### 3.5 Wait for Deployment

Netlify will now:
- Build your site
- Deploy to their servers
- Assign a random URL

**Wait 1-2 minutes** for deployment to complete.

### 3.6 View Your Live Site

Once deployed:
1. Click on the generated URL (like `random-name-12345.netlify.app`)
2. Your site should be live! 🎉

---

## Step 4: Set Up Netlify Forms

### 4.1 Configure Form Notifications

1. In Netlify Dashboard, go to your site
2. Navigate to: **Site settings** → **Forms**
3. You should see "contact" form listed
4. Click **"Form notifications"**
5. Click **"Add notification"** → **"Email notification"**
6. Enter: `hello@gmail.com` (or your actual email)
7. Select event: **"New form submission"**
8. Click **"Save"**

### 4.2 Test Form Submission

1. Go to your live site
2. Navigate to the Contact section
3. Fill out the form with test data
4. Submit the form
5. Check your email inbox (and spam folder)
6. You should receive the submission!

### 4.3 Configure Spam Protection (Already Done)

Your form already includes:
- ✅ Honeypot field (bot protection)
- ✅ Netlify's built-in spam filtering
- ✅ Form validation

No additional configuration needed!

---

## Step 5: Connect Namecheap Domain

### 5.1 Get DNS Settings from Netlify

1. In Netlify Dashboard, go to your site
2. Navigate to: **Domain settings** → **Domain management**
3. Click **"Add custom domain"**
4. Enter your domain: `yourdomain.com`
5. Click **"Verify"**
6. Netlify will provide DNS instructions

**Note the following information:**
- Your Netlify site name: `your-site-name.netlify.app`
- IP Address for A Record: `75.2.60.5`

### 5.2 Log into Namecheap

1. Go to [namecheap.com](https://www.namecheap.com)
2. Sign in to your account
3. Go to **"Domain List"**
4. Find your domain and click **"Manage"**

### 5.3 Configure DNS Settings

1. Click **"Advanced DNS"** tab
2. Look for **"Host Records"** section

### 5.4 Add/Edit A Record

**If an A Record exists for "@":**
1. Click **"Edit"** (pencil icon)
2. Update the value to: `75.2.60.5`
3. TTL: `Automatic`
4. Click **"Save"** (checkmark icon)

**If no A Record exists:**
1. Click **"Add New Record"**
2. Type: `A Record`
3. Host: `@`
4. Value: `75.2.60.5`
5. TTL: `Automatic`
6. Click **"Save Changes"** (checkmark icon)

### 5.5 Add/Edit CNAME Record

**If a CNAME Record exists for "www":**
1. Click **"Edit"** (pencil icon)
2. Update the value to: `your-site-name.netlify.app`
3. TTL: `Automatic`
4. Click **"Save"** (checkmark icon)

**If no CNAME Record exists:**
1. Click **"Add New Record"**
2. Type: `CNAME Record`
3. Host: `www`
4. Value: `your-site-name.netlify.app`
5. TTL: `Automatic`
6. Click **"Save Changes"** (checkmark icon)

### 5.6 Remove Conflicting Records (If Any)

Look for and **delete** any of these if they exist:
- Old A Records pointing to different IPs
- URL Redirect Records
- Parking Page Records

**Keep these records:**
- MX Records (for email)
- TXT Records (for email/verification)
- Any other essential records

### 5.7 Save All Changes

Make sure to click **"Save All Changes"** at the bottom of the page!

---

## Step 6: Verify and Enable HTTPS

### 6.1 Wait for DNS Propagation

DNS changes take time to propagate worldwide:
- **Typical Time:** 1-2 hours
- **Maximum Time:** 24-48 hours

### 6.2 Check DNS Propagation

Use online tools to check:

**Option 1: whatsmydns.net**
1. Go to [whatsmydns.net](https://whatsmydns.net)
2. Enter your domain name
3. Select "A" record type
4. Click "Search"
5. Check if `75.2.60.5` appears globally

**Option 2: DNSChecker**
1. Go to [dnschecker.org](https://dnschecker.org)
2. Enter your domain
3. Check propagation status

### 6.3 Enable HTTPS in Netlify

Once DNS is propagated:

1. Go back to Netlify Dashboard
2. Navigate to: **Domain settings** → **HTTPS**
3. Click **"Verify DNS configuration"**
4. Wait a few minutes
5. Netlify will automatically provision SSL certificate
6. HTTPS will be enabled automatically

**Your site will now be accessible at:**
- `https://yourdomain.com`
- `https://www.yourdomain.com`

---

## Step 7: Final Testing

### 7.1 Test Website Functionality

Visit your live site and test:

- [ ] All navigation links work
- [ ] Smooth scrolling between sections
- [ ] Mobile menu opens and closes
- [ ] Contact form submits successfully
- [ ] All images load correctly
- [ ] Logo displays properly
- [ ] Animations work smoothly
- [ ] Footer links work
- [ ] Social media icons link correctly

### 7.2 Test on Different Devices

Check your site on:
- [ ] Desktop computer
- [ ] Laptop
- [ ] Tablet
- [ ] Mobile phone (iOS)
- [ ] Mobile phone (Android)

### 7.3 Test on Different Browsers

Verify functionality on:
- [ ] Google Chrome
- [ ] Mozilla Firefox
- [ ] Safari
- [ ] Microsoft Edge

### 7.4 Test Form Email Delivery

1. Submit a test form
2. Check email arrives at hello@gmail.com
3. Verify form data is complete
4. Check spam folder if not received

---

## Step 8: Post-Deployment Optimizations

### 8.1 Set Up Analytics (Optional)

**Google Analytics:**
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking code
3. Add to `index.html` before `</head>`

**Netlify Analytics:**
1. Go to Netlify Dashboard → Analytics
2. Enable analytics ($9/month)

### 8.2 Custom Domain Redirects

In Netlify, create `_redirects` file:
```
# Redirect www to non-www
https://www.yourdomain.com/* https://yourdomain.com/:splat 301!

# Or redirect non-www to www
https://yourdomain.com/* https://www.yourdomain.com/:splat 301!
```

### 8.3 Set Up Custom 404 Page

Create `404.html` in your project root with custom error page.

### 8.4 Submit to Search Engines

**Google:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your domain
3. Submit sitemap

**Bing:**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap

---

## 🔄 Making Updates After Deployment

### Update Website Content

1. Make changes to your local files
2. Save changes
3. Push to GitHub:
```bash
git add .
git commit -m "Updated contact information"
git push
```
4. Netlify automatically deploys updates (1-2 minutes)

### View Deploy Progress

1. Go to Netlify Dashboard
2. Click **"Deploys"** tab
3. Watch deploy progress in real-time

---

## 🐛 Troubleshooting

### Issue: Form Submissions Not Received

**Solution:**
1. Verify form name attribute: `name="contact"`
2. Check `data-netlify="true"` is present
3. Ensure site is deployed to Netlify (not local)
4. Check email notification settings in Netlify
5. Look in spam/junk folder

### Issue: Domain Not Working

**Solution:**
1. Wait 24-48 hours for DNS propagation
2. Clear browser cache: `Ctrl+Shift+Delete`
3. Clear DNS cache:
   - Windows: `ipconfig /flushdns`
   - Mac: `sudo killall -HUP mDNSResponder`
4. Check DNS settings in Namecheap are correct
5. Verify A and CNAME records point to right values

### Issue: SSL Certificate Not Working

**Solution:**
1. Wait for DNS to fully propagate
2. In Netlify: Domain settings → HTTPS
3. Click "Verify DNS configuration"
4. Wait 10-15 minutes for SSL provisioning
5. If still not working, click "Renew certificate"

### Issue: Images Not Loading

**Solution:**
1. Check image URLs are correct
2. Verify images are copyright-free sources
3. Check browser console for errors (F12)
4. Try clearing browser cache

### Issue: Site Not Updating

**Solution:**
1. Check GitHub repository has latest changes
2. In Netlify, trigger manual deploy:
   - Go to Deploys tab
   - Click "Trigger deploy" → "Deploy site"
3. Clear Netlify cache:
   - Site settings → Build & deploy
   - Click "Clear cache and deploy site"

---

## 📞 Support Resources

### Netlify Support
- **Documentation**: [docs.netlify.com](https://docs.netlify.com)
- **Community Forum**: [answers.netlify.com](https://answers.netlify.com)
- **Support**: [netlify.com/support](https://www.netlify.com/support/)

### Namecheap Support
- **Knowledge Base**: [namecheap.com/support](https://www.namecheap.com/support/)
- **Live Chat**: Available 24/7
- **Submit Ticket**: Through Namecheap dashboard

### GitHub Support
- **Documentation**: [docs.github.com](https://docs.github.com)
- **Community**: [github.community](https://github.community)

---

## ✅ Deployment Checklist

Use this checklist to ensure everything is set up correctly:

### Pre-Deployment
- [ ] Updated phone number in index.html
- [ ] Updated email address throughout site
- [ ] Verified barge specifications
- [ ] Tested locally in browser
- [ ] All files saved

### GitHub Setup
- [ ] Git repository initialized
- [ ] All files committed
- [ ] Pushed to GitHub
- [ ] Repository is accessible

### Netlify Deployment
- [ ] Netlify account created
- [ ] Site deployed from GitHub
- [ ] Site is live on Netlify URL
- [ ] Forms are working
- [ ] Email notifications configured

### Domain Configuration
- [ ] A Record added (@ → 75.2.60.5)
- [ ] CNAME Record added (www → netlify.app)
- [ ] Old records removed/updated
- [ ] DNS propagation completed
- [ ] HTTPS enabled
- [ ] Domain redirects properly

### Final Testing
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Mobile responsive
- [ ] All browsers tested
- [ ] Email notifications working
- [ ] No console errors
- [ ] Fast page load

---

## 🎉 Success!

Congratulations! Your SGD Shipping website is now live and accessible to the world!

**Your site is now available at:**
- ✅ `https://yourdomain.com`
- ✅ `https://www.yourdomain.com`
- ✅ Professional email forms
- ✅ Fast, secure hosting
- ✅ Mobile-friendly design

**Share your website with:**
- Potential clients
- Business partners
- Social media
- Email signatures
- Business cards

---

**Need help?** Contact hello@gmail.com or refer to [README.md](README.md) for more information.

**Ready to customize further?** Check out [CUSTOMIZATION.md](CUSTOMIZATION.md)!

---

**Built with excellence for SGD Shipping** 🚢⚓✨  
*Last Updated: November 2024*