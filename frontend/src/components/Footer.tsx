import { Leaf, Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'adarshpatel-marketing'
  );

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-earth-green text-earth-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-earth-cream flex items-center justify-center flex-shrink-0">
                <img
                  src="/assets/generated/logo-icon.dim_256x256.png"
                  alt="Adarshpatel Marketing Logo"
                  className="w-9 h-9 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="block font-serif font-bold text-xl text-earth-cream leading-tight">
                  Adarshpatel Marketing
                </span>
                <span className="block font-sans text-earth-amber text-xs font-medium tracking-widest uppercase">
                  Agriculture · Dairy · Coffee
                </span>
              </div>
            </div>
            <p className="font-sans text-earth-cream/70 text-sm leading-relaxed max-w-sm mb-6">
              Your trusted partner in dairy feed products, agricultural inputs, and coffee trading. Empowering farmers and agribusinesses with quality products and expert support.
            </p>
            <div className="flex items-center gap-2 text-earth-amber">
              <Leaf className="w-4 h-4" />
              <span className="font-sans text-sm font-medium">Committed to Sustainable Agriculture</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-earth-cream text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Dairy Feed', href: '#dairy-feed' },
                { label: 'Agri Inputs', href: '#agri-inputs' },
                { label: 'Coffee Trading', href: '#coffee-trading' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-sans text-sm text-earth-cream/70 hover:text-earth-amber transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-earth-cream text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-earth-amber mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm text-earth-cream/70">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-earth-amber mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm text-earth-cream/70">info@adarshpatelmarketing.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-earth-amber mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm text-earth-cream/70">
                  Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-earth-cream/50 text-sm">
            © {year} Adarshpatel Marketing. All rights reserved.
          </p>
          <p className="font-sans text-earth-cream/50 text-sm flex items-center gap-1">
            Built with{' '}
            <Heart className="w-3.5 h-3.5 text-earth-amber fill-earth-amber mx-0.5" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-earth-amber hover:text-earth-amber-dark transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
