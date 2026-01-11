import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Plane, Clock, Shield, MapPin } from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "500+ Aircraft Suppliers",
    description: "Access to an extensive network of credible aircraft suppliers worldwide.",
  },
  {
    icon: MapPin,
    title: "2500+ Destinations",
    description: "Fly anywhere in the world with our comprehensive destination coverage.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Our team is available around the clock to meet your travel needs.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "All aircraft and operators meet the highest safety standards.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Submit Your Request",
    description: "Tell us your travel requirements, dates, and preferences.",
  },
  {
    step: "02",
    title: "Receive Options",
    description: "We present tailored aircraft options that match your needs.",
  },
  {
    step: "03",
    title: "Confirm & Travel",
    description: "Finalize your booking and enjoy seamless private air travel.",
  },
];

const AirCharters = () => {
  return (
    <Layout>
      <HeroSection
        image="/images/hero-jets.jpg"
        imageAlt="Private jet on runway"
        title="Air Charters"
        subtitle="Seamless private air travel tailored to your schedule"
        overlayOpacity="medium"
        minHeight="min-h-[60vh]"
      />

      {/* Introduction */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                Your Journey, Your Schedule
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-8" />
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Elgon Luxe Air Charters provides access to over 500 credible
                  aircraft suppliers, enabling us to match you with the perfect
                  aircraft for any journey. Whether you're traveling for business
                  or leisure, domestically or internationally, we ensure every
                  flight meets the highest standards of safety, comfort, and
                  efficiency.
                </p>
                <p>
                  From light jets for quick regional hops to long-range aircraft
                  for intercontinental travel, our extensive network covers every
                  need. Experience the freedom of private air travel with
                  personalized service at every touchpoint.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {["No fixed schedules", "Private terminals", "Personalized service", "Global coverage"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-gold" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-elevated">
              <img
                src="/images/hero-jets.jpg"
                alt="Private jet charter detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              Why Choose Elgon Luxe
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card p-8 rounded-sm shadow-card text-center"
              >
                <feature.icon className="h-10 w-10 text-gold mx-auto mb-6" />
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              How It Works
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="font-serif text-5xl font-medium text-gold/30 mb-4">
                  {step.step}
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-8 h-0.5 bg-gold/30" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button
              asChild
              size="lg"
              className="bg-gold text-charcoal hover:bg-gold-light font-semibold uppercase tracking-wider px-10"
            >
              <Link to="/about#enquiry">Request a Charter</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AirCharters;
