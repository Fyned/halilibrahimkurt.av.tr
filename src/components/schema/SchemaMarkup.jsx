import { Helmet } from 'react-helmet-async';
import { avukatBilgileri } from '../../data/avukatBilgileri';

// Attorney Schema
export function AttorneySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "name": avukatBilgileri.tamAd,
    "telephone": avukatBilgileri.telefon,
    "email": avukatBilgileri.email,
    "url": avukatBilgileri.website,
    "areaServed": avukatBilgileri.hizmetBolgeleri,
    "knowsAbout": ["Boşanma Hukuku", "Tazminat Hukuku", "İş Hukuku", "İcra ve İflas Hukuku", "Kira Hukuku", "Miras Hukuku"],
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

// LocalBusiness Schema
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": avukatBilgileri.tamAd,
    "telephone": avukatBilgileri.telefon,
    "email": avukatBilgileri.email,
    "url": avukatBilgileri.website,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": avukatBilgileri.hizmetBolgeleri.map(bolge => ({
      "@type": "Country",
      "name": bolge
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

// FAQ Schema
export function FAQSchema({ sorular }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": sorular.map(s => ({
      "@type": "Question",
      "name": s.soru,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": s.cevap
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

// Article Schema
export function ArticleSchema({ baslik, aciklama, yayinTarihi, guncellenmeTarihi }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": baslik,
    "description": aciklama,
    "author": {
      "@type": "Person",
      "name": avukatBilgileri.tamAd
    },
    "publisher": {
      "@type": "Organization",
      "name": avukatBilgileri.tamAd,
      "url": avukatBilgileri.website
    },
    "datePublished": yayinTarihi,
    "dateModified": guncellenmeTarihi || yayinTarihi
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

// Breadcrumb Schema
export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${avukatBilgileri.website}${item.url}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
