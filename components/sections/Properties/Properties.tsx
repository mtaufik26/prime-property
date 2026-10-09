"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  ArrowRight,
  Heart,
  CheckCircle2,
  Calendar,
  Layers,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { PROPERTIES_CONTENT, PropertyItem } from "./Properties.constants";
import {
  sectionVariants,
  headerVariants,
  filterVariants,
  gridVariants,
  cardVariants,
} from "./Properties.animations";

const Properties = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(
    null
  );
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredListings = useMemo(() => {
    if (activeCategory === "All") {
      return showAll
        ? PROPERTIES_CONTENT.listings
        : [
            PROPERTIES_CONTENT.listings[0],
            PROPERTIES_CONTENT.listings[1],
            PROPERTIES_CONTENT.listings[3],
          ];
    }
    const matched = PROPERTIES_CONTENT.listings.filter(
      (p) => p.type === activeCategory
    );
    return showAll ? matched : matched.slice(0, 1);
  }, [activeCategory, showAll]);

  const handleToggleShowAll = () => {
    if (activeCategory !== "All") {
      setActiveCategory("All");
      setShowAll(true);
      return;
    }
    if (showAll) {
      setShowAll(false);
      const residencesEl = document.getElementById("residences");
      if (residencesEl) {
        residencesEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setShowAll(true);
    }
  };

  return (
    <section
      id="residences"
      className="relative py-24 lg:py-32 bg-stone-50/60 border-t border-b border-stone-200/70 scroll-mt-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-start mb-12 lg:mb-16 space-y-4 max-w-3xl"
        >
          <motion.div variants={headerVariants}>
            <span className="inline-block px-3.5 py-1 rounded-full bg-stone-200/80 text-stone-800 text-[0.7rem] font-bold uppercase tracking-[0.2em]">
              {PROPERTIES_CONTENT.badge}
            </span>
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.12]"
          >
            {PROPERTIES_CONTENT.title}
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal max-w-2xl"
          >
            {PROPERTIES_CONTENT.description}
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div
            variants={filterVariants}
            className="flex flex-wrap gap-2 pt-3"
          >
            {PROPERTIES_CONTENT.categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-stone-900 text-white shadow-xs"
                      : "bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-400"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Listings Grid */}
        <motion.div
          layout
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredListings.map((property) => {
              const isFav = !!favorites[property.id];
              return (
                <motion.article
                  key={property.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="group rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Photo Container */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-md text-[0.65rem] font-bold uppercase tracking-wider bg-white/95 text-stone-900 backdrop-blur-sm shadow-xs">
                        {property.type}
                      </span>
                    </div>

                    {/* Landmark / Distinction Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-md text-[0.65rem] font-bold uppercase tracking-wider bg-stone-900 text-white shadow-xs">
                        {property.tag}
                      </span>
                    </div>

                    {/* Interactive Favorite Button */}
                    <button
                      onClick={(e) => toggleFavorite(property.id, e)}
                      aria-label={isFav ? "Remove from saved" : "Save property"}
                      className={`absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-colors shadow-xs ${
                        isFav
                          ? "bg-rose-50 text-rose-600"
                          : "bg-white/90 text-stone-600 hover:text-rose-600"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${isFav ? "fill-rose-600" : ""}`}
                      />
                    </button>
                  </div>

                  {/* Card Details */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-stone-500 mb-2">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span className="text-xs uppercase tracking-wider font-semibold">
                          {property.location}, {property.city}
                        </span>
                      </div>

                      {/* Property Title */}
                      <h3 className="text-lg font-bold text-stone-900 mb-4 group-hover:text-stone-700 transition-colors">
                        {property.title}
                      </h3>

                      {/* Key Architectural Specs */}
                      <div className="grid grid-cols-3 gap-2 py-3.5 border-y border-stone-100 text-stone-600 text-xs">
                        <div className="flex items-center gap-1.5">
                          <Bed className="w-3.5 h-3.5 text-stone-400" />
                          <span className="font-semibold text-stone-800">
                            {property.beds}
                          </span>
                          <span className="text-stone-400">Beds</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Bath className="w-3.5 h-3.5 text-stone-400" />
                          <span className="font-semibold text-stone-800">
                            {property.baths}
                          </span>
                          <span className="text-stone-400">Baths</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Square className="w-3.5 h-3.5 text-stone-400" />
                          <span className="font-semibold text-stone-800 truncate">
                            {property.area.split(" ")[0]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="pt-5 flex items-center justify-between">
                      <div>
                        <span className="block text-[0.65rem] uppercase tracking-wider font-bold text-stone-400">
                          Offering Price
                        </span>
                        <span className="text-lg font-extrabold text-stone-900 tracking-tight">
                          {property.price}
                        </span>
                      </div>

                      <Button
                        onClick={() => setSelectedProperty(property)}
                        variant="outline"
                        size="sm"
                        className="rounded-full text-xs font-semibold px-4 border-stone-300 text-stone-800 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors"
                      >
                        Details
                        <ArrowRight className="ml-1 w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All & Portfolio Expansion CTA */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-14 sm:mt-18 flex flex-col items-center justify-center text-center space-y-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/residences">
              <Button className="rounded-full px-8 h-12 text-xs sm:text-sm font-bold uppercase tracking-wider bg-stone-900 text-white hover:bg-stone-800 transition-all duration-200 group shadow-xs cursor-pointer">
                View Full Portfolio (9 Residences)
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>

            <Button
              onClick={handleToggleShowAll}
              variant="outline"
              className="rounded-full px-7 h-12 text-xs sm:text-sm font-semibold tracking-wider uppercase border border-stone-300 bg-white text-stone-800 hover:bg-stone-100 hover:text-stone-950 transition-colors cursor-pointer"
            >
              {showAll ? "Show Featured Only (3)" : "Quick Show All Here (9)"}
            </Button>
          </div>

          <p className="text-xs text-stone-500 font-medium max-w-lg">
            Displaying {filteredListings.length} of {PROPERTIES_CONTENT.listings.length} curated residences. Seeking confidential off-market holdings?{" "}
            <a href="#inquire" className="underline hover:text-stone-900 font-semibold transition-colors">
              Inquire privately
            </a>
          </p>
        </motion.div>

        {/* Property Quick View Dialog */}
        <Dialog
          open={!!selectedProperty}
          onOpenChange={(open) => !open && setSelectedProperty(null)}
        >
          {selectedProperty && (
            <DialogContent className="max-w-2xl p-0 overflow-hidden max-h-[88vh] sm:max-h-[90vh] flex flex-col rounded-2xl sm:rounded-3xl">
              {/* Modal Image Header */}
              <div className="relative h-44 sm:h-72 w-full shrink-0">
                <Image
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 text-white">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md">
                      {selectedProperty.type}
                    </span>
                    <DialogDescription className="text-[0.7rem] sm:text-xs text-stone-300">
                      {selectedProperty.location}, {selectedProperty.city}
                    </DialogDescription>
                  </div>
                  <DialogTitle className="text-lg sm:text-2xl font-bold tracking-tight text-white line-clamp-1 sm:line-clamp-none">
                    {selectedProperty.title}
                  </DialogTitle>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-7 overflow-y-auto space-y-4 sm:space-y-6 flex-1">
                {/* Price & Specs Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 sm:pb-4 gap-2.5 sm:gap-4">
                  <div>
                    <span className="text-[0.65rem] sm:text-xs uppercase tracking-wider font-semibold text-stone-400">
                      Guide Price
                    </span>
                    <div className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
                      {selectedProperty.price}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 text-xs text-stone-600 bg-stone-50 sm:bg-transparent p-2 sm:p-0 rounded-lg">
                    <div className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-400" />
                      <span className="font-bold text-stone-800">
                        {selectedProperty.beds}
                      </span>
                      <span className="text-stone-400">Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-400" />
                      <span className="font-bold text-stone-800">
                        {selectedProperty.baths}
                      </span>
                      <span className="text-stone-400">Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-400" />
                      <span className="font-bold text-stone-800 truncate">
                        {selectedProperty.area}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs bg-stone-50 p-2.5 sm:p-4 rounded-xl border border-stone-100">
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-400 shrink-0" />
                    <div>
                      <span className="text-stone-400 block text-[0.6rem] sm:text-[0.65rem] uppercase">
                        Architecture
                      </span>
                      <span className="font-bold text-stone-800 text-[0.75rem] sm:text-xs line-clamp-1">
                        {selectedProperty.architecturalStyle}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-400 shrink-0" />
                    <div>
                      <span className="text-stone-400 block text-[0.6rem] sm:text-[0.65rem] uppercase">
                        Year Completed
                      </span>
                      <span className="font-bold text-stone-800 text-[0.75rem] sm:text-xs">
                        {selectedProperty.yearBuilt}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Narrative Summary */}
                <div>
                  <h4 className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5 sm:mb-2">
                    Residence Overview
                  </h4>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {selectedProperty.summary}
                  </p>
                </div>

                {/* Key Amenities */}
                <div>
                  <h4 className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider text-stone-900 mb-2 sm:mb-3">
                    Curated Amenities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs text-stone-700">
                    {selectedProperty.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                        <span className="text-[0.75rem] sm:text-xs">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Actions - Sticky Bottom on Mobile for Effortless Accessibility */}
                <div className="sticky bottom-0 bg-white/95 backdrop-blur-md pt-3 pb-1 border-t border-stone-100 flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2">
                  <a
                    href="#inquire"
                    onClick={() => setSelectedProperty(null)}
                    className="flex-1"
                  >
                    <Button className="w-full rounded-full h-10 sm:h-11 text-xs font-bold uppercase tracking-wider bg-stone-900 text-white hover:bg-stone-800">
                      Inquire About This Residence
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedProperty(null)}
                    className="rounded-full h-10 sm:h-11 text-xs font-semibold px-5 border-stone-200 text-stone-700"
                  >
                    Close Preview
                  </Button>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Properties;