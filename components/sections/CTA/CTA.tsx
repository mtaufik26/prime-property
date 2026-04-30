"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { CTA_CONTENT } from "./CTA.constants";

import {
  ctaContainerVariantsOptimized,
  fadeUpVariantsOptimized,
  buttonVariantsOptimized,
} from "./CTA.animations";

// ✅ Optimasi 1: Memoize komponen
const CTA = memo(() => {
  const shouldReduceMotion = useReducedMotion();

  // ✅ Optimasi 2: GPU promotion hanya untuk elemen yang benar-benar animasi transform
  const gpuTransform = { willChange: 'transform', transform: 'translateZ(0)' };
  const gpuOpacity = { willChange: 'opacity' };

  return (
    <section
      id="kontak"
      className="py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* ✅ Optimasi 3: Hanya 1 motion wrapper utama untuk seluruh section */}
        <motion.div
          variants={ctaContainerVariantsOptimized}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden px-6 py-16 lg:py-24 text-center shadow-2xl shadow-slate-200"
          style={gpuOpacity}
          layout={false}
        >
          
          {/* Background - ✅ Optimasi 4: Blur statis, hanya opacity yang animasi */}
          <div className="absolute inset-0 z-0 bg-slate-900">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
              alt="Luxury Interior"
              fill
              sizes="100vw"
              priority
              fetchPriority="high" // ✅ Optimasi 5: Prioritaskan loading gambar
              className="object-cover opacity-60"
            />
            {/* Overlay statis - tidak dianimasikan */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-slate-950/40" />
            <div className="absolute inset-0 bg-slate-950/40" />
          </div>

          {/* ✅ Optimasi 6: Glow dengan blur statis + animasi opacity via CSS keyframes */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full z-0 animate-glow-fade-in"
            style={gpuOpacity}
          />

          {/* Content - ✅ Optimasi 7: Group elemen jadi lebih sedikit motion wrapper */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-6 lg:space-y-10">
            
            {/* Badge + Title + Description dalam 1 motion wrapper */}
            <motion.div
              variants={fadeUpVariantsOptimized}
              className="flex flex-col items-center space-y-4 lg:space-y-6"
              style={gpuTransform}
              layout={false}
            >
              {/* Badge - ✅ Optimasi 8: Hapus motion.div nested, animasi via parent */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[0.7rem] lg:text-xs font-bold uppercase tracking-[0.2em]">
                <PhoneCall className="w-3.5 h-3.5 text-primary" />
                {CTA_CONTENT.badge}
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-3xl">
                Siap Memulai <br />
                <span className="text-primary italic">
                  {CTA_CONTENT.headlineItalic}
                </span>
              </h2>

              <p className="text-sm lg:text-base text-white/70 max-w-xl font-medium leading-relaxed">
                {CTA_CONTENT.description}
              </p>
            </motion.div>

            {/* Buttons - ✅ Optimasi 9: Animasi button dengan delay minimal */}
            <motion.div
              variants={buttonVariantsOptimized}
              className="flex flex-wrap justify-center gap-4 lg:gap-5 pt-4 w-full"
              style={gpuTransform}
              layout={false}
            >
              <a href="#properti">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-7 text-xs lg:text-sm font-bold bg-primary hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-primary/20"
                >
                  {CTA_CONTENT.primaryAction}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

CTA.displayName = "CTA";

export default CTA;