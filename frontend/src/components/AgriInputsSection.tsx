import { Sprout, CheckCircle, FlaskConical, Droplets, Wheat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const products = [
  {
    name: 'NPK Fertilizer (19:19:19)',
    icon: <FlaskConical className="w-5 h-5" />,
    category: 'Fertilizer',
    description:
      'Balanced water-soluble NPK fertilizer suitable for all crops. Provides equal proportions of nitrogen, phosphorus, and potassium for uniform crop growth.',
    features: ['Water Soluble', 'All Crops', 'Balanced Nutrition'],
  },
  {
    name: 'Urea (46% N)',
    icon: <FlaskConical className="w-5 h-5" />,
    category: 'Fertilizer',
    description:
      'High-nitrogen granular fertilizer for rapid vegetative growth. Ideal for paddy, sugarcane, and other nitrogen-demanding crops.',
    features: ['46% Nitrogen', 'Fast Acting', 'Granular Form'],
  },
  {
    name: 'Hybrid Vegetable Seeds',
    icon: <Wheat className="w-5 h-5" />,
    category: 'Seeds',
    description:
      'High-yielding hybrid vegetable seeds with disease resistance. Includes tomato, brinjal, chilli, and leafy vegetable varieties for commercial farming.',
    features: ['Disease Resistant', 'High Yield', 'Multiple Varieties'],
  },
  {
    name: 'Bio-Pesticide Spray',
    icon: <Droplets className="w-5 h-5" />,
    category: 'Pesticide',
    description:
      'Eco-friendly bio-pesticide derived from natural sources. Effective against common pests while being safe for beneficial insects and the environment.',
    features: ['Eco-Friendly', 'Broad Spectrum', 'Safe for Bees'],
  },
  {
    name: 'Micronutrient Mix',
    icon: <FlaskConical className="w-5 h-5" />,
    category: 'Fertilizer',
    description:
      'Chelated micronutrient blend containing zinc, boron, iron, manganese, and copper. Corrects micronutrient deficiencies for improved crop quality.',
    features: ['Chelated Form', 'Multiple Nutrients', 'Foliar Application'],
  },
  {
    name: 'Soil Health Card Kit',
    icon: <Sprout className="w-5 h-5" />,
    category: 'Soil Care',
    description:
      'Complete soil testing and amendment kit for farmers. Includes pH correction agents, organic matter boosters, and soil conditioners for optimal crop production.',
    features: ['pH Correction', 'Organic Booster', 'Soil Conditioner'],
  },
];

const categoryColors: Record<string, string> = {
  Fertilizer: 'bg-earth-green/10 text-earth-green border-earth-green/20',
  Seeds: 'bg-earth-amber/10 text-earth-amber-dark border-earth-amber/20',
  Pesticide: 'bg-earth-brown/10 text-earth-brown border-earth-brown/20',
  'Soil Care': 'bg-coffee/10 text-coffee border-coffee/20',
};

export default function AgriInputsSection() {
  const handleEnquire = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="agri-inputs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-earth-amber/10 border border-earth-amber/25 text-earth-amber-dark px-4 py-1.5 rounded-full text-sm font-sans font-semibold mb-4">
            <Sprout className="w-4 h-4" />
            <span>Agricultural Inputs</span>
          </div>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-earth-brown mb-4 tracking-tight">
            Agri Inputs
          </h2>
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Quality fertilizers, seeds, pesticides, and soil care products to help your crops thrive from sowing to harvest.
          </p>
          <div className="mt-6 w-20 h-1.5 bg-earth-amber mx-auto rounded-full" />
        </div>

        {/* Background accent image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-card">
          <img
            src="/assets/generated/agri-inputs-bg.dim_800x400.png"
            alt="Agricultural inputs - fertilizers, seeds, and tools"
            className="w-full h-48 sm:h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-brown/75 to-transparent flex items-center px-8 sm:px-12">
            <div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-earth-cream mb-2">
                From Soil to Harvest
              </h3>
              <p className="font-sans text-earth-cream/85 text-sm sm:text-base max-w-md">
                Everything your farm needs for a bountiful and profitable season.
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
                  <div className="w-10 h-10 rounded-lg bg-earth-amber/10 flex items-center justify-center flex-shrink-0 text-earth-amber-dark">
                    {product.icon}
                  </div>
                  <span
                    className={`text-xs font-sans font-semibold px-2.5 py-1 rounded-full border ${categoryColors[product.category] || 'bg-muted text-muted-foreground border-border'}`}
                  >
                    {product.category}
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
                      <CheckCircle className="w-3.5 h-3.5 text-earth-amber-dark flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={handleEnquire}
                  className="w-full bg-earth-amber hover:bg-earth-amber-dark text-earth-brown font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-md"
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
