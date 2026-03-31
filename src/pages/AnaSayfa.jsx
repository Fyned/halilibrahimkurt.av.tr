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
        description="Av. Halil İbrahim Kurt - İstanbul Barosu. Boşanma, tazminat, iş hukuku, icra ve iflas, kira hukuku, miras hukuku alanlarında hukuki danışmanlık."
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
