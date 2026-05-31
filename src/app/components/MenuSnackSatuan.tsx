import { Cookie, Plus } from "lucide-react";
import Slider from "react-slick";

interface MenuSnackSatuanProps {
  sliderSettings: any;
  snackSatuanImages: { url: string; caption: string }[];
  addToCart: (item: { id: string; name: string; price: number; category: string }) => void;
}

export function MenuSnackSatuan({ sliderSettings, snackSatuanImages, addToCart }: MenuSnackSatuanProps) {
  const snackItems = [
    "Arem Ayam",
    "Arem Tahu",
    "Risol Rogut",
    "Kroket",
    "Sosis Solo",
    "Pastel Ayam",
    "Pastel Rogut",
    "Samosa",
    "Tahu Isi",
    "Tahu Mercon",
    "Donat Gula",
    "Jentik Manis",
    "Puding"
  ];

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8 border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sticky Panel (Carousel & Info) - 4 Columns */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-3xl shadow-lg text-white">
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-2xl font-bold">Snack Satuan</h3>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Pilihan jajanan pasar, kue basah, Risol, gorengan, dan aneka snack eceran lezat terfavorit. Pilih sendiri jajanan kesukaan Anda untuk dinikmati langsung atau disusun menjadi snack box kustom Anda sendiri.
            </p>
          </div>

          {/* Carousel */}
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-350">
            <Slider {...sliderSettings}>
              {snackSatuanImages.map((image, index) => (
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

          {/* Price Banner */}
          <div className="bg-gradient-to-r from-primary to-primary/85 text-white p-6 rounded-3xl shadow-lg text-center border border-white/10">
            <p className="text-sm uppercase tracking-wider text-peach font-bold mb-1">Harga Flat Per Item</p>
            <p className="text-4xl font-extrabold">Rp 2.500</p>
          </div>

          {/* Info Box */}
          <div className="bg-peach/30 border-l-4 border-primary p-5 rounded-r-xl text-sm text-espresso">
            <p className="leading-relaxed">
              💡 <strong>Tips:</strong> Klik <strong>"Pilih"</strong> pada item yang Anda inginkan untuk memasukkan ke keranjang belanja. Campur berbagai jajanan untuk membuat paket snack box kustom Anda sendiri!
            </p>
          </div>
        </div>

        {/* Right Main Grid (Snack Items Grid) - 8 Columns */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {snackItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border-2 border-primary/15 hover:border-primary hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-4 text-center flex flex-col justify-between h-full min-h-[130px]">
                  <p className="text-sm font-bold text-gray-800 mb-3 h-10 flex items-center justify-center group-hover:text-primary transition-colors">{item}</p>
                  <button
                    onClick={() =>
                      addToCart({
                        id: `snack-${index}-${item.toLowerCase().replace(/\s+/g, "-")}`,
                        name: item,
                        price: 2500,
                        category: "Snack Satuan"
                      })
                    }
                    className="w-full bg-primary text-white py-2 px-3 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-1.5 text-xs font-semibold shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-white" />
                    Pilih
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
