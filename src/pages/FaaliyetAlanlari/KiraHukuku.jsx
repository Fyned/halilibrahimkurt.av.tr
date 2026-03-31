import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumb from '../../components/common/Breadcrumb';
import { FAQSchema, ArticleSchema } from '../../components/schema/SchemaMarkup';
import { kiraHukukuSSS, yargitayKararlari, kaynakca } from '../../data/kiraHukukuIcerik';
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

export default function KiraHukuku() {
  const [openIndex, setOpenIndex] = useState(0);

  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Faaliyet Alanları', url: '/faaliyet-alanlari' },
    { name: 'Kira Hukuku', url: '/faaliyet-alanlari/kira-hukuku' }
  ];

  return (
    <>
      <SEOHead
        title="Kira Hukuku"
        description="Kira hukuku nedir? Kiracı ve ev sahibi hakları, tahliye davaları, kira tespit ve uyarlama davaları hakkında bilgilendirici içerik."
        canonical="/faaliyet-alanlari/kira-hukuku"
        ogType="article"
      />
      <FAQSchema sorular={kiraHukukuSSS} />
      <ArticleSchema
        baslik="Kira Hukuku Nedir?"
        aciklama="Kira hukuku hakkında bilgilendirici içerik. Kiracı ve ev sahibi hakları, tahliye davaları, kira tespit ve uyarlama davaları."
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-sm font-medium">Faaliyet Alanı</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Kira Hukuku</h1>
            <p className="text-xl text-gray-200">
              Kira hukuku ile ilgili sık sorulan sorular ve yanıtları
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
                    Kira Hukuku Nedir?
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Kira hukuku; kiraya veren ile kiracı arasındaki konut ve işyeri kiralarından doğan uyuşmazlıkları düzenleyen ve karşılıklı olarak hak ve yükümlülükleri gösteren hukuk dalıdır. Kiralananın tahliye, kira bedeli, kira bedelinin uyarlanmasını, kira bedelinin tespitini ve kira sözleşmesinin feshi gibi konuları kapsar.
                </p>
              </div>
            </div>

            {/* SSS Bölümü */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-0.5 bg-accent-500"></span>
                <h2 className="text-2xl font-serif font-bold text-primary-500">
                  Sık Sorulan Sorular
                </h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {kiraHukukuSSS.slice(1).map((item, index) => (
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

            {/* Yargıtay Kararları */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-0.5 bg-accent-500"></span>
                <h2 className="text-2xl font-serif font-bold text-primary-500">
                  İlgili Yargıtay Kararları
                </h2>
              </div>
              <div className="space-y-6">
                {yargitayKararlari.map((karar) => (
                  <blockquote
                    key={karar.id}
                    className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-500 to-accent-600"></div>
                    <svg className="absolute top-4 right-4 w-10 h-10 text-gray-100" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-700 italic leading-relaxed mb-4 relative z-10">
                      {karar.metin}
                    </p>
                    <cite className="flex items-center gap-2 text-sm text-gray-500 not-italic font-medium relative z-10">
                      <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                      {karar.kaynak}
                    </cite>
                  </blockquote>
                ))}
              </div>
            </section>

            {/* Kaynakça */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-0.5 bg-accent-500"></span>
                <h2 className="text-2xl font-serif font-bold text-primary-500">
                  Kaynakça
                </h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
                <ul className="space-y-3">
                  {kaynakca.map((kaynak, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 text-sm">
                      <span className="w-6 h-6 bg-primary-100 rounded-md flex items-center justify-center text-xs font-bold text-primary-500 flex-shrink-0">
                        {index + 1}
                      </span>
                      {kaynak}
                    </li>
                  ))}
                </ul>
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
                    Kira Hukuku Hakkında Sorularınız mı Var?
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
