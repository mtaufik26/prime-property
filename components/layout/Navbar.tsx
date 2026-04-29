"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Building2, X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Beranda", href: "#" },
  { name: "Tentang", href: "#about" },
  { name: "Properti", href: "#properti" },
  { name: "Layanan", href: "#layanan" },
  { name: "Testimoni", href: "#testimoni" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-6 transition-all duration-500">
            <Building2 className="text-white w-5 h-5" />
          </div>

          <span
            className={cn(
              "text-xl font-bold tracking-tight transition-colors duration-500",
              isScrolled ? "text-slate-900" : "text-white"
            )}
          >
            Prime<span className="text-primary">Property</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-all duration-500 relative py-2",
                isScrolled
                  ? "text-slate-600 hover:text-primary"
                  : "text-white/80 hover:text-white"
              )}
            >
              {link.name}

              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            className={cn(
              "font-bold text-sm transition-colors duration-500",
              isScrolled
                ? "text-slate-900"
                : "text-white hover:bg-white/10"
            )}
          >
            Masuk
          </Button>

          <Button className="rounded-full px-8 h-11 text-sm font-bold shadow-lg shadow-primary/20 bg-primary text-white border-none hover:translate-y-[-2px] hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all duration-300">
            Hubungi Kami
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-full transition-colors duration-500",
                  isScrolled
                    ? "text-slate-900"
                    : "text-white hover:bg-white/10"
                )}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full sm:w-[350px] border-none shadow-2xl p-0 flex flex-col bg-white"
            >
              <SheetHeader className="p-8 pb-0 text-left">
                <SheetTitle className="flex items-center gap-2 text-xl font-bold">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <Building2 className="text-white w-6 h-6" />
                  </div>

                  <span>PrimeProperty</span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-1 p-6 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center px-4 py-4 rounded-2xl hover:bg-slate-50 text-slate-800 font-bold transition-all hover:translate-x-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;