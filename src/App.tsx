import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WorksArchive } from './components/WorksArchive';
import { CVSection } from './components/CVSection';
import { About } from './components/About';

type Section = 'about' | 'works' | 'cv';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'About Kuroda';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => setCurrentSection('about')}
              className="hover:opacity-60 transition-opacity"
            >
              <h1 className="tracking-tight">
                Kuroda / 쿠로다 / 黑田
              </h1>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => setCurrentSection('about')}
                className={`transition-opacity ${
                  currentSection === 'about' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                About
              </button>
              <button
                onClick={() => setCurrentSection('works')}
                className={`transition-opacity ${
                  currentSection === 'works' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                Archive
              </button>
              <button
                onClick={() => setCurrentSection('cv')}
                className={`transition-opacity ${
                  currentSection === 'cv' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                CV
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <nav className="md:hidden py-4 space-y-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setCurrentSection('about');
                  setMenuOpen(false);
                }}
                className={`block w-full text-left ${
                  currentSection === 'about' ? 'opacity-100' : 'opacity-40'
                }`}
              >
                About
              </button>
              <button
                onClick={() => {
                  setCurrentSection('works');
                  setMenuOpen(false);
                }}
                className={`block w-full text-left ${
                  currentSection === 'works' ? 'opacity-100' : 'opacity-40'
                }`}
              >
                Archive
              </button>
              <button
                onClick={() => {
                  setCurrentSection('cv');
                  setMenuOpen(false);
                }}
                className={`block w-full text-left ${
                  currentSection === 'cv' ? 'opacity-100' : 'opacity-40'
                }`}
              >
                CV
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {currentSection === 'about' && <About />}
        {currentSection === 'works' && <WorksArchive />}
        {currentSection === 'cv' && <CVSection />}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center opacity-40">
            <p>© 2026 kuroda / 쿠로다. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
