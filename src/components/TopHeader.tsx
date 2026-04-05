import { Phone, Clock } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="bg-primary text-white py-3 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center border-b border-white/5">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
        <div className="flex items-center gap-3">
          <Phone className="w-3.5 h-3.5 text-accent" />
          <div className="flex gap-4 text-[11px] font-sans font-bold tracking-widest uppercase">
            <a href="tel:6975744893" className="hover:text-accent transition-colors">697 574 4893</a>
            <span className="text-white/20">/</span>
            <a href="tel:2112132238" className="hover:text-accent transition-colors">211 213 2238</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-3.5 h-3.5 text-accent" />
          <span className="text-[11px] font-sans font-bold tracking-widest uppercase text-white/70">
            Δευ - Παρ: 09:00 - 21:00 <span className="text-white/30 ml-2">(Κατόπιν Ραντεβού)</span>
          </span>
        </div>
      </div>
    </div>
  );
}
