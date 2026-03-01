import { ArrowDown, Leaf, Coffee, Wheat } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    const el = document.querySelector('#dairy-feed');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-bg.dim_1600x700.png"
          alt="Agriculture background"
          className="w-full h-full object-cover object-center"
        />
        {/* Layered gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-earth-green/85 via-earth-green/65 to-earth-brown/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-green/50 via-transparent to-earth-brown/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-sans font-medium mb-8 backdrop-blur-sm"
          style={{
            backgroundColor: 'oklch(0.72 0.14 75 / 0.22)',
            border: '1px solid oklch(0.82 0.16 78 / 0.55)',
            color: 'oklch(0.95 0.14 82)',
          }}
        >
          <Leaf className="w-4 h-4" />
          <span>Trusted Agricultural Partner Since 2010</span>
        </div>

        {/* Full AP Logo with cream background — prominent hero display */}
        <div className="flex justify-center mb-8">
          <div
            className="relative flex items-center justify-center overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: '#F5F0E8',
              padding: '16px 28px',
              boxShadow:
                '0 0 0 3px oklch(0.72 0.16 78 / 0.55), 0 0 0 7px oklch(0.72 0.16 78 / 0.15), 0 16px 48px oklch(0.18 0.06 55 / 0.65)',
            }}
          >
            <img
              src="/assets/generated/ap-logo-full.dim_600x400.png"
              alt="Adarsh Patel Logo"
              className="w-56 sm:w-64 md:w-72 h-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const wrapper = document.createElement('div');
                  wrapper.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:4px;';
                  const badge = document.createElement('span');
                  badge.style.cssText =
                    'font-family:serif;font-weight:900;font-size:2.5rem;color:#c0392b;letter-spacing:-0.03em;';
                  badge.textContent = 'AP';
                  const name = document.createElement('span');
                  name.style.cssText =
                    'font-family:serif;font-weight:900;font-size:1.4rem;color:#c0392b;letter-spacing:0.08em;';
                  name.textContent = 'ADARSH PATEL';
                  wrapper.appendChild(badge);
                  wrapper.appendChild(name);
                  parent.appendChild(wrapper);
                }
              }}
            />
          </div>
        </div>

        {/* Tagline — rich warm amber with Fraunces extrabold serif */}
        <p
          className="font-serif font-extrabold text-2xl sm:text-3xl md:text-4xl max-w-3xl mx-auto mb-5 leading-snug"
          style={{
            background:
              'linear-gradient(135deg, #F5C842 0%, #E8900A 30%, #C96A00 60%, #E8900A 80%, #F5C842 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter:
              'drop-shadow(0 2px 12px rgba(232, 144, 10, 0.70)) drop-shadow(0 0px 4px rgba(245, 200, 66, 0.45))',
            letterSpacing: '0.015em',
          }}
        >
          Premium dairy nutrition trusted by farmers across the region.
        </p>

        {/* Sub-tagline */}
        <p
          className="font-sans text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            color: 'oklch(0.88 0.04 90)',
            textShadow: '0 1px 6px rgba(0,0,0,0.4)',
          }}
        >
          Dairy feed, agri inputs & premium coffee — all under one trusted name.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToProducts}
            className="font-sans font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none"
            style={{
              background: 'linear-gradient(135deg, oklch(0.78 0.16 78), oklch(0.62 0.16 68))',
              color: 'oklch(0.22 0.06 55)',
              boxShadow: '0 4px 20px oklch(0.72 0.16 78 / 0.45)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 6px 28px oklch(0.72 0.16 78 / 0.65)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 4px 20px oklch(0.72 0.16 78 / 0.45)';
            }}
          >
            Explore Products
          </button>
          <button
            onClick={scrollToContact}
            className="font-sans font-semibold text-base px-8 py-3.5 rounded-full border-2 transition-all duration-200 hover:scale-105 focus:outline-none backdrop-blur-sm"
            style={{
              borderColor: 'oklch(0.88 0.04 90 / 0.65)',
              color: 'oklch(0.97 0.02 90)',
              backgroundColor: 'oklch(0.97 0.02 90 / 0.10)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                'oklch(0.97 0.02 90 / 0.20)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                'oklch(0.97 0.02 90 / 0.10)';
            }}
          >
            Get a Quote
          </button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { icon: <Leaf className="w-4 h-4" />, label: 'Dairy Feed' },
            { icon: <Wheat className="w-4 h-4" />, label: 'Agri Inputs' },
            { icon: <Coffee className="w-4 h-4" />, label: 'Coffee Trading' },
          ].map((pill) => (
            <div
              key={pill.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-sans font-medium backdrop-blur-sm"
              style={{
                backgroundColor: 'oklch(0.22 0.06 55 / 0.45)',
                border: '1px solid oklch(0.88 0.04 90 / 0.25)',
                color: 'oklch(0.92 0.03 90)',
              }}
            >
              {pill.icon}
              <span>{pill.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToProducts}
          className="inline-flex flex-col items-center gap-1 focus:outline-none group"
          aria-label="Scroll down"
          style={{ color: 'oklch(0.88 0.04 90 / 0.65)' }}
        >
          <span className="font-sans text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
