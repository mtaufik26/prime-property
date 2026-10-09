"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp, Building2, ShieldCheck } from "lucide-react";
import { FOOTER_CONTENT } from "./Footer.constants";
import {
  footerContainerVariants,
  footerItemVariants,
  footerBottomVariants,
  scrollButtonVariants,
} from "./Footer.animations";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full relative bg-stone-950 text-white pt-20 pb-12 overflow-hidden border-t border-stone-800">
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-16">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center">
                <Building2 className="text-white w-4 h-4" />
              </div>
              <span className="text-base tracking-[0.18em] font-extrabold text-white">
                {FOOTER_CONTENT.brand.name}
              </span>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm font-normal leading-relaxed max-w-sm">
              {FOOTER_CONTENT.brand.description}
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-stone-500 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
              <span>Registered Private Real Estate Advisory</span>
            </div>
          </div>

          {/* Portfolio Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-stone-400">
              Residences
            </h4>
            <ul className="space-y-3">
              {FOOTER_CONTENT.links.portfolio.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors text-xs font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Advisory Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-stone-400">
              Advisory
            </h4>
            <ul className="space-y-3">
              {FOOTER_CONTENT.links.advisory.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors text-xs font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-stone-400">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_CONTENT.links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors text-xs font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Chambers / Offices (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-stone-400">
              {FOOTER_CONTENT.offices.title}
            </h4>
            <ul className="space-y-3">
              {FOOTER_CONTENT.offices.locations.map((loc) => (
                <li key={loc.city} className="flex flex-col">
                  <span className="text-xs font-bold text-stone-200">
                    {loc.city}
                  </span>
                  <span className="text-[0.65rem] text-stone-400">
                    {loc.address}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-400">
          <p>{FOOTER_CONTENT.brand.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-stone-300 transition-colors">
              Privacy Protocols
            </a>
            <a href="#faq" className="hover:text-stone-300 transition-colors">
              Terms of Advisory
            </a>
            <a href="#inquire" className="hover:text-stone-300 transition-colors">
              Confidentiality Charter
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll To Top Button */}
      <motion.button
        variants={scrollButtonVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-stone-800/90 border border-stone-700 text-white flex items-center justify-center shadow-xl backdrop-blur-sm hover:bg-stone-700 transition-colors"
      >
        <ChevronUp className="w-4 h-4" />
      </motion.button>
    </footer>
  );
};

export default Footer;