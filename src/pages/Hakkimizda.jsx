import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumb from '../components/common/Breadcrumb';
import { avukatBilgileri } from '../data/avukatBilgileri';
import logo from '../assets/logo.svg';

export default function Hakkimizda() {
  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Hakkımızda', url: '/hakkimizda' }
  ];

  return (
    <>
      <SEOHead
        title="Hakkımızda"
        description={`${avukatBilgileri.tamAd} - ${avukatBilgileri.baro} üyesi. Kira hukuku ve taşınmaz hukuku alanlarında hukuki danışmanlık hizmeti sunmaktadır.`}
        canonical="/hakkimizda"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Bölümü */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm font-medium">Avukat Profili</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Hakkımızda</h1>
            <p className="text-xl text-gray-200">
              Hukuki süreçlerinizde güvenilir danışmanlık hizmeti
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Ana İçerik Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Sol Kolon - Profil Kartı */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-24">
                  {/* Logo */}
                  <div className="mb-6 flex justify-center">
                    <img src={logo} alt={avukatBilgileri.tamAd} className="h-32 w-auto" />
                  </div>

                  {/* İsim ve Ünvan */}
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-serif font-bold text-primary-500 mb-2">
                      {avukatBilgileri.tamAd}
                    </h2>
                    <p className="text-gray-600">Avukat</p>
                  </div>

                  {/* Baro Badge */}
                  <div className="bg-primary-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Baro</p>
                        <p className="font-semibold text-primary-500">{avukatBilgileri.baro}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Sicil No</p>
                        <p className="font-semibold text-primary-500">{avukatBilgileri.baroSicilNo}</p>
                      </div>
                    </div>
                  </div>

                  {/* İletişim Butonu */}
                  <Link
                    to="/iletisim"
                    className="flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white w-full py-3 rounded-xl font-semibold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Randevu Alın
                  </Link>
                </div>
              </div>

              {/* Sağ Kolon - Detaylar */}
              <div className="lg:col-span-2 space-y-8">
                {/* İletişim Bilgileri */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h3 className="text-xl font-serif font-bold text-primary-500 mb-6 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-accent-500"></span>
                    İletişim Bilgileri
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Telefon */}
                    <a
                      href={avukatBilgileri.telefonLink}
                      className="group flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                        <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Telefon</p>
                        <p className="font-semibold text-primary-500">{avukatBilgileri.telefonGosterim}</p>
                      </div>
                    </a>

                    {/* Çalışma Saatleri */}
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Çalışma Saatleri</p>
                        <p className="font-semibold text-primary-500">{avukatBilgileri.calismaGunleri}</p>
                        <p className="text-sm text-gray-600">{avukatBilgileri.calismaSaatleri}</p>
                      </div>
                    </div>

                    {/* E-posta */}
                    <div className="sm:col-span-2 flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                        <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">E-posta</p>
                        <p className="font-semibold text-primary-500">{avukatBilgileri.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Faaliyet Alanları */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h3 className="text-xl font-serif font-bold text-primary-500 mb-6 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-accent-500"></span>
                    Faaliyet Alanlarımız
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Başlıca kira hukuku olmak üzere taşınmaz hukuku alanlarında hukuki danışmanlık hizmeti sunmaktayız.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-primary-50 to-white p-4 rounded-xl border border-primary-100">
                      <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-primary-500 mb-1">Kira Hukuku</h4>
                      <p className="text-sm text-gray-500">Konut ve işyeri kiraları</p>
                    </div>

                    <div className="bg-gradient-to-br from-accent-50 to-white p-4 rounded-xl border border-accent-100">
                      <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-primary-500 mb-1">Tahliye Davaları</h4>
                      <p className="text-sm text-gray-500">İcra ve tahliye süreçleri</p>
                    </div>

                    <div className="bg-gradient-to-br from-primary-50 to-white p-4 rounded-xl border border-primary-100">
                      <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-primary-500 mb-1">Kira Tespit</h4>
                      <p className="text-sm text-gray-500">Bedel tespit ve uyarlama</p>
                    </div>
                  </div>

                  <Link
                    to="/faaliyet-alanlari"
                    className="inline-flex items-center gap-2 text-accent-500 font-semibold mt-6 hover:text-accent-600 transition-colors"
                  >
                    Tüm Faaliyet Alanlarını Görüntüle
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Hizmet Bölgeleri */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h3 className="text-xl font-serif font-bold text-primary-500 mb-6 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-accent-500"></span>
                    Hizmet Bölgelerimiz
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {avukatBilgileri.hizmetBolgeleri.map((bolge) => (
                      <span
                        key={bolge}
                        className="bg-primary-50 text-primary-600 px-4 py-2 rounded-full font-medium"
                      >
                        {bolge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bilgilendirme */}
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-1">Bilgilendirme</h4>
                      <p className="text-sm text-amber-700">
                        Bu web sitesi bilgilendirme amacıyla hazırlanmış olup, hukuki danışmanlık niteliği taşımamaktadır.
                        Hukuki süreçleriniz için mutlaka avukat yardımı almanız önerilir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
