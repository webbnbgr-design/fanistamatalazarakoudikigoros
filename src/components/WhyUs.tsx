import { motion } from 'motion/react';
import { UserCheck, History, Shield, Target } from 'lucide-react';

const reasons = [
  {
    title: 'Προσωπική Ενασχόληση',
    description: 'Κάθε υπόθεση αντιμετωπίζεται με την αμέριστη προσοχή του δικηγόρου σας, διασφαλίζοντας άμεση επαφή.',
    icon: UserCheck,
  },
  {
    title: 'Εμπειρία από το 2015',
    description: 'Σχεδόν μια δεκαετία επιτυχημένης νομικής πορείας και εκατοντάδων διεκπεραιωμένων υποθέσεων.',
    icon: History,
  },
  {
    title: 'Διαφάνεια & Ειλικρίνεια',
    description: 'Ξεκάθαρη επικοινωνία για τις πιθανότητες επιτυχίας, το κόστος και τη στρατηγική που θα ακολουθηθεί.',
    icon: Shield,
  },
  {
    title: 'Στρατηγική Προσέγγιση',
    description: 'Σχεδιασμός της βέλτιστης οδού πριν από κάθε νομική ενέργεια, με στόχο το μέγιστο αποτέλεσμα.',
    icon: Target,
  },
];

export default function WhyUs() {
  return (
    <section className="py-32 px-4 md:px-8 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-accent font-sans font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Γιατί να μας Επιλέξετε</span>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-primary leading-tight">
            Η Δέσμευσή μας <span className="italic font-serif">στην Αριστεία</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="mb-8 relative">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                  <reason.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-accent/10 rounded-2xl -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                {reason.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed font-light">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
