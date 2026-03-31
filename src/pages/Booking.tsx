/* ==========================================================================
   HOLOLA'I — Booking Page
   Clean, minimal booking form — no iframe look
   Fields: Name, Email, Date, Session Type, Message
   ========================================================================== */

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const sessionTypes = [
  "Portrait Session",
  "Couples Session",
  "Wedding / Elopement",
  "Family Session",
  "Brand / Commercial",
  "Event Coverage",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  date: string;
  sessionType: string;
  message: string;
}

export default function Booking() {
  useScrollReveal();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    date: "",
    sessionType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.sessionType) newErrors.sessionType = "Please select a session type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Simulate form submission
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      <Navigation />

      {/* Page header */}
      <div className="pt-32 pb-0 container">
        <div className="reveal">
          <p className="label-text mb-4">[ Book a Session ]</p>
          <h1
            className="font-display text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              letterSpacing: "0.04em",
              lineHeight: 0.9,
            }}
          >
            Let's Work<br />
            <span style={{ color: "#B8A99A" }}>Together</span>
          </h1>
          <p
            className="font-editorial text-[#777] mt-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.1rem",
              fontWeight: 300,
              maxWidth: "420px",
            }}
          >
            Fill out the form below and I'll be in touch within 48 hours to discuss your vision and availability.
          </p>
        </div>
      </div>

      {/* ── FORM SECTION ── */}
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
                    Message Received
                  </h2>
                  <p className="font-body text-[#777] leading-relaxed" style={{ fontSize: "0.9rem" }}>
                    Thank you for reaching out. I'll review your inquiry and get back to you within 48 hours. Looking forward to creating something together.
                  </p>
                  <p className="label-text">[ hello@hololai.com ]</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
                  {/* Name */}
                  <div>
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="font-body text-[#B8A99A] text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="font-body text-[#B8A99A] text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Date */}
                  <div>
                    <label className="form-label" htmlFor="date">Preferred Date</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="form-input"
                      value={form.date}
                      onChange={handleChange}
                      style={{ colorScheme: "dark" }}
                    />
                  </div>

                  {/* Session Type */}
                  <div>
                    <label className="form-label" htmlFor="sessionType">Session Type</label>
                    <select
                      id="sessionType"
                      name="sessionType"
                      className="form-input"
                      value={form.sessionType}
                      onChange={handleChange}
                      style={{ background: "transparent", colorScheme: "dark" }}
                    >
                      <option value="" disabled style={{ background: "#111" }}>Select a session type</option>
                      {sessionTypes.map((type) => (
                        <option key={type} value={type} style={{ background: "#111" }}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.sessionType && (
                      <p className="font-body text-[#B8A99A] text-xs mt-1">{errors.sessionType}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="form-label" htmlFor="message">Tell Me About Your Vision</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-input"
                      placeholder="Describe your ideal session, location preferences, any special details..."
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      style={{ resize: "none" }}
                    />
                  </div>

                  <button type="submit" className="btn-primary self-start">
                    Send Inquiry <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="reveal flex flex-col gap-10" style={{ transitionDelay: "150ms" }}>
              <div>
                <p className="label-text mb-4">[ Session Info ]</p>
                <div className="rule-line mb-6" />
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Response Time", value: "Within 48 hours" },
                    { label: "Location", value: "Kauaʻi, Hawaiʻi + Destination" },
                    { label: "Delivery", value: "2–3 weeks after session" },
                    { label: "Format", value: "High-res digital files" },
                    { label: "Editing", value: "Cinematic color grade included" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start py-3" style={{ borderBottom: "1px solid #1A1A1A" }}>
                      <span className="label-text">{item.label}</span>
                      <span className="font-body text-[#999] text-sm text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="label-text mb-4">[ Session Types ]</p>
                <div className="rule-line mb-6" />
                <div className="flex flex-col gap-3">
                  {sessionTypes.slice(0, 5).map((type) => (
                    <p key={type} className="font-body text-[#777] text-sm">
                      — {type}
                    </p>
                  ))}
                </div>
              </div>

              <div
                style={{
                  padding: "1.5rem",
                  border: "1px solid #2A2A2A",
                  background: "#0D0D0D",
                }}
              >
                <p className="label-text mb-3">[ Prefer Email? ]</p>
                <a
                  href="mailto:hello@hololai.com"
                  className="font-editorial text-white hover:text-[#B8A99A] transition-colors duration-300"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "1.1rem",
                    fontWeight: 300,
                  }}
                >
                  hello@hololai.com
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
