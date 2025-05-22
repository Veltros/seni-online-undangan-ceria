
import { useEffect } from "react";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TentangSection from "@/components/TentangSection";
import AcaraSection from "@/components/AcaraSection";
import DaftarSection from "@/components/DaftarSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Pentas Seni SMK Ceria 2025";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-center" />
      <Header />
      <main>
        <Hero />
        <TentangSection />
        <AcaraSection />
        <DaftarSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
