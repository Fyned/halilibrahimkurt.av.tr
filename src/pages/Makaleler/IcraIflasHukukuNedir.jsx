import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumb from '../../components/common/Breadcrumb';
import { ArticleSchema, FAQSchema } from '../../components/schema/SchemaMarkup';
import { icraIflasGiris, icraIflasBolumler, icraIflasSSS } from '../../data/icraIflasHukukuIcerik';

export default function IcraIflasHukukuNedir() {
  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Makaleler', url: '/makaleler' },
    { name: 'İcra ve İflas Hukuku Nedir?', url: '/makaleler/icra-iflas-hukuku-nedir' }
  ];

  return (
    <>
      <SEOHead
        title="İcra ve İflas Hukuku Nedir?"
        description="İcra ve iflas hukuku nedir? İcra takibi, haciz işlemleri, itirazın iptali ve alacak tahsili hakkında bilgilendirici makale."
        canonical="/makaleler/icra-iflas-hukuku-nedir"
        ogType="article"
      />
      <ArticleSchema
        baslik="İcra ve İflas Hukuku Nedir?"
        yayinTarihi="2026-03-31"
      />
      <FAQSchema sorular={icraIflasSSS} />

      <Breadcrumb items={breadcrumbItems} />

      <article className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              <time className="text-sm text-gray-500 mb-2 block">31 Mart 2026</time>
              <h1 className="section-title">İcra ve İflas Hukuku Nedir?</h1>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
                {icraIflasGiris}
              </p>

              {icraIflasBolumler.map((bolum) => (
                <section key={bolum.id} className="mb-8">
                  <h2 className="text-xl font-serif font-bold text-primary-500 mb-4">
                    {bolum.baslik}
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {bolum.icerik}
                  </p>
                </section>
              ))}

              {icraIflasSSS.length > 0 && (
                <section className="mb-8">
                  <h2 className="text-xl font-serif font-bold text-primary-500 mb-4">
                    Sık Sorulan Sorular
                  </h2>
                  {icraIflasSSS.map((item) => (
                    <div key={item.id} className="mb-6">
                      <h3 className="text-lg font-serif font-semibold text-primary-400 mb-2">
                        {item.soru}
                      </h3>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </section>
              )}
            </div>

            <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-6">
              <p className="text-sm text-gray-600">
                <strong>Bilgilendirme:</strong> Bu makale bilgilendirme amacıyla hazırlanmış olup, hukuki danışmanlık niteliği taşımamaktadır. Hukuki süreçleriniz için mutlaka avukat yardımı almanız önerilir.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">İlgili İçerikler</h3>
              <Link
                to="/faaliyet-alanlari/icra-iflas-hukuku"
                className="text-accent-500 hover:text-accent-600 font-medium flex items-center"
              >
                İcra ve İflas Hukuku Faaliyet Alanı
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
