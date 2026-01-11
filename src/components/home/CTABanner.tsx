import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/safari.jpg"
          alt="African savannah at dusk"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-ivory mb-6">
            Plan Your Journey
          </h2>
          <p className="text-lg md:text-xl text-ivory/80 mb-10 leading-relaxed">
            Bespoke charters and safaris, tailored to you. Let us create an
            unforgettable experience that exceeds your expectations.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gold text-charcoal hover:bg-gold-light font-semibold uppercase tracking-wider px-10 py-6 text-sm shadow-gold"
          >
            <Link to="/about#enquiry">Start Planning</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
