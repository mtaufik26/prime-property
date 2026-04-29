"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { FAQ_CONTENT } from "./FAQ.constants";

const FAQ = () => {
  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden scroll-mt-20">
      {/* Visual Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-sky-200/20 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 lg:space-y-8"
          >
            <Badge variant="secondary" className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
              {FAQ_CONTENT.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              {FAQ_CONTENT.title}
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
              {FAQ_CONTENT.description}
            </p>

            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Punya pertanyaan lain?</h3>
              <p className="text-sm text-slate-500 mb-6 font-medium">Jangan ragu untuk menghubungi tim support kami yang siap membantu Anda kapan saja.</p>
              <button className="px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-primary transition-colors shadow-lg shadow-slate-200">
                Hubungi Support
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2.5rem] p-6 lg:p-10 border border-slate-100 shadow-2xl shadow-slate-200/40"
          >
            <Accordion type="single" collapsible className="w-full space-y-2">
              {FAQ_CONTENT.questions.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-none">
                  <AccordionTrigger className="text-left text-base lg:text-lg font-bold text-slate-800 hover:no-underline hover:text-primary py-5 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 text-sm lg:text-base leading-relaxed pb-5 font-medium">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default FAQ;
