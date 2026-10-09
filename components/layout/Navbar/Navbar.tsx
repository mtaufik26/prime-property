"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
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
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const resolveHref = (href: string) => {
    if (href.startsWith("#") && pathname !== "/") {
      return `/${href}`;
    }
    return href;
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-4 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-stone-200/80 shadow-xs"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* LOGO */}
        <motion.div variants={logoVariants} initial="hidden" animate="visible">
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className={cn(
                "w-7.5 h-7.5 sm:w-9 sm:h-9 rounded-md sm:rounded-lg flex items-center justify-center transition-all duration-300",
                isScrolled
                  ? "bg-stone-900 text-white"
                  : "bg-white/15 text-white backdrop-blur-md border border-white/20"
              )}
            >
              <NAV_CONTENT.logo.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>

            <span
              className={cn(
                "text-xs sm:text-base tracking-[0.16em] sm:tracking-[0.18em] font-extrabold transition-colors duration-300 flex items-center gap-1",
                isScrolled ? "text-stone-900" : "text-white"
              )}
            >
              <span>{NAV_CONTENT.logo.name}</span>
              <span className="font-light opacity-80">
                {NAV_CONTENT.logo.highlight}
              </span>
            </span>
          </Link>
        </motion.div>

        {/* DESKTOP MENU */}
        <motion.nav
          variants={linkContainerVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex items-center gap-8"
        >
          {NAV_CONTENT.links.map((link) => {
            const isActive = pathname === "/residences" && link.name === "Residences";
            return (
              <motion.div key={link.name} variants={linkVariants}>
                <a
                  href={resolveHref(link.href)}
                  className={cn(
                    "text-xs font-semibold uppercase tracking-wider relative py-1.5 transition-colors duration-200",
                    isScrolled
                      ? isActive
                        ? "text-stone-950 font-bold"
                        : "text-stone-600 hover:text-stone-950"
                      : isActive
                        ? "text-white font-bold"
                        : "text-stone-200 hover:text-white"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full",
                        isScrolled ? "bg-stone-900" : "bg-white"
                      )}
                    />
                  )}
                </a>
              </motion.div>
            );
          })}
        </motion.nav>

        {/* CTA BUTTON */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex items-center gap-4"
        >
          <a href={resolveHref(NAV_CONTENT.actions.contactHref)}>
            <Button
              className={cn(
                "rounded-full px-6 h-10 text-xs font-bold tracking-wider uppercase transition-all duration-200",
                isScrolled
                  ? "bg-stone-900 text-white hover:bg-stone-800"
                  : "bg-white text-stone-950 hover:bg-stone-100 shadow-sm"
              )}
            >
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
                aria-label="Open navigation menu"
                className={cn(
                  "rounded-full w-8 h-8 sm:w-9 sm:h-9",
                  isScrolled ? "text-stone-900" : "text-white hover:bg-white/10"
                )}
              >
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </SheetTrigger>

            <SheetContent className="w-full sm:w-[360px] bg-white p-0 border-l border-stone-200">
              <SheetHeader className="p-6 border-b border-stone-100">
                <SheetTitle className="flex items-center gap-2.5 text-base tracking-[0.16em] font-extrabold text-stone-900">
                  <div className="w-8 h-8 rounded-md bg-stone-900 text-white flex items-center justify-center">
                    <NAV_CONTENT.logo.icon className="w-4 h-4" />
                  </div>
                  <span>{NAV_CONTENT.logo.name}</span>
                  <span className="font-light opacity-75">
                    {NAV_CONTENT.logo.highlight}
                  </span>
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Mobile navigation menu and links
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-1 p-6">
                {NAV_CONTENT.links.map((link) => {
                  const isActive = pathname === "/residences" && link.name === "Residences";
                  return (
                    <a
                      key={link.name}
                      href={resolveHref(link.href)}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-colors flex items-center justify-between",
                        isActive
                          ? "bg-stone-900 text-white font-bold"
                          : "text-stone-700 hover:text-stone-950 hover:bg-stone-50"
                      )}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </a>
                  );
                })}
              </div>

              <div className="mt-auto p-6 border-t border-stone-100">
                <a
                  href={resolveHref(NAV_CONTENT.actions.contactHref)}
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  <Button className="w-full rounded-full h-11 text-xs font-bold uppercase tracking-wider bg-stone-900 text-white hover:bg-stone-800">
                    {NAV_CONTENT.actions.contact}
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;