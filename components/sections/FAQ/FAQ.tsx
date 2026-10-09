"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQ_CONTENT } from "./FAQ.constants";
import {
  containerVariantsOptimized,
  fadeSideVariantsOptimized,
} from "./FAQ.animations";

const FAQ = memo(() => {
  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32 bg-stone-50/60 border-t border-b border-stone-200/70 scroll-mt-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Support Box (5 cols) */}
          <motion.div
            variants={containerVariantsOptimized}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-32"
          >
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-stone-200/80 text-stone-800 text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-4">
                {FAQ_CONTENT.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-[1.15]">
                {FAQ_CONTENT.title}
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal mt-3">
                {FAQ_CONTENT.description}
              </p>
            </div>

            {/* Direct Advisory Contact Card */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <h3 className="text-base font-bold text-stone-900 mb-2">
                {FAQ_CONTENT.supportCard.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-5">
                {FAQ_CONTENT.supportCard.description}
              </p>
              <a href={FAQ_CONTENT.supportCard.actionHref}>
                <Button
                  size="sm"
                  className="rounded-full px-5 h-9 text-xs font-bold uppercase tracking-wider bg-stone-900 text-white hover:bg-stone-800"
                >
                  {FAQ_CONTENT.supportCard.actionText}
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Accordion (7 cols) */}
          <motion.div
            variants={fadeSideVariantsOptimized}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs"
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {FAQ_CONTENT.questions.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-stone-100 rounded-xl px-5 bg-stone-50/50 data-[state=open]:bg-white data-[state=open]:border-stone-200 transition-colors"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-bold text-stone-900 hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-stone-600 text-xs sm:text-sm leading-relaxed pb-4 pt-1 font-normal">
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
});

FAQ.displayName = "FAQ";

export default FAQ;