import { motion } from 'motion/react';
import { Home, Gavel, Building2, Briefcase, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Αστικό Δίκαιο',
    description: 'Οικογενειακό, Κληρονομικό, Ενοχικό Δίκαιο. Διαζύγια, διατροφές, επιμέλεια τέκνων, αποδοχές κληρονομιάς και διεκδικήσεις.',
    icon: Home,
    number: '01',
  },
  {
    title: 'Ποινικό Δίκαιο',
    description: 'Εκπροσώπηση σε όλα τα στάδια της ποινικής διαδικασίας. Υπεράσπιση σε δικαστήρια, σύνταξη μηνύσεων και υπομνημάτων.',
    icon: Gavel,
    number: '02',
  },
  {
    title: 'Ακίνητα & Real Estate',
    description: 'Έλεγχος τίτλων στο Υποθηκοφυλακείο και Κτηματολόγιο. Σύνταξη συμβολαίων, αγοραπωλησίες και μισθωτικές διαφορές.',
    icon: Building2,
    number: '03',
  },
  {
    title: 'Εμπορικό & Εταιρικό Δίκαιο',
    description: 'Σύσταση εταιρειών, νομική υποστήριξη επιχειρήσεων, εμπορικές συμβάσεις και διεκδίκηση απαιτήσεων.',
    icon: Briefcase,
    number: '04',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 md:px-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-sans font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Εξειδίκευση</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-primary leading-tight">
              Τομείς <span className="italic font-serif">Νομικής Δράσης</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 font-light max-w-md leading-relaxed">
            Παρέχουμε ολοκληρωμένες νομικές υπηρεσίες με εξειδίκευση και αφοσίωση στην επίτευξη των στόχων σας.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 overflow-hidden rounded-3xl">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-12 group hover:bg-primary transition-colors duration-500 relative overflow-hidden"
            >
              {/* Background Number */}
              <div className="absolute top-8 right-12 text-8xl font-display font-bold text-gray-50 group-hover:text-white/5 transition-colors duration-500 select-none">
                {service.number}
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-primary mb-6 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-10 leading-relaxed group-hover:text-gray-300 transition-colors duration-500 font-light">
                  {service.description}
                </p>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-3 text-accent font-sans font-bold text-sm uppercase tracking-widest group-hover:text-white transition-all"
                >
                  Λεπτομέρειες
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
