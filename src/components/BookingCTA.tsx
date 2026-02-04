import { Button } from "@/components/ui/button";

export default function BookingCTA() {
  return (
    <section className="py-32 bg-background flex flex-col items-center text-center px-4 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        <h2 className="text-5xl md:text-7xl font-serif text-primary leading-tight">
          Your Fit Awaits.
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
          Schedule your private consultation at our downtown atelier. 
          Let us craft the armor for your next chapter.
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground text-lg px-10 py-8 rounded-none min-w-[240px]">
            Book Appointment
          </Button>
          <span className="text-muted-foreground text-sm uppercase tracking-widest">or</span>
          <Button size="lg" variant="outline" className="text-lg px-10 py-8 rounded-none min-w-[240px]">
            View Availability
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground pt-4">
          Consultations are complimentary. No obligation to purchase.
        </p>
      </div>
    </section>
  );
}
