"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Search, MapPin, Building, ShieldCheck, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  containerVariants, 
  itemVariants 
} from "./Hero.animations";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1589282741585-30ab896335cd?auto=format&fit=crop&q=80&w=3000"
          alt="Luxury Architectural Background"
          fill
          className="object-cover object-[75%_center] lg:object-center"
          priority
        />
        {/* Modern Overlay Strategy */}
        <div className="absolute inset-0 bg-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 z-10 pt-28 lg:pt-20">
        <div className="flex flex-col items-start text-left space-y-8 lg:space-y-10 max-w-5xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start space-y-6 lg:space-y-8"
          >
            {/* Minimalist Sub-badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-4 lg:px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[0.7rem] lg:text-[0.8rem] font-bold uppercase tracking-[0.2em]">
                <ShieldCheck className="w-3.5 h-3.5 lg:w-4 h-4 text-primary" />
                Partner Properti Terpercaya
              </div>
            </motion.div>

            {/* Refined Headline - Left Aligned */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight"
            >
              Temukan Ruang yang <br className="hidden md:block" />
              <span className="text-primary italic">Mendefinisikan</span> <br className="hidden md:block" />
              Hidup Anda.
            </motion.h1>

            {/* Tidy Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed font-medium"
            >
              Koleksi properti eksklusif yang menggabungkan kemewahan arsitektur 
              dengan kenyamanan modern di lokasi yang paling dicari.
            </motion.p>

            {/* Clean Actions */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2 lg:pt-4"
            >
              <Button size="lg" className="rounded-full px-8 lg:px-10 py-6 lg:py-7 text-sm lg:text-base font-bold bg-primary hover:scale-105 active:scale-95 transition-all duration-300">
                Eksplorasi Properti
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 lg:px-10 py-6 lg:py-7 text-sm lg:text-base font-bold border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 active:scale-95 transition-all duration-300">
                Konsultasi Ahli
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Supporting Hero Elements */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 lg:mt-24 mb-16 lg:mb-24 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl"
        >
          {[
            { icon: Zap, title: "Proses Cepat", desc: "Transaksi aman dan efisien" },
            { icon: Globe, title: "Lokasi Strategis", desc: "Akses mudah ke pusat kota" },
            { icon: ShieldCheck, title: "Legalitas Terjamin", desc: "Dokumen lengkap dan sah" },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-start text-left gap-3 p-5 lg:p-6 rounded-[2rem] bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">{feature.title}</h3>
                <p className="text-white/60 text-xs mt-1 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Bloom */}
      <div className="absolute top-1/2 left-0 w-full h-full -z-10 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-primary blur-[100px] lg:blur-[150px] rounded-full" />
      </div>

      {/* Mobile-only subtle scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden animate-bounce text-white/40">
        <ArrowRight className="w-5 h-5 rotate-90" />
      </div>
    </section>
  );
};

export default Hero;
