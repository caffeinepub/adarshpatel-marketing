import { Coffee, CheckCircle, Globe, Award } from 'lucide-react';
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
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-sans font-semibold mb-4 border"
            style={{
              backgroundColor: 'oklch(0.72 0.18 75 / 0.22)',
              borderColor: 'oklch(0.82 0.18 75 / 0.55)',
              color: 'oklch(0.93 0.16 80)',
            }}
          >
            <Coffee className="w-4 h-4" />
            <span>Coffee Trading</span>
          </div>
          <h2
            className="font-serif font-bold text-4xl sm:text-5xl mb-4 tracking-tight"
            style={{ color: 'oklch(0.92 0.18 78)' }}
          >
            Coffee Trading
          </h2>
          <p
            className="font-sans text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'oklch(0.93 0.04 90)' }}
          >
            Sourcing and trading the finest Indian coffee varieties — from farm to cup. Connecting growers with buyers across domestic and international markets.
          </p>
          <div
            className="mt-6 w-20 h-1.5 mx-auto rounded-full"
            style={{ backgroundColor: 'oklch(0.82 0.18 75)' }}
          />
        </div>

        {/* Background accent image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-hero">
          <img
            src="/assets/generated/coffee-bg.dim_800x400.png"
            alt="Rich roasted coffee beans"
            className="w-full h-48 sm:h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/85 to-transparent flex items-center px-8 sm:px-12">
            <div>
              <h3
                className="font-serif font-bold text-2xl sm:text-3xl mb-2"
                style={{ color: 'oklch(0.93 0.18 80)' }}
              >
                From Plantation to Cup
              </h3>
              <p
                className="font-sans text-sm sm:text-base max-w-md"
                style={{ color: 'oklch(0.90 0.04 90)' }}
              >
                Premium Indian coffee connecting growers with global buyers.
              </p>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.name}
              className="border transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden"
              style={{
                backgroundColor: 'oklch(0.32 0.08 45)',
                borderColor: 'oklch(0.45 0.09 50 / 0.5)',
                boxShadow: '0 4px 20px oklch(0.18 0.06 45 / 0.4)',
              }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'oklch(0.72 0.18 75 / 0.18)' }}
                  >
                    <Coffee
                      className="w-5 h-5"
                      style={{ color: 'oklch(0.88 0.18 78)' }}
                    />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className="text-xs font-sans font-bold px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: 'oklch(0.72 0.18 75 / 0.25)',
                        color: 'oklch(0.92 0.18 80)',
                        border: '1px solid oklch(0.82 0.18 75 / 0.4)',
                      }}
                    >
                      {product.grade}
                    </span>
                  </div>
                </div>
                <CardTitle
                  className="font-serif text-lg leading-snug"
                  style={{ color: 'oklch(0.95 0.10 82)' }}
                >
                  {product.name}
                </CardTitle>
                <div
                  className="flex items-center gap-1.5 text-xs font-sans font-medium mt-1"
                  style={{ color: 'oklch(0.78 0.12 78)' }}
                >
                  <Globe className="w-3 h-3" />
                  <span>{product.origin}</span>
                </div>
                <CardDescription
                  className="font-sans text-sm leading-relaxed mt-2"
                  style={{ color: 'oklch(0.82 0.04 80)' }}
                >
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1.5 mb-4">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm font-sans"
                      style={{ color: 'oklch(0.88 0.04 88)' }}
                    >
                      <CheckCircle
                        className="w-3.5 h-3.5 flex-shrink-0"
                        style={{ color: 'oklch(0.82 0.18 78)' }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleEnquire}
                  className="w-full font-sans font-semibold text-sm rounded-lg py-2.5 transition-all duration-200 hover:scale-[1.02] focus:outline-none"
                  style={{
                    background: 'linear-gradient(135deg, oklch(0.78 0.16 78), oklch(0.62 0.16 68))',
                    color: 'oklch(0.22 0.06 55)',
                    boxShadow: '0 2px 10px oklch(0.72 0.16 78 / 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      '0 4px 16px oklch(0.72 0.16 78 / 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      '0 2px 10px oklch(0.72 0.16 78 / 0.3)';
                  }}
                >
                  Enquire Now
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom trust badges */}
        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {[
            { icon: <Award className="w-5 h-5" />, label: 'Quality Certified' },
            { icon: <Globe className="w-5 h-5" />, label: 'Export Ready' },
            { icon: <Coffee className="w-5 h-5" />, label: 'Direct from Estates' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full font-sans text-sm font-medium"
              style={{
                backgroundColor: 'oklch(0.72 0.18 75 / 0.15)',
                border: '1px solid oklch(0.72 0.18 75 / 0.35)',
                color: 'oklch(0.90 0.14 80)',
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
