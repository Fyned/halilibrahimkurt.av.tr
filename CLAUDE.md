# CLAUDE.md — halilibrahimkurt.av.tr

## Proje
- **Tip:** Website (avukat tanitim sitesi)
- **Musteri:** Av. Halil Ibrahim Kurt
- **Domain:** halilibrahimkurt.av.tr
- **Durum:** Production (Vercel)

## Teknoloji
- React 18, Vite 7, JSX (TypeScript yok)
- Tailwind CSS 4, PostCSS
- React Router 7, React Helmet Async
- Vercel deploy

## Yapi
```
src/
  components/
    common/        # Breadcrumb, Card, SEOHead
    layout/        # Header, Footer, Layout
    schema/        # SchemaMarkup (structured data)
    sections/      # Hero, FaaliyetOzet, IletisimKutusu
  data/            # avukatBilgileri, faaliyetAlanlari, kiraHukukuIcerik
  hooks/           # useScrollToTop
  pages/           # AnaSayfa, Hakkimizda, Iletisim, FaaliyetAlanlari/, Makaleler/
public/
dist/
```

## Kurallar
- Icerik dili Turkce; hukuki terimler dogru kullanilmali
- SEO oncelikli: her sayfada SEOHead + SchemaMarkup olmali
- Sayfa ve route isimleri Turkce (AnaSayfa, Hakkimizda, Iletisim)
- `npm run build` ile production build alinir, Vercel uzerinden deploy edilir
