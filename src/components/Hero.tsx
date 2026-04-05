import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Law Office Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/80 to-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block text-accent font-sans tracking-[0.3em] uppercase text-xs md:text-sm mb-6 font-semibold">
            Δικηγορικό Γραφείο στο Περιστέρι
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.95] mb-8 text-white text-balance">
            Νομική Εκπροσώπηση <br />
            <span className="italic font-serif text-accent">με Συνέπεια</span>
          </h1>
          
          <p className="text-lg md:text-xl font-sans font-light text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Δίπλα σας σε κάθε νομική πρόκληση από το 2015. Εξειδικευμένες λύσεις με έμφαση στην προσωπική ενασχόληση και το αποτέλεσμα.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#services" 
              className="group flex items-center gap-3 text-white font-sans font-semibold text-lg tracking-wide hover:text-accent transition-all"
            >
              Ανακαλύψτε τις Υπηρεσίες μας
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute left-8 bottom-24 hidden lg:block">
        <span className="writing-vertical-rl rotate-180 text-[10px] uppercase tracking-[0.5em] text-white/30 font-semibold">
          ESTABLISHED 2015 — PERISTERI, ATHENS
        </span>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent"></div>
      </motion.div>
    </section>
  );
}
