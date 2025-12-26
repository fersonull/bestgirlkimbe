import { useEffect } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Letter from './components/Letter';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-champagne-50 scrollbar-thin">
      <main>
        <Hero />
        <Gallery />
        <Letter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
