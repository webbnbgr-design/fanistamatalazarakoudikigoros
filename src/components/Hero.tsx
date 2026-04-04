import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Law Office Background" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center md:text-left text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
            Νομική Εκπροσώπηση με <span className="text-accent italic">Συνέπεια</span> και Έμφαση στο Αποτέλεσμα
          </h1>
          <p className="text-lg md:text-2xl font-light text-gray-200 mb-10 max-w-2xl">
            Δικηγορικό Γραφείο στο Περιστέρι – Δίπλα σας σε κάθε νομική πρόκληση από το 2015.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-accent/20"
            >
              <Calendar className="w-5 h-5" />
              Προγραμματίστε Ραντεβού
            </a>
            <a 
              href="#services" 
              className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
            >
              Οι Υπηρεσίες μας
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
