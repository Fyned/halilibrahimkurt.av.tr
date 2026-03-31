import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { avukatBilgileri } from '../../data/avukatBilgileri';
import { navigasyon } from '../../data/faaliyetAlanlari';
import logo from '../../assets/logo.svg';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        rafRef.current = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

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
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Üst Bar */}
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'
        }`}
      >
        <div className="bg-primary-500 text-white py-2 hidden md:block">
          <div className="container-custom flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {avukatBilgileri.adres.ilce}, {avukatBilgileri.adres.il}
              </span>
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
      </div>

      {/* Ana Header */}
      <div className="container-custom">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
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
            <Link
              to="/iletisim"
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide transition-colors shadow-lg shadow-accent-500/20"
            >
              Randevu Al
            </Link>
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
  );
}
