"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TESTIMONIALS_CONTENT } from "./Testimonials.constants";
import { containerVariants, itemVariants } from "./Testimonials.animations";

const Testimonials = () => {
  return (
    <section id="testimoni" className="py-24 lg:py-32 bg-slate-50 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16 space-y-4 lg:space-y-6 max-w-3xl mx-auto">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full text-[0.7rem] lg:text-xs font-bold uppercase tracking-widest">
            {TESTIMONIALS_CONTENT.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            {TESTIMONIALS_CONTENT.title}
          </h2>
          <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed">
            {TESTIMONIALS_CONTENT.description}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {TESTIMONIALS_CONTENT.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 lg:w-12 lg:h-12 text-primary/5 group-hover:text-primary/10 transition-colors duration-500" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                ))}
              </div>

              <p className="text-sm lg:text-base text-slate-600 italic leading-relaxed mb-8 flex-grow">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50 mt-auto">
                <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors duration-500">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base lg:text-lg font-bold text-slate-900">{testimonial.name}</h4>
                  <span className="text-[0.65rem] lg:text-[0.7rem] font-bold text-slate-400 uppercase tracking-widest">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
