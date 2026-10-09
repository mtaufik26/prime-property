"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES_CONTENT } from "./Services.constants";
import {
  sectionVariants,
  headerVariants,
  gridVariants,
  cardVariants,
} from "./Services.animations";

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-stone-50/70 border-b border-stone-200/70 scroll-mt-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center mb-14 lg:mb-20 space-y-4 max-w-3xl mx-auto"
        >
          <motion.div variants={headerVariants}>
            <span className="inline-block px-3.5 py-1 rounded-full bg-stone-200/80 text-stone-800 text-[0.7rem] font-bold uppercase tracking-[0.2em]">
              {SERVICES_CONTENT.badge}
            </span>
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.12]"
          >
            {SERVICES_CONTENT.title}
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal max-w-2xl"
          >
            {SERVICES_CONTENT.description}
          </motion.p>
        </motion.div>

        {/* Services Grid (4 Refined Practices) */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {SERVICES_CONTENT.services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group rounded-2xl border border-stone-200/80 bg-white p-8 sm:p-10 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Practice Icon */}
                <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-stone-800 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Practice Title & Description */}
                <h3 className="text-xl font-bold text-stone-900 mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2.5 pt-4 border-t border-stone-100 text-xs text-stone-700">
                  {service.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-stone-500 shrink-0" />
                      <span className="font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry Link */}
              <div className="pt-8">
                <a
                  href="#inquire"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-stone-900 hover:text-stone-600 transition-colors group/link"
                >
                  Request Consultation
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;