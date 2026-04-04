import { Phone, Clock, AlertCircle } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="bg-primary text-white py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-accent" />
          <a href="tel:6975744893" className="hover:text-accent transition-colors">697 574 4893</a>
          <span className="hidden md:inline text-gray-400">|</span>
          <a href="tel:2112132238" className="hover:text-accent transition-colors">211 213 2238</a>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-accent" />
          <span>Δευ - Παρ: 09:00 - 21:00 (Κατόπιν Ραντεβού)</span>
        </div>
      </div>
      <div className="mt-2 md:mt-0">
        <a 
          href="tel:6975744893" 
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-full flex items-center gap-2 font-semibold transition-all transform hover:scale-105"
        >
          <AlertCircle className="w-4 h-4" />
          Επείγουσα Ανάγκη
        </a>
      </div>
    </div>
  );
}
