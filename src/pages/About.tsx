/* ==========================================================================
   HOLOLA'I — About Page
   Split layout: large portrait left, story text right
   Minimal, personal, cinematic
   ========================================================================== */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/about-photographer-mbdwHuin2k95cdLr3g5UXR.webp";
const LANDSCAPE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499725694/kT6nWs9mAryASPRdGR9BpZ/gallery-landscape-irt9oobtGZ9CnBsqU9rPwf.webp";

export default function About() {
  useScrollReveal();

  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      <Navigation />

      {/* Page header */}
      <div className="pt-32 pb-0 container">
        <div className="reveal">
          <p className="label-text mb-4">[ The Photographer ]</p>
          <h1
            className="font-display text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              letterSpacing: "0.04em",
              lineHeight: 0.9,
            }}
          >
            About
          </h1>
        </div>
      </div>

      {/* ── SPLIT LAYOUT ── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-start">
            {/* Portrait image */}
            <div className="img-zoom reveal mb-8 md:mb-0" style={{ aspectRatio: "3/4" }}>
              <img
                src={ABOUT_IMG}
                alt="Holola'i photographer with medium format camera in Kauaʻi"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Story text */}
            <div className="reveal" style={{ paddingTop: "2rem" }}>
              <h2
                className="font-editorial text-white mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.2,
                }}
              >
                "I don't take photographs.<br />I find them."
              </h2>

              <div className="rule-line mb-8" />

              <div className="flex flex-col gap-5">
                <p className="font-body text-[#999] leading-relaxed" style={{ fontSize: "0.9rem" }}>
                  Born and raised on the island of Kauaʻi, I grew up surrounded by some of the most dramatic landscapes on earth. The Nā Pali cliffs, the red dirt roads of Waimea Canyon, the way golden hour light turns everything to fire — this place shaped how I see the world.
                </p>
                <p className="font-body text-[#999] leading-relaxed" style={{ fontSize: "0.9rem" }}>
                  I started shooting on film in my early twenties, drawn to the patience it demanded and the honesty it produced. No instant review, no endless retakes — just the moment, the light, and the decision to press the shutter. That discipline still defines how I work today.
                </p>
                <p className="font-body text-[#999] leading-relaxed" style={{ fontSize: "0.9rem" }}>
                  Holola'i — meaning "to spread out, to unfold" in Hawaiian — is my approach to photography. I believe every person, every couple, every landscape has a story that wants to unfold. My job is to be present enough to catch it.
                </p>
                <p className="font-body text-[#999] leading-relaxed" style={{ fontSize: "0.9rem" }}>
                  I work with individuals, couples, families, and brands who value authentic imagery over perfection. If you want something real, unfiltered, and timeless — let's make something together.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/booking">
                  <span className="btn-primary">
                    Book a Session <ArrowRight size={14} />
                  </span>
                </Link>
                <Link href="/gallery">
                  <span className="btn-outline">View Work</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section
        className="py-20 md:py-28"
        style={{ borderTop: "1px solid #2A2A2A" }}
      >
        <div className="container">
          <div className="mb-12 reveal">
            <p className="label-text mb-3">[ Philosophy ]</p>
            <h2
              className="font-display text-white"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "0.05em",
              }}
            >
              How I Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
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
            ].map((item, i) => (
              <div
                key={item.num}
                className={`reveal ${i === 0 ? 'services-item-left' : i === 2 ? 'services-item-right' : ''}`}
                style={{
                  padding: "2.5rem 0",
                  borderBottom: "1px solid #2A2A2A",
                  borderRight: i < 2 ? "1px solid #2A2A2A" : "none",
                  paddingRight: i < 2 ? "3rem" : "0",
                  paddingLeft: i > 0 ? "3rem" : "0",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <span
                  className="font-display block mb-4"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "3rem",
                    color: "#2A2A2A",
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </span>
                <h3
                  className="font-display text-white mb-3"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.4rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  {item.title}
                </h3>
                <p className="font-body text-[#777] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL BLEED IMAGE ── */}
      <section className="img-zoom relative" style={{ height: "50vh", minHeight: "300px" }}>
        <img
          src={LANDSCAPE_IMG}
          alt="Nā Pali Coast, Kauaʻi"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0 flex items-end"
          style={{ background: "linear-gradient(to top, rgba(8,8,8,0.8) 0%, transparent 60%)" }}
        >
          <div className="container pb-8">
            <p className="label-text">[ Nā Pali Coast, Kauaʻi ]</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
