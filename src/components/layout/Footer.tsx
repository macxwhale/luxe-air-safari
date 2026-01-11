import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Air Charters", href: "/air-charters" },
  { label: "Safari Itineraries", href: "/safari-itineraries" },
  { label: "Camps & Lodges", href: "/camps-lodges" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Elgon Luxe Air Charters and Safaris Logo"
                className="h-14 w-auto mb-6"
              />
            </Link>
            <p className="text-ivory/60 text-sm leading-relaxed">
              Elevating your success with seamless private air travel and
              bespoke African safari experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-gold">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-ivory/70 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-medium mb-6 text-gold">
              Contact Us
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-ivory/70">Location</p>
                  <p className="text-sm text-ivory">Wilson Airport Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-ivory/70">Email</p>
                  <a
                    href="mailto:commercial@elgonluxe.com"
                    className="text-sm text-ivory hover:text-gold transition-colors"
                  >
                    commercial@elgonluxe.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-ivory/70">Phone</p>
                  <a
                    href="tel:+254758688885"
                    className="text-sm text-ivory hover:text-gold transition-colors"
                  >
                    +254 758 688 885
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-ivory/70">Working Hours</p>
                  <p className="text-sm text-ivory">Monday to Friday: 08 am – 05 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-ivory/50 text-sm">
            <p>© 2026 • All Rights Reserved</p>
            <span className="hidden sm:inline text-ivory/30">|</span>
            <p className="flex items-center gap-1.5">
              Designed with{" "}
              <span className="inline-block animate-pulse text-gold">♥</span>{" "}
              by{" "}
              <a
                href="https://bunisystems.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-colors font-medium"
              >
                Bunisystems
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
