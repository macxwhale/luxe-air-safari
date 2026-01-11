import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you! We'll be in touch shortly.", {
      description: "Your enquiry has been submitted successfully.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className="bg-background border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="bg-background border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+254 000 000 000"
            className="bg-background border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Service *</Label>
          <Select name="service" required>
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="air-charters">Air Charters</SelectItem>
              <SelectItem value="safaris">Safaris</SelectItem>
              <SelectItem value="concierge">Concierge Services</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="dates">Travel Dates</Label>
          <Input
            id="dates"
            name="dates"
            placeholder="e.g., June 15-25, 2026"
            className="bg-background border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="pax">Number of Passengers</Label>
          <Input
            id="pax"
            name="pax"
            type="number"
            min="1"
            placeholder="e.g., 4"
            className="bg-background border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="from">Departure</Label>
          <Input
            id="from"
            name="from"
            placeholder="City or airport"
            className="bg-background border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="to">Destination</Label>
          <Input
            id="to"
            name="to"
            placeholder="City or airport"
            className="bg-background border-border"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us more about your travel requirements..."
          rows={5}
          className="bg-background border-border resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-gold text-charcoal hover:bg-gold-light font-semibold uppercase tracking-wider"
      >
        {isSubmitting ? "Submitting..." : "Submit Enquiry"}
      </Button>
    </form>
  );
}
