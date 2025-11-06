# ⚡ SGD Shipping - Quick Start Guide

Get your website live in 15 minutes!

---

## 🎯 3-Step Deployment

### Step 1: Update Your Info (2 minutes)

Open `index.html` and replace:

1. **Phone**: `+880-XXX-XXXXXXX` → Your phone number
2. **Email**: `hello@gmail.com` → Your email address

**Save the file!**

---

### Step 2: Push to GitHub (5 minutes)

```bash
# Open terminal in your project folder
cd sgd-shipping

# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub.com, then:
git remote add origin https://github.com/YOUR-USERNAME/sgd-shipping.git
git branch -M main
git push -u origin main
```

---

### Step 3: Deploy to Netlify (3 minutes)

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import from GitHub"
4. Select `sgd-shipping` repository
5. Click "Deploy site"

**✅ Your site is live!**

---

## 📧 Setup Form Emails (2 minutes)

1. Netlify Dashboard → Your Site
2. Site Settings → Forms → Form Notifications
3. Add notification → Email
4. Enter: `hello@gmail.com`
5. Save

**✅ Forms now send to your email!**

---

## 🌐 Connect Your Domain (10 minutes + wait)

### In Netlify:
1. Domain settings → Add custom domain
2. Enter: `yourdomain.com`

### In Namecheap:
1. Advanced DNS → Add Records:
   - **A Record**: `@` → `75.2.60.5`
   - **CNAME**: `www` → `your-site.netlify.app`
2. Save changes

**Wait 1-24 hours for DNS propagation**

**✅ Your domain is connected!**

---

## 🎉 You're Live!

Your professional website is now:
- ✅ Live on the internet
- ✅ Receiving form submissions
- ✅ Mobile responsive
- ✅ HTTPS secured

**View at:** `https://yourdomain.com`

---

## 📚 Need More Help?

- **Detailed Guide**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Customization**: [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Full Docs**: [README.md](README.md)

---

**Built with excellence for SGD Shipping** 🚢⚓✨