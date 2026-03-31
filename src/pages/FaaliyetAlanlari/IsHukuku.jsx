import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumb from '../../components/common/Breadcrumb';
import { FAQSchema, ArticleSchema } from '../../components/schema/SchemaMarkup';
import { isHukukuGiris, isHukukuBolumler, isHukukuHizmetler, isHukukuSSS } from '../../data/isHukukuIcerik';
import { avukatBilgileri } from '../../data/avukatBilgileri';

function SSSSoru({ soru, cevap, isOpen, onClick, index }) {
  return (
    <div className={`border-b border-gray-100 ${isOpen ? 'bg-primary-50/50' : ''} transition-colors`}>
      <button
        className="w-full py-6 px-6 text-left flex justify-between items-start group"
        onClick={onClick}
      >
        <div className="flex items-start gap-4">
          <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${isOpen ? 'bg-accent-500 text-white' : 'bg-primary-100 text-primary-500 group-hover:bg-primary-200'}`}>
            {index + 1}
          </span>
          <h3 className={`text-lg font-semibold transition-colors ${isOpen ? 'text-accent-600' : 'text-primary-500 group-hover:text-accent-500'}`}>
            {soru}
          </h3>
        </div>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 text-accent-500' : 'text-gray-400 group-hover:text-primary-500'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pl-[72px] text-gray-600 leading-relaxed whitespace-pre-line">
          {cevap}
        </div>
      </div>
    </div>
  );
}

export default function IsHukuku() {
  const [openIndex, setOpenIndex] = useState(0);

  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Faaliyet Alanları', url: '/faaliyet-alanlari' },
    { name: 'İş Hukuku', url: '/faaliyet-alanlari/is-hukuku' }
  ];

  return (
    <>
      <SEOHead
        title="İş Hukuku"
        description="İş hukuku nedir? Kıdem ve ihbar tazminatı, işe iade davaları, haksız fesih, fazla mesai alacakları ve işçi hakları hakkında bilgilendirici içerik."
        canonical="/faaliyet-alanlari/is-hukuku"
        ogType="article"
      />
      <FAQSchema sorular={isHukukuSSS} />
      <ArticleSchema
        baslik="İş Hukuku"
        aciklama="İş hukuku hakkında bilgilendirici içerik. Kıdem ve ihbar tazminatı, işe iade davaları, haksız fesih ve işçi hakları."
        yayinTarihi="2026-03-31"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">Faaliyet Alanı</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">İş Hukuku</h1>
            <p className="text-xl text-gray-200">
              İşçi ve işveren hakları, tazminat davaları ve iş uyuşmazlıkları hakkında sık sorulan sorular
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500">
                    İş Hukuku Nedir?
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {isHukukuGiris}
                </p>
              </div>
            </div>

            {/* Bölümler */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-0.5 bg-accent-500"></span>
                <h2 className="text-2xl font-serif font-bold text-primary-500">
                  Temel Kavramlar
                </h2>
              </div>
              <div className="space-y-6">
                {isHukukuBolumler.map((bolum) => (
                  <div key={bolum.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
                    <h3 className="text-xl font-serif font-bold text-primary-500 mb-4">{bolum.baslik}</h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{bolum.icerik}</p>
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
                <div className="grid sm:grid-cols-2 gap-4">
                  {isHukukuHizmetler.map((hizmet, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-100 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{hizmet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SSS Bölümü */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-0.5 bg-accent-500"></span>
                <h2 className="text-2xl font-serif font-bold text-primary-500">
                  Sık Sorulan Sorular
                </h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {isHukukuSSS.map((item, index) => (
                  <SSSSoru
                    key={item.id}
                    soru={item.soru}
                    cevap={item.cevap}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    index={index}
                  />
                ))}
              </div>
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
                    İş Hukuku Hakkında Sorularınız mı Var?
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
