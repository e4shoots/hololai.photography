/* ==========================================================================
   HOLOLA'I — Contact Page
   Simple form, Instagram priority, email contact
   Minimal, direct, no clutter
   ========================================================================== */

import { useState } from "react";
import { ArrowRight, Instagram, Mail, MapPin, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      <Navigation />

      {/* Page header */}
      <div className="pt-32 pb-0 container">
        <div className="reveal">
          <p className="label-text mb-4">[ Get in Touch ]</p>
          <h1
            className="font-display text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              letterSpacing: "0.04em",
              lineHeight: 0.9,
            }}
          >
            Say Hello
          </h1>
        </div>
      </div>

      {/* ── CONTACT SECTION ── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* Form */}
            <div className="reveal">
              {submitted ? (
                <div className="flex flex-col items-start gap-6 py-12">
                  <CheckCircle size={40} strokeWidth={1} style={{ color: "#B8A99A" }} />
                  <h2
                    className="font-display text-white"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "2.5rem",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Message Sent
                  </h2>
                  <p className="font-body text-[#777] leading-relaxed" style={{ fontSize: "0.9rem" }}>
                    Thank you for reaching out. I'll get back to you as soon as possible — usually within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
                  <div>
                    <label className="form-label" htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <p className="font-body text-[#B8A99A] text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label" htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="font-body text-[#B8A99A] text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label" htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-input"
                      placeholder="What's on your mind?"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      style={{ resize: "none" }}
                    />
                    {errors.message && (
                      <p className="font-body text-[#B8A99A] text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary self-start">
                    Send Message <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="reveal flex flex-col gap-10" style={{ transitionDelay: "150ms" }}>
              <div>
                <p className="label-text mb-6">[ Connect ]</p>
                <div className="flex flex-col gap-6">
                  {/* Instagram — priority */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: "40px",
                        height: "40px",
                        border: "1px solid #2A2A2A",
                        transition: "border-color 0.3s ease",
                      }}
                    >
                      <Instagram
                        size={16}
                        strokeWidth={1.5}
                        className="text-[#777] group-hover:text-[#B8A99A] transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <p className="label-text mb-1">Instagram</p>
                      <p
                        className="font-editorial text-white group-hover:text-[#B8A99A] transition-colors duration-300"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontStyle: "italic",
                          fontSize: "1.1rem",
                          fontWeight: 300,
                        }}
                      >
                        @hololai
                      </p>
                      <p className="font-body text-[#555] text-xs mt-1">
                        Follow for daily work and behind-the-scenes
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:hello@hololai.com"
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: "40px",
                        height: "40px",
                        border: "1px solid #2A2A2A",
                        transition: "border-color 0.3s ease",
                      }}
                    >
                      <Mail
                        size={16}
                        strokeWidth={1.5}
                        className="text-[#777] group-hover:text-[#B8A99A] transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <p className="label-text mb-1">Email</p>
                      <p
                        className="font-editorial text-white group-hover:text-[#B8A99A] transition-colors duration-300"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontStyle: "italic",
                          fontSize: "1.1rem",
                          fontWeight: 300,
                        }}
                      >
                        hello@hololai.com
                      </p>
                      <p className="font-body text-[#555] text-xs mt-1">
                        Response within 48 hours
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: "40px",
                        height: "40px",
                        border: "1px solid #2A2A2A",
                      }}
                    >
                      <MapPin size={16} strokeWidth={1.5} className="text-[#777]" />
                    </div>
                    <div>
                      <p className="label-text mb-1">Location</p>
                      <p
                        className="font-editorial text-white"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontStyle: "italic",
                          fontSize: "1.1rem",
                          fontWeight: 300,
                        }}
                      >
                        Kauaʻi, Hawaiʻi
                      </p>
                      <p className="font-body text-[#555] text-xs mt-1">
                        Available for destination sessions worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick booking CTA */}
              <div
                style={{
                  padding: "1.5rem",
                  border: "1px solid #2A2A2A",
                  background: "#0D0D0D",
                }}
              >
                <p className="label-text mb-3">[ Ready to Book? ]</p>
                <p className="font-body text-[#777] text-sm mb-4 leading-relaxed">
                  For session inquiries, use the dedicated booking form for faster processing.
                </p>
                <a href="/booking" className="btn-outline inline-flex items-center gap-2">
                  Booking Form <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
