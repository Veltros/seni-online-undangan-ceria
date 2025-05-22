
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";

const jadwalHari1 = [
  {
    waktu: "08:00 - 09:30",
    acara: "Pembukaan Pentas Seni",
    deskripsi: "Sambutan Kepala Sekolah dan pengisi acara"
  },
  {
    waktu: "09:30 - 11:00",
    acara: "Penampilan Tari Tradisional",
    deskripsi: "Persembahan dari siswa kelas 10 & 11"
  },
  {
    waktu: "11:00 - 12:30",
    acara: "Pertunjukan Band Sekolah",
    deskripsi: "Band-band terbaik SMK Ceria"
  },
  {
    waktu: "13:30 - 15:00",
    acara: "Pameran Seni Visual",
    deskripsi: "Karya lukis, fotografi, dan desain grafis"
  },
  {
    waktu: "15:00 - 17:00",
    acara: "Pentas Drama",
    deskripsi: "Pementasan teater karya siswa"
  }
];

const jadwalHari2 = [
  {
    waktu: "09:00 - 10:30",
    acara: "Workshop Seni Rupa",
    deskripsi: "Belajar teknik melukis bersama seniman lokal"
  },
  {
    waktu: "10:30 - 12:00",
    acara: "Penampilan Paduan Suara",
    deskripsi: "Persembahan dari grup paduan suara sekolah"
  },
  {
    waktu: "13:00 - 14:30",
    acara: "Festival Tari Modern",
    deskripsi: "Penampilan tari modern dan kontemporer"
  },
  {
    waktu: "14:30 - 16:00",
    acara: "Kompetisi Bakat",
    deskripsi: "Ajang unjuk bakat individu siswa"
  },
  {
    waktu: "16:00 - 17:30",
    acara: "Penutupan & Pengumuman Pemenang",
    deskripsi: "Pengumuman pemenang kompetisi dan penutupan acara"
  }
];

const AcaraSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="acara" className="py-16 bg-gradient-to-b from-white to-softPurple/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-sm md:text-base font-medium text-artPurple mb-2">JADWAL ACARA</h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Rangkaian Acara Pentas Seni</h1>
          <p className="text-gray-700">
            Nikmati berbagai penampilan menarik selama dua hari penuh keseruan
            dan kreativitas dari para siswa berbakat.
          </p>
        </div>
        
        <div className="mt-8">
          <Tabs defaultValue="hari1" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                <TabsTrigger value="hari1" className="data-[state=active]:bg-artPurple data-[state=active]:text-white">
                  Hari 1 (25 Agustus)
                </TabsTrigger>
                <TabsTrigger value="hari2" className="data-[state=active]:bg-artPurple data-[state=active]:text-white">
                  Hari 2 (26 Agustus)
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="hari1" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jadwalHari1.map((item, index) => (
                  <Card key={index} className="overflow-hidden border border-artPurple/10 hover:shadow-lg hover:shadow-artPurple/5 transition-all duration-300">
                    <div className="h-2 bg-gradient-to-r from-artPurple to-artPink"></div>
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        <span>{item.acara}</span>
                      </CardTitle>
                      <CardDescription className="text-artPurple font-medium">
                        {item.waktu}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{item.deskripsi}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="hari2" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jadwalHari2.map((item, index) => (
                  <Card key={index} className="overflow-hidden border border-artPurple/10 hover:shadow-lg hover:shadow-artPurple/5 transition-all duration-300">
                    <div className="h-2 bg-gradient-to-r from-artBlue to-artPurple"></div>
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        <span>{item.acara}</span>
                      </CardTitle>
                      <CardDescription className="text-artBlue font-medium">
                        {item.waktu}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{item.deskripsi}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AcaraSection;
