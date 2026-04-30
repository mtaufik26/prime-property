"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  containerVariants,
  itemVariants,
  statsVariants,
} from "./Hero.animations";

import { HERO_CONTENT, HERO_FEATURES } from "./Hero.constants";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1589282741585-30ab896335cd?auto=format&fit=crop&q=80&w=1600"
          alt="Luxury Architectural Background"
          fill
          priority
          unoptimized
          className="object-cover object-[75%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/20" />
      </div>

      {/* Glow */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[320px] h-[320px] lg:w-[500px] lg:h-[500px] bg-primary/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-16 md:pt-20 lg:pt-24 pb-20 lg:pb-32">
        <div className="max-w-5xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start space-y-7 lg:space-y-9"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm text-white text-[0.7rem] font-bold uppercase tracking-[0.2em]">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                {HERO_CONTENT.badge}
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
                {HERO_CONTENT.title.main}
                <br />
                <span className="text-primary italic">
                  {HERO_CONTENT.title.highlight}
                </span>
              </h1>

              <p className="text-sm md:text-base lg:text-lg text-white/75 max-w-xl leading-relaxed font-medium">
                {HERO_CONTENT.description}
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button className="rounded-full px-8 py-6 font-bold bg-primary text-white">
                {HERO_CONTENT.cta.primary}
              </Button>

              <Button
                variant="outline"
                className="rounded-full px-8 py-6 font-bold border-white/15 bg-white/10 text-white"
              >
                {HERO_CONTENT.cta.secondary}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl"
        >
          {HERO_FEATURES.map((item, i) => (
            <motion.div
              key={i}
              variants={statsVariants}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:-translate-y-1 transition"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <h3 className="text-white font-bold text-sm">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-xs mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden text-white/40 animate-bounce">
        <ArrowRight className="w-5 h-5 rotate-90" />
      </div>
    </section>
  );
};

export default Hero;