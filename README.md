# Holola'i Photography — Fully Customizable Static HTML

A premium, fully customizable photography portfolio website. **All content, images, colors, and text are controlled from `config.js`** — no need to touch HTML or CSS.

## Quick Start

1. **Open `config.js`** and edit all the content (text, images, colors)
2. **Open `index.html`** in your browser
3. **Done!** All changes are reflected immediately

## File Structure

```
hololai-custom/
├── index.html          ← Main HTML file (don't edit)
├── config.js           ← EDIT THIS! All content & settings
├── css/
│   └── style.css       ← Styling (edit for design changes)
├── js/
│   └── main.js         ← Page logic (don't edit unless advanced)
└── README.md           ← This file
```

## Customization Guide

### 1. Change Text & Images (config.js)

Open `config.js` and edit these sections:

#### Hero Section
```javascript
hero: {
  image: "YOUR_IMAGE_URL",
  headline: "YOUR HEADLINE",
  subheadline: "Your subheadline",
  cta1: { text: "BUTTON TEXT", href: "#page" },
  cta2: { text: "BUTTON TEXT", href: "#page" },
}
```

#### Gallery Images
```javascript
gallery: [
  {
    id: 1,
    src: "YOUR_IMAGE_URL",
    alt: "Description",
    category: "Portraits",
    span: 1,  // 1 or 2 columns wide
  },
  // Add more images...
]
```

#### About Page
```javascript
about: {
  image: "PHOTOGRAPHER_IMAGE",
  quote: "Your quote",
  story: ["Paragraph 1", "Paragraph 2", ...],
  philosophy: [
    { num: "01", title: "Title", desc: "Description" },
    // ...
  ],
}
```

#### Contact Info
```javascript
contact: {
  email: "your@email.com",
  instagram: "@yourhandle",
  instagramUrl: "https://instagram.com/yourhandle",
  location: "Your Location",
}
```

### 2. Change Colors

Edit the `colors` section in `config.js`:

```javascript
colors: {
  background: "#080808",      // Main background
  foreground: "#EFEFEF",      // Text color
  accent: "#B8A99A",          // Accent color (buttons, links)
  border: "#2A2A2A",          // Border color
  muted: "#777",              // Muted text
  darkMuted: "#555",          // Darker muted text
}
```

Then update `css/style.css` to use these colors:
- Replace `#080808` with `var(--bg)` 
- Replace `#B8A99A` with `var(--accent)`
- etc.

### 3. Change Fonts

Edit the `fonts` section in `config.js`:

```javascript
fonts: {
  display: "'Your Font', sans-serif",
  editorial: "'Your Font', serif",
  body: "'Your Font', sans-serif",
}
```

Then update `css/style.css` to use these variables.

### 4. Add More Gallery Images

In `config.js`, add items to the `gallery` array:

```javascript
gallery: [
  // ... existing images
  {
    id: 7,
    src: "https://your-image-url.jpg",
    alt: "Description of image",
    category: "Portraits",  // or "Couples", "Landscape", "Events"
    span: 1,  // 1 for single column, 2 for double
  },
]
```

### 5. Change Session Types (Booking)

Edit the `sessionTypes` array in `booking`:

```javascript
booking: {
  sessionTypes: [
    "Your Session Type 1",
    "Your Session Type 2",
    // ...
  ],
}
```

### 6. Update Navigation Links

Edit the `nav.links` array:

```javascript
nav: {
  links: [
    { label: "HOME", href: "#home" },
    { label: "GALLERY", href: "#gallery" },
    // Add or remove links here
  ],
}
```

## Deployment

### GitHub Pages (Free)

1. Create a new repository called `hololai.photography`
2. Push all files to GitHub
3. Go to Settings → Pages → set source to "main" branch
4. Your site will be live at `https://yourusername.github.io/hololai.photography`

### Netlify (Free)

1. Drag and drop the folder to [netlify.com](https://netlify.com)
2. Done! Your site is live

### Vercel (Free)

1. Connect your GitHub repo to [vercel.com](https://vercel.com)
2. Done! Your site is live

### Traditional Hosting

1. Upload all files via FTP to your server
2. Done!

## Local Testing

To test locally before deploying:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Advanced Customization

### Change the Design

Edit `css/style.css` to modify:
- Colors
- Fonts
- Spacing
- Layout
- Animations

### Add New Pages

1. Add a new case in `js/main.js` `renderPage()` function
2. Create a new render function (e.g., `renderServices()`)
3. Add a new link in `config.js` nav.links

### Modify Form Behavior

Edit the form handlers in `js/main.js`:
- `handleBookingSubmit()`
- `handleContactSubmit()`

Currently they just show an alert. To actually send emails, integrate a service like:
- [Formspree](https://formspree.io)
- [EmailJS](https://www.emailjs.com)
- [Basin](https://usebasin.com)

## Troubleshooting

**Images not showing?**
- Check the image URL is correct
- Make sure the URL is publicly accessible
- Try using a different image service (Unsplash, Pexels, etc.)

**Styles not applying?**
- Clear your browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)

**Form not working?**
- Check browser console for errors (F12)
- Integrate a form service like Formspree

## Image Sources

Free image services you can use:
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)
- [Your own images](https://imgur.com) (upload to Imgur and use the link)

## Support

For questions or issues:
1. Check the code comments in `config.js`
2. Review the examples in each section
3. Test in your browser's developer console (F12)

## License

© 2026 Holola'i Photography. All rights reserved.

---

**Happy customizing! 🎨📸**
