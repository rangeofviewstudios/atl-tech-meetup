"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, MEETUP_URL } from "@/lib/constants";
import GlowButton from "@/components/ui/GlowButton";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-700 ${
          scrolled
            ? "h-16 bg-[rgba(8,8,16,0.8)] backdrop-blur-2xl border-b border-[var(--border)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "h-[var(--nav-height)] bg-transparent"
        }`}
      >
        {/* Inner glass pill on scroll */}
        <div
          className={`w-full max-w-[var(--max-width)] mx-auto flex items-center justify-between transition-all duration-700 ${
            scrolled
              ? "mx-4 md:mx-auto"
              : ""
          }`}
          style={{ paddingLeft: "48px", paddingRight: "48px" }}
        >
          {/* Wordmark */}
          <a
            href="#"
            className="font-[var(--font-display)] text-xl font-bold tracking-tight text-white hover:text-accent transition-colors duration-300"
          >
            ATM<span className="text-accent">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-5 py-[10px] text-sm font-medium text-white/50 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/[0.06] group"
              >
                {link.label}
              </a>
            ))}

            {/* Separator */}
            <div className="w-px h-5 bg-white/10 mx-3" />

            {/* CTA */}
            <GlowButton
              href={MEETUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full text-sm font-semibold whitespace-nowrap"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#F4F1EC",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                padding: "10px 22px",
                minWidth: "fit-content",
              }}
            >
              Join Us
            </GlowButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                onClick={() => setMenuOpen(false)}
                className="font-[var(--font-display)] text-3xl font-medium text-white/80 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={MEETUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.4,
                delay: NAV_LINKS.length * 0.08,
              }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold mt-4 hover:shadow-[0_0_40px_rgba(249,133,19,0.15)] transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#F4F1EC",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              Join Us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
