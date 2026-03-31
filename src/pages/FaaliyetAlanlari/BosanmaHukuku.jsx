import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumb from '../../components/common/Breadcrumb';
import { FAQSchema, ArticleSchema } from '../../components/schema/SchemaMarkup';
import { bosanmaHukukuGiris, bosanmaHukukuBolumler } from '../../data/bosanmaHukukuIcerik';
import { avukatBilgileri } from '../../data/avukatBilgileri';

export default function BosanmaHukuku() {
  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Faaliyet Alanları', url: '/faaliyet-alanlari' },
    { name: 'Boşanma Hukuku', url: '/faaliyet-alanlari/bosanma-hukuku' }
  ];

  return (
    <>
      <SEOHead
        title="Boşanma Hukuku"
        description="Boşanma hukuku nedir? Özel ve genel boşanma sebepleri, anlaşmalı boşanma, nafaka ve tazminat hakları hakkında bilgilendirici içerik."
        canonical="/faaliyet-alanlari/bosanma-hukuku"
        ogType="article"
      />
      <FAQSchema sorular={[]} />
      <ArticleSchema
        baslik="Boşanma Hukuku Nedir?"
        aciklama="Boşanma hukuku hakkında bilgilendirici içerik. Özel ve genel boşanma sebepleri, anlaşmalı boşanma, nafaka ve tazminat hakları."
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm font-medium">Faaliyet Alanı</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Boşanma Hukuku</h1>
            <p className="text-xl text-gray-200">
              Türk Medeni Kanunu kapsamında boşanma sebepleri, nafaka ve tazminat hakları
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500">
                    Boşanma Hukuku Nedir?
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {bosanmaHukukuGiris}
                </p>
              </div>
            </div>

            {/* Bölümler */}
            <section className="mb-12 space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-0.5 bg-accent-500"></span>
                <h2 className="text-2xl font-serif font-bold text-primary-500">
                  Boşanma Sebepleri ve Hükümler
                </h2>
              </div>

              {bosanmaHukukuBolumler.map((bolum) => (
                <div key={bolum.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
                    <h3 className="text-lg font-serif font-bold text-white">
                      {bolum.baslik}
                    </h3>
                  </div>

                  <div className="p-6 md:p-8">
                    {bolum.altBolumler ? (
                      <div className="space-y-6">
                        {bolum.altBolumler.map((altBolum) => (
                          <div key={altBolum.id} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100">
                              <h4 className="text-base font-semibold text-primary-500">
                                {altBolum.baslik}
                              </h4>
                            </div>
                            <div className="px-6 py-4">
                              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                                {altBolum.icerik}
                              </p>
                              {altBolum.ekBilgi && (
                                <div className="mt-4 bg-accent-50 border border-accent-200 rounded-lg p-4">
                                  <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                      <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                    </div>
                                    <p className="text-sm text-accent-800 leading-relaxed whitespace-pre-line">
                                      {altBolum.ekBilgi}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {bolum.icerik}
                      </p>
                    )}
                  </div>
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
                    Boşanma Hukuku Hakkında Sorularınız mı Var?
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
