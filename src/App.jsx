import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

const AnaSayfa = lazy(() => import('./pages/AnaSayfa'));
const Hakkimizda = lazy(() => import('./pages/Hakkimizda'));
const FaaliyetAlanlari = lazy(() => import('./pages/FaaliyetAlanlari'));
const KiraHukuku = lazy(() => import('./pages/FaaliyetAlanlari/KiraHukuku'));
const BosanmaHukuku = lazy(() => import('./pages/FaaliyetAlanlari/BosanmaHukuku'));
const IsHukuku = lazy(() => import('./pages/FaaliyetAlanlari/IsHukuku'));
const IcraIflasHukuku = lazy(() => import('./pages/FaaliyetAlanlari/IcraIflasHukuku'));
const MirasHukuku = lazy(() => import('./pages/FaaliyetAlanlari/MirasHukuku'));
const TazminatHukuku = lazy(() => import('./pages/FaaliyetAlanlari/TazminatHukuku'));
const TrafikKazasiTazminat = lazy(() => import('./pages/FaaliyetAlanlari/TrafikKazasiTazminat'));
const IsKazasiTazminat = lazy(() => import('./pages/FaaliyetAlanlari/IsKazasiTazminat'));
const Makaleler = lazy(() => import('./pages/Makaleler'));
const KiraHukukuNedir = lazy(() => import('./pages/Makaleler/KiraHukukuNedir'));
const BosanmaHukukuNedir = lazy(() => import('./pages/Makaleler/BosanmaHukukuNedir'));
const IsHukukuNedir = lazy(() => import('./pages/Makaleler/IsHukukuNedir'));
const IcraIflasHukukuNedir = lazy(() => import('./pages/Makaleler/IcraIflasHukukuNedir'));
const MirasHukukuNedir = lazy(() => import('./pages/Makaleler/MirasHukukuNedir'));
const TazminatHukukuNedir = lazy(() => import('./pages/Makaleler/TazminatHukukuNedir'));
const Iletisim = lazy(() => import('./pages/Iletisim'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AnaSayfa />} />
            <Route path="hakkimizda" element={<Hakkimizda />} />
            <Route path="faaliyet-alanlari">
              <Route index element={<FaaliyetAlanlari />} />
              <Route path="kira-hukuku" element={<KiraHukuku />} />
              <Route path="bosanma-hukuku" element={<BosanmaHukuku />} />
              <Route path="is-hukuku" element={<IsHukuku />} />
              <Route path="icra-iflas-hukuku" element={<IcraIflasHukuku />} />
              <Route path="miras-hukuku" element={<MirasHukuku />} />
              <Route path="tazminat-hukuku">
                <Route index element={<TazminatHukuku />} />
                <Route path="trafik-kazasi-tazminat" element={<TrafikKazasiTazminat />} />
                <Route path="is-kazasi-tazminat" element={<IsKazasiTazminat />} />
              </Route>
            </Route>
            <Route path="makaleler">
              <Route index element={<Makaleler />} />
              <Route path="kira-hukuku-nedir" element={<KiraHukukuNedir />} />
              <Route path="bosanma-hukuku-nedir" element={<BosanmaHukukuNedir />} />
              <Route path="is-hukuku-nedir" element={<IsHukukuNedir />} />
              <Route path="icra-iflas-hukuku-nedir" element={<IcraIflasHukukuNedir />} />
              <Route path="miras-hukuku-nedir" element={<MirasHukukuNedir />} />
              <Route path="tazminat-hukuku-nedir" element={<TazminatHukukuNedir />} />
            </Route>
            <Route path="iletisim" element={<Iletisim />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
