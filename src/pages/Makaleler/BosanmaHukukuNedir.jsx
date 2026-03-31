import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumb from '../../components/common/Breadcrumb';
import { ArticleSchema, FAQSchema } from '../../components/schema/SchemaMarkup';
import { bosanmaHukukuGiris, bosanmaHukukuBolumler } from '../../data/bosanmaHukukuIcerik';

export default function BosanmaHukukuNedir() {
  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Makaleler', url: '/makaleler' },
    { name: 'Boşanma Hukuku Nedir?', url: '/makaleler/bosanma-hukuku-nedir' }
  ];

  return (
    <>
      <SEOHead
        title="Boşanma Hukuku Nedir?"
        description="Boşanma hukuku nedir? TMK kapsamında boşanma sebepleri, anlaşmalı ve çekişmeli boşanma davaları, nafaka ve velayet hakkında detaylı bilgi."
        canonical="/makaleler/bosanma-hukuku-nedir"
        ogType="article"
      />
      <ArticleSchema
        baslik="Boşanma Hukuku Nedir?"
        aciklama="Boşanma hukuku hakkında kapsamlı bilgilendirici makale. TMK kapsamında boşanma sebepleri, anlaşmalı ve çekişmeli boşanma, nafaka ve velayet."
        yayinTarihi="2026-03-31"
      />
      <FAQSchema sorular={[]} />

      <Breadcrumb items={breadcrumbItems} />

      <article className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              <time className="text-sm text-gray-500 mb-2 block">31 Mart 2026</time>
              <h1 className="section-title">Boşanma Hukuku Nedir?</h1>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
                {bosanmaHukukuGiris}
              </p>

              {bosanmaHukukuBolumler.map((bolum) => (
                <section key={bolum.id} className="mb-12">
                  <h2 className="text-2xl font-serif font-bold text-primary-500 mb-6">
                    {bolum.baslik}
                  </h2>
                  {bolum.altBolumler.map((altBolum) => (
                    <div key={altBolum.id} className="mb-6">
                      <h3 className="text-xl font-serif font-semibold text-primary-400 mb-3">
                        {altBolum.baslik}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {altBolum.icerik}
                      </p>
                      {altBolum.ekBilgi && (
                        <div className="mt-4 bg-gray-50 rounded-xl p-5 border-l-4 border-accent-500">
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {altBolum.ekBilgi}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </section>
              ))}
            </div>

            <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-6">
              <p className="text-sm text-gray-600">
                <strong>Bilgilendirme:</strong> Bu makale bilgilendirme amacıyla hazırlanmış olup, hukuki danışmanlık niteliği taşımamaktadır. Hukuki süreçleriniz için mutlaka avukat yardımı almanız önerilir.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">İlgili İçerikler</h3>
              <Link
                to="/faaliyet-alanlari/bosanma-hukuku"
                className="text-accent-500 hover:text-accent-600 font-medium flex items-center"
              >
                Boşanma Hukuku Faaliyet Alanı
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
