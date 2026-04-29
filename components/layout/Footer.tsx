"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from "lucide-react";

import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    perusahaan: [
      { name: "Tentang Kami", href: "#about" },
      { name: "Layanan", href: "#layanan" },
      { name: "Properti", href: "#properti" },
      { name: "Karir", href: "#" },
    ],
    dukungan: [
      { name: "Pusat Bantuan", href: "#faq" },
      { name: "Kebijakan Privasi", href: "#" },
      { name: "Syarat & Ketentuan", href: "#" },
      { name: "Kontak", href: "#kontak" },
    ],
    layanan: [
      { name: "Beli Properti", href: "#properti" },
      { name: "Jual Properti", href: "#" },
      { name: "Sewa Apartemen", href: "#" },
      { name: "Manajemen Aset", href: "#" },
    ],
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand Column */}
          <div className="flex flex-col space-y-8">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Building2 className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Prime<span className="text-primary">Property</span>
              </span>
            </Link>
            <p className="text-slate-500 leading-relaxed font-medium">
              Menemukan hunian impian Anda adalah misi kami. Kami menyediakan layanan properti kelas dunia dengan integritas dan profesionalisme.
            </p>
            <div className="flex items-center gap-4">
              {[  FaInstagram, FaTwitter, FaFacebookF, FaYoutube].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-90">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 lg:col-span-2">
            <div className="flex flex-col space-y-6">
              <h4 className="text-slate-900 font-bold text-lg">Perusahaan</h4>
              <ul className="flex flex-col space-y-4">
                {footerLinks.perusahaan.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-500 hover:text-primary transition-colors font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col space-y-6">
              <h4 className="text-slate-900 font-bold text-lg">Layanan</h4>
              <ul className="flex flex-col space-y-4">
                {footerLinks.layanan.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-500 hover:text-primary transition-colors font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-slate-900 font-bold text-lg">Hubungi Kami</h4>
            <ul className="flex flex-col space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-slate-500 font-medium text-sm leading-relaxed">
                  Jl. Sudirman No. 123, Jakarta Selatan, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-slate-500 font-medium text-sm">
                  +62 21 1234 5678
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-slate-500 font-medium text-sm">
                  hello@primeproperty.id
                </span>
              </li>
            </ul>
          </div>

        </div>

        <Separator className="my-12 bg-slate-200/60" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm font-medium">
            © 2024 Prime Property. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-8 text-sm font-bold text-slate-400">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full w-12 h-12 bg-white shadow-lg border-slate-100 hover:bg-primary hover:text-white transition-all group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
