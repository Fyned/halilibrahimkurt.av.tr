import SEOHead from '../components/common/SEOHead';
import { AttorneySchema, LocalBusinessSchema } from '../components/schema/SchemaMarkup';
import Hero from '../components/sections/Hero';
import FaaliyetOzet from '../components/sections/FaaliyetOzet';
import IletisimKutusu from '../components/sections/IletisimKutusu';

export default function AnaSayfa() {
  return (
    <>
      <SEOHead
        title="Ana Sayfa"
        description="Av. Halil İbrahim Kurt - İstanbul 2 Nolu Barosu. Kira hukuku ve taşınmaz hukuku alanlarında hukuki danışmanlık. Pendik, Gebze ve İstanbul Anadolu Yakası."
        canonical="/"
      />
      <AttorneySchema />
      <LocalBusinessSchema />

      <Hero />
      <FaaliyetOzet />
      <IletisimKutusu />
    </>
  );
}
