
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const DaftarSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real application, this would submit the form data to a server
    toast.success("Pendaftaran berhasil dikirim! Kami akan menghubungi Anda segera.", {
      description: "Terima kasih telah mendaftar untuk Pentas Seni SMK Ceria 2025!",
    });
  };
  
  return (
    <section id="daftar" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-sm md:text-base font-medium text-artPurple mb-2">DAFTAR SEKARANG</h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Reservasi Tempat Anda</h1>
          <p className="text-gray-700">
            Daftar sekarang untuk mengamankan tempat Anda di Pentas Seni SMK Ceria 2025.
            Dapatkan akses untuk menikmati semua penampilan dan acara!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border-artPurple/10 shadow-xl shadow-artPurple/5">
            <CardHeader className="bg-gradient-to-r from-artPurple to-artPink text-white text-center rounded-t-lg">
              <CardTitle className="text-2xl">Formulir Pendaftaran</CardTitle>
              <CardDescription className="text-white/80">
                Isi data diri Anda untuk menghadiri acara
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nama">Nama Lengkap</Label>
                    <Input id="nama" placeholder="Masukkan nama lengkap" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="nama@email.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telepon">Nomor Telepon</Label>
                    <Input id="telepon" placeholder="0812xxxxxxxx" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="jenistiket">Jenis Tiket</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis tiket" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reguler">Tiket Reguler (Rp 50.000)</SelectItem>
                        <SelectItem value="vip">Tiket VIP (Rp 100.000)</SelectItem>
                        <SelectItem value="online">Akses Online (Rp 25.000)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="jumlah">Jumlah Tiket</Label>
                    <Select defaultValue="1" required>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 tiket</SelectItem>
                        <SelectItem value="2">2 tiket</SelectItem>
                        <SelectItem value="3">3 tiket</SelectItem>
                        <SelectItem value="4">4 tiket</SelectItem>
                        <SelectItem value="5">5 tiket</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="hari">Pilihan Hari</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih hari" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hari1">Hari 1 (25 Agustus)</SelectItem>
                        <SelectItem value="hari2">Hari 2 (26 Agustus)</SelectItem>
                        <SelectItem value="duahari">Kedua Hari</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="pesan">Pesan (opsional)</Label>
                  <Textarea id="pesan" placeholder="Tulis pesan atau pertanyaan Anda di sini" />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-artPurple to-artPink hover:opacity-90 text-lg py-6"
                >
                  Daftar Sekarang
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DaftarSection;
