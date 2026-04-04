import { motion } from 'motion/react';
import { Award, Users, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Professional Lawyer" 
              className="w-full h-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full -z-0 blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/5 rounded-full -z-0 blur-3xl"></div>
          <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="bg-accent/20 p-3 rounded-lg">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">9+ Έτη</p>
                <p className="text-sm text-gray-500">Εμπειρίας από το 2015</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Το Γραφείο μας</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
            Φανή Σταμάτα Π. Λαζαράκου – Δικηγόρος & Συνεργάτες
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Το δικηγορικό μας γραφείο ιδρύθηκε το 2015 από την Φανή Σταμάτα Λαζαράκου, με όραμα την παροχή νομικών υπηρεσιών υψηλού επιπέδου, εστιασμένων στις ανάγκες του σύγχρονου πολίτη και της επιχείρησης. Με έδρα το Περιστέρι, έχουμε χτίσει μια σχέση εμπιστοσύνης με τους εντολείς μας, βασισμένη στην ειλικρίνεια και τη διαφάνεια.
            </p>
            <p>
              Πιστεύουμε ακράδαντα στην προσωπική ενασχόληση με κάθε υπόθεση. Για εμάς, κάθε πελάτης είναι μοναδικός και κάθε νομική πρόκληση απαιτεί εξατομικευμένη προσέγγιση. Δίνουμε ιδιαίτερη έμφαση στην ανάλυση της υπόθεσης σε βάθος, εξετάζοντας κάθε λεπτομέρεια πριν προτείνουμε τη δικαστική ή την εξωδικαστική οδό.
            </p>
            <p>
              Στόχος μας είναι η άμεση επικοινωνία και η επίτευξη του βέλτιστου δυνατού αποτελέσματος, διασφαλίζοντας τα συμφέροντά σας με μαχητικότητα και νομική αρτιότητα. Είμαστε δίπλα σας, καθοδηγώντας σας με ασφάλεια σε κάθε βήμα της νομικής διαδικασίας.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <div className="flex items-start gap-4">
              <div className="bg-primary/5 p-2 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-primary">Προσωπική Σχέση</h4>
                <p className="text-sm text-gray-500">Άμεση επαφή με τον δικηγόρο σας.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/5 p-2 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-primary">Ανάλυση σε Βάθος</h4>
                <p className="text-sm text-gray-500">Στρατηγική προσέγγιση κάθε υπόθεσης.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
