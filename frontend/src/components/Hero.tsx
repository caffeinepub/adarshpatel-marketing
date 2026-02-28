import { ArrowDown, Leaf, Coffee, Wheat } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-earth-green/80 via-earth-green/60 to-earth-brown/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-green/40 via-transparent to-earth-brown/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-earth-amber/20 border border-earth-amber/40 text-earth-amber px-4 py-1.5 rounded-full text-sm font-sans font-medium mb-6 backdrop-blur-sm">
          <Leaf className="w-4 h-4" />
          <span>Trusted Agricultural Partner Since 2010</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif font-black text-earth-cream text-shadow leading-tight mb-4">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Adarshpatel
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-earth-amber mt-1">
            Marketing
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-sans text-earth-cream/90 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-4 text-shadow-sm leading-relaxed">
          Your trusted partner in{' '}
          <span className="text-earth-amber font-semibold">Dairy Feed</span>,{' '}
          <span className="text-earth-green-pale font-semibold">Agri Inputs</span>, and{' '}
          <span className="text-coffee-light font-semibold">Coffee Trading</span>
        </p>

        <p className="font-sans text-earth-cream/70 text-base sm:text-lg max-w-2xl mx-auto mb-10">
          Empowering farmers and agribusinesses with premium quality products and expert guidance for a prosperous harvest.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            onClick={scrollToProducts}
            className="bg-earth-amber hover:bg-earth-amber-dark text-earth-brown font-semibold text-base px-8 py-3 h-auto rounded-full shadow-hero transition-all duration-200 hover:scale-105"
          >
            Explore Products
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="border-2 border-earth-cream/60 text-earth-cream hover:bg-earth-cream/10 font-semibold text-base px-8 py-3 h-auto rounded-full backdrop-blur-sm transition-all duration-200"
          >
            Get in Touch
          </Button>
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
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-earth-cream px-4 py-2 rounded-full text-sm font-sans"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-earth-cream/60 hover:text-earth-amber transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
