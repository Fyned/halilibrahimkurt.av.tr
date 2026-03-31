import SEOHead from '../components/common/SEOHead';
import Breadcrumb from '../components/common/Breadcrumb';
import { LocalBusinessSchema } from '../components/schema/SchemaMarkup';
import { avukatBilgileri } from '../data/avukatBilgileri';

export default function Iletisim() {
  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'İletişim', url: '/iletisim' }
  ];

  return (
    <>
      <SEOHead
        title="İletişim"
        description={`${avukatBilgileri.tamAd} iletişim bilgileri. Telefon: ${avukatBilgileri.telefonGosterim}. E-posta: ${avukatBilgileri.email}`}
        canonical="/iletisim"
      />
      <LocalBusinessSchema />

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">Bize Ulaşın</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">İletişim</h1>
            <p className="text-xl text-gray-200">
              Hukuki süreçleriniz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* İletişim Kartları */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Telefon Kartı */}
              <a
                href={avukatBilgileri.telefonLink}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl hover:border-accent-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-accent-500/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-bold text-primary-500 mb-2">Telefon</h3>
                <p className="text-2xl font-bold text-accent-500 mb-2">{avukatBilgileri.telefonGosterim}</p>
                <p className="text-sm text-gray-500">Hemen arayabilirsiniz</p>
              </a>

              {/* E-posta Kartı */}
              <a
                href={`mailto:${avukatBilgileri.email}`}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl hover:border-accent-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-bold text-primary-500 mb-2">E-posta</h3>
                <p className="text-lg font-bold text-accent-500 mb-2">{avukatBilgileri.email}</p>
                <p className="text-sm text-gray-500">Mail gönderebilirsiniz</p>
              </a>

              {/* Çalışma Saatleri Kartı */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-bold text-primary-500 mb-2">Çalışma Saatleri</h3>
                <p className="text-xl font-bold text-gray-800 mb-1">{avukatBilgileri.calismaGunleri}</p>
                <p className="text-accent-500 font-semibold">{avukatBilgileri.calismaSaatleri}</p>
              </div>
            </div>

            {/* Ana İçerik */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Sol Kolon - Hizmet Bölgeleri */}
              <div className="space-y-8">
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
              </div>

              {/* Sağ Kolon - Baro Bilgileri & CTA */}
              <div className="space-y-8">
                {/* Baro Bilgileri */}
                <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-2xl p-8 text-white overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                        <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-serif font-bold">Baro Bilgileri</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <p className="text-sm text-gray-300 mb-1">Avukat</p>
                        <p className="text-xl font-bold">{avukatBilgileri.tamAd}</p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <p className="text-sm text-gray-300 mb-1">Baro</p>
                        <p className="text-xl font-bold">{avukatBilgileri.baro}</p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <p className="text-sm text-gray-300 mb-1">Baro Sicil No</p>
                        <p className="text-xl font-bold text-accent-400">{avukatBilgileri.baroSicilNo}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Randevu CTA */}
                <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 text-white text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">Randevu Almak İster misiniz?</h3>
                  <p className="text-white/90 mb-6">
                    Hukuki süreçlerinizle ilgili sorularınızı görüşme sırasında detaylı olarak iletebilirsiniz.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={avukatBilgileri.telefonLink}
                      className="inline-flex items-center justify-center gap-3 bg-white text-accent-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {avukatBilgileri.telefonGosterim}
                    </a>
                    <a
                      href={`mailto:${avukatBilgileri.email}`}
                      className="inline-flex items-center justify-center gap-3 bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-colors border border-white/30"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      E-posta Gönder
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bilgilendirme */}
            <div className="mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800 mb-1">Bilgilendirme</h4>
                  <p className="text-sm text-amber-700">
                    Randevu almak için lütfen telefon veya e-posta ile iletişime geçiniz.
                    Hukuki süreçlerinizle ilgili sorularınızı görüşme sırasında detaylı olarak iletebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
