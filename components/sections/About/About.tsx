"use client";

import React, { memo, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, ArrowRight } from "lucide-react";
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
  badgeFloatVariants,
} from "./About.animations";

// ✅ Optimasi 1: Memoize komponen untuk mencegah re-render tidak perlu
const About = memo(() => {
  // ✅ Optimasi 2: Memoize mapped features agar tidak direcreate tiap render
  const featureItems = useMemo(() => 
    ABOUT_CONTENT.features.map((feature, index) => (
      <motion.div
        key={index}
        variants={featureVariants}
        className="flex flex-col gap-3 group"
      >
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <h3 className="text-base font-bold text-slate-900">
          {feature.title}
        </h3>
        <p className="text-[0.75rem] lg:text-sm text-slate-500 leading-relaxed">
          {feature.description}
        </p>
      </motion.div>
    )), 
  []); // ABOUT_CONTENT adalah constant statis, jadi dependencies kosong aman

  // ✅ Optimasi 3: Memoize mapped stats dengan alasan sama
  const statItems = useMemo(() => 
    ABOUT_CONTENT.stats.map((stat, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: i * 0.1,
        }}
        viewport={{ once: true }}
        className="flex flex-col text-center"
      >
        <span className="text-xl lg:text-2xl font-black text-primary">
          {stat.value}
        </span>
        <span className="text-[0.55rem] lg:text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest mt-1">
          {stat.label
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </span>
      </motion.div>
    )),
  []);

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-white overflow-hidden scroll-mt-20"
    >
      {/* Decorative Blobs - static, no interaction */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-primary/5 blur-[80px] lg:blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          
          {/* Left Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={badgeVariants}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[0.7rem] lg:text-xs font-bold uppercase tracking-[0.2em] border border-primary/10">
                {ABOUT_CONTENT.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={titleVariants}
              className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              {ABOUT_CONTENT.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="text-sm md:text-base lg:text-base text-slate-600 leading-relaxed font-medium max-w-2xl"
            >
              {ABOUT_CONTENT.description}
            </motion.p>

            {/* Features - menggunakan items yang sudah di-memoize */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 py-2">
              {featureItems}
            </div>

            {/* Button */}
            <motion.div variants={buttonVariants} className="pt-4">
              <a href="#properti">
                <Button
                  size="lg"
                  className="rounded-full px-8 lg:px-10 py-6 lg:py-7 text-sm lg:text-base font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
                >
                  Selengkapnya
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            {/* Main Image */}
            <div className="relative h-[400px] lg:h-[650px] w-full rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border-4 lg:border-8 border-white ring-1 ring-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1000"
                alt="Prime Property House"
                fill
                priority={false}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating Stats Card - menggunakan items yang sudah di-memoize */}
            <motion.div
              variants={floatingCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 p-6 lg:p-8 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-[1.5rem] lg:rounded-[2rem] border border-slate-100 hidden md:block"
            >
              <div className="grid grid-cols-3 gap-6 lg:gap-8">
                {statItems}
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              variants={badgeFloatVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-24 h-24 lg:w-32 lg:h-32 bg-primary rounded-full flex flex-col items-center justify-center text-white p-3 lg:p-4 text-center shadow-2xl shadow-primary/30"
            >
              <Award className="w-6 h-6 lg:w-8 lg:h-8 mb-1" />
              <span className="text-[0.5rem] lg:text-[0.6rem] font-black uppercase tracking-tighter">
                Best Choice 2024
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

// ✅ Optimasi 4: Tambahkan displayName untuk debugging React DevTools yang lebih baik
About.displayName = "About";

export default About;