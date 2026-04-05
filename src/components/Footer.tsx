import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const address = "Δημ. Γούναρη 2, Περιστέρι, Τ.Κ. 121 31";
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.567890123456!2d23.6912345!3d38.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a2e3f4b5c6d7%3A0x8a9b0c1d2e3f4g5h!2sDim.%20Gounari%202%2C%20Peristeri%20121%2031!5e0!3m2!1sen!2sgr!4v1712345678901!5m2!1sen!2sgr`;
  // Note: Standard embed URL for "Dim. Gounari 2, Peristeri"
  const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=Δημ.+Γούναρη+2,+Περιστέρι+12131";

  return (
    <footer id="contact" className="bg-primary text-white pt-24 pb-12 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
        {/* Brand & Social */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <span className="text-2xl font-display font-bold text-white block mb-2">ΦΑΝΗ ΣΤΑΜΑΤΑ Π. ΛΑΖΑΡΑΚΟΥ</span>
            <span className="text-xs font-sans tracking-[0.3em] text-accent font-semibold uppercase">ΔΙΚΗΓΟΡΟΣ & ΣΥΝΕΡΓΑΤΕΣ</span>
          </div>
          <p className="text-gray-400 font-light leading-relaxed max-w-sm">
            Παρέχουμε εξειδικευμένες νομικές υπηρεσίες με επίκεντρο τον άνθρωπο και το αποτέλεσμα. Η εμπιστοσύνη σας είναι η δέσμευσή μας.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all group">
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h3 className="text-sm font-sans font-bold uppercase tracking-widest mb-8 text-accent">Πλοήγηση</h3>
          <ul className="space-y-4 text-gray-400 font-light">
            {['Αρχική', 'Το Γραφείο', 'Τομείς Δικαίου', 'Επικοινωνία'].map((item) => (
              <li key={item}>
                <a href={`#${item === 'Αρχική' ? '' : item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-accent transition-all group-hover:w-3"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div className="lg:col-span-3">
          <h3 className="text-sm font-sans font-bold uppercase tracking-widest mb-8 text-accent">Επικοινωνία</h3>
          <div className="space-y-6 text-gray-400 font-light">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
              <p>{address}</p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div className="flex flex-col">
                <a href="tel:6975744893" className="hover:text-white transition-colors">697 574 4893</a>
                <a href="tel:2112132238" className="hover:text-white transition-colors">211 213 2238</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
              <a href="mailto:info@lazarakou-law.gr" className="hover:text-white transition-colors">info@lazarakou-law.gr</a>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
              <p>Δευ - Παρ: 09:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-3">
          <h3 className="text-sm font-sans font-bold uppercase tracking-widest mb-8 text-accent">Τοποθεσία</h3>
          <div className="rounded-xl overflow-hidden h-48 relative group border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.136450655474!2d23.691764176465457!3d38.0089154719273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a2e3f4b5c6d7%3A0x8a9b0c1d2e3f4g5h!2zzpTOt868LiDOk86_z43Ovc6xz4HOtyAyLCDOoM61z4HOuc-Dz4TOrc-BzrkgMTIxIDMx!5e0!3m2!1sel!2sgr!4v1712345678901!5m2!1sel!2sgr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
            <a 
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span className="bg-white text-primary px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                Ανοίξτε στους Χάρτες
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs tracking-widest uppercase font-semibold">
        <p>&copy; {new Date().getFullYear()} ΦΑΝΗ ΣΤΑΜΑΤΑ Π. ΛΑΖΑΡΑΚΟΥ</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Πολιτική Απορρήτου</a>
          <a href="#" className="hover:text-white transition-colors">Όροι Χρήσης</a>
        </div>
      </div>
    </footer>
  );
}
