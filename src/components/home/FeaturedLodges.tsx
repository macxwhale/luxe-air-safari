import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "The Royal Portfolio",
    location: "South Africa",
    image: "/images/royal-portfolio.jpg",
    imageAlt: "The Royal Portfolio property",
    website: "https://theroyalportfolio.com",
  },
  {
    name: "Sirikoi",
    location: "Lewa Wildlife Conservancy",
    image: "/images/sirikoi.jpg",
    imageAlt: "Sirikoi lodge",
    website: "https://sirikoi.com",
  },
  {
    name: "Villa Rosa Kempinski",
    location: "Nairobi, Kenya",
    image: "/images/villa-rosa.jpg",
    imageAlt: "Villa Rosa Kempinski",
    website: "https://www.kempinski.com/nairobi",
  },
];

export function FeaturedLodges() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Our Partners
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trusted partnerships with Africa's finest hospitality brands
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-sm bg-card shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={partner.image}
                  alt={partner.imageAlt}
                  className="w-full h-full object-cover image-hover group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-charcoal/80 text-ivory p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-foreground mb-1 group-hover:text-gold transition-colors">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground text-sm">{partner.location}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
