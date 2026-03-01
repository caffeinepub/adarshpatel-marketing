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

        {/* Tagline */}
        <p
          className="font-serif font-bold text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto mb-5 leading-snug"
          style={{
            color: 'oklch(0.97 0.12 82)',
            textShadow: '0 2px 10px rgba(0,0,0,0.65)',
          }}
        >
          Premium dairy nutrition trusted by farmers across the region
        </p>

        {/* Subheading */}
        <p
          className="font-sans font-medium text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            color: 'oklch(0.96 0.03 90)',
            textShadow: '0 1px 6px rgba(0,0,0,0.6)',
          }}
        >
          Empowering farmers and agribusinesses with{' '}
          <span
            style={{
              color: 'oklch(0.92 0.16 82)',
              fontWeight: 600,
            }}
          >
            premium quality products
          </span>{' '}
          and expert guidance for a{' '}
          <span
            style={{
              color: 'oklch(0.90 0.14 145)',
              fontWeight: 600,
            }}
          >
            prosperous harvest
          </span>
          .
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToProducts}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-sans font-semibold text-base transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
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
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-sans font-semibold text-base transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 backdrop-blur-sm"
            style={{
              border: '2px solid oklch(0.97 0.02 90 / 0.65)',
              color: 'oklch(0.98 0.02 90)',
              backgroundColor: 'oklch(0.97 0.02 90 / 0.08)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                'oklch(0.97 0.02 90 / 0.18)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                'oklch(0.97 0.02 90 / 0.08)';
            }}
          >
            Get in Touch
          </button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { icon: <Wheat className="w-4 h-4" />, label: 'Premium Dairy Feed' },
            { icon: <Leaf className="w-4 h-4" />, label: 'Quality Agri Inputs' },
            { icon: <Coffee className="w-4 h-4" />, label: 'Coffee Trading' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-sans"
              style={{
                backgroundColor: 'oklch(0.97 0.02 90 / 0.12)',
                border: '1px solid oklch(0.97 0.02 90 / 0.25)',
                color: 'oklch(0.97 0.04 88)',
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors animate-bounce focus:outline-none"
        style={{ color: 'oklch(0.97 0.02 90 / 0.55)' }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.88 0.18 78)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.97 0.02 90 / 0.55)';
        }}
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
