import { Link } from "react-router-dom";
import { Plane, Compass, Gem } from "lucide-react";

const services = [
  {
    title: "Air Charters",
    description:
      "Access to 500+ credible aircraft suppliers serving 2500+ destinations worldwide.",
    image: "/images/hero-jets.jpg",
    imageAlt: "Private jet charter",
    href: "/air-charters",
    icon: Plane,
  },
  {
    title: "Safaris",
    description:
      "Bespoke African safari experiences across Kenya's most iconic landscapes.",
    image: "/images/safari.jpg",
    imageAlt: "Kenya classic safari landscape",
    href: "/safari-itineraries",
    icon: Compass,
  },
  {
    title: "Concierge Services",
    description:
      "Luxury hospitality and personalized travel concierge services.",
    image: "/images/villa-rosa.jpg",
    imageAlt: "Luxury hotel interior",
    href: "/about",
    icon: Gem,
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Exceptional experiences tailored to discerning travelers
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative h-[400px] overflow-hidden rounded-sm shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover image-hover group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/85 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <service.icon className="h-10 w-10 text-gold mb-4" />
                <h3 className="font-serif text-2xl font-medium text-ivory mb-3">
                  {service.title}
                </h3>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
