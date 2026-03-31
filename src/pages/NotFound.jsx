import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Sayfa Bulunamadı"
        description="Aradığınız sayfa bulunamadı. Ana sayfaya dönerek sitede gezinmeye devam edebilirsiniz."
        canonical="/404"
      />

      <section className="relative min-h-[80vh] flex items-center py-20 md:py-32 overflow-hidden">
        {/* Arka Plan */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Numarası */}
            <div className="relative mb-8">
              <div className="text-[180px] md:text-[240px] font-serif font-bold text-primary-100 leading-none select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Başlık */}
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-4">
              Sayfa Bulunamadı
            </h1>

            {/* Açıklama */}
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Aradığınız sayfa mevcut değil veya taşınmış olabilir.
              Ana sayfaya dönerek sitede gezinmeye devam edebilirsiniz.
            </p>

            {/* Butonlar */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Ana Sayfaya Dön
              </Link>
              <Link
                to="/iletisim"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary-500 px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg border border-gray-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                İletişime Geç
              </Link>
            </div>

            {/* Hızlı Linkler */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Belki bunları arıyorsunuzdur:</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/hakkimizda"
                  className="text-primary-500 hover:text-accent-500 transition-colors font-medium text-sm"
                >
                  Hakkımızda
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  to="/faaliyet-alanlari"
                  className="text-primary-500 hover:text-accent-500 transition-colors font-medium text-sm"
                >
                  Faaliyet Alanları
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  to="/faaliyet-alanlari/kira-hukuku"
                  className="text-primary-500 hover:text-accent-500 transition-colors font-medium text-sm"
                >
                  Kira Hukuku
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
