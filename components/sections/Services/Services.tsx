"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SERVICES_CONTENT } from "./Services.constants";
import { containerVariants, itemVariants } from "./Services.animations";

const Services = () => {
  return (
    <section id="layanan" className="py-24 lg:py-32 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16 space-y-4 lg:space-y-6 max-w-3xl mx-auto">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full text-[0.7rem] lg:text-xs font-bold uppercase tracking-widest">
            {SERVICES_CONTENT.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            {SERVICES_CONTENT.title}
          </h2>
          <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed">
            {SERVICES_CONTENT.description}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES_CONTENT.services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-primary hover:border-primary transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white flex items-center justify-center mb-6 lg:mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <service.icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 lg:mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-sm lg:text-base text-slate-500 leading-relaxed group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
