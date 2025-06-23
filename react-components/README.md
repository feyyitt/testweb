# Komponen React Homepage Taman Kelong

Komponen homepage responsive untuk website Taman Kelong dengan navigasi hamburger menu dan desain modern.

## 📁 File Structure

```
react-components/
├── TamanKelongHomepage.jsx          # Versi dengan Tailwind CSS
├── TamanKelongHomepage-vanilla.jsx  # Versi dengan CSS biasa
├── TamanKelongHomepage.css         # CSS untuk versi vanilla
├── animations.css                  # Animasi tambahan
└── README.md                      # Dokumentasi ini
```

## 🚀 Cara Penggunaan

### Opsi 1: Dengan Tailwind CSS (Recommended)

1. **Install Tailwind CSS** di project React Anda:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. **Import komponen**:
```jsx
import TamanKelongHomepage from './react-components/TamanKelongHomepage';

function App() {
  return (
    <div className="App">
      <TamanKelongHomepage />
    </div>
  );
}
```

### Opsi 2: Dengan CSS Biasa

1. **Import komponen dan CSS**:
```jsx
import TamanKelongHomepage from './react-components/TamanKelongHomepage-vanilla';
import './react-components/TamanKelongHomepage.css';

function App() {
  return (
    <div className="App">
      <TamanKelongHomepage />
    </div>
  );
}
```

## 🎨 Fitur

### ✅ Navigasi Responsive
- **Desktop**: Menu horizontal di kanan atas
- **Mobile**: Hamburger menu dengan animasi slide-in
- **Sticky header** dengan backdrop blur effect

### ✅ Hero Section
- Background image dengan overlay
- Gradient text effect pada judul
- Call-to-action buttons
- Scroll indicator dengan animasi bounce

### ✅ Features Section
- Grid layout responsive (1 kolom mobile, 4 kolom desktop)
- Cards dengan hover effects
- Icon dengan background gradient

### ✅ Call-to-Action Section
- Background gradient
- Centered layout
- Button dengan hover animations

### ✅ Animasi & Transitions
- Fade in up animations
- Hover effects pada semua interactive elements
- Smooth transitions (0.3s ease)
- Hamburger menu transform animations

## 📱 Responsive Breakpoints

```css
/* Mobile First */
Default: < 768px   (1 kolom, hamburger menu)

/* Tablet */
768px - 1023px:    (2 kolom features, desktop menu)

/* Desktop */
≥ 1024px:          (4 kolom features, full layout)
```

## 🎯 State Management

Komponen menggunakan React `useState` untuk:
- `isMenuOpen`: Toggle hamburger menu (true/false)
- `toggleMenu()`: Function untuk membuka/tutup menu
- `closeMenu()`: Function untuk menutup menu saat link diklik

## 🖼️ Assets yang Dibutuhkan

Pastikan file gambar tersedia di folder `public/images/`:
- `hero.jpg` - Gambar hero background

## 🎨 Customization

### Warna Brand
```css
/* Primary Green */
#16a085 (teal)

/* Secondary Yellow */
#f39c12 (orange/yellow)

/* Accent Colors */
#149174 (darker teal)
#e67e22 (darker orange)
```

### Typography
- Font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Heading sizes: 2.5rem (mobile) - 4rem (desktop)
- Font weights: 400 (normal), 500 (medium), 600 (semibold), bold

### Spacing
- Section padding: 5rem 0
- Container max-width: 1200px
- Grid gaps: 2rem (mobile), 3rem (desktop)

## 🔧 Modifikasi

### Mengganti Menu Items
Edit array menu di dalam komponen:
```jsx
const menuItems = [
  { href: "#tentang", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#reservasi", label: "Reservasi" },
  { href: "#kontak", label: "Kontak" }
];
```

### Mengganti Hero Content
Edit bagian hero-content di JSX:
```jsx
<h1 className="hero-title">
  Judul Baru
  <span className="hero-title-highlight">Subtitle</span>
</h1>
```

### Menambah Features
Tambah card baru di features-grid:
```jsx
<div className="feature-card">
  <div className="feature-icon new-feature">
    <span>🆕</span>
  </div>
  <h3 className="feature-title">Feature Baru</h3>
  <p className="feature-description">Deskripsi feature</p>
</div>
```

## 📝 Browser Support

- ✅ Chrome 70+
- ✅ Firefox 70+
- ✅ Safari 12+
- ✅ Edge 79+

## 🐛 Troubleshooting

### Gambar tidak muncul
- Pastikan file `hero.jpg` ada di `public/images/`
- Check path relatif: `/images/hero.jpg`

### Menu tidak berfungsi
- Pastikan React version ≥ 16.8 (untuk hooks)
- Check console untuk JavaScript errors

### Styling tidak apply
- Import CSS file dengan benar
- Check CSS class names (case sensitive)

## 📈 Performance Tips

1. **Lazy loading images**:
```jsx
<img loading="lazy" src="/images/hero.jpg" alt="Taman Kelong" />
```

2. **Optimize images**:
- Gunakan format WebP jika memungkinkan
- Compress images sebelum upload
- Use responsive images dengan srcset

3. **Code splitting**:
```jsx
const TamanKelongHomepage = React.lazy(() => 
  import('./react-components/TamanKelongHomepage')
);
```

## 🔄 Updates & Maintenance

Komponen ini dibuat untuk website Taman Kelong dan dapat di-customize sesuai kebutuhan brand lain. Update terakhir: **23 Juni 2025**.

---

**Made with ❤️ for Taman Kelong Website**
