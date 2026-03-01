import { Sprout, CheckCircle, FlaskConical, Droplets, Wheat, Zap } from 'lucide-react';
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

const categoryStyles: Record<string, { badge: string; icon: string; check: string }> = {
  Fertilizer: {
    badge: 'bg-agri-lime text-agri-lime-dark border-agri-lime-dark/30 font-bold',
    icon: 'bg-agri-lime/20 text-agri-lime-dark',
    check: 'text-agri-lime-dark',
  },
  Seeds: {
    badge: 'bg-agri-yellow text-earth-brown border-agri-yellow-dark/30 font-bold',
    icon: 'bg-agri-yellow/20 text-agri-orange-dark',
    check: 'text-agri-orange',
  },
  Pesticide: {
    badge: 'bg-agri-teal text-white border-agri-teal-dark/30 font-bold',
    icon: 'bg-agri-teal/20 text-agri-teal-dark',
    check: 'text-agri-teal',
  },
  'Soil Care': {
    badge: 'bg-agri-orange text-white border-agri-orange-dark/30 font-bold',
    icon: 'bg-agri-orange/20 text-agri-orange-dark',
    check: 'text-agri-orange',
  },
};

export default function AgriInputsSection() {
  const handleEnquire = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="agri-inputs"
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, oklch(0.22 0.12 145) 0%, oklch(0.30 0.14 160) 40%, oklch(0.26 0.10 185) 100%)',
      }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.78 0.22 140) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.88 0.18 95) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-sans font-bold mb-4 border"
            style={{
              backgroundColor: 'oklch(0.78 0.22 140 / 0.18)',
              borderColor: 'oklch(0.78 0.22 140 / 0.55)',
              color: 'oklch(0.88 0.20 140)',
            }}
          >
            <Sprout className="w-4 h-4" />
            <span>Agricultural Inputs</span>
          </div>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4 tracking-tight" style={{ color: 'oklch(0.97 0.02 90)' }}>
            Agri Inputs
          </h2>
          <p className="font-sans text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'oklch(0.85 0.05 145)' }}>
            Quality fertilizers, seeds, pesticides, and soil care products to help your crops thrive from sowing to harvest.
          </p>
          <div className="mt-6 w-20 h-1.5 mx-auto rounded-full" style={{ background: 'oklch(0.78 0.22 140)' }} />
        </div>

        {/* Background accent image */}
        <div className="relative rounded-2xl overflow-hidden mb-12" style={{ boxShadow: '0 8px 40px oklch(0.60 0.22 140 / 0.35)' }}>
          <img
            src="/assets/generated/agri-inputs-bg.dim_800x400.png"
            alt="Agricultural fields"
            className="w-full h-48 sm:h-64 object-cover object-center"
          />
          <div
            className="absolute inset-0 flex items-center px-8 sm:px-12"
            style={{
              background: 'linear-gradient(90deg, oklch(0.22 0.14 145 / 0.92) 0%, oklch(0.22 0.14 145 / 0.55) 60%, transparent 100%)',
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5" style={{ color: 'oklch(0.88 0.20 140)' }} />
                <span className="font-sans font-bold text-sm uppercase tracking-widest" style={{ color: 'oklch(0.88 0.20 140)' }}>
                  Power Your Farm
                </span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl mb-2" style={{ color: 'oklch(0.97 0.02 90)' }}>
                Grow More, Waste Less
              </h3>
              <p className="font-sans text-sm sm:text-base max-w-md" style={{ color: 'oklch(0.88 0.05 145)' }}>
                Premium agri inputs for every stage of your crop cycle.
              </p>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const styles = categoryStyles[product.category] || {
              badge: 'bg-agri-lime text-agri-lime-dark border-agri-lime-dark/30 font-bold',
              icon: 'bg-agri-lime/20 text-agri-lime-dark',
              check: 'text-agri-lime-dark',
            };
            return (
              <Card
                key={product.name}
                className="border transition-all duration-300 hover:-translate-y-1.5 rounded-xl overflow-hidden"
                style={{
                  backgroundColor: 'oklch(0.97 0.01 90)',
                  borderColor: 'oklch(0.78 0.22 140 / 0.35)',
                  boxShadow: '0 4px 20px oklch(0.60 0.22 140 / 0.18)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 36px oklch(0.60 0.22 140 / 0.38)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.78 0.22 140 / 0.65)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px oklch(0.60 0.22 140 / 0.18)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.78 0.22 140 / 0.35)';
                }}
              >
                {/* Colored top accent bar */}
                <div
                  className="h-1.5 w-full"
                  style={{
                    background:
                      product.category === 'Fertilizer'
                        ? 'linear-gradient(90deg, oklch(0.78 0.22 140), oklch(0.62 0.18 185))'
                        : product.category === 'Seeds'
                        ? 'linear-gradient(90deg, oklch(0.88 0.18 95), oklch(0.72 0.20 50))'
                        : product.category === 'Pesticide'
                        ? 'linear-gradient(90deg, oklch(0.62 0.18 185), oklch(0.78 0.22 140))'
                        : 'linear-gradient(90deg, oklch(0.72 0.20 50), oklch(0.88 0.18 95))',
                  }}
                />
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${styles.icon}`}>
                      {product.icon}
                    </div>
                    <span
                      className={`text-xs font-sans px-2.5 py-1 rounded-full border ${styles.badge}`}
                    >
                      {product.category}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-lg leading-snug" style={{ color: 'oklch(0.22 0.05 55)' }}>
                    {product.name}
                  </CardTitle>
                  <CardDescription className="font-sans text-sm leading-relaxed" style={{ color: 'oklch(0.48 0.05 55)' }}>
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1.5 mb-4">
                    {product.features.map((f) => (
                      <li key={f} className={`flex items-center gap-2 text-sm font-sans ${styles.check}`} style={{ color: 'oklch(0.30 0.07 55)' }}>
                        <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 ${styles.check}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleEnquire}
                    className="w-full font-sans font-bold text-sm rounded-lg py-2.5 px-4 transition-all duration-200 focus:outline-none hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: 'linear-gradient(135deg, oklch(0.78 0.22 140) 0%, oklch(0.62 0.18 185) 100%)',
                      color: 'oklch(0.12 0.04 145)',
                      boxShadow: '0 3px 14px oklch(0.60 0.22 140 / 0.40)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 22px oklch(0.60 0.22 140 / 0.60)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 3px 14px oklch(0.60 0.22 140 / 0.40)';
                    }}
                  >
                    Enquire Now
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-12 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: 'oklch(0.97 0.01 90 / 0.10)',
            border: '1px solid oklch(0.78 0.22 140 / 0.30)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div>
            <p className="font-serif font-bold text-xl" style={{ color: 'oklch(0.97 0.02 90)' }}>
              Need bulk quantities or custom orders?
            </p>
            <p className="font-sans text-sm mt-1" style={{ color: 'oklch(0.82 0.06 145)' }}>
              Contact us directly for wholesale pricing and delivery options.
            </p>
          </div>
          <button
            onClick={handleEnquire}
            className="flex-shrink-0 font-sans font-bold text-sm px-7 py-3 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none"
            style={{
              background: 'linear-gradient(135deg, oklch(0.88 0.18 95), oklch(0.72 0.20 50))',
              color: 'oklch(0.18 0.05 55)',
              boxShadow: '0 4px 18px oklch(0.72 0.20 50 / 0.45)',
            }}
          >
            Get Bulk Quote
          </button>
        </div>
      </div>
    </section>
  );
}
