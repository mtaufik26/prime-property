import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Properties from "@/components/sections/Properties/Properties";
import Services from "@/components/sections/Services/Services";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import FAQ from "@/components/sections/FAQ/FAQ";
import CTA from "@/components/sections/CTA/CTA";
import Process from "@/components/sections/Process/Process";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Properties />
      <Services />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
