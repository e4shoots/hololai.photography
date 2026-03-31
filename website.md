# Holola'i Photography — Static HTML

A premium photography portfolio website for Holola'i, a Kauaʻi-based cinematic photography brand.

## Features

- **Fullscreen Hero** with parallax scrolling
- **Portfolio Gallery** with lightbox viewer and category filters
- **Booking Form** with validation
- **About Page** with photographer story and philosophy
- **Contact Page** with Instagram priority and email integration
- **Responsive Design** optimized for all devices
- **Dark Gallery Aesthetic** — minimal, cinematic, sharp-edge design

## Pages

- `/` — Home (hero + gallery preview + services)
- `/gallery` — Full portfolio with lightbox
- `/about` — Photographer story and philosophy
- `/booking` — Session booking form
- `/contact` — Contact information and inquiry form

## Deployment

This is a static HTML site. Simply upload the files to any web host:

- **GitHub Pages**: Push to GitHub and enable Pages in Settings
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repo
- **Traditional Hosting**: FTP the files to your server

## Local Development

To test locally, serve the files with a simple HTTP server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server
```

Then visit `http://localhost:8000`

## Customization

All content is in `index.html`. To customize:

1. Update the hero image URL in the HTML
2. Modify gallery images and links
3. Change contact information (email, Instagram handle)
4. Update form submission endpoint if needed

## Design

- **Typography**: Bebas Neue (display), Cormorant Garamond (editorial), Space Grotesk (body)
- **Color Scheme**: Near-black background (#080808), off-white text, warm stone accent (#B8A99A)
- **Layout**: Minimal, asymmetric, gallery-inspired

## License

© 2026 Holola'i Photography. All rights reserved.
