import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "The Essential",
    price: "1,800",
    description: "The foundation of a professional wardrobe. Perfect for daily wear.",
    features: [
      "Half-canvas construction",
      "Sovereign House fabrics (Wool)",
      "Standard lining options",
      "2 fittings included",
      "4-week turnaround"
    ],
    cta: "Select Essential",
    highlight: false
  },
  {
    name: "The Sovereign",
    price: "2,500",
    description: "Our signature bespoke experience. Uncompromised structure and detail.",
    features: [
      "Full floating canvas",
      "Premium Italian & English mills",
      "Cupro or Silk linings",
      "Functional buttonholes",
      "Unlimited fittings",
      "Lifetime alteration guarantee"
    ],
    cta: "Select Sovereign",
    highlight: true
  },
  {
    name: "The Imperial",
    price: "4,200",
    description: "For the gala, the wedding, or the history books. Rare textiles and artistry.",
    features: [
      "Full handmade construction",
      "Loro Piana / Zegna Zenith fabrics",
      "Hand-embroidered monogram",
      "Milanese buttonholes",
      "Personal pattern archive",
      "Priority production"
    ],
    cta: "Inquire for Imperial",
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-primary relative">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
         <img src="/images/fabric-wool.jpg" alt="Texture" className="w-full h-full object-cover" />
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Transparent Investment</h2>
          <p className="text-white/60 text-lg">
            No hidden costs. Just clear tiers of craftsmanship designed to match your needs and aspirations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-sm border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight 
                  ? "bg-white/10 border-accent/50 shadow-2xl shadow-accent/10" 
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-primary px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-serif text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-sm text-white/60">$</span>
                <span className="text-4xl font-light text-white">{plan.price}</span>
              </div>
              <p className="text-white/60 text-sm mb-8 min-h-[40px]">{plan.description}</p>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-1" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full rounded-none h-12 text-base ${
                  plan.highlight 
                    ? "bg-accent text-primary hover:bg-accent/90" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
