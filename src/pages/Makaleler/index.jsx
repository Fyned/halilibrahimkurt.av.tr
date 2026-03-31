import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumb from '../../components/common/Breadcrumb';

const makaleler = [
  {
    id: 'kira-hukuku-nedir',
    baslik: 'Kira Hukuku Nedir?',
    ozet: 'Kira hukuku; kiraya veren ile kiracı arasındaki konut ve işyeri kiralarından doğan uyuşmazlıkları düzenleyen hukuk dalıdır.',
    tarih: '15 Ocak 2026',
    link: '/makaleler/kira-hukuku-nedir'
  }
];

export default function Makaleler() {
  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Makaleler', url: '/makaleler' }
  ];

  return (
    <>
      <SEOHead
        title="Makaleler"
        description="Av. Halil İbrahim Kurt tarafından hazırlanan hukuki makaleler. Kira hukuku, kiracı hakları, ev sahibi hakları ve daha fazlası."
        canonical="/makaleler"
      />

      <Breadcrumb items={breadcrumbItems} />

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="section-title">Makaleler</h1>
              <p className="section-subtitle">
                Hukuki konularda bilgilendirici makaleler
              </p>
            </header>

            <div className="space-y-6">
              {makaleler.map((makale) => (
                <Link
                  key={makale.id}
                  to={makale.link}
                  className="block bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 md:p-8 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-grow">
                      <h2 className="text-xl font-serif font-bold text-primary-500 group-hover:text-accent-500 transition-colors mb-2">
                        {makale.baslik}
                      </h2>
                      <p className="text-gray-600 mb-4 md:mb-0">
                        {makale.ozet}
                      </p>
                    </div>
                    <div className="flex items-center justify-between md:flex-col md:items-end md:ml-6">
                      <span className="text-sm text-gray-400">{makale.tarih}</span>
                      <span className="text-accent-500 font-medium flex items-center">
                        Oku
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {makaleler.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Henüz makale eklenmemiştir.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
