import Card from '../common/Card';
import { faaliyetAlanlari } from '../../data/faaliyetAlanlari';

export default function FaaliyetOzet() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Başlık Bölümü */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Hukuki Hizmetler
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-500 mb-6">
            Faaliyet Alanlarımız
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hukuki süreçlerinizde yanınızdayız. Aşağıdaki alanlarda profesyonel hukuki danışmanlık hizmeti sunmaktayız.
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
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Diğer hukuki konularınız için</p>
              <p className="font-semibold text-primary-500">Bizimle iletişime geçebilirsiniz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
