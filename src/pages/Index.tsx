import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AtelierSwitcher from "@/components/AtelierSwitcher";
import Craftsmanship from "@/components/Craftsmanship";
import Pricing from "@/components/Pricing";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Craftsmanship />
      <AtelierSwitcher />
      <Pricing />
      <BookingCTA />
      <Footer />
    </main>
  );
}