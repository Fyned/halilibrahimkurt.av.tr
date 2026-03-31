import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { avukatBilgileri } from '../../data/avukatBilgileri';
import { navigasyon } from '../../data/faaliyetAlanlari';
import logo from '../../assets/logo.svg';

function RandevuPopup({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-[blop_0.35s_cubic-bezier(0.34,1.56,0.64,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-6 text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border border-white/20">
              <svg className="w-7 h-7 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold">Randevu Alın</h3>
            <p className="text-gray-200 text-sm mt-1">Size en kısa sürede dönüş yapılacaktır.</p>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <a
            href={avukatBilgileri.telefonLink}
            className="flex items-center gap-4 p-4 bg-accent-50 hover:bg-accent-100 rounded-xl transition-colors group"
          >
            <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-accent-500/20">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Hemen Arayın</p>
              <p className="text-lg font-bold text-primary-500">{avukatBilgileri.telefonGosterim}</p>
            </div>
          </a>

          <a
            href={`mailto:${avukatBilgileri.email}?subject=Randevu%20Talebi`}
            className="flex items-center gap-4 p-4 bg-primary-50 hover:bg-primary-100 rounded-xl transition-colors group"
          >
            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/20">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">E-posta Gönderin</p>
              <p className="text-sm font-bold text-primary-500">{avukatBilgileri.email}</p>
            </div>
          </a>

          <Link
            to="/iletisim"
            onClick={onClose}
            className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
          >
            <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">İletişim Sayfası</p>
              <p className="text-sm font-bold text-primary-500">Detaylı bilgi için tıklayın</p>
            </div>
          </Link>

          <div className="flex items-center gap-3 pt-2 text-center justify-center text-sm text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {avukatBilgileri.calismaGunleri}: {avukatBilgileri.calismaSaatleri}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [randevuOpen, setRandevuOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  const navLinkClass = ({ isActive }) =>
    `relative py-2 transition-colors duration-200 font-medium text-sm uppercase tracking-wide ${
      isActive
        ? 'text-accent-500'
        : 'text-gray-700 hover:text-primary-500'
    }`;

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <>
    <RandevuPopup isOpen={randevuOpen} onClose={() => setRandevuOpen(false)} />
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Üst Bar */}
      <div className="bg-primary-500 text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`mailto:${avukatBilgileri.email}`} className="flex items-center gap-2 hover:text-accent-400 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {avukatBilgileri.email}
            </a>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {avukatBilgileri.calismaGunleri}: {avukatBilgileri.calismaSaatleri}
            </span>
          </div>
          <a
            href={avukatBilgileri.telefonLink}
            className="flex items-center gap-2 hover:text-accent-400 transition-colors font-semibold"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {avukatBilgileri.telefonGosterim}
          </a>
        </div>
      </div>

      {/* Ana Header */}
      <div className="container-custom">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src={logo}
              alt={avukatBilgileri.tamAd}
              className="h-16 md:h-20 w-auto"
              style={{ filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.5))' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigasyon.map((item) => (
              item.altMenu ? (
                <div
                  key={item.baslik}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <NavLink to={item.link} className={navLinkClass}>
                    {item.baslik}
                    <svg className="w-3 h-3 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </NavLink>
                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 pt-4 transition-all duration-200 ${
                      dropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                      {item.altMenu.map((alt) => (
                        <NavLink
                          key={alt.baslik}
                          to={alt.link}
                          className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {alt.baslik}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink key={item.baslik} to={item.link} className={navLinkClass}>
                  {item.baslik}
                </NavLink>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setRandevuOpen(true)}
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide transition-colors shadow-lg shadow-accent-500/20 cursor-pointer"
            >
              Randevu Al
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary-500 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden border-t border-gray-100 transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 border-t-0'
          }`}
        >
          <div className="py-4">
            {navigasyon.map((item) => (
              <div key={item.baslik}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `block py-3 px-4 font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-accent-500 bg-accent-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => !item.altMenu && setMobileMenuOpen(false)}
                >
                  {item.baslik}
                </NavLink>
                {item.altMenu && (
                  <div className="pl-4 mt-1 mb-2">
                    {item.altMenu.map((alt) => (
                      <NavLink
                        key={alt.baslik}
                        to={alt.link}
                        className="block py-2 px-4 text-gray-600 hover:text-primary-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        → {alt.baslik}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 px-4">
              <a
                href={avukatBilgileri.telefonLink}
                className="flex items-center justify-center gap-2 bg-primary-500 text-white py-3 rounded-lg font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {avukatBilgileri.telefonGosterim}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
