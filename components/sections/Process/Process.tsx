"use client";

import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { PROCESS_CONTENT } from "./Process.constants";
import {
  containerVariants,
  badgeVariants,
  titleVariants,
  descriptionVariants,
  cardVariants,
  iconVariants,
  numberVariants,
  lineVariants,
} from "./Process.animations";

// ✅ Optimasi 1: Memoize komponen untuk mencegah re-render tidak perlu
const Process = memo(() => {
  // ✅ Optimasi 2: Memoize mapped steps agar tidak direcreate tiap render
  const stepItems = useMemo(() => 
    PROCESS_CONTENT.steps.map((step, index) => (
      <motion.div
        key={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: index * 0.08 }}
        className="relative flex flex-col items-center text-center group"
      >
        {/* Icon Box */}
        <motion.div
          variants={iconVariants}
          className={`relative w-24 h-24 rounded-[2rem] ${step.color} flex items-center justify-center text-white mb-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)] group-hover:-translate-y-2 transition-transform duration-500`}
        >
          <step.icon className="w-10 h-10" />

          {/* Step Number */}
          <motion.div
            variants={numberVariants}
            className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-slate-900 font-black text-sm shadow-lg"
          >
            {index + 1}
          </motion.div>
        </motion.div>

        {/* Content - animasi inline tetap dipertahankan identik */}
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: 0.15 + index * 0.08,
          }}
          viewport={{ once: true }}
          className="text-lg lg:text-xl font-bold text-slate-900 mb-3"
        >
          {step.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: 0.22 + index * 0.08,
          }}
          viewport={{ once: true }}
          className="text-slate-500 leading-relaxed text-xs lg:text-sm font-medium max-w-[260px]"
        >
          {step.description}
        </motion.p>
      </motion.div>
    )), 
  []); // PROCESS_CONTENT adalah constant statis, dependencies kosong aman

  return (
    <section
      id="proses"
      className="relative py-20 lg:py-28 bg-white overflow-hidden scroll-mt-20"
    >
      {/* Background Glow - static, no interaction */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] lg:w-[800px] h-[500px] lg:h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center mb-16 lg:mb-20 space-y-6 max-w-3xl mx-auto"
        >
          <motion.div variants={badgeVariants}>
            <Badge className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full text-[0.7rem] lg:text-xs font-bold uppercase tracking-[0.2em]">
              {PROCESS_CONTENT.badge}
            </Badge>
          </motion.div>

          <motion.h2
            variants={titleVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            {PROCESS_CONTENT.title}
          </motion.h2>

          <motion.p
            variants={descriptionVariants}
            className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl"
          >
            {PROCESS_CONTENT.description}
          </motion.p>
        </motion.div>

        {/* Process Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          
          {/* Desktop Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10"
          />

          {/* Steps - menggunakan items yang sudah di-memoize */}
          {stepItems}
        </div>
      </div>
    </section>
  );
});

Process.displayName = "Process";

export default Process;