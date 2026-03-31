import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumb from '../../components/common/Breadcrumb';
import { ArticleSchema } from '../../components/schema/SchemaMarkup';
import {
  tazminatGenelGiris,
  tazminatGenelBolumler,
  tazminatHizmetler,
  tazminatAltAlanlar
} from '../../data/tazminatHukukuIcerik';

export default function TazminatHukuku() {
  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Faaliyet Alanları', url: '/faaliyet-alanlari' },
    { name: 'Tazminat Hukuku', url: '/faaliyet-alanlari/tazminat-hukuku' }
  ];

  return (
    <>
      <SEOHead
        title="Tazminat Hukuku"
        description="Tazminat hukuku nedir? Trafik kazası, iş kazası, maddi ve manevi tazminat davaları hakkında bilgilendirici içerik."
        canonical="/faaliyet-alanlari/tazminat-hukuku"
        ogType="article"
      />
      <ArticleSchema
        baslik="Tazminat Hukuku Nedir?"
        aciklama="Tazminat hukuku hakkında bilgilendirici içerik. Trafik kazası, iş kazası, maddi ve manevi tazminat talepleri."
        yayinTarihi="2026-01-15"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium">Faaliyet Alanı</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Tazminat Hukuku</h1>
            <p className="text-xl text-gray-200">
              Maddi ve manevi zararların giderilmesi için hukuki destek
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500">
                    Tazminat Hukuku Nedir?
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {tazminatGenelGiris}
                </p>
              </div>
            </div>

            {/* Genel Bölümler */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-0.5 bg-accent-500"></span>
                <h2 className="text-2xl font-serif font-bold text-primary-500">
                  Temel Kavramlar
                </h2>
              </div>
              <div className="space-y-6">
                {tazminatGenelBolumler.map((bolum) => (
                  <div key={bolum.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-sm font-bold text-primary-500 flex-shrink-0">
                        {bolum.id}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-primary-500 mb-3">
                          {bolum.baslik}
                        </h3>
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                          {bolum.icerik}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hizmetler */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-0.5 bg-accent-500"></span>
                <h2 className="text-2xl font-serif font-bold text-primary-500">
                  Hizmet Alanlarımız
                </h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tazminatHizmetler.map((hizmet, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{hizmet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Alt Alan Kartları */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-0.5 bg-accent-500"></span>
                <h2 className="text-2xl font-serif font-bold text-primary-500">
                  Uzmanlık Alanlarımız
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Tazminat hukuku kapsamında aşağıdaki alanlarda detaylı hukuki destek sunmaktayız.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tazminatAltAlanlar.map((altAlan, index) => (
                  <Link
                    key={altAlan.id}
                    to={altAlan.link}
                    className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-accent-400 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-50/0 group-hover:from-primary-50 group-hover:to-accent-50/50 transition-all duration-300"></div>
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-400 to-accent-500 group-hover:w-1.5 transition-all duration-300"></div>
                    <div className="relative p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <span className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </span>
                        <div className="w-8 h-8 bg-accent-100 group-hover:bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                          <svg className="w-4 h-4 text-accent-500 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-lg font-serif font-bold text-primary-500 group-hover:text-primary-600 mb-3 leading-snug">
                        {altAlan.baslik}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">
                        {altAlan.kisaAciklama}
                      </p>
                      <div className="flex items-center gap-2 text-accent-600 group-hover:text-accent-700 font-semibold text-sm">
                        <span>Detaylı Bilgi</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-2xl p-8 md:p-10 text-white overflow-hidden mb-8">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-serif font-bold mb-2">
                    Tazminat Hukuku Hakkında Sorularınız mı Var?
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
