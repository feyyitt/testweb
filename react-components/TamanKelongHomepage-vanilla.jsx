import React, { useState } from 'react';
import './TamanKelongHomepage.css'; // Import file CSS

const TamanKelongHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            {/* Logo */}
            <div className="logo">
              <h1>Taman Kelong</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="#tentang" className="nav-link">Tentang</a>
                </li>
                <li className="nav-item">
                  <a href="#menu" className="nav-link">Menu</a>
                </li>
                <li className="nav-item">
                  <a href="#reservasi" className="nav-link">Reservasi</a>
                </li>
                <li className="nav-item">
                  <a href="#kontak" className="nav-link">Kontak</a>
                </li>
              </ul>
            </nav>

            {/* Mobile menu button */}
            <div className="mobile-menu-btn">
              <button
                onClick={toggleMenu}
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                aria-label="Toggle menu"
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <a href="#tentang" onClick={closeMenu} className="mobile-nav-link">
                Tentang
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#menu" onClick={closeMenu} className="mobile-nav-link">
                Menu
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#reservasi" onClick={closeMenu} className="mobile-nav-link">
                Reservasi
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#kontak" onClick={closeMenu} className="mobile-nav-link">
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/images/hero.jpg" alt="Taman Kelong" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Selamat Datang di
            <span className="hero-title-highlight">Taman Kelong</span>
          </h1>
          <p className="hero-subtitle">
            Destinasi wisata alam dan kuliner yang memukau di Tomohon, Sulawesi Utara
          </p>
          <div className="hero-buttons">
            <a href="#reservasi" className="btn btn-primary">
              Reservasi Sekarang
            </a>
            <a href="#tentang" className="btn btn-secondary">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </section>

      {/* Quick Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon nature">
                <span>🌿</span>
              </div>
              <h3 className="feature-title">Alam Asri</h3>
              <p className="feature-description">
                Pemandangan alam yang memukau dengan udara sejuk pegunungan
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon culinary">
                <span>🍽️</span>
              </div>
              <h3 className="feature-title">Kuliner Khas</h3>
              <p className="feature-description">
                Makanan tradisional Sulawesi Utara dengan cita rasa autentik
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon photo">
                <span>📸</span>
              </div>
              <h3 className="feature-title">Spot Foto</h3>
              <p className="feature-description">
                Berbagai spot foto instagramable dengan latar alam yang indah
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon facility">
                <span>🏛️</span>
              </div>
              <h3 className="feature-title">Fasilitas Lengkap</h3>
              <p className="feature-description">
                Aula, cafe, resto, dan fasilitas pendukung lainnya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Siap Merasakan Pengalaman Tak Terlupakan?
            </h2>
            <p className="cta-subtitle">
              Buat reservasi sekarang dan nikmati keindahan Taman Kelong bersama keluarga
            </p>
            <a href="#reservasi" className="btn btn-cta">
              Reservasi Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TamanKelongHomepage;
