/* ==========================================================================
   HOLOLA'I — Home Page
   "Void & Frame" design: dark gallery, cinematic hero, sharp edges
   Sections: Hero, Intro, Gallery Preview, Services, CTA
   ========================================================================== */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/hero-main-hj9rHRFJEgWwiVkzP2xyS5.webp";
const GALLERY_PORTRAIT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/gallery-portrait-F3mM6W4cY6XskRp8zvyy6r.webp";
const GALLERY_COUPLE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/gallery-couple-egvJ5h6hyizGXVEwpokLJ5.webp";
const GALLERY_LANDSCAPE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/gallery-landscape-irt9oobtGZ9CnBsqU9rPwf.webp";

const services = [
  {
    num: "01",
    title: "Portraits",
    desc: "Intimate, editorial portraits that reveal character. Shot on location across Kauaʻi's most dramatic landscapes.",
  },
  {
    num: "02",
    title: "Couples",
    desc: "Authentic moments between two people. Sunset sessions, elopements, and anniversary stories told with honesty.",
  },
  {
    num: "03",
    title: "Events",
    desc: "Weddings, celebrations, and gatherings documented with a cinematic eye. Every detail, every emotion.",
  },
  {
    num: "04",
    title: "Brand",
    desc: "Visual content for brands that demand quality. Product, lifestyle, and campaign imagery with a distinctive voice.",
  },
];

export default function Home() {
  useScrollReveal();
  const [heroLoaded, setHeroLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax on hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "100svh", minHeight: "600px" }}
      >
        {/* Background image with parallax */}
        <div
          ref={heroRef}
          className="absolute inset-0"
          style={{ top: "-10%", height: "120%" }}
        >
          <img
            src={HERO_IMG}
            alt="Kauaʻi coastline at golden hour"
            className="w-full h-full object-cover"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transition: "opacity 1.2s ease",
            }}
            onLoad={() => setHeroLoaded(true)}
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.1) 40%, rgba(8,8,8,0.7) 85%, rgba(8,8,8,1) 100%)",
            }}
          />
        </div>

        {/* Hero content — bottom left */}
        <div className="relative h-full flex flex-col justify-end pb-16 md:pb-20">
          <div className="container">
            <div
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 1s ease 0.4s, transform 1s ease 0.4s",
              }}
            >
              <p className="label-text mb-4">[ Kauaʻi, Hawaiʻi ]</p>
              <h1
                className="font-display text-white leading-none mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(3.5rem, 10vw, 9rem)",
                  letterSpacing: "0.03em",
                  lineHeight: 0.9,
                }}
              >
                Capture<br />
                <span style={{ color: "#B8A99A" }}>Moments</span><br />
                That Matter
              </h1>
              <p
                className="font-editorial text-[#EFEFEF] mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                  fontWeight: 300,
                  maxWidth: "380px",
                }}
              >
                Cinematic, emotional, story-driven photography.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/gallery">
                  <span className="btn-primary">
                    View Gallery <ArrowRight size={14} />
                  </span>
                </Link>
                <Link href="/booking">
                  <span className="btn-outline">Book a Session</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            opacity: heroLoaded ? 1 : 0,
            transition: "opacity 1s ease 1.2s",
          }}
        >
          <ChevronDown
            size={20}
            strokeWidth={1}
            className="text-[#B8A99A] animate-bounce"
          />
        </div>
      </section>

      {/* ── INTRO STATEMENT ── */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl reveal">
            <p className="label-text mb-8">[ The Work ]</p>
            <h2
              className="font-editorial text-white leading-tight mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.2,
              }}
            >
              "Every frame is a decision. Every moment is a story waiting to be told."
            </h2>
            <div className="rule-line mb-8" />
            <p className="font-body text-[#777] leading-relaxed" style={{ maxWidth: "520px", fontSize: "0.95rem" }}>
              Based in Kauaʻi, Holola'i specializes in cinematic photography that captures the raw emotion of real moments — from intimate portraits against volcanic cliffs to golden-hour couples on empty beaches. The island is the backdrop. You are the story.
            </p>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="flex items-end justify-between mb-8 reveal">
            <div>
              <p className="label-text mb-3">[ Portfolio ]</p>
              <h2
                className="font-display text-white"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  letterSpacing: "0.05em",
                }}
              >
                Selected Work
              </h2>
            </div>
            <Link href="/gallery">
              <span className="hidden sm:flex items-center gap-2 label-text hover:text-white transition-colors duration-300">
                All Work <ArrowRight size={12} />
              </span>
            </Link>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {/* Large left image */}
            <div className="col-span-2 md:col-span-2 row-span-1 img-zoom reveal" style={{ aspectRatio: "16/9", transitionDelay: "0ms" }}>
              <img
                src={GALLERY_COUPLE}
                alt="Couple at sunset on Kauaʻi beach"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Right portrait */}
            <div className="col-span-1 img-zoom reveal" style={{ aspectRatio: "3/4" }}>
              <img
                src={GALLERY_PORTRAIT}
                alt="Portrait in Kauaʻi jungle"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Full-width landscape */}
            <div className="col-span-2 md:col-span-3 img-zoom reveal" style={{ aspectRatio: "21/9" }}>
              <img
                src={GALLERY_LANDSCAPE}
                alt="Nā Pali Coast aerial view"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center reveal">
            <Link href="/gallery">
              <span className="btn-outline">
                View Full Gallery <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        className="py-24 md:py-32"
        style={{ borderTop: "1px solid #2A2A2A" }}
      >
        <div className="container">
          <div className="mb-16 reveal">
            <p className="label-text mb-3">[ Services ]</p>
            <h2
              className="font-display text-white"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "0.05em",
              }}
            >
              What I Shoot
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {services.map((s, i) => (
              <div
                key={s.num}
                className={`reveal ${i % 2 === 0 ? 'services-item-left' : 'services-item-right'}`}
                style={{
                  padding: "2rem 0",
                  borderBottom: "1px solid #2A2A2A",
                  borderRight: i % 2 === 0 ? "1px solid #2A2A2A" : "none",
                  paddingRight: i % 2 === 0 ? "3rem" : "0",
                  paddingLeft: i % 2 === 1 ? "3rem" : "0",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <span
                  className="font-display block mb-4"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "3.5rem",
                    color: "#2A2A2A",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </span>
                <h3
                  className="font-display text-white mb-3"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.5rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  {s.title}
                </h3>
                <p className="font-body text-[#777] text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ borderTop: "1px solid #2A2A2A" }}
      >
        <div className="container">
          <div className="max-w-2xl reveal">
            <p className="label-text mb-6">[ Ready? ]</p>
            <h2
              className="font-display text-white mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                letterSpacing: "0.03em",
                lineHeight: 0.9,
              }}
            >
              Let's Create<br />
              <span style={{ color: "#B8A99A" }}>Something</span><br />
              Timeless
            </h2>
            <p className="font-body text-[#777] mb-10 leading-relaxed" style={{ maxWidth: "400px", fontSize: "0.9rem" }}>
              Sessions are available across Kauaʻi and for destination clients worldwide. Limited availability — book early.
            </p>
            <Link href="/booking">
              <span className="btn-primary">
                Book Your Session <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>

        {/* Decorative large number */}
        <div
          className="absolute right-0 bottom-0 font-display select-none pointer-events-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(8rem, 20vw, 18rem)",
            color: "#111",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          KAU
        </div>
      </section>

      <Footer />
    </div>
  );
}
