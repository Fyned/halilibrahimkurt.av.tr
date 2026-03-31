import { Link } from 'react-router-dom';
import { avukatBilgileri } from '../../data/avukatBilgileri';
import logo from '../../assets/logo.svg';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white overflow-hidden">
      {/* Dekoratif Arka Plan Elementleri */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* İçerik */}
      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - Metin */}
          <div>
            {/* Baro Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span className="text-sm font-medium">{avukatBilgileri.baro} • Sicil No: {avukatBilgileri.baroSicilNo}</span>
            </div>

            {/* Başlık */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              <span className="text-accent-400">Hukuki</span> Sorunlarınızda
              <br />
              Yanınızdayız
            </h1>

            {/* Alt Başlık */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              Kira hukuku ve taşınmaz hukuku alanlarında profesyonel hukuki danışmanlık hizmeti.
              <span className="text-accent-300 font-medium"> Türkiye genelinde</span> hizmetinizdeyiz.
            </p>

            {/* CTA Butonları */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/iletisim"
                className="group inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Randevu Alın
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/faaliyet-alanlari"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                Faaliyet Alanlarımız
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Telefon */}
            <a
              href={avukatBilgileri.telefonLink}
              className="inline-flex items-center gap-3 text-gray-200 hover:text-white transition-colors group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Hemen Arayın</p>
                <p className="text-xl font-semibold">{avukatBilgileri.telefonGosterim}</p>
              </div>
            </a>
          </div>

          {/* Sağ Taraf - Logo / Görsel */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Arka Plan Çemberi */}
              <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl scale-150"></div>

              {/* Logo Container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
                <img
                  src={logo}
                  alt={avukatBilgileri.tamAd}
                  className="w-72 h-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Dalga */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 100V60C240 20 480 0 720 20C960 40 1200 80 1440 60V100H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
