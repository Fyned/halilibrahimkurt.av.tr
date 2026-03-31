import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumb from '../../components/common/Breadcrumb';
import { ArticleSchema, FAQSchema } from '../../components/schema/SchemaMarkup';
import { kiraHukukuSSS, yargitayKararlari, kaynakca } from '../../data/kiraHukukuIcerik';

export default function KiraHukukuNedir() {
  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Makaleler', url: '/makaleler' },
    { name: 'Kira Hukuku Nedir?', url: '/makaleler/kira-hukuku-nedir' }
  ];

  return (
    <>
      <SEOHead
        title="Kira Hukuku Nedir?"
        description="Kira hukuku nedir? Kiracı ve ev sahibi hakları, tahliye davaları, kira tespit ve uyarlama davaları hakkında detaylı bilgi."
        canonical="/makaleler/kira-hukuku-nedir"
        ogType="article"
      />
      <ArticleSchema
        baslik="Kira Hukuku Nedir?"
        aciklama="Kira hukuku hakkında kapsamlı bilgilendirici makale. Kiracı ve ev sahibi hakları, tahliye sebepleri, kira bedeli uyuşmazlıkları."
        yayinTarihi="2026-01-15"
      />
      <FAQSchema sorular={kiraHukukuSSS} />

      <Breadcrumb items={breadcrumbItems} />

      <article className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Başlık */}
            <header className="mb-12">
              <time className="text-sm text-gray-500 mb-2 block">15 Ocak 2026</time>
              <h1 className="section-title">Kira Hukuku Nedir?</h1>
            </header>

            {/* İçerik */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Kira hukuku; kiraya veren ile kiracı arasındaki konut ve işyeri kiralarından doğan uyuşmazlıkları düzenleyen ve karşılıklı olarak hak ve yükümlülükleri gösteren hukuk dalıdır. Kiralananın tahliye, kira bedeli, kira bedelinin uyarlanmasını, kira bedelinin tespitini ve kira sözleşmesinin feshi gibi konuları kapsar. Bu yazıda kira hukuku ile alakalı sık sorulan sorulara cevap verilecektir.
              </p>

              {/* Soru-Cevap Bölümü */}
              {kiraHukukuSSS.slice(1).map((item) => (
                <section key={item.id} className="mb-8">
                  <h2 className="text-xl font-serif font-bold text-primary-500 mb-4">
                    {item.soru}
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {item.cevap}
                  </p>
                </section>
              ))}

              {/* Yargıtay Kararları */}
              <section className="mt-12">
                <h2 className="text-2xl font-serif font-bold text-primary-500 mb-6">
                  İlgili Yargıtay Kararları
                </h2>
                <div className="space-y-6">
                  {yargitayKararlari.map((karar) => (
                    <blockquote
                      key={karar.id}
                      className="bg-gray-50 rounded-xl p-6 border-l-4 border-accent-500"
                    >
                      <p className="text-gray-700 italic leading-relaxed mb-3">
                        "{karar.metin}"
                      </p>
                      <cite className="text-sm text-gray-500 not-italic font-medium">
                        — {karar.kaynak}
                      </cite>
                    </blockquote>
                  ))}
                </div>
              </section>

              {/* Kaynakça */}
              <section className="mt-12">
                <h2 className="text-2xl font-serif font-bold text-primary-500 mb-6">
                  Kaynakça
                </h2>
                <ul className="space-y-2">
                  {kaynakca.map((kaynak, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-start">
                      <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {kaynak}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Bilgilendirme */}
            <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-6">
              <p className="text-sm text-gray-600">
                <strong>Bilgilendirme:</strong> Bu makale bilgilendirme amacıyla hazırlanmış olup, hukuki danışmanlık niteliği taşımamaktadır. Hukuki süreçleriniz için mutlaka avukat yardımı almanız önerilir.
              </p>
            </div>

            {/* İlgili İçerikler */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">İlgili İçerikler</h3>
              <Link
                to="/faaliyet-alanlari/kira-hukuku"
                className="text-accent-500 hover:text-accent-600 font-medium flex items-center"
              >
                Kira Hukuku Faaliyet Alanı
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
