
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isSticky 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <h1 className={`font-bold ${isSticky ? "text-xl" : "text-2xl"} transition-all duration-300`}>
          <span className="text-gradient">PENTAS SENI</span>
        </h1>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium hover:text-artPurple transition-colors">Home</a>
          <a href="#tentang" className="text-sm font-medium hover:text-artPurple transition-colors">Tentang</a>
          <a href="#acara" className="text-sm font-medium hover:text-artPurple transition-colors">Acara</a>
          <a href="#galeri" className="text-sm font-medium hover:text-artPurple transition-colors">Galeri</a>
          <a href="#kontak" className="text-sm font-medium hover:text-artPurple transition-colors">Kontak</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:flex border-artPurple text-artPurple hover:bg-artPurple hover:text-white"
          >
            Jadwal
          </Button>
          <Button
            className="bg-gradient-to-r from-artPurple to-artPink hover:opacity-90"
          >
            Daftar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
