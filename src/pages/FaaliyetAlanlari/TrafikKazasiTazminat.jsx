import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumb from '../../components/common/Breadcrumb';
import { ArticleSchema } from '../../components/schema/SchemaMarkup';
import { trafikKazasiGiris, trafikKazasiBolumler } from '../../data/tazminatHukukuIcerik';

export default function TrafikKazasiTazminat() {
  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Faaliyet Alanları', url: '/faaliyet-alanlari' },
    { name: 'Tazminat Hukuku', url: '/faaliyet-alanlari/tazminat-hukuku' },
    { name: 'Trafik Kazası Tazminatı', url: '/faaliyet-alanlari/tazminat-hukuku/trafik-kazasi-tazminat' }
  ];

  return (
    <>
      <SEOHead
        title="Trafik Kazası Tazminat Davaları"
        description="Trafik kazasından kaynaklanan maddi ve manevi tazminat davaları hakkında bilgilendirici içerik. Kusur oranları, maluliyet, sigorta şirketi talepleri."
        canonical="/faaliyet-alanlari/tazminat-hukuku/trafik-kazasi-tazminat"
        ogType="article"
      />
      <ArticleSchema
        baslik="Trafik Kazasından Kaynaklı Tazminat"
        aciklama="Trafik kazaları sonucunda meydana gelen bedensel zararlar veya ölümler nedeniyle maddi ve manevi tazminat talepleri hakkında bilgilendirici içerik."
        yayinTarihi="2026-01-15"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
              </svg>
              <span className="text-sm font-medium">Faaliyet Alanı</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Trafik Kazasından Kaynaklı Tazminat</h1>
            <p className="text-xl text-gray-200">
              Trafik kazalarında maddi ve manevi tazminat taleplerinde hukuki destek
            </p>
          </div>
        </div>
      </section>

      <article className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">

            {/* Giriş */}
            <div className="relative bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-10 mb-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-bl-full"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500">
                    Trafik Kazası Tazminat Talepleri
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {trafikKazasiGiris}
                </p>
              </div>
            </div>

            {/* Bölümler */}
            <section className="mb-12 space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-0.5 bg-accent-500"></span>
                <h2 className="text-2xl font-serif font-bold text-primary-500">
                  Detaylı Bilgi
                </h2>
              </div>
              {trafikKazasiBolumler.map((bolum) => (
                <div
                  key={bolum.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8"
                >
                  <h3 className="text-xl font-serif font-bold text-primary-500 mb-4">
                    {bolum.baslik}
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {bolum.icerik}
                  </p>
                </div>
              ))}
            </section>

            {/* CTA Bölümü */}
            <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-2xl p-8 md:p-10 text-white overflow-hidden mb-8">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-serif font-bold mb-2">
                    Trafik Kazası Tazminatı Hakkında Sorularınız mı Var?
                  </h3>
                  <p className="text-gray-200">
                    Hukuki süreçlerinizde size yardımcı olmaktan memnuniyet duyarız.
                  </p>
                </div>
                <Link
                  to="/iletisim"
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg whitespace-nowrap"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Randevu Alın
                </Link>
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
                    Bu sayfa bilgilendirme amacıyla hazırlanmış olup, hukuki danışmanlık niteliği taşımamaktadır.
                    Hukuki süreçleriniz için mutlaka avukat yardımı almanız önerilir.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </article>
    </>
  );
}
