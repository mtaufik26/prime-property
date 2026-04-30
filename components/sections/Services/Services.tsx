"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import { SERVICES_CONTENT } from "./Services.constants";

import {
  sectionVariants,
  headerVariants,
  gridVariants,
  cardVariants,
  iconVariants,
  contentVariants,
} from "./Services.animations";

const Services = () => {
  return (
    <section
      id="layanan"
      className="relative py-24 lg:py-32 bg-white overflow-hidden scroll-mt-20"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

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
              {SERVICES_CONTENT.badge}
            </Badge>
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight"
          >
            {SERVICES_CONTENT.title}
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed font-medium max-w-2xl"
          >
            {SERVICES_CONTENT.description}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES_CONTENT.services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] border border-slate-100 bg-slate-50 p-8 lg:p-10 transition-all duration-500 hover:border-primary/20 hover:bg-primary hover:shadow-2xl hover:shadow-primary/20 will-change-transform"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary to-sky-500" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white flex items-center justify-center mb-7 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                >
                  <service.icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary" />
                </motion.div>

                {/* Text */}
                <motion.div
                  variants={contentVariants}
                  className="space-y-3"
                >
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-500 group-hover:text-white/80 transition-colors duration-300">
                    {service.description}
                  </p>
                </motion.div>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="h-[2px] bg-primary/20 mt-8 group-hover:bg-white/20"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;