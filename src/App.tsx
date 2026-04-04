import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}
