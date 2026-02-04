import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Elegant tailoring silhouette"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/90" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Glass Card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 lg:p-16 text-center rounded-sm shadow-2xl relative overflow-hidden group">
            
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent blur-sm" />
            
            <span className="inline-block py-1 px-3 border border-accent/30 rounded-full text-xs font-medium tracking-[0.2em] text-accent mb-6 uppercase">
              Bespoke Womenswear
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.1]">
              Architecture for <br />
              <span className="italic text-accent/90">The Human Form</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Precision tailoring meets fluid elegance. We craft power suits that don't just fit your body—they fit your ambition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-none px-8 min-w-[200px] h-14 text-base tracking-wide font-medium">
                Start Your Design
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none px-8 min-w-[200px] h-14 text-base tracking-wide flex gap-2 items-center group">
                View Lookbook <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
}
