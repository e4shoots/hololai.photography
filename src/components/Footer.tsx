/* ==========================================================================
   HOLOLA'I — Footer Component
   Clean, minimal — logo, nav links, social icons
   ========================================================================== */

import { Link } from "wouter";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid #2A2A2A",
      }}
    >
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <Link href="/">
              <span
                className="font-display text-3xl tracking-widest text-white hover:text-[#B8A99A] transition-colors duration-300 block mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.12em" }}
              >
                Holola'i
              </span>
            </Link>
            <p className="font-body text-sm text-[#777] leading-relaxed" style={{ maxWidth: "220px" }}>
              Cinematic, story-driven photography.<br />Based in Kauaʻi, Hawaiʻi.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-text mb-6">Navigate</p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About" },
                { href: "/booking", label: "Book a Session" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="font-body text-sm text-[#777] hover:text-white transition-colors duration-300 block">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="label-text mb-6">Connect</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-[#777] hover:text-white transition-colors duration-300"
              >
                <Instagram size={14} strokeWidth={1.5} />
                @hololai
              </a>
              <a
                href="mailto:hello@hololai.com"
                className="font-body text-sm text-[#777] hover:text-white transition-colors duration-300"
              >
                hello@hololai.com
              </a>
              <p className="font-body text-sm text-[#777]">Kauaʻi, Hawaiʻi</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="rule-line mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body text-xs text-[#444]">
            © {new Date().getFullYear()} Holola'i Photography. All rights reserved.
          </p>
          <p className="label-text text-[#444]" style={{ fontSize: "0.6rem" }}>
            [ Real. Unfiltered. Timeless. ]
          </p>
        </div>
      </div>
    </footer>
  );
}
