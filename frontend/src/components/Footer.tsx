import { Leaf, Phone, Mail, MapPin, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Dairy Feed', href: '#dairy-feed' },
  { label: 'Agri Inputs', href: '#agri-inputs' },
  { label: 'Coffee Trading', href: '#coffee-trading' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'adarshpatel-marketing'
  );

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-earth-brown-dark text-earth-cream py-14" style={{ backgroundColor: 'oklch(0.22 0.06 55)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="rounded-lg overflow-hidden flex-shrink-0"
                style={{ backgroundColor: '#F5F0E8', padding: '4px 8px' }}
              >
                <img
                  src="/assets/generated/ap-logo-full.dim_600x400.png"
                  alt="Adarsh Patel Logo"
                  className="h-9 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: 'oklch(0.78 0.04 90)' }}>
              Your trusted partner for premium dairy feed, quality agri inputs, and fine coffee trading across the region.
            </p>
            <div className="flex items-center gap-1.5 mt-4">
              <Leaf className="w-4 h-4" style={{ color: 'oklch(0.62 0.13 145)' }} />
              <span className="font-sans text-xs font-medium" style={{ color: 'oklch(0.62 0.13 145)' }}>
                Trusted Since 2010
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-base mb-4" style={{ color: 'oklch(0.92 0.03 90)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-sans text-sm transition-colors duration-200 focus:outline-none hover:underline"
                    style={{ color: 'oklch(0.72 0.04 90)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.88 0.16 78)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.72 0.04 90)';
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-base mb-4" style={{ color: 'oklch(0.92 0.03 90)' }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'oklch(0.72 0.14 78)' }} />
                <div className="font-sans text-sm" style={{ color: 'oklch(0.72 0.04 90)' }}>
                  <div>+91 84316 28989</div>
                  <div>+91 94482 28989</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'oklch(0.72 0.14 78)' }} />
                <span className="font-sans text-sm" style={{ color: 'oklch(0.72 0.04 90)' }}>
                  info@adarshpatelmarketing.com
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'oklch(0.72 0.14 78)' }} />
                <span className="font-sans text-sm" style={{ color: 'oklch(0.72 0.04 90)' }}>
                  Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans" style={{ color: 'oklch(0.58 0.04 90)' }}>
          <span>© {year} Adarsh Patel Marketing. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with{' '}
            <Heart className="w-3.5 h-3.5 mx-0.5" style={{ color: 'oklch(0.62 0.16 68)', fill: 'oklch(0.62 0.16 68)' }} />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-opacity"
              style={{ color: 'oklch(0.72 0.14 78)' }}
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
