import { motion } from 'motion/react';
import { Home, Gavel, Building2, Briefcase, ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Αστικό Δίκαιο',
    description: 'Οικογενειακό, Κληρονομικό, Ενοχικό Δίκαιο. Διαζύγια, διατροφές, επιμέλεια τέκνων, αποδοχές κληρονομιάς και διεκδικήσεις.',
    icon: Home,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Ποινικό Δίκαιο',
    description: 'Εκπροσώπηση σε όλα τα στάδια της ποινικής διαδικασίας. Υπεράσπιση σε δικαστήρια, σύνταξη μηνύσεων και υπομνημάτων.',
    icon: Gavel,
    color: 'bg-red-50 text-red-600',
  },
  {
    title: 'Ακίνητα & Real Estate',
    description: 'Έλεγχος τίτλων στο Υποθηκοφυλακείο και Κτηματολόγιο. Σύνταξη συμβολαίων, αγοραπωλησίες και μισθωτικές διαφορές.',
    icon: Building2,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Εμπορικό & Εταιρικό Δίκαιο',
    description: 'Σύσταση εταιρειών, νομική υποστήριξη επιχειρήσεων, εμπορικές συμβάσεις και διεκδίκηση απαιτήσεων.',
    icon: Briefcase,
    color: 'bg-emerald-50 text-emerald-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Οι Υπηρεσίες μας</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Τομείς Δικαίου</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Παρέχουμε ολοκληρωμένες νομικές υπηρεσίες σε ένα ευρύ φάσμα δικαίου, με εξειδίκευση και αφοσίωση στην επίτευξη των στόχων σας.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group border border-gray-100 flex flex-col h-full"
            >
              <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 font-serif">{service.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              <a 
                href="#contact" 
                className="flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
              >
                Μάθετε Περισσότερα
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
