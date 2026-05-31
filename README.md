# Queensa Catering - Website Landing Page

Website landing page modern untuk bisnis katering dengan fitur shopping cart dan integrasi WhatsApp.

## Fitur Utama

- 🛒 Shopping Cart interaktif dengan quantity control
- 📱 Responsive design (mobile & desktop)
- 🎨 Tema warna kuliner yang hangat
- 🖼️ Image carousel untuk setiap kategori menu
- 💬 Integrasi WhatsApp untuk order langsung
- 🍱 3 Kategori menu: Nasi Box, Snack Box, dan Jajanan Satuan

## Cara Setup di Komputer Lokal

### 1. Install Node.js
Pastikan Node.js sudah terinstall (versi 18 atau lebih baru).
Download di: https://nodejs.org/

### 2. Install pnpm
```bash
npm install -g pnpm
```

### 3. Install Dependencies
```bash
pnpm install
```

### 4. Jalankan Development Server
```bash
pnpm vite
```

Website akan berjalan di `http://localhost:5173`

### 5. Build untuk Production
```bash
pnpm build
```

File hasil build akan ada di folder `dist/`

## Struktur Folder

```
src/
├── app/
│   ├── components/
│   │   ├── MenuNasiBox.tsx       # Komponen menu Nasi Box
│   │   ├── MenuSnackBox.tsx      # Komponen menu Snack Box
│   │   └── MenuSnackSatuan.tsx   # Komponen menu Jajanan Satuan
│   └── App.tsx                   # Komponen utama aplikasi
├── styles/
│   ├── theme.css                 # Tema warna dan styling
│   └── fonts.css                 # Import font
└── imports/                      # Asset gambar
```

## Kustomisasi

### Mengubah Nomor WhatsApp
Edit file `src/app/App.tsx`, cari bagian:
```typescript
const phoneNumber = "6281234567890"; // Ganti dengan nomor Anda
```

### Mengubah Menu
Edit file komponen menu di folder `src/app/components/`:
- `MenuNasiBox.tsx` - untuk menu Nasi Box
- `MenuSnackBox.tsx` - untuk menu Snack Box  
- `MenuSnackSatuan.tsx` - untuk menu Jajanan Satuan

### Mengubah Warna Tema
Edit file `src/styles/theme.css`, ubah variabel warna di bagian `:root`:
```css
:root {
  --warm-orange: #ff6b35;
  --mustard: #f4a261;
  --coffee-brown: #5d4037;
  /* ... dan lainnya */
}
```

## Teknologi yang Digunakan

- **React 18.3.1** - Framework JavaScript
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Vite** - Build tool & dev server
- **React Slick** - Image carousel/slider
- **Lucide React** - Icon library

## Deploy ke Hosting

Setelah build, upload folder `dist/` ke hosting Anda (Netlify, Vercel, atau hosting lainnya).

### Deploy ke Vercel (Gratis):
1. Install Vercel CLI: `npm i -g vercel`
2. Jalankan: `vercel`
3. Ikuti instruksi di terminal

### Deploy ke Netlify (Gratis):
1. Drag & drop folder `dist/` ke https://app.netlify.com/drop

## Support

Untuk pertanyaan atau issue, silakan hubungi developer atau edit langsung di code editor favorit Anda!
