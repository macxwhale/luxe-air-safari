import { MapPin, Mail, Phone, Clock } from "lucide-react";

export function ContactStrip() {
  return (
    <section className="py-12 bg-charcoal border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-16 text-ivory/80">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" />
            <span className="text-sm">Wilson Airport Nairobi Kenya</span>
          </div>

          <a
            href="mailto:commercial@elgonluxe.com"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Mail className="h-4 w-4 text-gold" />
            <span className="text-sm">commercial@elgonluxe.com</span>
          </a>

          <a
            href="tel:+254758688885"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Phone className="h-4 w-4 text-gold" />
            <span className="text-sm">+254 758 688 885</span>
          </a>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gold" />
            <span className="text-sm">Mon–Fri: 08:00–17:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
