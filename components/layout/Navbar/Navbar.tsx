"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NAV_CONTENT } from "./Navbar.constants";
import {
  navbarVariants,
  logoVariants,
  linkContainerVariants,
  linkVariants,
  ctaVariants,
} from "./Navbar.animations";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    // Langsung cek posisi scroll saat halaman dimuat/refresh
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-500",
        isScrolled
          ? "bg-white/70 backdrop-blur-2xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* LOGO (A) */}
        <motion.div variants={logoVariants} initial="hidden" animate="visible">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-6 transition-all duration-500">
              <NAV_CONTENT.logo.icon className="text-white w-5 h-5" />
            </div>

            <span
              className={cn(
                "text-xl font-bold tracking-tight transition-colors duration-500",
                isScrolled ? "text-slate-900" : "text-white"
              )}
            >
              {NAV_CONTENT.logo.name}
              <span className="text-primary">
                {NAV_CONTENT.logo.highlight}
              </span>
            </span>
          </Link>
        </motion.div>

        {/* DESKTOP MENU (B - stagger biar tidak nyatu) */}
        <motion.nav
          variants={linkContainerVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex items-center gap-10"
        >
          {NAV_CONTENT.links.map((link, i) => (
            <motion.div key={link.name} variants={linkVariants}>
              <Link
                href={link.href}
                className={cn(
                  "group text-sm font-semibold relative py-2 transition-colors",
                  isScrolled
                    ? "text-slate-600 hover:text-primary"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* CTA (C - dipisah biar tidak ikut animasi menu) */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex items-center gap-4"
        >
          <a href="#kontak">
            <Button className="rounded-full px-8 h-11 text-sm font-bold bg-primary text-white hover:-translate-y-0.5 transition-all duration-300">
              {NAV_CONTENT.actions.contact}
            </Button>
          </a>
        </motion.div>

        {/* MOBILE MENU */}
        <div className="lg:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  isScrolled ? "text-slate-900" : "text-white"
                )}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent className="w-full sm:w-[350px] bg-white p-0">
              <SheetHeader className="p-8 pb-0 text-left">
                <SheetTitle className="flex items-center gap-2 text-xl font-bold">
                  <NAV_CONTENT.logo.icon className="w-6 h-6 text-primary" />
                  {NAV_CONTENT.logo.name}
                  {NAV_CONTENT.logo.highlight}
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 p-6 mt-4">
                {NAV_CONTENT.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-4 rounded-2xl hover:bg-slate-50 font-bold hover:text-primary transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto p-6 border-t">
                <Button 
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-2xl h-12 font-bold"
                >
                  {NAV_CONTENT.actions.contact}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;