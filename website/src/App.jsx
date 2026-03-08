import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { LikvidaciyaPage } from './pages/LikvidaciyaPage';
import { RegistraciyaOooPage } from './pages/RegistraciyaOooPage';
import { RegistraciyaIpPage } from './pages/RegistraciyaIpPage';
import { GotovyeOooPage } from './pages/GotovyeOooPage';
import { IzmeneniyaPage } from './pages/IzmeneniyaPage';
import { DokumentyPage } from './pages/DokumentyPage';
import { OKompaniiPage } from './pages/OKompaniiPage';
import { KontaktyPage } from './pages/KontaktyPage';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-primary-50">
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/likvidaciya-ooo" element={<LikvidaciyaPage />} />
            <Route path="/registraciya-ooo" element={<RegistraciyaOooPage />} />
            <Route path="/registraciya-ip" element={<RegistraciyaIpPage />} />
            <Route path="/gotovye-ooo" element={<GotovyeOooPage />} />
            <Route path="/izmeneniya" element={<IzmeneniyaPage />} />
            <Route path="/dokumenty" element={<DokumentyPage />} />
            <Route path="/o-kompanii" element={<OKompaniiPage />} />
            <Route path="/kontakty" element={<KontaktyPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
