import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AnaSayfa from './pages/AnaSayfa';
import Hakkimizda from './pages/Hakkimizda';
import FaaliyetAlanlari from './pages/FaaliyetAlanlari';
import KiraHukuku from './pages/FaaliyetAlanlari/KiraHukuku';
import BosanmaHukuku from './pages/FaaliyetAlanlari/BosanmaHukuku';
import IsHukuku from './pages/FaaliyetAlanlari/IsHukuku';
import IcraIflasHukuku from './pages/FaaliyetAlanlari/IcraIflasHukuku';
import MirasHukuku from './pages/FaaliyetAlanlari/MirasHukuku';
import TazminatHukuku from './pages/FaaliyetAlanlari/TazminatHukuku';
import TrafikKazasiTazminat from './pages/FaaliyetAlanlari/TrafikKazasiTazminat';
import IsKazasiTazminat from './pages/FaaliyetAlanlari/IsKazasiTazminat';
import Makaleler from './pages/Makaleler';
import KiraHukukuNedir from './pages/Makaleler/KiraHukukuNedir';
import Iletisim from './pages/Iletisim';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
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
          </Route>
          <Route path="iletisim" element={<Iletisim />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
