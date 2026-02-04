import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/0 ${
        isScrolled
          ? "bg-primary/80 backdrop-blur-md border-white/10 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="bg-white/10 p-2 rounded-sm backdrop-blur-sm group-hover:bg-accent/20 transition-colors">
            <Scissors className="h-5 w-5 text-accent" />
          </div>
          <span className="text-xl font-serif tracking-widest text-white uppercase font-bold">
            Sovereign Stitch
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#atelier" className="text-sm tracking-widest text-white/80 hover:text-accent transition-colors uppercase">
            The Atelier
          </a>
          <a href="#craftsmanship" className="text-sm tracking-widest text-white/80 hover:text-accent transition-colors uppercase">
            Craftsmanship
          </a>
          <a href="#pricing" className="text-sm tracking-widest text-white/80 hover:text-accent transition-colors uppercase">
            Investment
          </a>
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary rounded-none px-6">
            Book Consultation
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-6 animate-in slide-in-from-top-5">
          <a
            href="#atelier"
            className="text-lg font-serif text-white hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            The Atelier
          </a>
          <a
            href="#craftsmanship"
            className="text-lg font-serif text-white hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            Craftsmanship
          </a>
          <a
            href="#pricing"
            className="text-lg font-serif text-white hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            Investment
          </a>
          <Button className="bg-accent text-primary w-full rounded-none">
            Book Consultation
          </Button>
        </div>
      )}
    </nav>
  );
}
