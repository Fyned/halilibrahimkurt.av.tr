import { Link } from 'react-router-dom';
import { avukatBilgileri } from '../../data/avukatBilgileri';

export default function IletisimKutusu() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-custom">
        <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-3xl overflow-hidden">
          {/* Dekoratif Elementler */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Sol Taraf - Metin */}
              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                  <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-sm font-medium">Hukuki Danışmanlık</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                  Hukuki Sorularınız mı Var?
                  <span className="block text-accent-400 mt-2">Bize Ulaşın</span>
                </h2>

                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                  Hukuki süreçleriniz hakkında bilgi almak ve randevu oluşturmak için bizimle iletişime geçebilirsiniz.
                </p>

                <Link
                  to="/iletisim"
                  className="group inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Randevu Alın
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Sağ Taraf - İletişim Bilgileri */}
              <div className="space-y-6">
                {/* Telefon */}
                <a
                  href={avukatBilgileri.telefonLink}
                  className="group flex items-center gap-5 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-accent-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <p className="text-sm text-gray-300 mb-1">Hemen Arayın</p>
                    <p className="text-xl font-bold">{avukatBilgileri.telefonGosterim}</p>
                  </div>
                </a>

                {/* E-posta */}
                <a
                  href={`mailto:${avukatBilgileri.email}`}
                  className="group flex items-start gap-5 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <p className="text-sm text-gray-300 mb-1">E-posta</p>
                    <p className="font-medium leading-relaxed">{avukatBilgileri.email}</p>
                  </div>
                </a>

                {/* Çalışma Saatleri */}
                <div className="flex items-center gap-5 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <p className="text-sm text-gray-300 mb-1">Çalışma Saatleri</p>
                    <p className="font-medium">{avukatBilgileri.calismaGunleri}: {avukatBilgileri.calismaSaatleri}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
