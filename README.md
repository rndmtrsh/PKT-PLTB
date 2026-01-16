# PLTB Archimedes Spiral - Exhibition Website

Website pameran karya teknologi Pembangkit Listrik Tenaga Bayu (PLTB) dengan turbin Spiral Archimedes untuk aplikasi perkotaan.

## 🌀 Tentang Proyek

**Kelompok 5 - Kelas D**

**Judul Proyek:**
Optimalisasi Efisiensi Desain Turbin Angin Spiral Archimedes yang Hening dan Ramah Lingkungan untuk Pemanfaatan Angin Berkecepatan Rendah pada Aplikasi Skala Perkotaan

**Dosen Pengampu:**
Dr. Ratnasari Nur Rohmah S.T., M.T.

**Anggota Tim:**
- Pandya Kyv Firjatullah (D400220090)
- Denisa Anggi Faradila (D400220116)
- Muhamad Idhan Arkhan (D400220135)
- Tegar Maulana Akmal (D400220150)

## 🚀 Instalasi

### Prasyarat
- Node.js 18+ 
- npm 9+

### Langkah Instalasi

```bash
# Clone atau navigasi ke folder proyek
cd pltb-exhibition

# Install dependencies
npm install

# Jika ada konflik peer dependencies, gunakan:
npm install --legacy-peer-deps
# atau
npm install --force
```

## 💻 Menjalankan Aplikasi

### Mode Development

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Mode Preview (Production Build)

```bash
# Build aplikasi
npm run build

# Preview hasil build
npm run preview
```

## 🎛️ Konfigurasi

### Mengubah Durasi Rotasi Halaman

Edit file `src/config.ts`:

```typescript
export const config = {
  rotation: {
    // Durasi per halaman dalam detik (default: 25)
    durationSeconds: 25,
    
    // Auto-resume setelah inaktivitas dalam detik (default: 60)
    autoResumeSeconds: 60,
    
    // Delay hide control panel dalam detik
    controlHideSeconds: 3,
  },
  // ...
};
```

### Mengganti File STL Model 3D

1. Letakkan file STL baru di folder `public/models/`
2. Edit file `src/config.ts`:

```typescript
export const config = {
  viewer3D: {
    stlPath: '/models/nama-file-baru.stl',
    // ...
  },
  // ...
};
```

### Mengganti Dataset Pengujian

#### 1. Edit Data Mentah
Edit file `src/data/testDataRaw.json` dengan format:

```json
[
  {
    "wind_speed_mps": 2.63,
    "voltage_V": 11.774,
    "current_mA": 260.4,
    "power_W": 3.066
  }
]
```

#### 2. Transformasi Data dengan Perhitungan Energi

Jalankan script untuk menghitung energi kumulatif atau update manual `src/data/testData.json`:

**Rumus perhitungan:**
- `energy_Wh = power_W × (interval_minutes / 60)`
- `energy_Wh_cum = akumulasi energy_Wh`

Dengan interval sampling default 5 menit:
- `energy_Wh = power_W × (5 / 60) = power_W × 0.0833`

Format `testData.json`:

```json
[
  {
    "sample": 1,
    "wind_speed_mps": 2.63,
    "voltage_V": 11.774,
    "current_mA": 260.4,
    "power_W": 3.066,
    "energy_Wh": 0.2555,
    "energy_Wh_cum": 0.2555
  }
]
```

## 📦 Build untuk Production

```bash
npm run build
```

Hasil build akan tersedia di folder `dist/`

## 🌐 Deploy ke Vercel

### Opsi 1: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opsi 2: Via GitHub Integration

1. Push kode ke repository GitHub
2. Hubungkan repository ke Vercel
3. Vercel akan otomatis build dan deploy

### Konfigurasi Vercel

Buat file `vercel.json` di root proyek (opsional):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## 📁 Struktur Proyek

```
pltb-exhibition/
├── public/
│   ├── models/
│   │   └── turbin.stl      # Model 3D turbin
│   └── wind-turbine.svg    # Favicon
├── src/
│   ├── components/         # Komponen React
│   │   ├── BackgroundAnimation.tsx
│   │   ├── Charts.tsx
│   │   ├── ControlPanel.tsx
│   │   ├── Diagrams.tsx
│   │   ├── InfoCard.tsx
│   │   ├── KPICard.tsx
│   │   ├── PageTransition.tsx
│   │   └── STLViewer.tsx
│   ├── data/               # Data JSON
│   │   ├── testDataRaw.json
│   │   └── testData.json
│   ├── hooks/              # Custom hooks
│   │   ├── useAutoRotation.ts
│   │   └── useCountUp.ts
│   ├── pages/              # Halaman aplikasi
│   │   ├── HomePage.tsx
│   │   ├── ProblemPage.tsx
│   │   ├── SystemPage.tsx
│   │   ├── DesignPage.tsx
│   │   ├── Viewer3DPage.tsx
│   │   ├── AnalyticsPage.tsx
│   │   └── CreditsPage.tsx
│   ├── App.tsx
│   ├── config.ts           # Konfigurasi aplikasi
│   ├── index.css           # Global styles
│   └── main.tsx
├── package.json
├── vite.config.ts
└── README.md
```

## 🎨 Fitur

- ✅ 7 halaman dengan rotasi otomatis
- ✅ Animasi transisi smooth (Framer Motion)
- ✅ Viewer 3D model STL (Three.js)
- ✅ Grafik interaktif (Recharts)
- ✅ KPI dengan animasi count-up
- ✅ Kontrol panel dengan auto-hide
- ✅ Responsive untuk TV 32 inch
- ✅ Tema gelap dengan kontras tinggi
- ✅ Offline-capable (semua aset lokal)

## 🖥️ Mode Kiosk

Untuk menjalankan di mode kiosk (fullscreen tanpa UI browser):

### Chrome/Edge
```bash
chrome --kiosk http://localhost:5173
```

### Firefox
```bash
firefox --kiosk http://localhost:5173
```

## 📝 Lisensi

Proyek ini dibuat untuk keperluan akademik - Proyek Karya Teknologi Teknik Elektro 2024.

---

**PLTB Archimedes Spiral** - Energi Angin untuk Masa Depan Perkotaan 🌬️⚡
