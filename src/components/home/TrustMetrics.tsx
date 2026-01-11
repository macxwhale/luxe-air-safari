import { Plane, MapPin, Users, Award } from "lucide-react";

const metrics = [
  {
    icon: Plane,
    value: "500+",
    label: "Aircraft Suppliers",
  },
  {
    icon: MapPin,
    value: "2500+",
    label: "Destinations",
  },
  {
    icon: Users,
    value: "100%",
    label: "Client Satisfaction",
  },
  {
    icon: Award,
    value: "Premium",
    label: "Service Quality",
  },
];

export function TrustMetrics() {
  return (
    <section className="py-16 bg-charcoal">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <metric.icon className="h-8 w-8 text-gold mx-auto mb-4" />
              <div className="font-serif text-3xl md:text-4xl font-medium text-ivory mb-2">
                {metric.value}
              </div>
              <div className="text-ivory/60 text-sm uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
