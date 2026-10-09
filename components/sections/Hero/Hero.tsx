"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  containerVariants,
  itemVariants,
  statsVariants,
} from "./Hero.animations";
import { HERO_CONTENT, HERO_METRICS } from "./Hero.constants";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-stone-950 text-white">
      {/* Background Architectural Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=2000"
          alt="Architectural luxury residence exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.78]"
        />
        {/* Subtle, natural gradient overlays for perfect text legibility without artificial neon glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/70" />
        <div className="absolute inset-0 bg-stone-950/20" />
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 sm:pt-40 lg:pt-44 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start space-y-6 lg:space-y-8"
          >
            {/* Editorial Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-stone-900/60 backdrop-blur-md text-stone-200 text-[0.7rem] font-semibold uppercase tracking-[0.22em]">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                {HERO_CONTENT.badge}
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06]">
                <span className="block text-stone-100">{HERO_CONTENT.title.lead}</span>
                <span className="block font-light italic text-stone-200">
                  {HERO_CONTENT.title.main}
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-stone-300/90 max-w-2xl leading-relaxed font-normal pt-2">
                {HERO_CONTENT.description}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a href={HERO_CONTENT.cta.primaryHref}>
                <Button className="rounded-full px-8 h-12 text-xs sm:text-sm font-bold tracking-wider uppercase bg-white text-stone-950 hover:bg-stone-100 transition-all duration-200 group">
                  {HERO_CONTENT.cta.primary}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </a>

              <a href={HERO_CONTENT.cta.secondaryHref}>
                <Button
                  variant="outline"
                  className="rounded-full px-7 h-12 text-xs sm:text-sm font-semibold tracking-wider uppercase border border-white/25 bg-black/30 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 transition-colors"
                >
                  {HERO_CONTENT.cta.secondary}
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Proof Metrics Strip */}
      <div className="relative z-10 border-t border-white/10 bg-stone-950/80 backdrop-blur-md">
        <div className="container mx-auto px-6 lg:px-12 py-6 lg:py-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12"
          >
            {HERO_METRICS.map((metric, i) => (
              <motion.div
                key={i}
                variants={statsVariants}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <metric.icon className="w-5 h-5 text-stone-200" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-stone-200 uppercase tracking-wider mt-0.5">
                    {metric.label}
                  </div>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {metric.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;