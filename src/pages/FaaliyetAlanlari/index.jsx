import SEOHead from '../../components/common/SEOHead';
import Breadcrumb from '../../components/common/Breadcrumb';
import Card from '../../components/common/Card';
import { faaliyetAlanlari } from '../../data/faaliyetAlanlari';

export default function FaaliyetAlanlari() {
  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Faaliyet Alanları', url: '/faaliyet-alanlari' }
  ];

  return (
    <>
      <SEOHead
        title="Faaliyet Alanları"
        description="Av. Halil İbrahim Kurt faaliyet alanları. Boşanma, tazminat, iş hukuku, icra ve iflas, kira hukuku, miras hukuku alanlarında hukuki danışmanlık."
        canonical="/faaliyet-alanlari"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-medium">Hukuki Hizmetler</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Faaliyet Alanlarımız</h1>
            <p className="text-xl text-gray-200">
              Aşağıdaki hukuk alanlarında profesyonel hukuki danışmanlık hizmeti sunmaktayız.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Açıklama */}
            <div className="text-center mb-16">
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Her alan hakkında detaylı bilgi almak için ilgili alana tıklayabilirsiniz.
                Hukuki süreçlerinizde size yardımcı olmaktan memnuniyet duyarız.
              </p>
            </div>

            {/* Kartlar */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {faaliyetAlanlari.map((alan) => (
                <Card
                  key={alan.id}
                  baslik={alan.baslik}
                  aciklama={alan.kisaAciklama}
                  link={alan.link}
                  ikon={alan.ikon}
                />
              ))}
            </div>

            {/* Alt Bilgi */}
            <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-serif font-bold text-primary-500 mb-2">
                    Diğer Hukuki Konularınız mı Var?
                  </h3>
                  <p className="text-gray-600">
                    Yukarıda listelenen alanlar dışındaki hukuki konularınız için de bizimle iletişime geçebilirsiniz.
                    Size yardımcı olmaktan memnuniyet duyarız.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
