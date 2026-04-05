import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#' },
    { name: 'Το Γραφείο', href: '#about' },
    { name: 'Τομείς Δικαίου', href: '#services' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 px-4 md:px-8",
        isScrolled ? "py-4 bg-white/90 backdrop-blur-md shadow-sm" : "py-8 bg-paper"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col group cursor-pointer">
          <span className="text-xl md:text-2xl font-display font-bold text-primary leading-none tracking-tight">
            ΦΑΝΗ ΣΤΑΜΑΤΑ Π. ΛΑΖΑΡΑΚΟΥ
          </span>
          <div className="flex items-center gap-2 mt-1">
            <div className="h-[1px] w-4 bg-accent transition-all group-hover:w-8"></div>
            <span className="text-[10px] md:text-[11px] font-sans tracking-[0.4em] text-accent font-bold uppercase">
              ΔΙΚΗΓΟΡΟΣ & ΣΥΝΕΡΓΑΤΕΣ
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-primary/70 hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex flex-col gap-6 px-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-primary font-display font-bold text-2xl py-2 border-b border-gray-50 last:border-0 hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
