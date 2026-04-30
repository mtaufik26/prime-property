import { Variants } from "framer-motion";

// ✅ Optimasi 1: Container - animasi hanya opacity + y, hapus scale
export const ctaContainerVariantsOptimized: Variants = {
  hidden: {
    opacity: 0,
    y: 30, // ✅ Kurangi jarak animasi
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // ✅ Lebih cepat: 0.4s vs 0.9s
      ease: "easeOut", // ✅ Native ease lebih ringan dari custom bezier
    },
  },
};

// ✅ Optimasi 2: Content group - animasi lebih cepat, stagger internal via CSS
export const fadeUpVariantsOptimized: Variants = {
  hidden: {
    opacity: 0,
    y: 16, // ✅ Kurangi jarak
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35, // ✅ Sangat cepat: 0.35s
      ease: "easeOut",
      // ✅ Stagger children via CSS animation-delay, bukan Framer Motion
    },
  },
};

// ✅ Optimasi 3: Buttons - animasi minimal, langsung ke final state
export const buttonVariantsOptimized: Variants = {
  hidden: {
    opacity: 0,
    y: 8, // ✅ Jarak sangat pendek
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25, // ✅ Super cepat: 0.25s
      ease: "easeOut",
      delay: 0.1, // ✅ Delay minimal agar muncul setelah content
    },
  },
};