import { motion } from 'motion/react';
import { UserCheck, History, Shield, Target } from 'lucide-react';

const reasons = [
  {
    title: 'Προσωπική Ενασχόληση',
    description: 'Κάθε υπόθεση αντιμετωπίζεται με την αμέριστη προσοχή του δικηγόρου σας.',
    icon: UserCheck,
  },
  {
    title: 'Εμπειρία από το 2015',
    description: 'Σχεδόν μια δεκαετία επιτυχημένης νομικής πορείας και αποτελεσμάτων.',
    icon: History,
  },
  {
    title: 'Διαφάνεια & Ειλικρίνεια',
    description: 'Ξεκάθαρη επικοινωνία για τις πιθανότητες επιτυχίας και το κόστος.',
    icon: Shield,
  },
  {
    title: 'Στρατηγική Προσέγγιση',
    description: 'Σχεδιασμός της βέλτιστης οδού πριν από κάθε νομική ενέργεια.',
    icon: Target,
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Γιατί να μας Επιλέξετε</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Η Φιλοσοφία μας</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/10 transition-colors">
                <reason.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-serif">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
