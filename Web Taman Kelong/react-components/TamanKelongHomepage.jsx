import React, { useState } from 'react';

const TamanKelongHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Header */}
      <header className="relative bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                Taman Kelong
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a 
                    href="#tentang" 
                    className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-green-50"
                  >
                    Tentang
                  </a>
                </li>
                <li>
                  <a 
                    href="#menu" 
                    className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-green-50"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a 
                    href="#reservasi" 
                    className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-green-50"
                  >
                    Reservasi
                  </a>
                </li>
                <li>
                  <a 
                    href="#kontak" 
                    className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-green-50"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span 
                    className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                    }`}
                  ></span>
                  <span 
                    className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  ></span>
                  <span 
                    className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-4 invisible'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#tentang"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200"
            >
              Tentang
            </a>
            <a
              href="#menu"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200"
            >
              Menu
            </a>
            <a
              href="#reservasi"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200"
            >
              Reservasi
            </a>
            <a
              href="#kontak"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200"
            >
              Kontak
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.jpg" 
            alt="Taman Kelong" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Selamat Datang di
            <span className="block text-yellow-400">Taman Kelong</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Destinasi wisata alam dan kuliner yang memukau di Tomohon, Sulawesi Utara
          </p>
          <div className="space-x-4 animate-fade-in-up animation-delay-400">
            <a 
              href="#reservasi" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Reservasi Sekarang
            </a>
            <a 
              href="#tentang" 
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Alam Asri</h3>
              <p className="text-gray-600 text-sm">Pemandangan alam yang memukau dengan udara sejuk pegunungan</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Kuliner Khas</h3>
              <p className="text-gray-600 text-sm">Makanan tradisional Sulawesi Utara dengan cita rasa autentik</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Spot Foto</h3>
              <p className="text-gray-600 text-sm">Berbagai spot foto instagramable dengan latar alam yang indah</p>
            </div>

            {/* Feature 4 */}
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fasilitas Lengkap</h3>
              <p className="text-gray-600 text-sm">Aula, cafe, resto, dan fasilitas pendukung lainnya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Merasakan Pengalaman Tak Terlupakan?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Buat reservasi sekarang dan nikmati keindahan Taman Kelong bersama keluarga
          </p>
          <a 
            href="#reservasi" 
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Reservasi Sekarang
          </a>
        </div>
      </section>
    </div>
  );
};

export default TamanKelongHomepage;
