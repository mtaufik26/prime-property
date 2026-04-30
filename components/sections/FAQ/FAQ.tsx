"use client";

import React, { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { FAQ_CONTENT } from "./FAQ.constants";

import {
  containerVariantsOptimized,
  fadeSideVariantsOptimized,
  accordionItemVariantsOptimized,
} from "./FAQ.animations";

// ✅ Optimasi 1: Memoize komponen
const FAQ = memo(() => {
  const shouldReduceMotion = useReducedMotion();

  // ✅ Optimasi 2: GPU promotion hanya untuk elemen yang animasi transform
  const gpuTransform = { willChange: 'transform', transform: 'translateZ(0)' };
  const gpuOpacity = { willChange: 'opacity' };

  // ✅ Optimasi 3: Memoize questions (sudah ada, dipertahankan)
  const questionItems = useMemo(() => 
    FAQ_CONTENT.questions.map((faq) => (
      <AccordionItem
        key={faq.id}
        value={faq.id}
        className="border border-slate-100 rounded-2xl px-5 bg-slate-50/50"
      >
        <AccordionTrigger className="text-left text-sm lg:text-base font-bold text-slate-800 hover:no-underline hover:text-primary py-5 transition-colors">
          {faq.question}
        </AccordionTrigger>
        <AccordionContent className="text-slate-500 text-xs lg:text-sm leading-relaxed pb-5 font-medium">
          {faq.answer}
        </AccordionContent>
      </AccordionItem>
    )), 
  []);

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden scroll-mt-20"
    >
      {/* Background Decoration - ✅ Optimasi 4: Blur statis, animasi via CSS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div 
          className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full animate-fade-in-slow"
          style={gpuOpacity}
        />
        <div 
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-sky-200/20 blur-[100px] rounded-full animate-fade-in-slow-delayed"
          style={gpuOpacity}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT CONTENT - ✅ Optimasi 5: Hanya 1 motion wrapper untuk seluruh kolom */}
          <motion.div
            variants={containerVariantsOptimized}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-6 lg:space-y-8 lg:sticky lg:top-32 h-fit"
            style={gpuTransform}
            layout={false}
          >
            {/* Badge - ✅ Optimasi 6: Hapus motion wrapper, animasi via parent */}
            <Badge className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
              {FAQ_CONTENT.badge}
            </Badge>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
              {FAQ_CONTENT.title}
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-base text-slate-500 font-medium leading-relaxed max-w-xl">
              {FAQ_CONTENT.description}
            </p>

            {/* Card - ✅ Optimasi 7: Glow dengan CSS animation, bukan Framer Motion */}
            <div className="relative p-6 lg:p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden group">
              {/* Glow - animasi via CSS keyframes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 animate-glow-fade-in" />

              <h3 className="text-lg font-bold text-slate-900 mb-2 relative z-10">
                Punya pertanyaan lain?
              </h3>

              <p className="text-xs text-slate-500 mb-6 font-medium relative z-10">
                Jangan ragu untuk menghubungi tim support kami yang siap membantu Anda kapan saja.
              </p>

              {/* Button - ✅ Optimasi 8: Hover effect via CSS, hapus whileHover/whileTap */}
              <button className="relative z-10 px-5 py-2.5 rounded-full bg-slate-900 text-white text-[0.7rem] lg:text-xs font-bold hover:bg-primary transition-colors uppercase tracking-widest hover:scale-105 active:scale-95 transform-gpu">
                Hubungi Support
              </button>
            </div>
          </motion.div>

          {/* RIGHT CONTENT - ✅ Optimasi 9: Hanya 1 motion wrapper, accordion items tanpa motion */}
          <motion.div
            variants={fadeSideVariantsOptimized}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-[2.5rem] p-6 lg:p-10 border border-slate-100 shadow-2xl shadow-slate-200/40 h-fit"
            style={gpuTransform}
            layout={false}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {/* ✅ Optimasi 10: Accordion items tanpa motion wrapper - animasi handled oleh Accordion component */}
              {questionItems}
            </Accordion>
          </motion.div>

        </div>
      </div>
    </section>
  );
});

FAQ.displayName = "FAQ";

export default FAQ;