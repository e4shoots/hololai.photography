/* ==========================================================================
   HOLOLA'I — PageTransition Component
   Fade-in on mount for smooth page transitions
   ========================================================================== */

import { useEffect, useState, ReactNode } from "react";
import { useLocation } from "wouter";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => {
      setVisible(true);
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 50);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      {children}
    </div>
  );
}
