/* ==========================================================================
   HOLOLA'I — Navigation Component
   Fixed top bar, transparent → solid on scroll
   Logo: brand name in Bebas Neue, nav links in Space Grotesk uppercase
   ========================================================================== */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Instagram } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/booking", label: "Book" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(8,8,8,0.96)"
            : "linear-gradient(to bottom, rgba(8,8,8,0.7) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(42,42,42,0.8)" : "none",
        }}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <span
              className="font-display text-2xl md:text-3xl tracking-widest text-white hover:text-[#B8A99A] transition-colors duration-300"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.12em" }}
            >
              Holola'i
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`nav-link ${location === link.href ? "active" : ""}`}>
                  {link.label}
                </span>
              </Link>
            ))}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link flex items-center gap-1"
              aria-label="Instagram"
            >
              <Instagram size={14} strokeWidth={1.5} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-500"
        style={{
          background: "rgba(8,8,8,0.98)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link, i) => (
            <Link key={link.href} href={link.href}>
              <span
                className="font-display text-4xl tracking-widest text-white hover:text-[#B8A99A] transition-colors duration-300"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease, color 0.3s ease",
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 label-text hover:text-white transition-colors"
          >
            <Instagram size={16} strokeWidth={1.5} />
            @hololai
          </a>
        </div>
      </div>
    </>
  );
}
