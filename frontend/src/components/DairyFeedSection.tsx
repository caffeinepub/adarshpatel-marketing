import { Milk, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    name: 'Cattle Concentrate Feed',
    badge: 'Best Seller',
    description:
      'High-protein concentrate blend formulated for maximum milk yield. Contains essential vitamins, minerals, and amino acids for optimal dairy cow health.',
    features: ['High Protein (22%)', 'Balanced Minerals', 'Improves Milk Fat'],
  },
  {
    name: 'Bypass Protein Supplement',
    badge: 'Premium',
    description:
      'Rumen-protected protein supplement that enhances milk production and body condition. Ideal for high-yielding dairy cows in peak lactation.',
    features: ['Rumen Protected', 'Boosts Milk Yield', 'Improves Body Score'],
  },
  {
    name: 'Calf Starter Feed',
    badge: 'New',
    description:
      'Specially formulated starter feed for calves from birth to 3 months. Promotes healthy rumen development and early growth for future dairy productivity.',
    features: ['Easy Digestibility', 'Rumen Development', 'Growth Promoter'],
  },
  {
    name: 'Mineral Mixture Block',
    badge: 'Essential',
    description:
      'Compressed mineral lick block enriched with macro and micro minerals. Prevents mineral deficiencies and supports reproductive health in dairy cattle.',
    features: ['Macro & Micro Minerals', 'Reproductive Health', 'Lick Block Form'],
  },
  {
    name: 'Total Mixed Ration (TMR)',
    badge: 'Popular',
    description:
      'Complete balanced ration combining roughage, concentrate, and supplements. Ensures consistent nutrient intake for uniform milk production across the herd.',
    features: ['Complete Nutrition', 'Consistent Intake', 'Herd Management'],
  },
  {
    name: 'Silage Inoculant',
    badge: 'Specialist',
    description:
      'Biological silage additive that improves fermentation quality and preserves nutritional value of stored fodder. Reduces dry matter losses significantly.',
    features: ['Better Fermentation', 'Reduces DM Loss', 'Improves Palatability'],
  },
];

const badgeColors: Record<string, string> = {
  'Best Seller': 'bg-earth-amber text-earth-brown',
  Premium: 'bg-earth-green text-earth-cream',
  New: 'bg-earth-green-light text-earth-cream',
  Essential: 'bg-earth-brown text-earth-cream',
  Popular: 'bg-earth-amber-dark text-earth-cream',
  Specialist: 'bg-coffee text-earth-cream',
};

interface DairyFeedSectionProps {
  onEnquire?: (product: string) => void;
}

export default function DairyFeedSection({ onEnquire }: DairyFeedSectionProps) {
  const handleEnquire = (productName: string) => {
    if (onEnquire) {
      onEnquire(productName);
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="dairy-feed" className="py-20 bg-earth-cream-dark">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-earth-green/10 border border-earth-green/20 text-earth-green px-4 py-1.5 rounded-full text-sm font-sans font-medium mb-4">
            <Milk className="w-4 h-4" />
            <span>Dairy Nutrition Solutions</span>
          </div>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-earth-brown mb-4">
            Dairy Feed Products
          </h2>
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            Science-backed nutrition solutions to maximize milk yield, improve herd health, and boost your dairy farm profitability.
          </p>
          <div className="mt-6 w-20 h-1 bg-earth-amber mx-auto rounded-full" />
        </div>

        {/* Background accent image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-card">
          <img
            src="/assets/generated/dairy-feed-bg.dim_800x400.png"
            alt="Dairy cattle in green pasture"
            className="w-full h-48 sm:h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-green/70 to-transparent flex items-center px-8 sm:px-12">
            <div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-earth-cream mb-2">
                Nourish Your Herd, Maximize Yield
              </h3>
              <p className="font-sans text-earth-cream/80 text-sm sm:text-base max-w-md">
                Premium dairy nutrition trusted by farmers across the region.
              </p>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.name}
              className="bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-earth-green/10 flex items-center justify-center flex-shrink-0">
                    <Milk className="w-5 h-5 text-earth-green" />
                  </div>
                  <span
                    className={`text-xs font-sans font-semibold px-2.5 py-1 rounded-full ${badgeColors[product.badge] || 'bg-muted text-muted-foreground'}`}
                  >
                    {product.badge}
                  </span>
                </div>
                <CardTitle className="font-serif text-lg text-foreground leading-snug">
                  {product.name}
                </CardTitle>
                <CardDescription className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1.5 mb-4">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-sans text-foreground/80">
                      <CheckCircle className="w-3.5 h-3.5 text-earth-green flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleEnquire(product.name)}
                  className="w-full bg-earth-green hover:bg-earth-green/90 text-earth-cream font-semibold text-sm rounded-lg transition-all duration-200"
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
