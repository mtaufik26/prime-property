"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Bed, Bath, Square, MapPin, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PROPERTIES_CONTENT } from "./Properties.constants";
import { containerVariants, cardVariants } from "./Properties.animations";

const Properties = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredListings = activeCategory === "Semua" 
    ? PROPERTIES_CONTENT.listings 
    : PROPERTIES_CONTENT.listings.filter(p => p.type === activeCategory);

  return (
    <section id="properti" className="py-24 lg:py-32 bg-slate-50 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-start mb-12 lg:mb-16 space-y-4 lg:space-y-6 max-w-3xl">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full text-[0.7rem] lg:text-xs font-bold uppercase tracking-widest">
            {PROPERTIES_CONTENT.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            {PROPERTIES_CONTENT.title}
          </h2>
          <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed">
            {PROPERTIES_CONTENT.description}
          </p>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 lg:gap-3 pt-4">
            {PROPERTIES_CONTENT.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 lg:px-8 py-2.5 lg:py-3 rounded-full text-xs lg:text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105" 
                    : "bg-white text-slate-500 border border-slate-200 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Listings Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredListings.map((property) => (
              <motion.div
                key={property.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                className="group bg-white rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-64 lg:h-72 w-full overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-5 left-5 flex flex-col gap-2">
                    <Badge className="bg-white/90 backdrop-blur-md text-slate-900 border-none shadow-sm px-3 py-1 rounded-full text-[0.65rem] font-bold">
                      {property.type}
                    </Badge>
                  </div>
                  <div className="absolute top-5 right-5">
                    <Badge className="bg-primary text-white border-none shadow-sm px-3 py-1 rounded-full text-[0.65rem] font-bold">
                      {property.tag}
                    </Badge>
                  </div>
                  <button className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-red-500 hover:scale-110 transition-all shadow-lg">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                {/* Content Container */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[0.65rem] lg:text-[0.7rem] font-bold uppercase tracking-widest">{property.location}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-1">
                    {property.title}
                  </h3>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between py-4 lg:py-6 border-y border-slate-50 mb-4 lg:mb-6">
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400" />
                      <span className="text-xs lg:text-sm font-bold text-slate-700">{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400" />
                      <span className="text-xs lg:text-sm font-bold text-slate-700">{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400" />
                      <span className="text-xs lg:text-sm font-bold text-slate-700">{property.area}</span>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">Harga</span>
                      <span className="text-lg lg:text-xl font-black text-primary">{property.price}</span>
                    </div>
                    <Button className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-slate-50 text-slate-400 hover:bg-primary hover:text-white hover:rotate-[-45deg] transition-all">
                      <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <Button size="lg" variant="outline" className="rounded-full px-10 lg:px-12 py-6 lg:py-7 text-sm lg:text-base font-bold border-2 hover:bg-white hover:shadow-xl transition-all active:scale-95">
            Lihat Semua Properti
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;
