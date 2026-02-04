import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-white/10 pt-20 pb-10">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-serif tracking-widest uppercase">Sovereign Stitch</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Bespoke tailoring for the modern woman. 
              Architectural silhouettes, premium textiles, 
              and uncompromising fit.
            </p>
          </div>

          <div>
            <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">The Atelier</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lookbook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fabrics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Visit Us</h4>
            <address className="not-italic text-sm text-white/70 space-y-2">
              <p>128 Fashion District Blvd</p>
              <p>New York, NY 10012</p>
              <p className="pt-4">studio@sovereignstitch.com</p>
              <p>+1 (212) 555-0199</p>
            </address>
          </div>

          <div>
            <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Stay Informed</h4>
            <p className="text-xs text-white/50 mb-4">
              Join our list for exclusive trunk shows and seasonal fabric arrivals.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 px-3 py-2 text-sm w-full focus:outline-none focus:border-accent"
              />
              <button className="bg-accent text-primary px-4 py-2 text-sm font-medium hover:bg-accent/90">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Sovereign Stitch. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
