import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <HeroSection
        image="/images/villa-rosa.jpg"
        imageAlt="Luxury hospitality setting"
        title="About Us"
        overlayOpacity="medium"
        minHeight="min-h-[50vh]"
      />

      {/* Brand Story */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                Elevating Travel Excellence
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-8" />
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Elgon Luxe Air Charters and Safaris represents the pinnacle of
                  luxury travel in East Africa. Founded with a vision to redefine
                  private air travel and safari experiences, we have established
                  ourselves as the premier choice for discerning travelers.
                </p>
                <p>
                  Our access to over 500 credible aircraft suppliers and 2500+
                  destinations ensures that no journey is beyond reach. Combined
                  with our deep expertise in crafting bespoke African safaris, we
                  offer an unparalleled travel experience.
                </p>
                <p>
                  Based at Wilson Airport in Nairobi, Kenya, our team of dedicated
                  professionals works tirelessly to ensure every detail of your
                  journey exceeds expectations. From the moment you enquire to the
                  completion of your adventure, excellence is our standard.
                </p>
              </div>
            </div>

            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elevated">
              <img
                src="/images/villa-rosa.jpg"
                alt="Luxury hospitality"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Block */}
      <section className="py-16 bg-charcoal" id="contact">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-ivory mb-4">
              Our Location
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-gold mx-auto mb-4" />
              <p className="text-ivory/70 text-sm mb-1">Location</p>
              <p className="text-ivory">Wilson Airport Nairobi, Kenya</p>
            </div>

            <div className="text-center">
              <Mail className="h-8 w-8 text-gold mx-auto mb-4" />
              <p className="text-ivory/70 text-sm mb-1">Email</p>
              <a
                href="mailto:commercial@elgonluxe.com"
                className="text-ivory hover:text-gold transition-colors"
              >
                commercial@elgonluxe.com
              </a>
            </div>

            <div className="text-center">
              <Phone className="h-8 w-8 text-gold mx-auto mb-4" />
              <p className="text-ivory/70 text-sm mb-1">Phone</p>
              <a
                href="tel:+254758688885"
                className="text-ivory hover:text-gold transition-colors"
              >
                +254 758 688 885
              </a>
            </div>

            <div className="text-center">
              <Clock className="h-8 w-8 text-gold mx-auto mb-4" />
              <p className="text-ivory/70 text-sm mb-1">Hours</p>
              <p className="text-ivory">Mon–Fri: 08 am – 05 pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 lg:py-28 bg-secondary" id="enquiry">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
                Let's Talk
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
              <p className="text-muted-foreground">
                Tell us about your travel plans and we'll craft the perfect
                experience for you.
              </p>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
