"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // App Router
// ── If you're on the *Pages* router instead, import Router from "next/router"

const Loader = () => {
  const pathname = usePathname(); // remove if using Pages router
  const [loading, setLoading] = useState(false);

  // ─────────  App Router version  ─────────
  useEffect(() => {
    // fire on first mount
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // tiny entry splash
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // fire on every route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* neon rotating ring */}
      <div className="relative">
        <div
          className="h-32 w-32 rounded-full border-[6px] border-transparent animate-spin
                        bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500
                        [background-clip:border-box]"
        ></div>

        {/* center pulse */}
        <div className="absolute inset-3 rounded-full bg-black flex items-center justify-center">
          <span
            className="relative text-xl font-bold tracking-wider text-transparent
                           bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400
                           animate-pulse"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
