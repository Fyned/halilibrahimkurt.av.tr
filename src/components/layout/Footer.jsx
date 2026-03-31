import { Link } from 'react-router-dom';
import { avukatBilgileri } from '../../data/avukatBilgileri';
import { navigasyon } from '../../data/faaliyetAlanlari';
import logo from '../../assets/logo.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-500 text-white">
      {/* Üst Kısım - CTA Banner */}
      <div className="bg-primary-600">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                Hukuki Danışmanlık İçin Bize Ulaşın
              </h3>
              <p className="text-gray-300">
                Sorularınız için randevu alın, hukuki süreçlerinizde yanınızda olalım.
              </p>
            </div>
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Randevu Alın
            </Link>
          </div>
        </div>
      </div>

      {/* Ana Footer İçeriği */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Avukat Bilgileri */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt={avukatBilgileri.tamAd} className="h-16 w-auto brightness-0 invert" />
            </Link>
            <h3 className="text-xl font-serif font-bold mb-3">{avukatBilgileri.tamAd}</h3>
            <p className="text-gray-300 mb-2">{avukatBilgileri.baro}</p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-sm">
              <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Baro Sicil No: {avukatBilgileri.baroSicilNo}
            </div>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent-500"></span>
              İletişim
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={avukatBilgileri.telefonLink}
                  className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                    <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Telefon</p>
                    <p className="font-medium">{avukatBilgileri.telefonGosterim}</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Adres</p>
                  <p className="font-medium leading-relaxed">{avukatBilgileri.adres.tam}</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Çalışma Saatleri</p>
                  <p className="font-medium">{avukatBilgileri.calismaGunleri}: {avukatBilgileri.calismaSaatleri}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent-500"></span>
              Hızlı Linkler
            </h3>
            <ul className="space-y-3">
              {navigasyon.map((item) => (
                <li key={item.baslik}>
                  <Link
                    to={item.link}
                    className="text-gray-300 hover:text-accent-400 transition-colors flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 text-accent-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.baslik}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmet Bölgeleri */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent-500"></span>
              Hizmet Bölgeleri
            </h3>
            <div className="flex flex-wrap gap-2">
              {avukatBilgileri.hizmetBolgeleri.map((bolge) => (
                <span
                  key={bolge}
                  className="bg-white/10 px-3 py-1.5 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors"
                >
                  {bolge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} {avukatBilgileri.tamAd}. Tüm Hakları Saklıdır.
            </p>
            <p className="text-gray-500 text-xs max-w-xl">
              Bu site bilgilendirme amacıyla hazırlanmış olup, hukuki danışmanlık niteliği taşımamaktadır.
              Hukuki sorunlarınız için mutlaka bir avukatla görüşmenizi öneririz.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
