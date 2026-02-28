import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Dairy Feed', href: '#dairy-feed' },
  { label: 'Agri Inputs', href: '#agri-inputs' },
  { label: 'Coffee Trading', href: '#coffee-trading' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-earth-green shadow-hero'
          : 'bg-earth-green/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden bg-earth-cream flex items-center justify-center flex-shrink-0">
              <img
                src="/assets/generated/logo-icon.dim_256x256.png"
                alt="Adarshpatel Marketing Logo"
                className="w-9 h-9 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-earth-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"/><path d="M12 6v6l4 2"/></svg>';
                }}
              />
            </div>
            <div className="text-left">
              <span className="block font-serif font-bold text-earth-cream text-lg leading-tight">
                Adarshpatel
              </span>
              <span className="block font-sans text-earth-amber text-xs font-medium tracking-widest uppercase">
                Marketing
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-earth-cream/90 hover:text-earth-amber font-sans text-sm font-medium transition-colors duration-200 rounded-md hover:bg-white/10"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick('#contact')}
              className="ml-4 bg-earth-amber hover:bg-earth-amber-dark text-earth-brown font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-sm"
            >
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-earth-cream p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-earth-green border-t border-white/10">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-earth-cream/90 hover:text-earth-amber font-sans text-sm font-medium transition-colors duration-200 rounded-md hover:bg-white/10"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 bg-earth-amber hover:bg-earth-amber-dark text-earth-brown font-semibold text-sm rounded-full"
            >
              Get Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
