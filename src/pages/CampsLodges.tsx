import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Tent, TreePine } from "lucide-react";

const camps = [
  {
    name: "Mara Serena Safari Lodge",
    location: "Masai Mara, Kenya",
    description:
      "Perched high on a hill with sweeping views across the Mara, this award-winning lodge offers front-row seats to the Great Migration.",
    image: "/images/safari.jpg",
    imageAlt: "Masai Mara safari lodge",
    type: "Lodge",
    capacity: "74 rooms",
  },
  {
    name: "Governors' Camp",
    location: "Masai Mara, Kenya",
    description:
      "A classic tented camp on the banks of the Mara River, offering authentic safari experiences in the heart of the reserve.",
    image: "/images/safari.jpg",
    imageAlt: "Governors' Camp tents",
    type: "Tented Camp",
    capacity: "37 tents",
  },
  {
    name: "Ol Pejeta Bush Camp",
    location: "Laikipia, Kenya",
    description:
      "An intimate eco-camp in Ol Pejeta Conservancy, home to the last northern white rhinos and diverse wildlife.",
    image: "/images/safari.jpg",
    imageAlt: "Ol Pejeta bush camp",
    type: "Bush Camp",
    capacity: "6 tents",
  },
  {
    name: "Saruni Samburu",
    location: "Samburu, Kenya",
    description:
      "Luxury villas with infinity pools overlooking the Kalama Conservancy and the rugged Samburu landscape.",
    image: "/images/safari.jpg",
    imageAlt: "Saruni Samburu villa",
    type: "Lodge",
    capacity: "6 villas",
  },
  {
    name: "Angama Mara",
    location: "Masai Mara, Kenya",
    description:
      "Suspended high above the Rift Valley escarpment with breathtaking views of the Mara Triangle below.",
    image: "/images/safari.jpg",
    imageAlt: "Angama Mara lodge",
    type: "Lodge",
    capacity: "30 tented suites",
  },
  {
    name: "Lewa Safari Camp",
    location: "Lewa Wildlife Conservancy, Kenya",
    description:
      "A family-friendly camp in the renowned Lewa Conservancy, offering exceptional wildlife and conservation experiences.",
    image: "/images/safari.jpg",
    imageAlt: "Lewa Safari Camp",
    type: "Tented Camp",
    capacity: "13 tents",
  },
];

const CampsLodges = () => {
  return (
    <Layout>
      <HeroSection
        image="/images/safari.jpg"
        imageAlt="Safari landscape with acacia trees"
        title="Camps & Lodges"
        subtitle="Exceptional safari accommodations across Kenya's finest conservancies"
        overlayOpacity="medium"
        minHeight="min-h-[60vh]"
      />

      {/* Introduction */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Where Luxury Meets Wilderness
            </h2>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              From intimate bush camps to world-renowned lodges, we curate
              accommodations that offer the perfect blend of comfort, authenticity,
              and unparalleled wildlife access. Each property is handpicked for its
              exceptional service, location, and commitment to conservation.
            </p>
          </div>
        </div>
      </section>

      {/* Camps Grid */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              Featured Accommodations
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of premier safari camps and lodges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {camps.map((camp) => (
              <div
                key={camp.name}
                className="group bg-card rounded-sm overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={camp.image}
                    alt={camp.imageAlt}
                    className="w-full h-full object-cover image-hover group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-charcoal px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    {camp.type === "Lodge" ? (
                      <TreePine className="h-3 w-3" />
                    ) : (
                      <Tent className="h-3 w-3" />
                    )}
                    {camp.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                    {camp.name}
                  </h3>

                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-gold" />
                      <span>{camp.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-gold" />
                      <span>{camp.capacity}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {camp.description}
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

      {/* Why Book With Us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                Why Book Through Elgon Luxe?
              </h2>
              <div className="w-20 h-0.5 bg-gold mb-8" />

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Insider Access
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Priority bookings and exclusive rates at Kenya's most
                      sought-after properties.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Expert Guidance
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Our team has personally visited each property to ensure it
                      meets our standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Seamless Integration
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Combine lodges with charter flights and custom itineraries
                      for a complete experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Conservation Focus
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      We partner with camps committed to wildlife conservation
                      and community development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/safari.jpg"
                alt="Safari landscape"
                className="w-full h-[400px] object-cover rounded-sm shadow-elevated"
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
            Let us help you find the perfect camp or lodge for your African
            adventure. Our team will match you with properties that suit your
            style and safari goals.
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
