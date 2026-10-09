import type { Metadata } from "next";
import ResidencesClient from "./ResidencesClient";

export const metadata: Metadata = {
  title: "Curated Architectural Portfolio | Prime Property",
  description:
    "Explore our complete private archive of 9 architecturally significant homes, luxury penthouses, and private estates across Bali, Jakarta, and Bandung.",
};

export default function ResidencesPage() {
  return <ResidencesClient />;
}
