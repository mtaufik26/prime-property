import { ShieldCheck, Compass, Award } from "lucide-react";

export const HERO_CONTENT = {
  badge: "Private Real Estate Advisory",
  title: {
    lead: "Architectural Distinction.",
    main: "Exceptional Living.",
  },
  description:
    "Curating a discreet portfolio of architecturally significant homes, luxury penthouses, and private estates in the world's most sought-after enclaves.",
  cta: {
    primary: "Explore Residences",
    primaryHref: "#residences",
    secondary: "Private Consultation",
    secondaryHref: "#inquire",
  },
};

export const HERO_METRICS = [
  {
    icon: Compass,
    value: "$1.8B+",
    label: "Portfolio Transacted",
    desc: "Across prime international territories",
  },
  {
    icon: Award,
    value: "14+ Years",
    label: "Advisory Heritage",
    desc: "Trusted by founders, leaders & estates",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Verified Clear Titles",
    desc: "Rigorous legal vetting & sovereign safety",
  },
];