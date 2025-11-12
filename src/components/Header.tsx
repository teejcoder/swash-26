"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../../public/swash-bg-removed.png"
 
const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "What We Do", href: "#features" },
  { name: "Shows", href: "#showcase" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-sm border-b-4 border-dirty-orange"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Gritty stencil style */}
          <motion.a
            href="#hero"
            className="text-2xl sm:text-3xl font-black tracking-tight uppercase transform hover:-rotate-1 transition-transform"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            style={{ textShadow: '2px 2px 0px rgba(0, 0, 0, 0.8)' }}
          >
            <span className="text-dirty-orange">SWASH</span>
            <span> | </span>
            <span>AGENCY</span>
          </motion.a>

          {/* Desktop Navigation - Stencil/spray paint style */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-dirty-orange transition-colors border-b-2 border-transparent hover:border-dirty-orange"
                style={{ textShadow: '1px 1px 0px rgba(0, 0, 0, 0.8)' }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 bg-dirty-orange text-black font-black uppercase text-sm tracking-wide transform hover:scale-105 hover:rotate-1 transition-all duration-200 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-dirty-orange hover:text-lime-green transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Gritty overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-sm border-t-4 border-dirty-orange"
        >
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-black uppercase text-foreground/90 hover:text-dirty-orange transition-colors transform hover:translate-x-2 duration-200"
                style={{ textShadow: '2px 2px 0px rgba(0, 0, 0, 0.8)' }}
              >
                → {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block text-center px-6 py-3 bg-dirty-orange text-black font-black uppercase tracking-wide border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Book Now
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}