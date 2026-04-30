"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp, Building2 } from "lucide-react";
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
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full relative bg-slate-950 text-white pt-20 lg:pt-28 pb-10 overflow-hidden isolate">
      {/* Fix sub-pixel gap at the bottom */}
      <div className="absolute inset-x-0 -bottom-1 h-2 bg-slate-950 -z-10" />

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-[300px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[350px] h-[350px] bg-sky-400/10 blur-[140px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Main Grid - Improved Tablet Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          {/* Brand - Spans 2 columns on mobile/tablet for better balance */}
          <motion.div
            variants={footerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col space-y-6 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Building2 className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {FOOTER_CONTENT.brand.name}
              </span>
            </div>
            <motion.p
              variants={footerItemVariants}
              className="text-slate-400 text-xs lg:text-sm font-medium leading-relaxed max-w-sm lg:max-w-none"
            >
              {FOOTER_CONTENT.brand.description}
            </motion.p>
          </motion.div>

          {/* Company Links */}
          <motion.div
            variants={footerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <h4 className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-500">Perusahaan</h4>
            <ul className="space-y-4">
              {FOOTER_CONTENT.links.perusahaan.map((link) => (
                <motion.li key={link.name} variants={footerItemVariants}>
                  <a href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            variants={footerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <h4 className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-500">Layanan</h4>
            <ul className="space-y-4">
              {FOOTER_CONTENT.links.layanan.map((link) => (
                <motion.li key={link.name} variants={footerItemVariants}>
                  <a href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            variants={footerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <h4 className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-500">Dukungan</h4>
            <ul className="space-y-4">
              {FOOTER_CONTENT.links.dukungan.map((link) => (
                <motion.li key={link.name} variants={footerItemVariants}>
                  <a href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={footerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <h4 className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-500">{FOOTER_CONTENT.contact.title}</h4>
            <ul className="space-y-5">
              {FOOTER_CONTENT.contact.details.map((detail) => (
                <motion.li key={detail.label} variants={footerItemVariants} className="flex flex-col space-y-1">
                  <span className="text-[0.6rem] font-bold text-slate-600 uppercase tracking-tighter">{detail.label}</span>
                  <a href={detail.href} className="text-slate-300 hover:text-primary transition-colors text-sm font-medium">
                    {detail.value}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom */}
        <motion.div
          variants={footerBottomVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-slate-500 text-sm font-medium">
            {FOOTER_CONTENT.brand.copyright}
          </p>
        </motion.div>
      </div>

      {/* Scroll To Top */}
      <motion.button
        variants={scrollButtonVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-2xl shadow-primary/30"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;