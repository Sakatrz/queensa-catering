import { Cookie, Plus } from "lucide-react";
import Slider from "react-slick";

interface MenuSnackBoxProps {
  sliderSettings: any;
  snackImages: { url: string; caption: string }[];
  addToCart: (item: { id: string; name: string; price: number; category: string }) => void;
}

export function MenuSnackBox({ sliderSettings, snackImages, addToCart }: MenuSnackBoxProps) {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8 border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sticky Panel (Carousel & Info) - 4 Columns */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="bg-gradient-to-r from-accent to-accent/85 p-6 rounded-3xl shadow-lg text-white">
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shadow">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-2xl font-bold">Snack Box</h3>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Paket cemilan komplit yang higienis, lezat, dan dikemas rapi dalam satu box praktis. Sangat cocok disajikan untuk konsumsi rapat, seminar, arisan, maupun event kampus dalam skala besar maupun kecil.
            </p>
          </div>

          {/* Carousel */}
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-350">
            <Slider {...sliderSettings}>
              {snackImages.map((image, index) => (
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
          <div className="bg-cream border border-accent/20 p-5 rounded-2xl space-y-3 text-sm text-espresso font-medium">
            <h5 className="font-bold text-accent mb-2 text-xs uppercase tracking-wider">Highlight Snack Box</h5>
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span> <span>Praktis & Higienis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span> <span>Isi Box Komplit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span> <span>Minum Cup Sudah Termasuk</span>
            </div>
          </div>
        </div>

        {/* Right Main Grid (Snack Box Packages) - 8 Columns */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Snack Box 6.500",
              price: 6500,
              items: ["Arem Ayam", "Donat Gula", "Kletikan", "Minum Cup 200ml"]
            },
            {
              name: "Snack Box 7.000",
              price: 7000,
              items: ["Arem Ayam", "Donat Meses", "Kletikan", "Minum Cup 200ml"]
            },
            {
              name: "Snack Box 8.500",
              price: 8500,
              items: ["Arem Ayam", "Roti Coklat", "Kroket", "Minum Cup 200ml"]
            },
            {
              name: "Snack Box 9.500",
              price: 9500,
              items: ["Arem Ayam", "Ciffon Keju", "Pastel Ayam", "Kletikan", "Minum Cup 200ml"]
            }
          ].map((pkg, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-accent/5 to-white rounded-3xl shadow-xl overflow-hidden border-2 border-accent/25 hover:border-accent hover:shadow-2xl transition-all duration-300 flex flex-col h-full justify-between">
                <div>
                  <div className="bg-gradient-to-r from-accent to-accent/85 p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <h4 className="text-white text-lg sm:text-xl font-bold">{pkg.name}</h4>
                      <div className="bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full shadow-lg border border-white/20 w-fit shrink-0">
                        <span className="text-base sm:text-lg font-bold">Rp {pkg.price.toLocaleString("id-ID")}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-3 font-semibold text-xs">Isi paket katering:</p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {pkg.items.map((item, idx) => (
                        <div key={idx} className="bg-white p-2.5 rounded-xl shadow-sm border border-accent/15 hover:border-accent hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center min-h-[54px]">
                          <p className="text-[10px] sm:text-xs text-gray-700 text-center font-bold text-espresso">✓ {item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button
                    onClick={() =>
                      addToCart({
                        id: `snackbox-${pkg.price}`,
                        name: pkg.name,
                        price: pkg.price,
                        category: "Snack Box"
                      })
                    }
                    className="w-full bg-accent text-white py-3 rounded-xl hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm font-bold cursor-pointer"
                  >
                    <Plus className="w-4 h-4 text-white" />
                    Pilih Paket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
