# 🌿 Website Taman Kelong

Website resmi Taman Kelong - Destinasi wisata alam dan kuliner di Tomohon, Sulawesi Utara

## 📋 Deskripsi Proyek

Website ini dibuat untuk mempromosikan Taman Kelong sebagai destinasi wisata dengan fitur-fitur modern yang memudahkan pengunjung untuk melihat galeri, menu kuliner, dan melakukan reservasi.

## ✨ Fitur Utama

### 🏠 **Homepage (index.html)**

- **Hero Section** dengan gambar utama dan deskripsi
- **Galeri Foto** dengan layout alternating horizontal (inspirasi dari Pantai Melasti)
- **Load More & Reset** functionality untuk galeri
- **About Section** dengan informasi lengkap
- **Contact Section** dengan informasi kontak

### 🍽️ **Halaman Menu (menu.html)**

- **12 Item Menu** terbagi dalam 3 kategori:
  - **Makanan** (4 item): Cakalang Fufu, Tinutuan, Rica-Rica Ayam, Nasi Kuning
  - **Minuman** (4 item): Es Cap Tikus, Jus Markisa, Kopi Tomohon, Es Kelapa Muda
  - **Snack** (4 item): Pisang Bakar Rica, Jagung Bakar, Kue Cucur, Gorengan Mix
- **Display-only catalog** tanpa fitur pemesanan
- **Modal preview** untuk setiap item menu

### 📝 **Halaman Reservasi (reservasi.html)**

- **Form Reservasi Lengkap**:
  - Nama lengkap (required)
  - Nomor HP (required)
  - Tanggal kunjungan (required, tidak boleh tanggal lampau)
  - Jam kedatangan (required)
  - Jumlah orang (1-50, required)
- **Pilihan Makanan Interaktif**:
  - Checkbox untuk memilih item
  - Kontrol quantity (+/- buttons)
  - Real-time ringkasan pesanan
  - Kalkulasi total harga otomatis
- **Catatan tambahan** (optional)
- **Integrasi WhatsApp** untuk pengiriman reservasi

## 🎨 Design Features

### **Modern UI/UX**

- **Responsive design** untuk semua device
- **AOS animations** untuk smooth scrolling effects
- **Modern color scheme** dengan tema hijau alam
- **Typography** menggunakan font Quicksand
- **Hover effects** dan transisi yang smooth

### **Interactive Elements**

- **Page loader** dengan animasi modern
- **Navigation** yang konsisten di semua halaman
- **Button hover effects** dengan transform dan shadow
- **Modal system** untuk preview menu

## 📁 Struktur File

```
Web Taman Kelong/
├── index.html          # Homepage utama
├── menu.html           # Halaman menu kuliner
├── reservasi.html      # Halaman reservasi
├── README.md           # Dokumentasi proyek
├── css/
│   ├── main.css        # CSS utama dan loader
│   └── index.css       # CSS untuk styling komponen
├── js/
│   └── main.js         # JavaScript untuk interaktivity
└── images/             # 23 gambar untuk galeri dan menu
    ├── hero.jpg
    ├── galeri1-4.jpg   # Gambar galeri
    ├── cakalang-fufu.jpg
    ├── tinutuan.jpg
    └── ...
```

## 🔧 Teknologi yang Digunakan

- **HTML5** - Struktur semantik
- **CSS3** - Styling modern dengan Grid dan Flexbox
- **JavaScript** - Interaktivity dan DOM manipulation
- **AOS Library** - Scroll animations
- **Google Fonts** - Typography (Quicksand)
- **WhatsApp API** - Integrasi pesan reservasi

## 🚀 Cara Menjalankan

1. **Download** atau clone repository ini
2. **Buka** file `index.html` di browser
3. **Navigasi** menggunakan menu untuk mengakses halaman lain
4. **Test** fitur reservasi untuk memastikan WhatsApp integration berfungsi

## 📱 Fitur WhatsApp Integration

Reservasi akan dikirim ke nomor WhatsApp: **6281111128011**

Format pesan otomatis:

```
*RESERVASI TAMAN KELONG*

*Data Reservasi:*
Nama: [Nama Pengunjung]
No. HP: [Nomor HP]
Tanggal: [Tanggal Kunjungan]
Jam Kedatangan: [Waktu]
Jumlah Orang: [Jumlah] orang

*Pesanan Makanan:*
• [Nama Makanan] x[Qty] = Rp [Harga]

*Total Pesanan: Rp [Total]*

*Catatan:*
[Catatan tambahan jika ada]
```

## ✅ Completed Features

### **Transformasi dari Desain Awal:**

1. ✅ **Gallery redesign** dengan layout alternating horizontal
2. ✅ **Removed navigation links** (Fasilitas, Spot Wisata, Galeri)
3. ✅ **Load More functionality** dengan reset feature
4. ✅ **Menu kuliner** dengan 12 items lengkap
5. ✅ **Separate menu page** tanpa ordering features
6. ✅ **Reservation form** dengan food selection
7. ✅ **Code cleanup** - removed unused files and code
8. ✅ **WhatsApp integration** untuk reservasi

### **Technical Improvements:**

1. ✅ **Fixed AOS conflicts** di menu page
2. ✅ **Optimized page loader** untuk semua halaman
3. ✅ **Responsive design** untuk mobile dan desktop
4. ✅ **Clean file structure** tanpa file yang tidak terpakai
5. ✅ **Error-free code** validation

## 🎯 Target Audience

- **Wisatawan** yang ingin berkunjung ke Taman Kelong
- **Food enthusiasts** yang tertarik kuliner khas Sulawesi Utara
- **Keluarga** yang mencari destinasi wisata alam
- **Event organizers** untuk acara gathering atau rekreasi

## 📞 Contact Information

- **Lokasi**: Tomohon, Sulawesi Utara
- **WhatsApp**: 6281111128011
- **Website**: Taman Kelong Official

---

**© 2025 Kelompok Eldian. All rights reserved.**

_Website ini dibuat untuk mempromosikan keindahan alam dan kuliner Sulawesi Utara_
