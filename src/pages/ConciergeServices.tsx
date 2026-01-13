import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Clock, Globe, Shield, Star, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Travel Planning",
    description:
      "End-to-end travel coordination including flights, accommodations, and ground transportation across Africa and beyond.",
  },
  {
    icon: Star,
    title: "VIP Experiences",
    description:
      "Exclusive access to private events, luxury venues, and bespoke experiences tailored to your preferences.",
  },
  {
    icon: Users,
    title: "Personal Assistance",
    description:
      "Dedicated concierge professionals available to handle reservations, appointments, and special requests.",
  },
  {
    icon: Shield,
    title: "Security Services",
    description:
      "Discreet executive protection and secure transportation arrangements for high-profile clients.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Round-the-clock support ensuring your needs are met anytime, anywhere in the world.",
  },
  {
    icon: Sparkles,
    title: "Special Occasions",
    description:
      "Curated celebrations, romantic getaways, anniversaries, and milestone events crafted to perfection.",
  },
];

const ConciergeServices = () => {
  return (
    <Layout>
      <HeroSection
        image="/images/villa-rosa.jpg"
        imageAlt="Luxury hospitality setting"
        title="Concierge Services"
        subtitle="Personalized luxury services tailored to your every need"
        overlayOpacity="medium"
        minHeight="min-h-[60vh]"
      />

      {/* Introduction */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Exceptional Service, Every Detail
            </h2>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Elgon Luxe, we understand that true luxury lies in the details.
              Our concierge services are designed for discerning clients who
              expect nothing less than perfection in every aspect of their
              travel and lifestyle needs.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From arranging private jets to securing reservations at exclusive
              establishments, our dedicated team ensures seamless experiences
              that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              Our Services
            </h2>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive concierge solutions for the modern luxury traveler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-background p-8 rounded-sm shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <service.icon className="h-10 w-10 text-gold mb-5" />
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                How We Work
              </h2>
              <div className="w-20 h-0.5 bg-gold mb-8" />

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Initial Consultation
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Share your requirements and preferences with our dedicated
                      concierge team.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Tailored Planning
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      We craft a personalized plan that addresses every detail
                      of your request.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Seamless Execution
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Relax while we handle all arrangements and logistics with
                      precision.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-semibold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Ongoing Support
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      24/7 assistance throughout your experience for any
                      adjustments needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/villa-rosa.jpg"
                alt="Luxury concierge service"
                className="w-full h-[400px] object-cover rounded-sm shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold text-charcoal p-6 rounded-sm shadow-lg hidden lg:block">
                <p className="font-serif text-2xl font-medium">24/7</p>
                <p className="text-sm font-medium uppercase tracking-wide">
                  Dedicated Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section id="enquiry" className="py-20 lg:py-28 bg-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="text-ivory">
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
                Request Our Services
              </h2>
              <div className="w-20 h-0.5 bg-gold mb-8" />
              <p className="text-ivory/70 text-lg leading-relaxed mb-8">
                Whether you're planning an exclusive event, need travel
                arrangements, or require ongoing lifestyle management, our team
                is ready to assist.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-ivory/80">
                    Private event coordination
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-ivory/80">
                    Luxury travel arrangements
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-ivory/80">
                    Restaurant & venue reservations
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-ivory/80">
                    Personal shopping assistance
                  </span>
                </div>
              </div>
            </div>

            <div>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ConciergeServices;
