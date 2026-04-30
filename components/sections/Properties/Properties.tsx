"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  ArrowRight,
  Heart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { PROPERTIES_CONTENT } from "./Properties.constants";

import {
  sectionVariants,
  headerVariants,
  filterVariants,
  gridVariants,
  cardVariants,
  imageVariants,
  contentVariants,
  statVariants,
  buttonVariants,
} from "./Properties.animations";

const Properties = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredListings = useMemo(() => {
    return activeCategory === "Semua"
      ? PROPERTIES_CONTENT.listings
      : PROPERTIES_CONTENT.listings.filter(
          (p) => p.type === activeCategory
        );
  }, [activeCategory]);

  return (
    <section
      id="properti"
      className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden scroll-mt-20"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-start mb-14 lg:mb-20 space-y-5 max-w-3xl"
        >
          <motion.div variants={headerVariants}>
            <Badge className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full text-[0.7rem] lg:text-xs font-bold uppercase tracking-[0.2em]">
              {PROPERTIES_CONTENT.badge}
            </Badge>
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight"
          >
            {PROPERTIES_CONTENT.title}
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-sm md:text-base text-slate-500 leading-relaxed font-medium max-w-2xl"
          >
            {PROPERTIES_CONTENT.description}
          </motion.p>

          {/* Categories */}
          <motion.div
            variants={filterVariants}
            className="flex flex-wrap gap-3 pt-4"
          >
            {PROPERTIES_CONTENT.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-xs lg:text-sm font-bold transition-all duration-300 active:scale-95 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white border border-slate-200 text-slate-500 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          layout
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredListings.map((property) => (
              <motion.article
                key={property.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: { duration: 0.2 },
                }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 will-change-transform"
              >
                {/* Image */}
                <motion.div
                  variants={imageVariants}
                  className="relative h-64 lg:h-72 overflow-hidden"
                >
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    unoptimized
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />

                  {/* Type */}
                  <div className="absolute top-5 left-5">
                    <Badge className="bg-white/90 text-slate-900 border-none backdrop-blur-sm rounded-full px-3 py-1 text-[0.65rem] font-bold shadow-sm">
                      {property.type}
                    </Badge>
                  </div>

                  {/* Tag */}
                  <div className="absolute top-5 right-5">
                    <Badge className="bg-primary text-white border-none rounded-full px-3 py-1 text-[0.65rem] font-bold shadow-lg">
                      {property.tag}
                    </Badge>
                  </div>

                  {/* Favorite */}
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="absolute bottom-5 right-5 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors shadow-lg"
                  >
                    <Heart className="w-5 h-5" />
                  </motion.button>
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={contentVariants}
                  className="p-6 lg:p-8"
                >
                  {/* Location */}
                  <motion.div
                    variants={statVariants}
                    className="flex items-center gap-2 text-slate-400 mb-3"
                  >
                    <MapPin className="w-4 h-4 text-primary" />

                    <span className="text-[0.65rem] uppercase tracking-[0.2em] font-bold">
                      {property.location}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    variants={statVariants}
                    className="text-xl font-black text-slate-900 mb-5 group-hover:text-primary transition-colors line-clamp-1"
                  >
                    {property.title}
                  </motion.h3>

                  {/* Stats */}
                  <motion.div
                    variants={statVariants}
                    className="flex items-center justify-between py-5 border-y border-slate-100 mb-6"
                  >
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-bold text-slate-700">
                        {property.beds}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-bold text-slate-700">
                        {property.baths}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Square className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-bold text-slate-700">
                        {property.area}
                      </span>
                    </div>
                  </motion.div>

                  {/* Footer */}
                  <motion.div
                    variants={buttonVariants}
                    className="flex items-center justify-between"
                  >
                    <div className="flex flex-col">
                      <span className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-slate-400">
                        Harga
                      </span>

                      <span className="text-lg lg:text-xl font-black text-primary">
                        {property.price}
                      </span>
                    </div>

                    <Button className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-500 hover:bg-primary hover:text-white transition-all duration-300 active:scale-95">
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex justify-center mt-14 lg:mt-20"
        >
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-10 py-7 text-sm lg:text-base font-bold border-2 bg-white hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95"
          >
            Lihat Semua Properti
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Properties;