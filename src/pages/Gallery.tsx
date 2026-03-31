/* ==========================================================================
   HOLOLA'I — Gallery Page
   Masonry/grid layout with fullscreen lightbox viewer
   Categories: All, Portraits, Couples, Landscape, Events
   ========================================================================== */

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GALLERY_PORTRAIT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/gallery-portrait-F3mM6W4cY6XskRp8zvyy6r.webp";
const GALLERY_COUPLE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/gallery-couple-egvJ5h6hyizGXVEwpokLJ5.webp";
const GALLERY_LANDSCAPE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/gallery-landscape-irt9oobtGZ9CnBsqU9rPwf.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/hero-main-hj9rHRFJEgWwiVkzP2xyS5.webp";

// Gallery items — using generated images + Unsplash for variety
const galleryItems = [
  {
    id: 1,
    src: GALLERY_COUPLE,
    alt: "Couple at sunset on Kauaʻi beach",
    category: "Couples",
    span: "col-span-2",
    aspect: "16/9",
  },
  {
    id: 2,
    src: GALLERY_PORTRAIT,
    alt: "Portrait in Kauaʻi jungle",
    category: "Portraits",
    span: "col-span-1",
    aspect: "3/4",
  },
  {
    id: 3,
    src: GALLERY_LANDSCAPE,
    alt: "Nā Pali Coast aerial view",
    category: "Landscape",
    span: "col-span-1",
    aspect: "4/3",
  },
  {
    id: 4,
    src: HERO_IMG,
    alt: "Kauaʻi coastline at golden hour",
    category: "Landscape",
    span: "col-span-1",
    aspect: "4/3",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Wedding ceremony on the beach",
    category: "Events",
    span: "col-span-1",
    aspect: "3/4",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80",
    alt: "Couple portrait in nature",
    category: "Couples",
    span: "col-span-1",
    aspect: "3/4",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    alt: "Mountain landscape at sunrise",
    category: "Landscape",
    span: "col-span-2",
    aspect: "16/9",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    alt: "Editorial portrait outdoors",
    category: "Portraits",
    span: "col-span-1",
    aspect: "3/4",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    alt: "Wedding reception celebration",
    category: "Events",
    span: "col-span-1",
    aspect: "4/3",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1200&q=80",
    alt: "Tropical coastline",
    category: "Landscape",
    span: "col-span-1",
    aspect: "4/3",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80",
    alt: "Couple walking on beach",
    category: "Couples",
    span: "col-span-1",
    aspect: "3/4",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    alt: "Portrait with natural light",
    category: "Portraits",
    span: "col-span-1",
    aspect: "3/4",
  },
];

const categories = ["All", "Portraits", "Couples", "Landscape", "Events"];

export default function Gallery() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, prevImage, nextImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      <Navigation />

      {/* Page header */}
      <div className="pt-32 pb-12 container">
        <div className="reveal">
          <p className="label-text mb-4">[ Portfolio ]</p>
          <h1
            className="font-display text-white mb-2"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              letterSpacing: "0.04em",
              lineHeight: 0.9,
            }}
          >
            The Work
          </h1>
          <p
            className="font-editorial text-[#777] mt-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.1rem",
              fontWeight: 300,
            }}
          >
            Real, unfiltered, timeless.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-6 mt-10 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-body transition-colors duration-300"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: activeCategory === cat ? "#EFEFEF" : "#555",
                paddingBottom: "4px",
                background: "none",
                border: "none",
                borderBottom: activeCategory === cat ? "1px solid #B8A99A" : "1px solid transparent",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery grid */}
      <div className="container pb-24">
        <style>{`
          @media (max-width: 640px) {
            .gallery-grid { grid-template-columns: 1fr !important; }
            .gallery-grid > div { grid-column: span 1 !important; aspect-ratio: 4/3 !important; }
          }
          @media (min-width: 641px) and (max-width: 1023px) {
            .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .gallery-grid > div[style*="span 2"] { grid-column: span 2 !important; }
          }
        `}</style>
        <div
          className="grid gap-1 gallery-grid"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className={`img-zoom reveal cursor-pointer`}
              style={{
                aspectRatio: item.aspect,
                transitionDelay: `${(index % 6) * 60}ms`,
                gridColumn: `span ${item.span === "col-span-2" ? 2 : 1}`,
              }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.97)" }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white hover:text-[#B8A99A] transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={24} strokeWidth={1.5} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 text-white hover:text-[#B8A99A] transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full mx-16 md:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="w-full h-auto max-h-[85vh] object-contain"
              style={{ display: "block" }}
            />
            <div className="mt-4 flex items-center justify-between">
              <p className="label-text">{filtered[lightboxIndex].category}</p>
              <p className="font-body text-[#555] text-xs">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 text-white hover:text-[#B8A99A] transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
