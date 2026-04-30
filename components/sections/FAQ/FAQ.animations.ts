import { Variants } from "framer-motion";

// ✅ Optimasi 1: Container - animasi hanya opacity + x, durasi lebih pendek
export const containerVariantsOptimized: Variants = {
  hidden: {
    opacity: 0,
    x: -20, // ✅ Kurangi jarak animasi
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35, // ✅ Lebih cepat: 0.35s vs 0.7s
      ease: "easeOut", // ✅ Native ease lebih ringan dari custom bezier
    },
  },
};

// ✅ Optimasi 2: Fade side - sama untuk kiri/kanan, lebih konsisten & ringan
export const fadeSideVariantsOptimized: Variants = {
  hidden: {
    opacity: 0,
    x: 20, // ✅ Jarak pendek
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35, // ✅ Sangat cepat
      ease: "easeOut",
    },
  },
};

// ✅ Optimasi 3: Accordion items - animasi minimal, handled by Accordion component
export const accordionItemVariantsOptimized: Variants = {
  hidden: {
    opacity: 0,
    y: 8, // ✅ Jarak sangat pendek
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2, // ✅ Super cepat: 0.2s
      ease: "easeOut",
    },
  },
};