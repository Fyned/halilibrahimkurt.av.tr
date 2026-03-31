import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumb from '../../components/common/Breadcrumb';
import { makaleler } from '../../data/makaleler';

export default function Makaleler() {
  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Makaleler', url: '/makaleler' }
  ];

  return (
    <>
      <SEOHead
        title="Makaleler"
        description="Av. Halil İbrahim Kurt tarafından hazırlanan hukuki makaleler. Boşanma, tazminat, iş hukuku, icra ve iflas, kira hukuku, miras hukuku konularında bilgilendirici yazılar."
        canonical="/makaleler"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-sm font-medium">Hukuki Makaleler</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Makaleler</h1>
            <p className="text-xl text-gray-200">
              Hukuki konularda bilgilendirici makaleler ve güncel hukuki değerlendirmeler.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {makaleler.map((makale) => (
                <Link
                  key={makale.id}
                  to={makale.link}
                  className="block bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 md:p-8 group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-grow">
                      <span className="inline-block bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {makale.kategori}
                      </span>
                      <h2 className="text-xl font-serif font-bold text-primary-500 group-hover:text-accent-500 transition-colors mb-2">
                        {makale.baslik}
                      </h2>
                      <p className="text-gray-600 mb-4 md:mb-0">
                        {makale.ozet}
                      </p>
                    </div>
                    <div className="flex items-center justify-between md:flex-col md:items-end md:ml-6 flex-shrink-0">
                      <span className="text-sm text-gray-400">{makale.tarih}</span>
                      <span className="text-accent-500 font-medium flex items-center mt-2">
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
          </div>
        </div>
      </section>
    </>
  );
}
