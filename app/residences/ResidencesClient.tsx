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
  ArrowLeft,
  Heart,
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  ArrowUpDown,
  CheckCircle2,
  Calendar,
  Layers,
  ShieldCheck,
  Building2,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import {
  PROPERTIES_CONTENT,
  PropertyItem,
} from "@/components/sections/Properties/Properties.constants";

const parsePriceNumber = (priceStr: string): number => {
  const cleaned = priceStr.replace(/[^0-9]/g, "");
  return parseInt(cleaned, 10) || 0;
};

export default function ResidencesClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"featured" | "price-desc" | "price-asc" | "year-desc">("featured");
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredAndSortedListings = useMemo(() => {
    let list = [...PROPERTIES_CONTENT.listings];

    // Filter by category
    if (activeCategory !== "All") {
      list = list.filter((item) => item.type === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.city.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.architecturalStyle.toLowerCase().includes(q) ||
          item.tag.toLowerCase().includes(q)
      );
    }

    // Sort listings
    if (sortBy === "price-desc") {
      list.sort((a, b) => parsePriceNumber(b.price) - parsePriceNumber(a.price));
    } else if (sortBy === "price-asc") {
      list.sort((a, b) => parsePriceNumber(a.price) - parsePriceNumber(b.price));
    } else if (sortBy === "year-desc") {
      list.sort((a, b) => b.yearBuilt - a.yearBuilt);
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: PROPERTIES_CONTENT.listings.length,
      "Villas & Estates": 0,
      Penthouses: 0,
      "Modern Homes": 0,
    };
    PROPERTIES_CONTENT.listings.forEach((p) => {
      if (counts[p.type] !== undefined) {
        counts[p.type]++;
      }
    });
    return counts;
  }, []);

  const resetFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
    setSortBy("featured");
  };

  return (
    <div className="flex min-h-screen flex-col bg-stone-50/70 text-foreground">
      <Navbar />

      {/* Catalog Hero Banner */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Architecture Portfolio Hero"
            fill
            priority
            className="object-cover filter brightness-[0.4] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/80" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-400 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Overview
            </Link>
            <span className="text-stone-600">/</span>
            <span className="text-stone-100">Curated Portfolio</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full border border-white/20 bg-stone-900/70 backdrop-blur-md text-stone-200 text-[0.7rem] font-bold uppercase tracking-[0.2em]">
              Complete Private Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Architectural Residences & Estates
            </h1>
            <p className="text-sm sm:text-base text-stone-300 max-w-2xl font-normal leading-relaxed">
              Explore our full collection of {PROPERTIES_CONTENT.listings.length} handpicked modernist villas, skyline penthouses, and heritage sanctuaries across Bali, Jakarta, and Bandung.
            </p>
          </div>
        </div>
      </section>

      {/* Search, Filter & Sort Control Bar */}
      <section className="sticky top-[52px] sm:top-20 z-20 -mt-4 sm:-mt-9 mb-4 sm:mb-6">
        <div className="container mx-auto px-3.5 sm:px-6 lg:px-12">
          <div className="rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-md p-2 sm:p-3 transition-all">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-2 sm:gap-3.5">
              {/* Category Segmented Control */}
              <div className="inline-flex items-center gap-1 p-0.5 sm:p-1 bg-stone-100 rounded-full border border-stone-200/70 overflow-x-auto max-w-full scrollbar-none">
                {PROPERTIES_CONTENT.categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  const count = categoryCounts[cat] || 0;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`h-7.5 sm:h-9 px-3 sm:px-4 rounded-full text-[0.7rem] sm:text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer shrink-0 ${
                        isActive
                          ? "bg-stone-900 text-white shadow-xs"
                          : "text-stone-600 hover:text-stone-950 hover:bg-stone-200/60"
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`text-[0.6rem] sm:text-[0.65rem] font-bold px-1.5 py-0.5 rounded-full transition-colors ${
                          isActive
                            ? "bg-stone-800 text-stone-200"
                            : "bg-stone-200 text-stone-600"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Controls: Search + Sort Side-by-Side */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Search Box */}
                <div className="relative flex-1 sm:w-64 lg:w-72">
                  <Search className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search title, city, or style..."
                    className="w-full h-8.5 sm:h-10 pl-8.5 sm:pl-10 pr-7 sm:pr-9 rounded-full border border-stone-200 bg-stone-50/70 text-[0.75rem] sm:text-xs font-medium text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 transition-all shadow-2xs"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Custom Compact Sort Selector */}
                <div className="relative shrink-0">
                  <div className="h-8.5 sm:h-10 px-2.5 sm:px-3.5 rounded-full border border-stone-200 bg-stone-50/70 hover:bg-white hover:border-stone-300 transition-all flex items-center justify-between gap-1.5 sm:gap-2 cursor-pointer shadow-2xs group">
                    <div className="flex items-center gap-1.5">
                      <ArrowUpDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-stone-400 group-hover:text-stone-700 transition-colors" />
                      <span className="text-[0.72rem] sm:text-xs font-semibold text-stone-700 whitespace-nowrap hidden sm:inline">
                        {sortBy === "featured" && "Featured Order"}
                        {sortBy === "price-desc" && "Price: High to Low"}
                        {sortBy === "price-asc" && "Price: Low to High"}
                        {sortBy === "year-desc" && "Year: Newest"}
                      </span>
                      <span className="text-[0.72rem] sm:text-xs font-semibold text-stone-700 whitespace-nowrap sm:hidden">
                        {sortBy === "featured" && "Featured"}
                        {sortBy === "price-desc" && "Price ↓"}
                        {sortBy === "price-asc" && "Price ↑"}
                        {sortBy === "year-desc" && "Year"}
                      </span>
                    </div>
                    <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-stone-400 group-hover:text-stone-700 transition-colors" />

                    {/* Native Select Overlay */}
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    >
                      <option value="featured">Featured Order</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="year-desc">Year: Newest</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="pb-16 flex-1">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Results Summary Bar */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200/80">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-stone-500">
                Showing {filteredAndSortedListings.length} of {PROPERTIES_CONTENT.listings.length} Curated Residences
              </span>
            </div>

            {(searchQuery || activeCategory !== "All" || sortBy !== "featured") && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-950 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>

          {/* Empty State */}
          {filteredAndSortedListings.length === 0 ? (
            <div className="py-24 text-center max-w-md mx-auto space-y-4">
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">No matching residences found</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                We could not find any properties matching &ldquo;{searchQuery}&rdquo;. Try adjusting your search query or reset the filters.
              </p>
              <Button
                onClick={resetFilters}
                className="rounded-full px-6 text-xs font-bold uppercase tracking-wider bg-stone-900 text-white hover:bg-stone-800"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            /* Listings Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredAndSortedListings.map((property) => {
                  const isFav = !!favorites[property.id];
                  return (
                    <motion.article
                      key={property.id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="group rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
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

                        {/* Favorite Button */}
                        <button
                          onClick={(e) => toggleFavorite(property.id, e)}
                          aria-label={isFav ? "Remove from saved" : "Save property"}
                          className={`absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-colors shadow-xs ${
                            isFav
                              ? "bg-rose-50 text-rose-600"
                              : "bg-white/90 text-stone-600 hover:text-rose-600"
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${isFav ? "fill-rose-600" : ""}`} />
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

                          {/* Architectural Specs */}
                          <div className="grid grid-cols-3 gap-2 py-3.5 border-y border-stone-100 text-stone-600 text-xs">
                            <div className="flex items-center gap-1.5">
                              <Bed className="w-3.5 h-3.5 text-stone-400" />
                              <span className="font-semibold text-stone-800">{property.beds}</span>
                              <span className="text-stone-400">Beds</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Bath className="w-3.5 h-3.5 text-stone-400" />
                              <span className="font-semibold text-stone-800">{property.baths}</span>
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
                            className="rounded-full text-xs font-semibold px-4 border-stone-300 text-stone-800 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors cursor-pointer"
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
            </div>
          )}
        </div>
      </section>

      {/* Off-Market Consultation Banner */}
      <section className="bg-stone-900 text-white py-16 lg:py-20 border-t border-stone-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-stone-300 text-[0.65rem] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-300" />
                Confidential Portfolio
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Seeking Unlisted Off-Market Holdings?
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 max-w-xl leading-relaxed">
                Over 40% of our ultra-prime advisory transactions occur off-market under strict non-disclosure. Reach out directly to our advisory chambers for bespoke mandates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a href="/#inquire">
                <Button className="rounded-full px-8 h-12 text-xs font-bold uppercase tracking-wider bg-white text-stone-950 hover:bg-stone-100 transition-all">
                  Request Off-Market Access
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Link href="/">
                <Button
                  variant="outline"
                  className="rounded-full px-6 h-12 text-xs font-semibold tracking-wider uppercase border-stone-700 bg-stone-800/60 text-stone-300 hover:bg-stone-800 hover:text-white"
                >
                  Return to Overview
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                  href="/#inquire"
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

      <Footer />
    </div>
  );
}
