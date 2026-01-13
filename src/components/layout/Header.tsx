import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Air Charters", href: "/air-charters" },
  {
    label: "Safaris",
    href: "/safari-itineraries",
    children: [
      { label: "Safari Itineraries", href: "/safari-itineraries" },
      { label: "Camps & Lodges", href: "/camps-lodges" },
    ],
  },
  { label: "Concierge Services", href: "/about" },
  { label: "Contacts", href: "/about#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [safarisOpen, setSafarisOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const isSafariActive = () => {
    return (
      location.pathname.startsWith("/safari-itineraries") ||
      location.pathname.startsWith("/camps-lodges")
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Elgon Luxe Air Charters and Safaris Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger
                    className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors outline-none ${
                      isSafariActive()
                        ? "text-gold"
                        : "text-ivory/80 hover:text-ivory"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="bg-charcoal border-white/10 min-w-[180px]"
                  >
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link
                          to={child.href}
                          className={`w-full cursor-pointer ${
                            isActive(child.href)
                              ? "text-gold"
                              : "text-ivory/80 hover:text-ivory"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href + item.label}
                  to={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors link-underline ${
                    isActive(item.href)
                      ? "text-gold"
                      : "text-ivory/80 hover:text-ivory"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right side - CTA and Phone */}
          <div className="flex items-center gap-3 lg:gap-4">
            <a
              href="tel:+254758688885"
              className="hidden sm:flex items-center gap-2 text-ivory/80 hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+254 758 688 885</span>
            </a>

            <Button
              asChild
              variant="outline"
              className="hidden md:inline-flex border-gold text-gold hover:bg-gold hover:text-charcoal font-semibold tracking-wide uppercase text-xs px-6"
            >
              <Link to="/about#enquiry">Enquire Now</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-ivory">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-charcoal border-l border-white/10"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <img
                      src="/logo.png"
                      alt="Elgon Luxe"
                      className="h-10 w-auto"
                    />
                  </div>

                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) =>
                      item.children ? (
                        <Collapsible
                          key={item.label}
                          open={safarisOpen}
                          onOpenChange={setSafarisOpen}
                        >
                          <CollapsibleTrigger
                            className={`flex items-center justify-between w-full text-base font-medium py-2 border-b border-white/5 transition-colors ${
                              isSafariActive()
                                ? "text-gold"
                                : "text-ivory/80 hover:text-ivory"
                            }`}
                          >
                            {item.label}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                safarisOpen ? "rotate-180" : ""
                              }`}
                            />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-4 space-y-2 pt-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                onClick={() => setIsOpen(false)}
                                className={`block text-sm py-2 transition-colors ${
                                  isActive(child.href)
                                    ? "text-gold"
                                    : "text-ivory/60 hover:text-ivory"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <Link
                          key={item.href + item.label}
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-base font-medium py-2 border-b border-white/5 transition-colors ${
                            isActive(item.href)
                              ? "text-gold"
                              : "text-ivory/80 hover:text-ivory"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </nav>

                  <div className="mt-auto pt-8 space-y-4">
                    <a
                      href="tel:+254758688885"
                      className="flex items-center gap-3 text-ivory/80 hover:text-gold transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span>+254 758 688 885</span>
                    </a>

                    <Button
                      asChild
                      className="w-full bg-gold text-charcoal hover:bg-gold-light font-semibold uppercase tracking-wide"
                    >
                      <Link to="/about#enquiry" onClick={() => setIsOpen(false)}>
                        Enquire Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
