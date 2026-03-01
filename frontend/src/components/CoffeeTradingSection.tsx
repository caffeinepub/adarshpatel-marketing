import { Coffee, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const products = [
  {
    name: 'Arabica Green Beans',
    grade: 'Grade A',
    origin: 'Coorg, Karnataka',
    description:
      'Premium Arabica green coffee beans from the misty hills of Coorg. Known for their mild acidity, floral aroma, and complex flavor profile.',
    features: ['Altitude: 1200m+', 'Mild Acidity', 'Floral Notes'],
  },
  {
    name: 'Robusta Coffee Beans',
    grade: 'Grade AA',
    origin: 'Chikmagalur, Karnataka',
    description:
      'Bold and full-bodied Robusta beans from Chikmagalur. High caffeine content with earthy, chocolatey notes — ideal for espresso blends.',
    features: ['High Caffeine', 'Bold Flavor', 'Espresso Grade'],
  },
  {
    name: 'Plantation A Coffee',
    grade: 'Plantation A',
    origin: 'Hassan, Karnataka',
    description:
      'Classic Plantation A grade coffee with consistent bean size and quality. Versatile for filter coffee, instant blends, and export markets.',
    features: ['Consistent Quality', 'Filter Grade', 'Export Ready'],
  },
  {
    name: 'Specialty Micro-Lot',
    grade: 'Specialty',
    origin: 'Sakleshpur, Karnataka',
    description:
      'Limited micro-lot specialty coffee with traceable single-estate origin. Cupping score 85+, ideal for specialty roasters and premium cafes.',
    features: ['Cupping Score 85+', 'Single Estate', 'Traceable Origin'],
  },
];

const gradeColors: Record<string, string> = {
  'Grade A': 'bg-earth-amber text-earth-brown',
  'Grade AA': 'bg-earth-amber-dark text-earth-cream',
  'Plantation A': 'bg-coffee text-earth-cream',
  Specialty: 'bg-earth-green text-earth-cream',
};

export default function CoffeeTradingSection() {
  const handleEnquire = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="coffee-trading"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: 'oklch(0.22 0.06 45)' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/assets/generated/coffee-bg.dim_800x400.png"
          alt="Coffee plantation"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, oklch(0.78 0.16 78) 1px, transparent 1px), radial-gradient(circle at 75% 75%, oklch(0.78 0.16 78) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-sans font-semibold mb-4"
            style={{
              backgroundColor: 'oklch(0.72 0.14 75 / 0.18)',
              border: '1px solid oklch(0.72 0.14 75 / 0.4)',
              color: 'oklch(0.88 0.16 78)',
            }}
          >
            <Coffee className="w-4 h-4" />
            <span>Coffee Trading</span>
          </div>
          <h2
            className="font-serif font-bold text-4xl sm:text-5xl mb-4 tracking-tight"
            style={{ color: 'oklch(0.95 0.06 82)' }}
          >
            Coffee Trading
          </h2>
          <p
            className="font-sans text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'oklch(0.78 0.04 75)' }}
          >
            Sourcing and trading premium Karnataka coffee — from estate to export, with quality you can taste.
          </p>
          <div className="mt-6 w-20 h-1.5 bg-earth-amber mx-auto rounded-full" />
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {products.map((product) => (
            <Card
              key={product.name}
              className="border transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden"
              style={{
                backgroundColor: 'oklch(0.28 0.07 45)',
                borderColor: 'oklch(0.38 0.08 45)',
              }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'oklch(0.72 0.14 75 / 0.15)' }}
                  >
                    <Coffee className="w-5 h-5" style={{ color: 'oklch(0.82 0.16 78)' }} />
                  </div>
                  <span
                    className={`text-xs font-sans font-semibold px-2.5 py-1 rounded-full ${gradeColors[product.grade] || 'bg-muted text-muted-foreground'}`}
                  >
                    {product.grade}
                  </span>
                </div>
                <CardTitle
                  className="font-serif text-lg leading-snug"
                  style={{ color: 'oklch(0.93 0.06 82)' }}
                >
                  {product.name}
                </CardTitle>
                <p
                  className="font-sans text-xs font-medium"
                  style={{ color: 'oklch(0.72 0.12 78)' }}
                >
                  📍 {product.origin}
                </p>
                <CardDescription
                  className="font-sans text-sm leading-relaxed mt-1"
                  style={{ color: 'oklch(0.68 0.04 75)' }}
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
                      style={{ color: 'oklch(0.78 0.04 75)' }}
                    >
                      <CheckCircle
                        className="w-3.5 h-3.5 flex-shrink-0"
                        style={{ color: 'oklch(0.78 0.16 78)' }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={handleEnquire}
                  className="w-full font-semibold text-sm rounded-lg transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, oklch(0.78 0.16 78), oklch(0.62 0.16 68))',
                    color: 'oklch(0.22 0.06 55)',
                  }}
                >
                  Enquire Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: <Star className="w-4 h-4" />, label: 'Direct Estate Sourcing' },
            { icon: <CheckCircle className="w-4 h-4" />, label: 'Quality Certified' },
            { icon: <Coffee className="w-4 h-4" />, label: 'Export Ready' },
            { icon: <Star className="w-4 h-4" />, label: 'Competitive Pricing' },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-sans font-medium"
              style={{
                backgroundColor: 'oklch(0.72 0.14 75 / 0.12)',
                border: '1px solid oklch(0.72 0.14 75 / 0.3)',
                color: 'oklch(0.85 0.12 78)',
              }}
            >
              {badge.icon}
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
