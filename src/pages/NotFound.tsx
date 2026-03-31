import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function NotFound() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      <Navigation />
      <div className="container flex flex-col justify-center" style={{ minHeight: "100vh" }}>
        <div>
          <p className="label-text mb-6">[ 404 ]</p>
          <h1
            className="font-display text-white mb-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(4rem, 15vw, 12rem)",
              letterSpacing: "0.04em",
              lineHeight: 0.85,
              color: "#1A1A1A",
            }}
          >
            Lost
          </h1>
          <p
            className="font-editorial text-[#777] mb-10"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.2rem",
              fontWeight: 300,
            }}
          >
            This page doesn't exist — but great photographs do.
          </p>
          <Link href="/">
            <span className="btn-primary">
              Back to Home <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
