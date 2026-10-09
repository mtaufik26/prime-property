"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ABOUT_CONTENT } from "./About.constants";
import {
  containerVariants,
  badgeVariants,
  titleVariants,
  textVariants,
  featureVariants,
  buttonVariants,
  imageVariants,
  floatingCardVariants,
} from "./About.animations";

const About = memo(() => {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-white overflow-hidden scroll-mt-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left Column: Narrative & Pillars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col space-y-6 lg:space-y-8"
          >
            {/* Badge */}
            <motion.div variants={badgeVariants}>
              <span className="inline-block px-3.5 py-1 rounded-full bg-stone-100 text-stone-800 text-[0.7rem] font-bold uppercase tracking-[0.2em] border border-stone-200">
                {ABOUT_CONTENT.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={titleVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-[1.12] tracking-tight"
            >
              {ABOUT_CONTENT.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal max-w-xl"
            >
              {ABOUT_CONTENT.description}
            </motion.p>

            {/* 3 Pillars */}
            <div className="space-y-4 pt-2">
              {ABOUT_CONTENT.pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  className="flex items-start gap-4 p-4 rounded-xl border border-stone-100 bg-stone-50/60 hover:bg-stone-50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Inquire Action */}
            <motion.div variants={buttonVariants} className="pt-2">
              <a href="#inquire">
                <Button className="rounded-full px-8 h-12 text-xs font-bold uppercase tracking-wider bg-stone-900 text-white hover:bg-stone-800 transition-colors">
                  Schedule Private Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Composition with Verified Stats */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Architectural Feature Image */}
            <div className="relative h-[420px] sm:h-[540px] lg:h-[600px] w-full rounded-3xl overflow-hidden border border-stone-200 shadow-xl bg-stone-100">
              <Image
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=85&w=1000"
                alt="Prime Property architectural interior design"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white hidden sm:block">
                <span className="text-[0.65rem] uppercase tracking-widest font-bold text-stone-300">
                  Architectural Portfolio
                </span>
                <p className="text-sm font-medium text-stone-100 mt-1">
                  Private Villa Sanctuary, Uluwatu
                </p>
              </div>
            </div>

            {/* Floating Stats Card (Clean, fully legible labels, no buggy initials) */}
            <motion.div
              variants={floatingCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 sm:mt-0 sm:absolute sm:-bottom-8 sm:-left-8 sm:max-w-md p-6 bg-white rounded-2xl border border-stone-200 shadow-xl"
            >
              <div className="grid grid-cols-3 gap-4 sm:gap-6 divide-x divide-stone-100">
                {ABOUT_CONTENT.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`flex flex-col text-center ${
                      i > 0 ? "pl-4 sm:pl-6" : ""
                    }`}
                  >
                    <span className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[0.65rem] font-semibold text-stone-500 uppercase tracking-wider mt-1 leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;