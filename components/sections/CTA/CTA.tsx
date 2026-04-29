"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { CTA_CONTENT } from "./CTA.constants";
import { ctaContainerVariants } from "./CTA.animations";

const CTA = () => {
  return (
    <section id="kontak" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={ctaContainerVariants}
        initial={false}
        animate="visible"
          className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden px-6 py-16 lg:py-24 text-center group shadow-2xl shadow-slate-200"
        >
          {/* Optimized Background Image with Smooth Overlay */}
<div className="absolute inset-0 z-0 bg-slate-900">
            <Image 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
              alt="Luxury Interior" 
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-slate-950/40" />
            <div className="absolute inset-0 bg-slate-950/40" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-6 lg:space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[0.7rem] lg:text-xs font-bold uppercase tracking-[0.2em]">
              <PhoneCall className="w-3.5 h-3.5 text-primary" /> {CTA_CONTENT.badge}
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] tracking-tight max-w-3xl">
              Siap Memulai <br />
              <span className="text-primary italic">{CTA_CONTENT.headlineItalic}</span>
            </h2>
            
            <p className="text-base lg:text-lg text-white/60 max-w-xl font-medium leading-relaxed">
              {CTA_CONTENT.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 lg:gap-5 pt-4 w-full">
              <Button size="lg" className="rounded-full px-8 py-7 text-sm lg:text-base font-bold bg-primary hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                {CTA_CONTENT.primaryAction} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-sm lg:text-base font-bold border-white/20 bg-white/5 text-white hover:bg-white/10 active:scale-95 transition-all">
                <FaWhatsapp className="mr-2 w-5 h-5 text-green-400" /> {CTA_CONTENT.secondaryAction}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
