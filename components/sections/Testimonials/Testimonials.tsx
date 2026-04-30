"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { TESTIMONIALS_CONTENT } from "./Testimonials.constants";

import {
  sectionVariants,
  headerVariants,
  gridVariants,
  cardVariants,
  quoteVariants,
  starsVariants,
  textVariants,
  profileVariants,
} from "./Testimonials.animations";

const Testimonials = () => {
  return (
    <section
      id="testimoni"
      className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden scroll-mt-20"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center text-center mb-14 lg:mb-20 space-y-5 max-w-3xl mx-auto"
        >
          <motion.div variants={headerVariants}>
            <Badge className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full text-[0.7rem] lg:text-xs font-bold uppercase tracking-[0.2em]">
              {TESTIMONIALS_CONTENT.badge}
            </Badge>
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight"
          >
            {TESTIMONIALS_CONTENT.title}
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed font-medium max-w-2xl"
          >
            {TESTIMONIALS_CONTENT.description}
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {TESTIMONIALS_CONTENT.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] border border-slate-100 bg-white p-8 lg:p-10 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 flex flex-col will-change-transform"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/[0.03] to-sky-500/[0.03]" />

              {/* Quote Icon */}
              <motion.div
                variants={quoteVariants}
                className="absolute top-8 right-8"
              >
                <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-primary/10 group-hover:text-primary/20 transition-colors duration-500" />
              </motion.div>

              {/* Stars */}
              <motion.div
                variants={starsVariants}
                className="flex items-center gap-1 mb-6 relative z-10"
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-orange-400 text-orange-400"
                  />
                ))}
              </motion.div>

              {/* Text */}
              <motion.p
                variants={textVariants}
                className="text-sm text-slate-600 italic leading-relaxed mb-8 flex-grow relative z-10"
              >
                {testimonial.content}
              </motion.p>

              {/* Profile */}
              <motion.div
                variants={profileVariants}
                className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto relative z-10"
              >
                <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors duration-500 shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                    unoptimized
                  />
                </div>

                <div className="flex flex-col">
                  <h4 className="text-sm lg:text-base font-black text-slate-900">
                    {testimonial.name}
                  </h4>

                  <span className="text-[0.6rem] lg:text-[0.65rem] uppercase tracking-[0.2em] font-bold text-slate-400">
                    {testimonial.role}
                  </span>
                </div>
              </motion.div>

              {/* Bottom Accent */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="h-[2px] bg-primary/10 mt-8 rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;