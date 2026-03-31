/**
 * HOLOLA'I PHOTOGRAPHY — COMPLETE CUSTOMIZATION CONFIG
 * 
 * Edit this file to change EVERYTHING:
 * - All text on every page
 * - All images
 * - All colors
 * - All form labels
 * - All links and CTAs
 * 
 * No need to touch HTML or JavaScript.
 */

const CONFIG = {
  // ========== SITE METADATA ==========
  site: {
    title: "Holola'i Photography",
    description: "Cinematic, emotional, story-driven photography from Kauaʻi",
    author: "Holola'i",
  },

  // ========== NAVIGATION ==========
  nav: {
    logo: "HOLOLA'I",
    links: [
      { label: "HOME", href: "#home" },
      { label: "GALLERY", href: "#gallery" },
      { label: "ABOUT", href: "#about" },
      { label: "BOOKING", href: "#booking" },
      { label: "CONTACT", href: "#contact" },
    ],
    social: {
      instagram: "https://instagram.com/hololai",
    },
  },

  // ========== HERO SECTION (Home Page) ==========
  hero: {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/hero-main-hj9rHRFJEgWwiVkzP2xyS5.webp",
    location: "[ KAUAʻI, HAWAIʻI ]",
    headline: "CAPTURE\nMOMENTS\nTHAT MATTER",
    subheadline: "Cinematic, emotional, story-driven\nphotography.",
    cta1: { text: "VIEW GALLERY", href: "#gallery" },
    cta2: { text: "BOOK A SESSION", href: "#booking" },
  },

  // ========== SERVICES SECTION (Home Page) ==========
  services: [
    {
      num: "01",
      title: "Presence",
      desc: "I arrive early, stay late, and pay attention to the light that most people miss. The best shots happen in the margins.",
    },
    {
      num: "02",
      title: "Honesty",
      desc: "No forced poses, no manufactured emotion. I work to create an environment where real moments can happen naturally.",
    },
    {
      num: "03",
      title: "Craft",
      desc: "Every image is edited with intention. The final delivery is a curated collection — not a data dump. Quality over quantity.",
    },
  ],

  // ========== GALLERY PREVIEW (Home Page) ==========
  galleryPreview: {
    label: "[ Portfolio ]",
    headline: "Featured Work",
    items: [
      {
        id: 1,
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/gallery-couple-egvJ5h6hyizGXVEwpokLJ5.webp",
        alt: "Couple at sunset",
        span: 2,
      },
      {
        id: 2,
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/gallery-portrait-F3mM6W4cY6XskRp8zvyy6r.webp",
        alt: "Portrait",
        span: 1,
      },
      {
        id: 3,
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/gallery-landscape-irt9oobtGZ9CnBsqU9rPwf.webp",
        alt: "Landscape",
        span: 1,
      },
    ],
  },

  // ========== GALLERY PAGE ==========
  galleryPage: {
    label: "[ Portfolio ]",
    headline: "The Work",
    subheadline: "Real, unfiltered, timeless.",
    items: [
      {
        id: 1,
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/gallery-couple-egvJ5h6hyizGXVEwpokLJ5.webp",
        alt: "Couple at sunset on Kauaʻi beach",
        category: "Couples",
        span: 2,
      },
      {
        id: 2,
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/gallery-portrait-F3mM6W4cY6XskRp8zvyy6r.webp",
        alt: "Portrait in Kauaʻi jungle",
        category: "Portraits",
        span: 1,
      },
      {
        id: 3,
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/gallery-landscape-irt9oobtGZ9CnBsqU9rPwf.webp",
        alt: "Nā Pali Coast aerial view",
        category: "Landscape",
        span: 1,
      },
      {
        id: 4,
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/hero-main-hj9rHRFJEgWwiVkzP2xyS5.webp",
        alt: "Kauaʻi coastline at golden hour",
        category: "Landscape",
        span: 1,
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        alt: "Wedding ceremony on the beach",
        category: "Events",
        span: 1,
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80",
        alt: "Couple portrait in nature",
        category: "Couples",
        span: 1,
      },
    ],
  },

  // ========== ABOUT PAGE ==========
  aboutPage: {
    label: "[ The Photographer ]",
    headline: "About",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/about-photographer-mbdwHuin2k95cdLr3g5UXR.webp",
    quote: '"I don\'t take photographs.\nI find them."',
    story: [
      "Born and raised on the island of Kauaʻi, I grew up surrounded by some of the most dramatic landscapes on earth. The Nā Pali cliffs, the red dirt roads of Waimea Canyon, the way golden hour light turns everything to fire — this place shaped how I see the world.",
      "I started shooting on film in my early twenties, drawn to the patience it demanded and the honesty it produced. No instant review, no endless retakes — just the moment, the light, and the decision to press the shutter. That discipline still defines how I work today.",
      "Holola'i — meaning 'to spread out, to unfold' in Hawaiian — is my approach to photography. I believe every person, every couple, every landscape has a story that wants to unfold. My job is to be present enough to catch it.",
      "I work with individuals, couples, families, and brands who value authentic imagery over perfection. If you want something real, unfiltered, and timeless — let's make something together.",
    ],
    cta1: { text: "Book a Session", href: "#booking" },
    cta2: { text: "View Work", href: "#gallery" },
    philosophyLabel: "[ Philosophy ]",
    philosophyHeadline: "How I Work",
    philosophy: [
      {
        num: "01",
        title: "Presence",
        desc: "I arrive early, stay late, and pay attention to the light that most people miss. The best shots happen in the margins.",
      },
      {
        num: "02",
        title: "Honesty",
        desc: "No forced poses, no manufactured emotion. I work to create an environment where real moments can happen naturally.",
      },
      {
        num: "03",
        title: "Craft",
        desc: "Every image is edited with intention. The final delivery is a curated collection — not a data dump. Quality over quantity.",
      },
    ],
    fullBleedImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/gallery-landscape-irt9oobtGZ9CnBsqU9rPwf.webp",
    fullBleedLabel: "[ Nā Pali Coast, Kauaʻi ]",
  },

  // ========== BOOKING PAGE ==========
  bookingPage: {
    label: "[ Book a Session ]",
    headline: "Let's Work\nTogether",
    subheadline: "Choose your preferred date and time below. I'll confirm your session details shortly.",
    setmoreUrl: "https://hololai.setmore.com",
    calendarLabel: "[ Select Your Time ]",
    sessionInfoLabel: "[ Session Info ]",
    sessionInfo: [
      { label: "Response Time", value: "Within 48 hours" },
      { label: "Location", value: "Kauaʻi, Hawaiʻi + Destination" },
      { label: "Delivery", value: "2–3 weeks after session" },
      { label: "Format", value: "High-res digital files" },
      { label: "Editing", value: "Cinematic color grade included" },
    ],
  },

  // ========== CONTACT PAGE ==========
  contactPage: {
    label: "[ Get in Touch ]",
    headline: "Say Hello",
    formLabels: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "Message",
      messagePlaceholder: "What's on your mind?",
      submit: "Send Message",
    },
    connectLabel: "[ Connect ]",
    instagram: {
      label: "Instagram",
      handle: "@hololai",
      url: "https://instagram.com/hololai",
      desc: "Follow for daily work and behind-the-scenes",
    },
    email: {
      label: "Email",
      address: "hello@hololai.com",
      desc: "Response within 48 hours",
    },
    location: {
      label: "Location",
      name: "Kauaʻi, Hawaiʻi",
      desc: "Available for destination sessions worldwide",
    },
    bookingCTA: {
      label: "[ Prefer Booking? ]",
      text: "For session inquiries, use the dedicated booking form for faster processing.",
      button: "Booking Form",
    },
    successMessage: "Message Sent",
    successText: "Thank you for your message. I'll get back to you as soon as possible — usually within 24–48 hours.",
  },

  // ========== COLORS & DESIGN ==========
  colors: {
    background: "#080808",
    foreground: "#EFEFEF",
    accent: "#B8A99A",
    border: "#2A2A2A",
    muted: "#777",
    darkMuted: "#555",
  },

  // ========== FONTS ==========
  fonts: {
    display: "'Bebas Neue', sans-serif",
    editorial: "'Cormorant Garamond', serif",
    body: "'Space Grotesk', sans-serif",
  },

  // ========== FOOTER ==========
  footer: {
    title: "HOLOLA'I",
    description: "Cinematic photography from Kauaʻi, Hawaiʻi. Specializing in portraits, couples, weddings, and landscapes.",
    quickLinksLabel: "Quick Links",
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "Gallery", href: "#gallery" },
      { label: "About", href: "#about" },
      { label: "Booking", href: "#booking" },
      { label: "Contact", href: "#contact" },
    ],
    contactLabel: "Contact",
    copyright: "© 2026 Holola'i Photography. All rights reserved.",
  },
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
