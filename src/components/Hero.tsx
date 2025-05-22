
import { Button } from "@/components/ui/button";
import { Calendar, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-softPurple blur-3xl opacity-60"></div>
      <div className="absolute top-40 -right-20 w-96 h-96 rounded-full bg-softBlue blur-3xl opacity-60"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-sm md:text-base font-medium text-artPurple mb-4">SMK CERIA PERSEMBAHAN</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              PENTAS SENI<br />
              <span className="text-gradient">KREASI TANPA BATAS</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Eksplorasi bakat seni siswa SMK dalam pertunjukan yang memukau dengan beragam tampilan tari, musik, teater, dan karya visual yang kreatif.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-artPurple" />
                <span className="font-medium">25-26 Agustus 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-artPurple" />
                <span className="font-medium">Aula SMK Ceria & Live Streaming</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-artPurple to-artPink text-white hover:opacity-90"
              >
                Daftar Sekarang
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-artPurple text-artPurple hover:bg-artPurple hover:text-white"
              >
                Lihat Jadwal
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-bounce-in">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-artPurple/20 to-artPink/20 blur-lg"></div>
              <img
                src="/placeholder.svg" 
                alt="Pentas Seni SMK" 
                className="relative z-10 rounded-2xl w-full max-w-md shadow-xl"
                width={500}
                height={500}
              />
              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-artOrange rounded-full flex items-center justify-center text-white animate-float">
                <span className="font-bold">Seni</span>
              </div>
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-artBlue rounded-full flex items-center justify-center text-white animate-float" style={{ animationDelay: '1s' }}>
                <span className="font-bold">Musik</span>
              </div>
              <div className="absolute top-1/2 -right-10 w-14 h-14 bg-artPink rounded-full flex items-center justify-center text-white animate-float" style={{ animationDelay: '2s' }}>
                <span className="font-bold">Tari</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
