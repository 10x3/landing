import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/HowItWorks";
import { Pricing } from "./pages/Pricing";
import { UseCaseNew } from "./pages/UseCaseNew";
import { UseCaseExisting } from "./pages/UseCaseExisting";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { ScrollToTop } from "./components/ScrollToTop";
import { NoiseLayer } from "./components/NoiseLayer";
import { PasswordGate } from "./components/PasswordGate";

function App() {
  return (
    <PasswordGate>
      <BrowserRouter>
        <ScrollToTop />
        <NoiseLayer />
        <div className="relative min-h-screen flex flex-col bg-canvas text-ink-100">
          <Nav />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/use-cases/new-product" element={<UseCaseNew />} />
              <Route path="/use-cases/existing-codebase" element={<UseCaseExisting />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </PasswordGate>
  );
}

export default App;
