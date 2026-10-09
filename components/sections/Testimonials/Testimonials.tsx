"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS_CONTENT } from "./Testimonials.constants";
import {
  sectionVariants,
  headerVariants,
  gridVariants,
  cardVariants,
} from "./Testimonials.animations";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 bg-white overflow-hidden scroll-mt-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center mb-14 lg:mb-20 space-y-4 max-w-3xl mx-auto"
        >
          <motion.div variants={headerVariants}>
            <span className="inline-block px-3.5 py-1 rounded-full bg-stone-100 text-stone-800 text-[0.7rem] font-bold uppercase tracking-[0.2em] border border-stone-200">
              {TESTIMONIALS_CONTENT.badge}
            </span>
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.12]"
          >
            {TESTIMONIALS_CONTENT.title}
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal max-w-2xl"
          >
            {TESTIMONIALS_CONTENT.description}
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS_CONTENT.testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="rounded-2xl border border-stone-200/80 bg-stone-50/50 p-8 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-stone-300" />
                </div>

                {/* Quote Content */}
                <p className="text-sm text-stone-700 leading-relaxed font-normal italic mb-8">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Client Profile */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-stone-200/60 mt-auto">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-stone-300 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-sm font-bold text-stone-900 truncate">
                    {item.name}
                  </h4>
                  <span className="text-[0.65rem] font-medium text-stone-500 truncate">
                    {item.role}
                  </span>
                  <span className="text-[0.6rem] text-stone-400 font-medium">
                    {item.location}
                  </span>
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