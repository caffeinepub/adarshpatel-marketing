import { Coffee, CheckCircle, Star, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const products = [
  {
    name: 'Arabica Green Beans',
    grade: 'Grade A',
    origin: 'Coorg, Karnataka',
    description:
      'Premium Arabica green coffee beans sourced from the lush Coorg highlands. Known for their mild acidity, floral aroma, and complex flavor profile. Ideal for specialty roasters.',
    features: ['Altitude: 1200–1500m', 'Mild Acidity', 'Floral & Fruity Notes'],
  },
  {
    name: 'Robusta Coffee Beans',
    grade: 'Grade AA',
    origin: 'Chikmagalur, Karnataka',
    description:
      'Bold and full-bodied Robusta beans from the Chikmagalur region. Higher caffeine content with earthy, chocolatey notes. Perfect for espresso blends and instant coffee production.',
    features: ['High Caffeine', 'Bold & Earthy', 'Espresso Grade'],
  },
  {
    name: 'Plantation Coffee (Parchment)',
    grade: 'Specialty',
    origin: 'Wayanad, Kerala',
    description:
      'Sun-dried plantation coffee in parchment form from Wayanad estates. Consistent quality with nutty, caramel undertones. Available in bulk quantities for commercial buyers.',
    features: ['Sun Dried', 'Caramel Notes', 'Bulk Available'],
  },
  {
    name: 'Roasted & Ground Coffee',
    grade: 'Premium',
    origin: 'Blended Origin',
    description:
      'Custom-roasted and ground coffee blends tailored to buyer specifications. Available in light, medium, and dark roast profiles for retail and food service markets.',
    features: ['Custom Roast', 'Multiple Profiles', 'Retail Ready'],
  },
];

export default function CoffeeTradingSection() {
  const handleEnquire = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="coffee-trading" className="py-20 bg-coffee-dark relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, oklch(0.97 0.02 90) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-earth-amber/20 border border-earth-amber/30 text-earth-amber px-4 py-1.5 rounded-full text-sm font-sans font-medium mb-4">
            <Coffee className="w-4 h-4" />
            <span>Coffee Trading</span>
          </div>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-earth-cream mb-4">
            Coffee Trading
          </h2>
          <p className="font-sans text-earth-cream/70 text-lg max-w-2xl mx-auto">
            Sourcing and trading the finest Indian coffee varieties — from farm to cup. Connecting growers with buyers across domestic and international markets.
          </p>
          <div className="mt-6 w-20 h-1 bg-earth-amber mx-auto rounded-full" />
        </div>

        {/* Background accent image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-hero">
          <img
            src="/assets/generated/coffee-bg.dim_800x400.png"
            alt="Rich roasted coffee beans"
            className="w-full h-48 sm:h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/80 to-transparent flex items-center px-8 sm:px-12">
            <div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-earth-cream mb-2">
                From Plantation to Cup
              </h3>
              <p className="font-sans text-earth-cream/80 text-sm sm:text-base max-w-md">
                Premium Indian coffee sourced directly from the finest estates.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { icon: <Globe className="w-5 h-5" />, value: '5+', label: 'States Sourced' },
            { icon: <Award className="w-5 h-5" />, value: '100%', label: 'Quality Assured' },
            { icon: <Star className="w-5 h-5" />, value: '50+', label: 'Happy Buyers' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
            >
              <div className="flex justify-center text-earth-amber mb-2">{stat.icon}</div>
              <div className="font-serif font-bold text-2xl text-earth-cream">{stat.value}</div>
              <div className="font-sans text-xs text-earth-cream/60 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.name}
              className="bg-white/8 border border-white/10 backdrop-blur-sm shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden"
              style={{ backgroundColor: 'oklch(0.28 0.07 45 / 0.6)' }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-earth-amber/20 flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-5 h-5 text-earth-amber" />
                  </div>
                  <span className="text-xs font-sans font-semibold px-2.5 py-1 rounded-full bg-earth-amber/20 text-earth-amber border border-earth-amber/30">
                    {product.grade}
                  </span>
                </div>
                <CardTitle className="font-serif text-base text-earth-cream leading-snug">
                  {product.name}
                </CardTitle>
                <div className="flex items-center gap-1 text-xs text-earth-cream/50 font-sans">
                  <Globe className="w-3 h-3" />
                  <span>{product.origin}</span>
                </div>
                <CardDescription className="font-sans text-sm text-earth-cream/60 leading-relaxed mt-1">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1.5 mb-4">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-sans text-earth-cream/70">
                      <CheckCircle className="w-3.5 h-3.5 text-earth-amber flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={handleEnquire}
                  className="w-full bg-earth-amber hover:bg-earth-amber-dark text-earth-brown font-semibold text-sm rounded-lg transition-all duration-200"
                >
                  Enquire Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
