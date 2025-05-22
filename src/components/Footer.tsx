
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Globe, MessageSquare, Share, User } from "lucide-react";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-gradient-to-br from-secondary to-secondary/90 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Pentas Seni</h3>
            <p className="text-white/80 mb-6">
              Eksplorasi kreativitas tanpa batas melalui pertunjukan seni dari siswa-siswi berbakat SMK Ceria.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/20 hover:text-white">
                <Share className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/20 hover:text-white">
                <Globe className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/20 hover:text-white">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Informasi Acara</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-artPink" />
                <span>25-26 Agustus 2025</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-artPink" />
                <span>Aula SMK Ceria</span>
              </li>
              <li className="flex items-center gap-2">
                <User className="h-5 w-5 text-artPink" />
                <span>Panitia: OSIS SMK Ceria</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-artPink" />
                <span>info@smkceria.sch.id</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Link Penting</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-artPink transition-colors">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-artPink transition-colors">Tentang Acara</a></li>
              <li><a href="#acara" className="hover:text-artPink transition-colors">Jadwal Acara</a></li>
              <li><a href="#galeri" className="hover:text-artPink transition-colors">Galeri</a></li>
              <li><a href="#daftar" className="hover:text-artPink transition-colors">Pendaftaran</a></li>
              <li><a href="https://smkceria.sch.id" className="hover:text-artPink transition-colors">Website Sekolah</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Berlangganan</h3>
            <p className="text-white/80 mb-4">
              Dapatkan informasi terbaru tentang acara kami.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Email Anda" 
                className="bg-white/10 border-white/20 placeholder:text-white/60 focus-visible:ring-artPink focus-visible:border-artPink"
              />
              <Button className="bg-gradient-to-r from-artPurple to-artPink hover:opacity-90">
                Langganan
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} SMK Ceria. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
