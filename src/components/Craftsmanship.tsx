import { Ruler, Sparkles, User, Fingerprint } from "lucide-react";

const benefits = [
  {
    icon: Ruler,
    title: "Anatomical Precision",
    description: "We don't use standard blocks. Every pattern is drafted from scratch based on 30+ measurements of your unique frame."
  },
  {
    icon: Sparkles,
    title: "Illuminated Craft",
    description: "Hand-finished buttonholes, pick stitching, and floating canvas construction that molds to your body over time."
  },
  {
    icon: Fingerprint,
    title: "Signature Identity",
    description: "From monogrammed linings to custom lapel widths, every detail is a deliberate choice reflecting your personal brand."
  },
  {
    icon: User,
    title: "The Private Fitting",
    description: "A collaborative dialogue in our private suite. We listen to your needs before we ever pick up the shears."
  }
];

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Imagery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/process-measure.jpg" 
                alt="Measuring process" 
                className="w-full aspect-[3/4] object-cover rounded-sm mb-8 shadow-lg" 
              />
              <img 
                src="/images/process-stitch.jpg" 
                alt="Stitching detail" 
                className="w-full aspect-[3/4] object-cover rounded-sm mt-8 shadow-lg" 
              />
            </div>
            {/* Center decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-background border border-border rounded-full flex items-center justify-center shadow-xl">
               <div className="w-20 h-20 border border-accent/20 rounded-full flex items-center justify-center">
                 <span className="font-serif text-2xl italic text-accent">Est.</span>
               </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-3 block">
              Technical Artistry
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8">
              Constructed, <br /> Not Just Sewn.
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              True bespoke is structural engineering for the human body. We combine old-world tailoring techniques with modern anatomical understanding to create garments that enhance posture, movement, and confidence.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {benefits.map((b, i) => (
                <div key={i} className="group">
                  <div className="w-12 h-12 bg-primary/5 rounded-sm flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <b.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
