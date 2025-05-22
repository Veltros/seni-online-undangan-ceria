
import { Button } from "@/components/ui/button";
import { Calendar, Globe, Users } from "lucide-react";

const TentangSection = () => {
  return (
    <section id="tentang" className="py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-softPink blur-3xl opacity-30"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-sm md:text-base font-medium text-artPurple mb-2">TENTANG ACARA</h2>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Ekspresikan Kreativitas Tanpa Batas
            </h1>
            
            <p className="text-gray-700 mb-6">
              Pentas Seni SMK Ceria 2025 merupakan ajang tahunan untuk menampilkan 
              kreativitas dan bakat seni dari para siswa. Acara ini menampilkan berbagai 
              bentuk seni mulai dari pertunjukan musik, tari, teater, hingga pameran seni visual.
            </p>
            
            <p className="text-gray-700 mb-8">
              Tahun ini, kami mengangkat tema "Kreasi Tanpa Batas" sebagai semangat untuk 
              mendorong para siswa mengeksplorasi kreativitas mereka tanpa batasan.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-softPurple rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-artPurple" />
                </div>
                <h3 className="font-bold mb-1">2 Hari</h3>
                <p className="text-sm text-gray-600">Pertunjukan Menarik</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-softBlue rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-artBlue" />
                </div>
                <h3 className="font-bold mb-1">150+ Siswa</h3>
                <p className="text-sm text-gray-600">Partisipan Berbakat</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-softPink rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-artPink" />
                </div>
                <h3 className="font-bold mb-1">Online & Offline</h3>
                <p className="text-sm text-gray-600">Mode Pertunjukan</p>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-artPurple to-artPink hover:opacity-90">
              Pelajari Lebih Lanjut
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-artPurple to-artPink rotate-6 transform"></div>
              <img
                src="/placeholder.svg" 
                alt="Tentang Pentas Seni" 
                className="relative rounded-2xl w-full max-w-md shadow-lg transform -rotate-3 transition-transform duration-500 hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangSection;
