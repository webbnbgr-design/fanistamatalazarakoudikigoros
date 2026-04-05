import { motion } from 'motion/react';
import { Award, Users, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 px-4 md:px-8 bg-paper relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-0 right-0 text-[20vw] font-display font-bold text-primary/5 select-none pointer-events-none leading-none -translate-y-1/4 translate-x-1/4">
        LAW
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative z-10 oval-mask aspect-[4/5] overflow-hidden shadow-2xl border-8 border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Professional Lawyer" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-2xl z-20 border border-gray-100 hidden md:block"
          >
            <div className="flex items-center gap-6">
              <div className="bg-accent/10 p-4 rounded-full">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">9+ Έτη</p>
                <p className="text-xs font-sans tracking-widest text-gray-400 uppercase font-bold">Εμπειρίας από το 2015</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <span className="text-accent font-sans font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Η Φιλοσοφία μας</span>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-primary mb-10 leading-[1.1] text-balance">
            Προσωπική Σχέση <br />
            <span className="italic font-serif">& Νομική Αρτιότητα</span>
          </h2>
          
          <div className="space-y-8 text-lg text-slate-600 font-light leading-relaxed">
            <p>
              Το δικηγορικό μας γραφείο ιδρύθηκε το 2015 από την <span className="text-primary font-medium">Φανή Σταμάτα Λαζαράκου</span>, με όραμα την παροχή νομικών υπηρεσιών υψηλού επιπέδου, εστιασμένων στις ανάγκες του σύγχρονου πολίτη και της επιχείρησης.
            </p>
            <p>
              Πιστεύουμε ακράδαντα στην προσωπική ενασχόληση. Για εμάς, κάθε πελάτης είναι μοναδικός και κάθε νομική πρόκληση απαιτεί εξατομικευμένη προσέγγιση. Δίνουμε ιδιαίτερη έμφαση στην ανάλυση της υπόθεσης σε βάθος, εξετάζοντας κάθε λεπτομέρεια πριν προτείνουμε τη βέλτιστη οδό.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16 pt-12 border-t border-gray-200">
            {[
              { icon: Users, title: 'Άμεση Επικοινωνία', desc: 'Προσωπική επαφή σε κάθε στάδιο.' },
              { icon: ShieldCheck, title: 'Απόλυτη Εχεμύθεια', desc: 'Προστασία των συμφερόντων σας.' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="bg-primary text-white p-3 rounded-lg shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
