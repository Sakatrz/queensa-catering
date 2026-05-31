import { Phone, Truck, DollarSign, Shield, Facebook, Instagram, MessageCircle, UtensilsCrossed, Cookie, Sandwich, ChevronDown, ShoppingCart, X, Plus, Minus, Trash2, ArrowLeft, ChevronLeft, ChevronRight, Menu as MenuIcon, Home, ClipboardList, Download } from "lucide-react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { MenuNasiBox } from "./components/MenuNasiBox";
import { MenuSnackBox } from "./components/MenuSnackBox";
import { MenuSnackSatuan } from "./components/MenuSnackSatuan";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'ease-in-out',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const nasiBoxImages = [
    {
      url: "https://images.unsplash.com/photo-1569058242252-623df46b5025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      caption: "Nasi Putih dengan Ayam Goreng"
    },
    {
      url: "https://images.unsplash.com/photo-1705088293300-8fc8c7be90e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      caption: "Paket Nasi Komplit"
    },
    {
      url: "https://images.unsplash.com/photo-1647093953000-9065ed6f85ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      caption: "Nasi dengan Sayuran Fresh"
    },
  ];

  const snackImages = [
    {
      url: "https://images.unsplash.com/photo-1655689712221-59a7dd6a01f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      caption: "Berbagai Pilihan Snack"
    },
    {
      url: "https://images.unsplash.com/photo-1655689711629-84ba33584064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      caption: "Snack Box Kemasan"
    },
  ];

  const snackSatuanImages = [
    {
      url: "https://images.unsplash.com/photo-1658373072934-d96e583a44f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      caption: "Gorengan Crispy"
    },
    {
      url: "https://images.unsplash.com/photo-1676700310614-600f2aa255ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      caption: "Aneka Snack Favorit"
    },
    {
      url: "https://images.unsplash.com/photo-1566361892779-6afb6bca7052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      caption: "Gorengan Fresh"
    },
    {
      url: "https://images.unsplash.com/photo-1740727262951-17ef2eff39f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      caption: "Cemilan Enak"
    },
  ];

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prevCart: CartItem[]) => {
      const existingItem = prevCart.find((i: CartItem) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i: CartItem) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart: CartItem[]) => prevCart.filter((item: CartItem) => item.id !== id));
  };

  const updateQuantity = (id: string, change: number) => {
    setCart((prevCart: CartItem[]) =>
      prevCart
        .map((item: CartItem) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
        )
        .filter((item: CartItem) => item.quantity > 0)
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0);
  };

  const sendWhatsAppOrder = () => {
    const orderText = cart
      .map((item: CartItem) => `${item.quantity}x ${item.name} - Rp ${(item.price * item.quantity).toLocaleString("id-ID")}`)
      .join("\n");
    const total = getTotalPrice();
    const message = `Halo, saya mau pesan:\n\n${orderText}\n\n*Total: Rp ${total.toLocaleString("id-ID")}*\n\nMohon kirimkan detail rekening untuk pembayaran. Terima kasih!`;
    const whatsappUrl = `https://wa.me/6288200860059?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return <AppContent
    activeCategory={activeCategory}
    setActiveCategory={setActiveCategory}
    cart={cart}
    isCartOpen={isCartOpen}
    setIsCartOpen={setIsCartOpen}
    isMobileMenuOpen={isMobileMenuOpen}
    setIsMobileMenuOpen={setIsMobileMenuOpen}
    addToCart={addToCart}
    removeFromCart={removeFromCart}
    updateQuantity={updateQuantity}
    getTotalPrice={getTotalPrice}
    sendWhatsAppOrder={sendWhatsAppOrder}
    sliderSettings={sliderSettings}
    nasiBoxImages={nasiBoxImages}
    snackImages={snackImages}
    snackSatuanImages={snackSatuanImages}
  />;
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
    >
      <ChevronRight className="w-6 h-6 text-espresso" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
    >
      <ChevronLeft className="w-6 h-6 text-espresso" />
    </button>
  );
}

interface AppContentProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, change: number) => void;
  getTotalPrice: () => number;
  sendWhatsAppOrder: () => void;
  sliderSettings: any;
  nasiBoxImages: { url: string; caption: string }[];
  snackImages: { url: string; caption: string }[];
  snackSatuanImages: { url: string; caption: string }[];
}

function AppContent({
  activeCategory,
  setActiveCategory,
  cart,
  isCartOpen,
  setIsCartOpen,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  addToCart,
  removeFromCart,
  updateQuantity,
  getTotalPrice,
  sendWhatsAppOrder,
  sliderSettings,
  nasiBoxImages,
  snackImages,
  snackSatuanImages,
}: AppContentProps) {

  const [currentHeroImageIdx, setCurrentHeroImageIdx] = useState(0);
  const [currentSnackSatuanIdx, setCurrentSnackSatuanIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImageIdx((prev) => (prev + 1) % nasiBoxImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [nasiBoxImages.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSnackSatuanIdx((prev) => (prev + 1) % snackSatuanImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [snackSatuanImages.length]);

  return (
    <div className="min-h-screen bg-background relative text-espresso">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform border border-terracotta/20">
                <div className="text-espresso text-[8px] text-center leading-tight">
                  <div className="font-bold">QUEENSA</div>
                  <div className="text-[6px]">CATERING</div>
                </div>
              </div>
              <div className="hidden sm:block">
                <h2 className="text-espresso text-lg font-bold leading-tight">Queensa Catering</h2>
                <p className="text-gray-500 text-xs">Solusi Katering Mahasiswa</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#hero" className="text-espresso/80 hover:text-terracotta transition-colors flex items-center gap-2 text-sm font-semibold">
                <Home className="w-4 h-4" />
                Home
              </a>
              <a href="#how-to-order" className="text-espresso/80 hover:text-terracotta transition-colors flex items-center gap-2 text-sm font-semibold">
                <ClipboardList className="w-4 h-4" />
                Cara Pesan
              </a>
              <a href="#menu" className="text-espresso/80 hover:text-terracotta transition-colors flex items-center gap-2 text-sm font-semibold">
                <UtensilsCrossed className="w-4 h-4" />
                Menu
              </a>
              <a
                href="#footer"
                className="text-espresso/80 hover:text-terracotta transition-colors flex items-center gap-2 text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                Kontak
              </a>
            </div>

            {/* Cart & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-espresso/5 rounded-full transition-colors"
                aria-label="Keranjang Belanja"
              >
                <ShoppingCart className="w-6 h-6 text-terracotta" />
                {cart.length > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                  </div>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-espresso/5 rounded-lg transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-espresso" />
                ) : (
                  <MenuIcon className="w-6 h-6 text-espresso" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <a
                  href="#hero"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-espresso/80 hover:text-terracotta transition-colors flex items-center gap-3 py-2 text-sm font-semibold"
                >
                  <Home className="w-5 h-5" />
                  Home
                </a>
                <a
                  href="#how-to-order"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-espresso/80 hover:text-terracotta transition-colors flex items-center gap-3 py-2 text-sm font-semibold"
                >
                  <ClipboardList className="w-5 h-5" />
                  Cara Pesan
                </a>
                <a
                  href="#menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-espresso/80 hover:text-terracotta transition-colors flex items-center gap-3 py-2 text-sm font-semibold"
                >
                  <UtensilsCrossed className="w-5 h-5" />
                  Menu
                </a>
                <a
                  href="#footer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-espresso/80 hover:text-terracotta transition-colors flex items-center gap-3 py-2 text-sm font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  Kontak
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Floating Cart Button (Mobile) */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-40 w-16 h-16 bg-terracotta rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group border-2 border-white/20"
        aria-label="Keranjang Belanja"
      >
        <ShoppingCart className="w-8 h-8 text-white group-hover:animate-bounce" />
        {cart.length > 0 && (
          <div className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
            <span className="text-white text-sm font-bold">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </div>
        )}
      </button>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[85vw] sm:w-96 bg-white shadow-2xl z-[100] transform transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Toggle Tab Button */}
        {cart.length > 0 && (
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 w-8 h-14 bg-terracotta text-white rounded-l-xl shadow-2xl flex items-center justify-center cursor-pointer border-y border-l border-white/20 hover:bg-terracotta/90 transition-all z-50 group"
            aria-label={isCartOpen ? "Tutup Keranjang" : "Buka Keranjang"}
          >
            {isCartOpen ? (
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            ) : (
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            )}
          </button>
        )}

        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-terracotta text-white p-6 flex items-center justify-start gap-3">
            <ShoppingCart className="w-6 h-6 text-white" />
            <h3 className="text-white font-semibold text-lg">Keranjang Belanja</h3>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">Keranjang belanja kosong</p>
                <p className="text-sm text-gray-400 mt-2">Pilih menu untuk mulai memesan</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">{item.name}</h4>
                        <p className="text-terracotta font-medium">Rp {item.price.toLocaleString("id-ID")}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 bg-white rounded-full border border-gray-300">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="text-sm font-medium min-w-[20px] text-center text-gray-800">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      <p className="text-gray-800 font-semibold text-sm">
                        Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Tambah Pesanan Lain Link */}
                <div className="text-center pt-2">
                  <a
                    href="#menu"
                    onClick={() => setIsCartOpen(false)}
                    className="text-xs text-terracotta hover:text-terracotta/80 font-bold transition-colors cursor-pointer inline-flex items-center gap-1"
                  >
                    + Tambah Pesanan Lain
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Footer with Total and Order Button */}
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            {cart.length > 0 ? (
              <>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-850 font-medium">Rp {getTotalPrice().toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg mb-4">
                    <span className="text-gray-800 font-bold">Total</span>
                    <span className="text-terracotta font-extrabold">Rp {getTotalPrice().toLocaleString("id-ID")}</span>
                  </div>
                </div>
                {/* Info Pemesanan WhatsApp */}
                <div className="bg-[#E8F8EF] border-l-4 border-[#25D366] p-4 rounded-r-xl text-[11px] text-espresso mb-4 space-y-2 max-h-24 overflow-y-auto pr-2">
                  <p className="font-bold text-[#1E7E44] flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                    Pemesanan Otomatis WhatsApp
                  </p>
                  <p className="text-gray-650 leading-relaxed">
                    Ketika Anda mengklik tombol di bawah, detail pesanan Anda akan otomatis dibuatkan teksnya seperti contoh berikut:
                  </p>
                  <div className="bg-white/80 p-2.5 rounded-lg border border-[#25D366]/20 font-mono text-[10px] text-gray-500 leading-normal max-h-24 overflow-y-auto whitespace-pre-line">
                    {`Halo, saya mau pesan:\n`}
                    {cart.map(item => `${item.quantity}x ${item.name}`).join('\n')}
                    {`\n\n*Total: Rp ${getTotalPrice().toLocaleString("id-ID")}*`}
                  </div>
                  <p className="text-gray-650 leading-relaxed font-medium">
                    Setelah pesan dikirimkan, <strong>Tim kami akan segera menghubungi Anda</strong> untuk mengonfirmasi detail pengiriman, waktu, dan metode pembayaran.
                  </p>
                </div>

                <button
                  onClick={sendWhatsAppOrder}
                  className="w-full bg-[#25D366] text-white py-4 rounded-xl hover:bg-[#20BA5A] transition-colors shadow-md flex items-center justify-center gap-2 mb-1.5 font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Pesan via WhatsApp
                </button>
                <p className="text-[11px] text-center text-gray-500">
                  Anda akan diarahkan ke WhatsApp untuk menyelesaikan pesanan
                </p>
              </>
            ) : (
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full bg-terracotta text-white py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                Mulai Belanja
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[90] backdrop-blur-xs"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}


      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8 pt-32 bg-gradient-to-br from-background via-background to-peach">
        {/* Background elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-terracotta/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-honey/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
          {/* Left Column (Text & CTAs) */}
          <div className="text-left space-y-8 max-w-2xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-espresso leading-[1.1] tracking-tight">
              Katering Lezat, <span className="text-terracotta">Hemat & Higienis</span> untuk Mahasiswa
            </h1>
            
            <p className="text-lg md:text-xl text-espresso/80 leading-relaxed">
              Mulai dari <strong>Nasi Box komplit</strong> hingga <strong>Snack Box premium</strong> untuk rapat, seminar, dan acara kampus. Rasa nikmat, higienis, dan ramah di kantong mahasiswa!
            </p>

            <div className="pt-4 flex justify-center">
              <a
                href="#how-to-order"
                className="flex flex-col items-center gap-2 group text-espresso/60 hover:text-terracotta transition-colors"
                aria-label="Scroll ke Cara Pemesanan"
              >
                <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
                <div className="w-6 h-10 border-2 border-current rounded-full p-1 flex justify-center">
                  <div className="w-1.5 h-3 bg-current rounded-full animate-bounce"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column (Visual Showcase with Floating Badges) */}
          <div className="relative flex justify-center items-center lg:mt-0 mt-12">
            {/* Background Decorative Rings */}
            <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full border-2 border-terracotta/10 pointer-events-none"></div>
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-terracotta/20 pointer-events-none"></div>

            {/* Main Interactive Showcase Image (Auto-rotating Nasi Box Showcase with Crossfade) */}
            <div className="relative w-[280px] h-[340px] sm:w-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 z-10 bg-gray-100">
              {nasiBoxImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentHeroImageIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={image.url}
                    alt={`Queensa Catering Showcase ${index}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-16 pb-6 px-4 text-center text-white text-xs sm:text-sm font-bold z-20">
                    {image.caption}
                  </div>
                </div>
              ))}
            </div>

            {/* Left Overlapping Secondary Image (Snack Box) */}
            <div className="absolute -left-8 bottom-12 w-[140px] h-[180px] sm:w-[180px] sm:h-[230px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 z-20 hidden sm:block">
              <img
                src={snackImages[0].url}
                alt="Snack Box"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pt-12 pb-4 px-3 text-center text-white text-[10px] sm:text-xs font-bold z-20">
                {snackImages[0].caption}
              </div>
            </div>

            {/* Right Overlapping Secondary Image (Snack Satuan Showcase with Crossfade) */}
            <div className="absolute -right-8 bottom-12 w-[140px] h-[180px] sm:w-[180px] sm:h-[230px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 z-20 hidden sm:block bg-gray-100">
              {snackSatuanImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentSnackSatuanIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={image.url}
                    alt={`Snack Satuan ${index}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pt-12 pb-4 px-3 text-center text-white text-[10px] sm:text-xs font-bold z-20">
                    {image.caption}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Badges */}
            {/* Badge 1: Price */}
            <div className="absolute -right-4 top-10 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-primary/15 flex items-center gap-3 animate-float-slow z-30">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Harga Ekonomis</p>
                <p className="text-sm font-extrabold text-espresso">Mulai Rp 2.500</p>
              </div>
            </div>

            {/* Badge 2: Delivery */}
            <div className="absolute -left-10 top-24 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-secondary/15 flex items-center gap-3 animate-float-medium z-30">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Gratis Pengiriman</p>
                <p className="text-sm font-extrabold text-espresso">Area Kampus</p>
              </div>
            </div>

            {/* Badge 3: Rating/Quality */}
            <div className="absolute right-4 -bottom-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-primary/15 flex items-center gap-3 animate-float-fast z-30">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold">
                ★
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Kualitas Rasa</p>
                <p className="text-sm font-extrabold text-espresso">100% Higienis</p>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* How to Order Section */}
      <section id="how-to-order" className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-4 text-primary text-4xl font-extrabold">Cara Pemesanan</h2>
          <p className="text-center mb-16 text-gray-600 max-w-2xl mx-auto">Ikuti langkah mudah berikut untuk memesan menu katering pilihan Anda</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="text-center relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                1
              </div>
              <h4 className="mb-2 text-espresso text-lg font-bold">Pilih Menu</h4>
              <p className="text-gray-600 text-sm">Telusuri kategori menu dan tambahkan ke keranjang belanja Anda</p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                2
              </div>
              <h4 className="mb-2 text-espresso text-lg font-bold">Hubungi Kami</h4>
              <p className="text-gray-600 text-sm">Klik tombol pesan via WhatsApp untuk mengirim data pesanan Anda</p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                3
              </div>
              <h4 className="mb-2 text-espresso text-lg font-bold">Konfirmasi Pesanan</h4>
              <p className="text-gray-600 text-sm">Tim kami akan mengonfirmasi detail pengiriman, waktu, dan metode pembayaran</p>
            </div>

            {/* Step 4 */}
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                4
              </div>
              <h4 className="mb-2 text-espresso text-lg font-bold">Terima Pesanan</h4>
              <p className="text-gray-600 text-sm">Makanan lezat Anda akan diproses higienis dan diantar langsung ke lokasi tepat waktu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-4 bg-cream" id="menu">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="mb-4 text-primary text-4xl font-extrabold">Menu Kami</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">Pilih kategori menu favorit Anda untuk langsung ditambahkan ke keranjang belanja</p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-semibold border-2 cursor-pointer ${
                activeCategory === "all"
                  ? "bg-primary border-primary text-white shadow-md scale-105"
                  : "bg-white border-espresso/10 text-espresso/80 hover:bg-primary/5"
              }`}
            >
              <UtensilsCrossed className="w-5 h-5" />
              Semua Menu
            </button>
            <button
              onClick={() => setActiveCategory("nasibox")}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-semibold border-2 cursor-pointer ${
                activeCategory === "nasibox"
                  ? "bg-primary border-primary text-white shadow-md scale-105"
                  : "bg-white border-espresso/10 text-espresso/80 hover:bg-primary/5"
              }`}
            >
              <Sandwich className="w-5 h-5" />
              Nasi Box
            </button>
            <button
              onClick={() => setActiveCategory("snackbox")}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-semibold border-2 cursor-pointer ${
                activeCategory === "snackbox"
                  ? "bg-accent border-accent text-white shadow-md scale-105"
                  : "bg-white border-espresso/10 text-espresso/80 hover:bg-accent/5"
              }`}
            >
              <Cookie className="w-5 h-5" />
              Snack Box
            </button>
            <button
              onClick={() => setActiveCategory("snack")}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-semibold border-2 cursor-pointer ${
                activeCategory === "snack"
                  ? "bg-secondary border-secondary text-white shadow-md scale-105"
                  : "bg-white border-espresso/10 text-espresso/80 hover:bg-secondary/5"
              }`}
            >
              <Cookie className="w-5 h-5" />
              Snack Satuan
            </button>
          </div>

          <div className="space-y-16">
            {/* Menu Nasi Box */}
            {(activeCategory === "all" || activeCategory === "nasibox") && (
              <MenuNasiBox
                sliderSettings={sliderSettings}
                nasiBoxImages={nasiBoxImages}
                addToCart={addToCart}
              />
            )}

            {/* Menu Snack Box */}
            {(activeCategory === "all" || activeCategory === "snackbox") && (
              <MenuSnackBox
                sliderSettings={sliderSettings}
                snackImages={snackImages}
                addToCart={addToCart}
              />
            )}

            {/* Menu Snack Satuan */}
            {(activeCategory === "all" || activeCategory === "snack") && (
              <MenuSnackSatuan
                sliderSettings={sliderSettings}
                snackSatuanImages={snackSatuanImages}
                addToCart={addToCart}
              />
            )}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer id="footer" className="bg-espresso text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="text-espresso text-[8px] text-center leading-tight">
                    <div>QUEENSA</div>
                    <div className="text-[6px]">CATERING</div>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg">Queensa Catering</h3>
              </div>
              <p className="text-white/80">
                Solusi katering praktis untuk mahasiswa dan kampus. Nikmat, terjangkau, dan selalu fresh!
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-primary font-bold text-lg">Hubungi Kami</h4>
              <div className="space-y-3">
                <a
                  href="https://wa.me/6288200860059"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#25D366] fill-[#25D366]" width="20" height="20">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>0882-0086-0059</span>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="mb-4 text-primary font-bold text-lg">Ikuti Kami</h4>
              <div className="space-y-4">
                <a
                  href="https://instagram.com/queensa_catering"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5 text-secondary" />
                  <span>@queensa_catering</span>
                </a>
              </div>
            </div>

            {/* Download Catalog */}
            <div>
              <h4 className="mb-4 text-primary font-bold text-lg">Katalog Menu</h4>
              <p className="text-white/80 text-sm mb-4">
                Unduh katalog lengkap Queensa Catering untuk melihat seluruh daftar menu dan harga kami.
              </p>
              <a
                href="/katalog-queensa-catering.pdf"
                download
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white font-bold py-2.5 px-5 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Unduh Katalog
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-white/60">
              © 2026 Queensa Catering. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}