import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  showCtas?: boolean;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  overlayOpacity?: "light" | "medium" | "strong";
  minHeight?: string;
}

export function HeroSection({
  image,
  imageAlt,
  title,
  subtitle,
  showCtas = false,
  primaryCtaText = "Enquire Now",
  primaryCtaLink = "/about#enquiry",
  secondaryCtaText = "Let's Talk",
  secondaryCtaLink = "tel:+254758688885",
  overlayOpacity = "medium",
  minHeight = "min-h-[70vh]",
}: HeroSectionProps) {
  const overlayClass = {
    light: "bg-black/35",
    medium: "bg-black/50",
    strong: "bg-black/65",
  }[overlayOpacity];

  return (
    <section className={`relative ${minHeight} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className={`absolute inset-0 ${overlayClass}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-ivory leading-tight mb-6">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-ivory/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}

          {showCtas && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                variant="gold"
                size="lg"
              >
                <Link to={primaryCtaLink}>{primaryCtaText}</Link>
              </Button>

              <Button
                asChild
                variant="hero-secondary"
                size="lg"
              >
                <a href={secondaryCtaLink}>{secondaryCtaText}</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
