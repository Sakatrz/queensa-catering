import { Sandwich, Plus } from "lucide-react";
import Slider from "react-slick";

interface MenuNasiBoxProps {
  sliderSettings: any;
  nasiBoxImages: { url: string; caption: string }[];
  addToCart: (item: { id: string; name: string; price: number; category: string }) => void;
}

export function MenuNasiBox({ sliderSettings, nasiBoxImages, addToCart }: MenuNasiBoxProps) {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8 border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sticky Panel (Carousel & Info) - 4 Columns */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-3xl shadow-lg text-white">
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shadow">
                <Sandwich className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-2xl font-bold">Nasi Box</h3>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Pilihan paket nasi lengkap dengan lauk pauk segar yang sehat, bergizi, dan dikemas secara higienis menggunakan box kokoh. Sangat ideal untuk kebutuhan konsumsi berbagai acara kampus, kepanitiaan, maupun seminar.
            </p>
          </div>

          {/* Carousel */}
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-350">
            <Slider {...sliderSettings}>
              {nasiBoxImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-56 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm text-center font-medium">{image.caption}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Quick Specifications */}
          <div className="bg-cream border border-primary/15 p-5 rounded-2xl space-y-3 text-sm text-espresso font-medium">
            <h5 className="font-bold text-primary mb-2 text-xs uppercase tracking-wider">Highlight Nasi Box</h5>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span> <span>Min. Order 15 Box</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span> <span>Pilihan Menu Fleksibel</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span> <span>Kemasan Rapi & Kokoh</span>
            </div>
          </div>
        </div>

        {/* Right Main Grid (Menu Variants) - 8 Columns */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Paket Reguler */}
          <div className="group">
            <div className="bg-gradient-to-br from-peach to-white rounded-3xl shadow-xl overflow-hidden border-2 border-primary/30 hover:border-primary hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-primary to-primary/85 p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <h4 className="text-white text-xl sm:text-2xl font-bold">Paket Reguler</h4>
                  <div className="bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full shadow-lg border border-white/20 w-fit shrink-0">
                    <span className="text-lg sm:text-xl font-bold">Rp 15.000</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {[
                  "Nasi Putih | LeLe Goreng | Sambel Goreng | Soon Goreng | Krupuk",
                  "Nasi Putih | Galantin Asam Manis | Tumis Buncis | Tempe Orek | Krupuk",
                  "Nasi Putih | Telur Balado | Sambe Goreng | Mie Goreng | Krupuk"
                ].map((item, index) => {
                  const components = item.split("|").map(s => s.trim());
                  const mainItem = components[1] || components[0];
                  const otherItems = components.filter((_, idx) => idx !== 1);
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-5 border-2 border-primary/10 hover:border-primary hover:shadow-lg transition-all duration-300 group/item flex items-center justify-between gap-4"
                    >
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-800 text-base group-hover/item:text-primary transition-colors">{mainItem}</h5>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {otherItems.map((comp, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium">
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          addToCart({
                            id: `nasibox-15k-${index}`,
                            name: `Nasi Box Reguler - ${mainItem}`,
                            price: 15000,
                            category: "Nasi Box"
                          })
                        }
                        className="bg-primary text-white py-2.5 px-5 rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 text-sm font-semibold whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        Pilih
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Paket Premium */}
          <div className="group">
            <div className="bg-gradient-to-br from-peach/50 to-white rounded-3xl shadow-xl overflow-hidden border-2 border-secondary/30 hover:border-secondary hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-secondary to-secondary/85 p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <h4 className="text-white text-xl sm:text-2xl font-bold">Paket Premium</h4>
                  <div className="bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full shadow-lg border border-white/20 w-fit shrink-0">
                    <span className="text-lg sm:text-xl font-bold">Rp 17.000</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {[
                  "Nasi Putih | Ayam Goreng | Sambel Goreng | Soon Goreng | Krupuk",
                  "Nasi Putih | Rica-Rica Ayam | Tumis Sawi | Mie Goreng | Krupuk",
                  "Nasi Putih | Ayam Geprek | Mie Goreng | Lalapan | Krupuk"
                ].map((item, index) => {
                  const components = item.split("|").map(s => s.trim());
                  const mainItem = components[1] || components[0];
                  const otherItems = components.filter((_, idx) => idx !== 1);
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-5 border-2 border-secondary/10 hover:border-secondary hover:shadow-lg transition-all duration-300 group/item flex items-center justify-between gap-4"
                    >
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-800 text-base group-hover/item:text-secondary transition-colors">{mainItem}</h5>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {otherItems.map((comp, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium">
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          addToCart({
                            id: `nasibox-17k-${index}`,
                            name: `Nasi Box Premium - ${mainItem}`,
                            price: 17000,
                            category: "Nasi Box"
                          })
                        }
                        className="bg-secondary text-white py-2.5 px-5 rounded-xl hover:bg-secondary/90 transition-all flex items-center gap-2 text-sm font-semibold whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        Pilih
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
