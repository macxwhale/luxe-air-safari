import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin } from "lucide-react";

const itineraries = [
  {
    title: "Classic Kenya Safari",
    duration: "7 Days",
    destinations: "Masai Mara, Amboseli, Nairobi",
    description: "Experience the best of Kenya's iconic wildlife reserves, from the Great Migration to Mount Kilimanjaro views.",
    image: "/images/safari.jpg",
    imageAlt: "Safari scene",
  },
  {
    title: "Luxury Bush & Beach",
    duration: "10 Days",
    destinations: "Masai Mara, Lamu Island",
    description: "Combine thrilling safari experiences with pristine Indian Ocean beaches for the ultimate Kenyan escape.",
    image: "/images/safari.jpg",
    imageAlt: "Safari scene",
  },
  {
    title: "Migration Special",
    duration: "5 Days",
    destinations: "Masai Mara",
    description: "Witness the spectacular wildebeest migration with expert guides and exclusive camp locations.",
    image: "/images/safari.jpg",
    imageAlt: "Safari scene",
  },
  {
    title: "Family Adventure",
    duration: "8 Days",
    destinations: "Nairobi, Samburu, Masai Mara",
    description: "A family-friendly journey through Kenya's diverse landscapes and wildlife sanctuaries.",
    image: "/images/safari.jpg",
    imageAlt: "Safari scene",
  },
  {
    title: "Romantic Getaway",
    duration: "6 Days",
    destinations: "Amboseli, Chyulu Hills",
    description: "An intimate escape featuring private camps, stunning scenery, and unforgettable moments.",
    image: "/images/safari.jpg",
    imageAlt: "Safari scene",
  },
  {
    title: "Photography Safari",
    duration: "9 Days",
    destinations: "Lake Nakuru, Masai Mara, Amboseli",
    description: "Capture Africa's most photogenic wildlife with expert photography guides and optimal timing.",
    image: "/images/safari.jpg",
    imageAlt: "Safari scene",
  },
];

const SafariItineraries = () => {
  return (
    <Layout>
      <HeroSection
        image="/images/safari.jpg"
        imageAlt="Safari wildlife landscape"
        title="Safari Itineraries"
        subtitle="Bespoke African adventures crafted for discerning travelers"
        overlayOpacity="medium"
        minHeight="min-h-[60vh]"
      />

      {/* Itineraries Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              Curated Experiences
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each safari is tailored to your preferences. These sample
              itineraries serve as inspiration for your bespoke journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itineraries.map((itinerary) => (
              <div
                key={itinerary.title}
                className="group bg-card rounded-sm overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={itinerary.image}
                    alt={itinerary.imageAlt}
                    className="w-full h-full object-cover image-hover group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                    {itinerary.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-gold" />
                      <span>{itinerary.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-gold" />
                      <span>{itinerary.destinations}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {itinerary.description}
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

      {/* Custom Safari CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-ivory mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-ivory/70 max-w-2xl mx-auto mb-8">
            Every traveler is unique. Let us design a completely bespoke safari
            experience tailored to your interests, timeline, and budget.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gold text-charcoal hover:bg-gold-light font-semibold uppercase tracking-wider px-10"
          >
            <Link to="/about#enquiry">Create Custom Safari</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SafariItineraries;
