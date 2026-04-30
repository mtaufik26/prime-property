import { Search, UserCheck, Key, CreditCard } from "lucide-react";

export const PROCESS_CONTENT = {
  badge: "Langkah Kami",
  title: "Proses Sederhana Menuju Rumah Impian",
  description: "Kami menyederhanakan perjalanan properti Anda dengan proses yang transparan dan terukur.",
  steps: [
    {
      title: "Cari & Temukan",
      description: "Pilih properti impian Anda dari koleksi eksklusif kami yang tersebar di lokasi strategis.",
      icon: Search,
      color: "bg-blue-500",
    },
    {
      title: "Konsultasi Ahli",
      description: "Diskusikan kebutuhan dan preferensi Anda dengan agen profesional kami secara gratis.",
      icon: UserCheck,
      color: "bg-primary",
    },
    {
      title: "Proses Administrasi",
      description: "Kami bantu pengurusan dokumen, legalitas, hingga pengajuan KPR dengan cepat.",
      icon: CreditCard,
      color: "bg-sky-400",
    },
    {
      title: "Serah Terima",
      description: "Nikmati momen berharga saat Anda menerima kunci rumah impian baru Anda.",
      icon: Key,
      color: "bg-slate-900",
    },
  ],
};
