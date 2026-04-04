import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-accent">Στοιχεία Επικοινωνίας</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent shrink-0" />
                <p className="text-gray-300 leading-relaxed">
                  Δημ. Γούναρη 2, Περιστέρι, Τ.Κ. 121 31<br />
                  (Έναντι Μετρό Άγιος Αντώνιος, 1ος Όροφος)
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-accent shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:6975744893" className="text-gray-300 hover:text-white transition-colors">697 574 4893 (Κινητό)</a>
                  <a href="tel:2112132238" className="text-gray-300 hover:text-white transition-colors">211 213 2238 (Σταθερό)</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent shrink-0" />
                <a href="mailto:info@lazarakou-law.gr" className="text-gray-300 hover:text-white transition-colors">info@lazarakou-law.gr</a>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent shrink-0" />
                <p className="text-gray-300">
                  Δευτέρα - Παρασκευή: 09:00 - 21:00<br />
                  (Κατόπιν Ραντεβού)
                </p>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="flex gap-4">
            <a href="#" className="bg-white/10 hover:bg-accent p-3 rounded-full transition-all group">
              <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="bg-white/10 hover:bg-accent p-3 rounded-full transition-all group">
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="bg-white/10 hover:bg-accent p-3 rounded-full transition-all group">
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="hidden lg:block">
          <h3 className="text-2xl font-serif font-bold mb-6 text-accent">Γρήγοροι Σύνδεσμοι</h3>
          <ul className="space-y-4 text-gray-300">
            <li><a href="#" className="hover:text-accent transition-colors">Αρχική</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors">Το Γραφείο</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Τομείς Δικαίου</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Επικοινωνία</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Πολιτική Απορρήτου</a></li>
          </ul>
        </div>

        {/* Map Placeholder */}
        <div className="h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <div className="w-full h-full bg-gray-800 flex items-center justify-center relative group">
            {/* Using a real static map image placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Map Location" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <MapPin className="w-12 h-12 text-accent mb-4" />
              <p className="text-lg font-bold mb-2">Βρείτε μας στο Περιστέρι</p>
              <p className="text-sm text-gray-400 mb-6">Δημ. Γούναρη 2, Τ.Κ. 121 31</p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Δημ.+Γούναρη+2,+Περιστέρι" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent text-white px-6 py-2 rounded-lg font-bold hover:bg-accent/90 transition-all"
              >
                Οδηγίες Χάρτη
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/10 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Φανή Σταμάτα Π. Λαζαράκου. Με επιφύλαξη παντός δικαιώματος.</p>
        <p className="mt-2">Σχεδιασμός & Ανάπτυξη από AI Studio</p>
      </div>
    </footer>
  );
}
