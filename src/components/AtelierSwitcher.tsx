import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const silhouettes = [
  {
    id: "architect",
    name: "The Architect",
    desc: "Structured shoulders, tapered waist, commanding presence. A modern armor for the boardroom.",
    image: "/images/model-architect.jpg",
  },
  {
    id: "diplomat",
    name: "The Diplomat",
    desc: "Timeless double-breasted elegance. Fluid lines that move with you, balancing softness with strength.",
    image: "/images/model-diplomat.jpg",
  },
  {
    id: "visionary",
    name: "The Visionary",
    desc: "Asymmetrical cuts and avant-garde detailing. For those who rewrite the rules of engagement.",
    image: "/images/model-visionary.jpg",
  },
];

const fabrics = [
  {
    id: "wool",
    name: "Royal Wool",
    desc: "Super 150s Merino. Breathable, resilient, and impossibly soft.",
    image: "/images/fabric-wool.jpg",
    color: "bg-[#1a1a2e]",
  },
  {
    id: "silk",
    name: "Midnight Silk",
    desc: "Pure mulberry silk with a liquid drape and subtle sheen.",
    image: "/images/fabric-silk.jpg",
    color: "bg-[#111]",
  },
  {
    id: "velvet",
    name: "Imperial Velvet",
    desc: "Deep pile cotton velvet. Rich, tactile, and dramatically light-absorbing.",
    image: "/images/fabric-velvet.jpg",
    color: "bg-[#2a0a12]",
  },
];

export default function AtelierSwitcher() {
  const [activeSilhouette, setActiveSilhouette] = useState(silhouettes[0]);
  const [activeFabric, setActiveFabric] = useState(fabrics[0]);

  return (
    <section id="atelier" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-3xl rounded-full translate-x-1/2 pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-3 block">
            Interactive Atelier
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Define Your Silhouette</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Experience the bespoke process. Select your core structure and textile to visualize the foundation of your garment.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Controls - Left Side */}
          <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
            
            {/* Silhouette Selector */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif border-b border-white/10 pb-2 mb-4">01. Select Silhouette</h3>
              <div className="space-y-2">
                {silhouettes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSilhouette(s)}
                    className={`w-full text-left px-4 py-3 border transition-all duration-300 flex items-center justify-between group ${
                      activeSilhouette.id === s.id
                        ? "border-accent bg-accent/10 text-white"
                        : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <span className="font-medium tracking-wide">{s.name}</span>
                    {activeSilhouette.id === s.id && <Check className="h-4 w-4 text-accent" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric Selector */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif border-b border-white/10 pb-2 mb-4">02. Choose Textile</h3>
              <div className="grid grid-cols-3 gap-3">
                {fabrics.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFabric(f)}
                    className={`relative aspect-square rounded-sm overflow-hidden border-2 transition-all duration-300 group ${
                      activeFabric.id === f.id ? "border-accent scale-105" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${activeFabric.id === f.id ? 'opacity-100 bg-black/20' : ''}`}>
                       {activeFabric.id === f.id && <Check className="text-white drop-shadow-md h-6 w-6" />}
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-sm text-accent mt-2 font-medium">{activeFabric.name}</p>
              <p className="text-xs text-white/50">{activeFabric.desc}</p>
            </div>

          </div>

          {/* Visualization - Center/Right */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative aspect-[3/4] md:aspect-[16/9] lg:aspect-[4/3] bg-white/5 rounded-sm overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center">
              
              {/* Dynamic Image Layer */}
              <div className="absolute inset-0 z-0">
                 <img 
                   src={activeSilhouette.image} 
                   alt={activeSilhouette.name}
                   className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                   key={activeSilhouette.id} // Forces re-render for fade effect
                 />
                 {/* Texture Overlay (Simulated Mix) */}
                 <div className="absolute inset-0 mix-blend-multiply opacity-40 pointer-events-none" style={{ backgroundImage: `url(${activeFabric.image})`, backgroundSize: '200px' }}></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Info Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-auto md:w-80 bg-black/40 backdrop-blur-md border border-white/10 p-6 text-white rounded-sm">
                <h4 className="text-2xl font-serif mb-2">{activeSilhouette.name}</h4>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  {activeSilhouette.desc}
                </p>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Ready to customize
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
