import { Helmet } from 'react-helmet-async';

export default function SEOHead({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = '/logo.svg'
}) {
  const siteName = 'Av. Halil Ibrahim Kurt';
  const baseUrl = 'https://halilibrahimkurt.av.tr';
  const fullTitle = `${title} | ${siteName}`;
  const canonicalUrl = `${baseUrl}${canonical}`;

  return (
    <Helmet>
      {/* Temel Meta Etiketleri */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

      {/* Ek Meta Etiketleri */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Turkish" />
      <meta name="geo.region" content="TR-34" />
      <meta name="geo.placename" content="Istanbul" />
    </Helmet>
  );
}
