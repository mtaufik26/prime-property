import { Compass, BarChart3, Building, ShieldCheck } from "lucide-react";

export const SERVICES_CONTENT = {
  badge: "Advisory Practices",
  title: "Private Client Real Estate Services",
  description:
    "We provide bespoke counsel tailored to the unique requirements of private collectors, family offices, and institutional investors.",
  services: [
    {
      title: "Private Acquisitions & Representation",
      description:
        "Discreet sourcing and negotiation for unlisted, off-market estates and prime architectural residences with total buyer anonymity.",
      icon: Compass,
      highlights: [
        "Off-Market Portfolio Access",
        "Confidential Negotiation Protocol",
        "Comprehensive Due Diligence",
      ],
    },
    {
      title: "Architectural & Market Valuation",
      description:
        "Independent, rigorous appraisals combining architectural pedigree analysis, spatial replacement costs, and macroeconomic trends.",
      icon: BarChart3,
      highlights: [
        "Comparative Market Modeling",
        "Architectural Replacement Value",
        "Capital Growth Projections",
      ],
    },
    {
      title: "Portfolio Asset Management",
      description:
        "Active stewardship for multi-asset real estate holdings, optimizing net yields, maintenance protocols, and capital preservation.",
      icon: Building,
      highlights: [
        "High-Yield Tenancy Curation",
        "Preventative Maintenance Governance",
        "Periodic Portfolio Performance Audits",
      ],
    },
    {
      title: "Conveyancing & Legal Escrow",
      description:
        "End-to-end title verification, cross-border remittance structuring, notary liaison, and transparent escrow account administration.",
      icon: ShieldCheck,
      highlights: [
        "Unencumbered Title Verification",
        "Cross-Border Escrow Administration",
        "Tax & Sovereign Compliance",
      ],
    },
  ],
};
