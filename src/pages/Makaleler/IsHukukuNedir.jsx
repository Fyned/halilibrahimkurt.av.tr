import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumb from '../../components/common/Breadcrumb';
import { ArticleSchema, FAQSchema } from '../../components/schema/SchemaMarkup';
import { isHukukuGiris, isHukukuBolumler, isHukukuSSS } from '../../data/isHukukuIcerik';

export default function IsHukukuNedir() {
  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Makaleler', url: '/makaleler' },
    { name: 'İş Hukuku Nedir?', url: '/makaleler/is-hukuku-nedir' }
  ];

  return (
    <>
      <SEOHead
        title="İş Hukuku Nedir?"
        description="İş hukuku nedir? Kıdem tazminatı, ihbar tazminatı, işe iade davaları, fazla mesai ve işçilik alacakları hakkında bilgilendirici makale."
        canonical="/makaleler/is-hukuku-nedir"
        ogType="article"
      />
      <ArticleSchema
        baslik="İş Hukuku Nedir?"
        aciklama="İş hukuku hakkında kapsamlı bilgilendirici makale. Kıdem tazminatı, ihbar tazminatı, işe iade davaları, fazla mesai ve işçilik alacakları."
        yayinTarihi="2026-03-31"
      />
      <FAQSchema sorular={isHukukuSSS} />

      <Breadcrumb items={breadcrumbItems} />

      <article className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              <time className="text-sm text-gray-500 mb-2 block">31 Mart 2026</time>
              <h1 className="section-title">İş Hukuku Nedir?</h1>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
                {isHukukuGiris}
              </p>

              {isHukukuBolumler.map((bolum) => (
                <section key={bolum.id} className="mb-8">
                  <h2 className="text-xl font-serif font-bold text-primary-500 mb-4">
                    {bolum.baslik}
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {bolum.icerik}
                  </p>
                </section>
              ))}

              <section className="mt-12">
                <h2 className="text-2xl font-serif font-bold text-primary-500 mb-6">
                  Sık Sorulan Sorular
                </h2>
                <div className="space-y-6">
                  {isHukukuSSS.map((item) => (
                    <div key={item.id}>
                      <h3 className="text-lg font-serif font-bold text-primary-500 mb-3">
                        {item.soru}
                      </h3>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-6">
              <p className="text-sm text-gray-600">
                <strong>Bilgilendirme:</strong> Bu makale bilgilendirme amacıyla hazırlanmış olup, hukuki danışmanlık niteliği taşımamaktadır. Hukuki süreçleriniz için mutlaka avukat yardımı almanız önerilir.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">İlgili İçerikler</h3>
              <Link
                to="/faaliyet-alanlari/is-hukuku"
                className="text-accent-500 hover:text-accent-600 font-medium flex items-center"
              >
                İş Hukuku Faaliyet Alanı
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
