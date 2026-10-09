"use client";

import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA_CONTENT } from "./CTA.constants";

const CTA = memo(() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    property: CTA_CONTENT.propertyOptions[0],
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsLoading(true);
    // Showcase simulation: instantaneous, clean, reliable without backend dependency
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      property: CTA_CONTENT.propertyOptions[0],
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <section
      id="inquire"
      className="relative py-24 lg:py-32 bg-stone-950 text-white overflow-hidden scroll-mt-20"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column: Advisory Narrative & Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-stone-800 border border-stone-700 text-stone-200 text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-4">
                {CTA_CONTENT.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                {CTA_CONTENT.headline}
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-normal mt-4">
                {CTA_CONTENT.description}
              </p>
            </div>

            {/* Direct Contact Coordinates */}
            <div className="space-y-4 pt-2 border-t border-stone-800">
              {CTA_CONTENT.directContacts.map((contact, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                    {idx === 0 && <Phone className="w-4 h-4 text-stone-300" />}
                    {idx === 1 && <Mail className="w-4 h-4 text-stone-300" />}
                    {idx === 2 && <MapPin className="w-4 h-4 text-stone-300" />}
                  </div>
                  <div>
                    <span className="block text-[0.65rem] uppercase tracking-wider font-semibold text-stone-400">
                      {contact.label}
                    </span>
                    <a
                      href={contact.href}
                      className="text-xs sm:text-sm font-medium text-stone-100 hover:text-white transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Discretion Note */}
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-stone-900/60 border border-stone-800 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-stone-300 shrink-0" />
              <span>Strict non-disclosure protocols apply to all inquiries.</span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            {isSubmitted ? (
              <div className="py-12 px-4 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-stone-800 border border-stone-700 text-stone-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Consultation Request Received
                </h3>
                <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. A
                  senior private client partner has received your request regarding{" "}
                  <strong className="text-white">{formData.property}</strong> and will contact
                  you within 24 hours.
                </p>
                <div className="pt-4">
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="rounded-full px-6 text-xs font-semibold uppercase tracking-wider border-stone-700 bg-stone-800 text-white hover:bg-stone-700"
                  >
                    Submit Another Request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                    Request Confidential Portfolio Access
                  </h3>
                  <p className="text-xs text-stone-400">
                    Please provide your contact coordinates to connect with an advisory director.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="client-name"
                      className="block text-[0.7rem] uppercase tracking-wider font-semibold text-stone-300"
                    >
                      Full Name *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Lord Harrington"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full h-11 px-3.5 rounded-xl bg-stone-950/80 border border-stone-800 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:border-stone-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="client-email"
                      className="block text-[0.7rem] uppercase tracking-wider font-semibold text-stone-300"
                    >
                      Email Address *
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      placeholder="e.g. harrington@estate.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full h-11 px-3.5 rounded-xl bg-stone-950/80 border border-stone-800 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:border-stone-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="property-selection"
                    className="block text-[0.7rem] uppercase tracking-wider font-semibold text-stone-300"
                  >
                    Residence or Subject of Interest
                  </label>
                  <select
                    id="property-selection"
                    value={formData.property}
                    onChange={(e) =>
                      setFormData({ ...formData, property: e.target.value })
                    }
                    className="w-full h-11 px-3.5 rounded-xl bg-stone-950/80 border border-stone-800 text-sm text-white focus:outline-none focus:border-stone-400 transition-colors cursor-pointer"
                  >
                    {CTA_CONTENT.propertyOptions.map((opt, i) => (
                      <option key={i} value={opt} className="bg-stone-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="client-message"
                    className="block text-[0.7rem] uppercase tracking-wider font-semibold text-stone-300"
                  >
                    Specific Requirements or Timeline (Optional)
                  </label>
                  <textarea
                    id="client-message"
                    rows={3}
                    placeholder="Provide any preferences regarding location, architectural style, or private viewing schedule..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full p-3 rounded-xl bg-stone-950/80 border border-stone-800 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:border-stone-400 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-full h-12 text-xs font-bold uppercase tracking-wider bg-white text-stone-950 hover:bg-stone-100 transition-all duration-200 mt-2"
                >
                  {isLoading ? (
                    "Transmitting Request..."
                  ) : (
                    <>
                      Submit Confidential Request
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

CTA.displayName = "CTA";

export default CTA;