"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ABOUT_CONTENT } from "./About.constants";
import { containerVariants, itemVariants, imageVariants } from "./About.animations";

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden scroll-mt-20">
      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-primary/5 blur-[80px] lg:blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[0.7rem] lg:text-xs font-bold uppercase tracking-[0.2em] border border-primary/10">
                {ABOUT_CONTENT.badge}
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight"
            >
              {ABOUT_CONTENT.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base lg:text-lg text-slate-600 leading-relaxed font-medium"
            >
              {ABOUT_CONTENT.description}
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 py-2">
              {ABOUT_CONTENT.features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <Button size="lg" className="rounded-full px-8 lg:px-10 py-6 lg:py-7 text-sm lg:text-base font-bold shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-all">
                Selengkapnya <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side: Image Content */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative h-[400px] lg:h-[650px] w-full rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border-4 lg:border-8 border-white ring-1 ring-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1000"
                alt="Prime Property House"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Stats Card - Optimized for mobile hide */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 p-6 lg:p-8 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[1.5rem] lg:rounded-[2rem] border border-slate-50 hidden md:block"
            >
              <div className="grid grid-cols-3 gap-6 lg:gap-8">
                {ABOUT_CONTENT.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col text-center">
                    <span className="text-2xl lg:text-3xl font-black text-primary">{stat.value}</span>
                    <span className="text-[0.6rem] lg:text-[0.7rem] font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {stat.label.split(" ").map(w => w[0]).join("")}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Subtle Badge */}
            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-24 h-24 lg:w-32 lg:h-32 bg-primary rounded-full flex flex-col items-center justify-center text-white p-3 lg:p-4 text-center shadow-2xl shadow-primary/40 rotate-12">
              <Award className="w-6 h-6 lg:w-8 lg:h-8 mb-1" />
              <span className="text-[0.5rem] lg:text-[0.6rem] font-black uppercase tracking-tighter">Best Choice 2024</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
