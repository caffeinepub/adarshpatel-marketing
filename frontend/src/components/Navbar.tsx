import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? 'oklch(0.30 0.10 145)'
          : 'oklch(0.30 0.10 145 / 0.97)',
        backdropFilter: scrolled ? 'none' : 'blur(8px)',
        boxShadow: scrolled ? '0 4px 24px oklch(0.18 0.06 55 / 0.45)' : 'none',
        borderBottom: scrolled ? '1px solid oklch(0.45 0.10 145 / 0.4)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Full AP Logo with cream background */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center group focus:outline-none"
            aria-label="Go to top"
          >
            <div
              className="relative flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105 overflow-hidden rounded-lg"
              style={{
                backgroundColor: '#F5F0E8',
                padding: '4px 10px',
                boxShadow:
                  '0 2px 10px oklch(0.18 0.06 55 / 0.35), 0 0 0 1px oklch(0.72 0.16 78 / 0.3)',
              }}
            >
              <img
                src="/assets/generated/ap-logo-full.dim_600x400.png"
                alt="Adarsh Patel Logo"
                className="h-10 md:h-12 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const span = document.createElement('span');
                    span.style.cssText =
                      'font-family:serif;font-weight:900;font-size:1.1rem;color:#c0392b;letter-spacing:-0.02em;';
                    span.textContent = 'ADARSH PATEL';
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 font-sans text-sm font-medium transition-all duration-200 rounded-md focus:outline-none"
                style={{ color: 'oklch(0.92 0.03 90)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.88 0.18 78)';
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    'oklch(0.97 0.02 90 / 0.08)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.92 0.03 90)';
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="ml-4 font-sans font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 focus:outline-none hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, oklch(0.78 0.16 78), oklch(0.62 0.16 68))',
                color: 'oklch(0.22 0.06 55)',
                boxShadow: '0 2px 12px oklch(0.72 0.16 78 / 0.35)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  '0 4px 18px oklch(0.72 0.16 78 / 0.55)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  '0 2px 12px oklch(0.72 0.16 78 / 0.35)';
              }}
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md transition-colors focus:outline-none"
            style={{ color: 'oklch(0.97 0.02 90)' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                'oklch(0.97 0.02 90 / 0.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
            }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: 'oklch(0.28 0.10 145)',
            borderColor: 'oklch(0.45 0.10 145 / 0.4)',
          }}
        >
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 font-sans text-sm font-medium transition-colors duration-200 rounded-md focus:outline-none"
                style={{ color: 'oklch(0.92 0.03 90)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.88 0.18 78)';
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    'oklch(0.97 0.02 90 / 0.08)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.92 0.03 90)';
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 font-sans font-semibold text-sm rounded-full py-2.5 transition-all duration-200 focus:outline-none"
              style={{
                background: 'linear-gradient(135deg, oklch(0.78 0.16 78), oklch(0.62 0.16 68))',
                color: 'oklch(0.22 0.06 55)',
              }}
            >
              Get Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
