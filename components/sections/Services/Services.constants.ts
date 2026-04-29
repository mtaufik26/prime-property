import { Home, Key, BadgePercent, Calculator, Search, ShieldCheck } from "lucide-react";

export const SERVICES_CONTENT = {
  badge: "Layanan Kami",
  title: "Solusi Properti Lengkap untuk Anda",
  description: "Kami menyediakan berbagai layanan profesional untuk membantu Anda dalam setiap langkah perjalanan properti Anda.",
  services: [
    {
      title: "Jual Beli Properti",
      description: "Bantuan profesional dalam menemukan pembeli terbaik atau rumah impian Anda dengan harga yang tepat.",
      icon: Home,
    },
    {
      title: "Manajemen Properti",
      description: "Layanan pengelolaan properti untuk memaksimalkan ROI dan menjaga kondisi properti Anda tetap prima.",
      icon: Key,
    },
    {
      title: "Konsultasi KPR",
      description: "Panduan lengkap mengenai pembiayaan dan pengajuan KPR dengan bunga kompetitif dari mitra bank kami.",
      icon: Calculator,
    },
    {
      title: "Penilaian Properti",
      description: "Estimasi nilai pasar properti yang akurat untuk keperluan penjualan, asuransi, atau investasi.",
      icon: Search,
    },
    {
      title: "Strategi Investasi",
      description: "Analisis mendalam tentang potensi pasar real estate untuk membantu Anda membuat keputusan investasi cerdas.",
      icon: BadgePercent,
    },
    {
      title: "Legalitas & Notaris",
      description: "Pengurusan dokumen hukum, sertifikat, dan akta jual beli secara aman dan transparan.",
      icon: ShieldCheck,
    },
  ],
};
