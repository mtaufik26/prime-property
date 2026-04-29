"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { PROCESS_CONTENT } from "./Process.constants";

const Process = () => {
  return (
    <section id="proses" className="py-24 lg:py-32 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24 space-y-6 max-w-3xl mx-auto">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            {PROCESS_CONTENT.badge}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            {PROCESS_CONTENT.title}
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            {PROCESS_CONTENT.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 -z-10" />

          {PROCESS_CONTENT.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center text-white mb-8 shadow-2xl shadow-slate-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative`}>
                <step.icon className="w-10 h-10" />
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-slate-900 font-black text-sm shadow-xl">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
