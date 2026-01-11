import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";

const properties = [
  {
    name: "The Royal Portfolio",
    location: "South Africa",
    description: "A collection of exceptional properties offering unrivaled luxury and personalized service across Africa.",
    image: "/images/royal-portfolio.jpg",
    imageAlt: "The Royal Portfolio property",
    featured: true,
  },
  {
    name: "Sirikoi",
    location: "Lewa Wildlife Conservancy, Kenya",
    description: "An exclusive private house and luxury tented camp in one of Kenya's most important wildlife conservancies.",
    image: "/images/sirikoi.jpg",
    imageAlt: "Sirikoi lodge exterior",
    featured: true,
  },
  {
    name: "Villa Rosa Kempinski",
    location: "Nairobi, Kenya",
    description: "A premier luxury hotel offering world-class hospitality in the heart of Nairobi.",
    image: "/images/villa-rosa.jpg",
    imageAlt: "Luxury accommodation",
    featured: false,
  },
];

const CampsLodges = () => {
  return (
    <Layout>
      <HeroSection
        image="/images/royal-portfolio.jpg"
        imageAlt="The Royal Portfolio lodge view"
        title="Camps & Lodges"
        subtitle="Handpicked luxury accommodations across Africa"
        overlayOpacity="light"
        minHeight="min-h-[60vh]"
      />

      {/* Featured Properties */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              Our Partner Properties
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've partnered with Africa's finest camps and lodges to ensure
              every stay exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.name}
                className="group bg-card rounded-sm overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={property.image}
                    alt={property.imageAlt}
                    className="w-full h-full object-cover image-hover group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {property.featured && (
                    <div className="absolute top-4 left-4 bg-gold text-charcoal px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Star className="h-3 w-3" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                    {property.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span>{property.location}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {property.description}
                  </p>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background font-medium uppercase tracking-wider text-xs"
                  >
                    <Link to="/about#enquiry">Enquire</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Row */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-sm border border-border">
              <img
                src="/images/royal-portfolio.jpg"
                alt="The Royal Portfolio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-sm border border-border">
              <img
                src="/images/sirikoi.jpg"
                alt="Sirikoi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-sm border border-border">
              <img
                src="/images/villa-rosa.jpg"
                alt="Villa Rosa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-sm border border-border">
              <img
                src="/images/safari.jpg"
                alt="Safari landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-ivory mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-ivory/70 max-w-2xl mx-auto mb-8">
            Let us help you find the perfect accommodation for your African
            adventure. Our team will match you with properties that suit your
            style and preferences.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gold text-charcoal hover:bg-gold-light font-semibold uppercase tracking-wider px-10"
          >
            <Link to="/about#enquiry">Enquire Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CampsLodges;
