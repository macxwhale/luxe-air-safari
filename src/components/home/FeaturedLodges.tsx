import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const lodges = [
  {
    name: "The Royal Portfolio",
    location: "South Africa",
    image: "/images/royal-portfolio.jpg",
    imageAlt: "The Royal Portfolio property",
  },
  {
    name: "Sirikoi",
    location: "Lewa Wildlife Conservancy",
    image: "/images/sirikoi.jpg",
    imageAlt: "Sirikoi lodge",
  },
  {
    name: "Villa Rosa",
    location: "Nairobi, Kenya",
    image: "/images/villa-rosa.jpg",
    imageAlt: "Luxury accommodation",
  },
];

export function FeaturedLodges() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
              Featured Lodges & Partners
            </h2>
            <div className="w-20 h-0.5 bg-gold" />
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-6 md:mt-0 border-foreground text-foreground hover:bg-foreground hover:text-background w-fit"
          >
            <Link to="/camps-lodges" className="flex items-center gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Lodges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lodges.map((lodge) => (
            <Link
              key={lodge.name}
              to="/camps-lodges"
              className="group block overflow-hidden rounded-sm bg-card shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={lodge.image}
                  alt={lodge.imageAlt}
                  className="w-full h-full object-cover image-hover group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-foreground mb-1">
                  {lodge.name}
                </h3>
                <p className="text-muted-foreground text-sm">{lodge.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
