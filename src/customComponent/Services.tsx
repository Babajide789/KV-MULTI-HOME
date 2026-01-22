import Link from "next/link";
import { Paintbrush, Home, Hammer, Wind, DoorOpen, Trash2, TreePine, Sparkles, ArrowRight } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function ServicesPage() {
  const services = [
    {
      icon: <Paintbrush className="w-10 h-10 text-accent-600" />,
      title: "Interior & Exterior Painting",
      description: "Professional painting services that transform your home with vibrant colors and flawless finishes.",
      image: "https://images.unsplash.com/photo-1643804475756-ca849847c78a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHBhaW50aW5nJTIwd2FsbHN8ZW58MXx8fHwxNzY1NDUyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Home className="w-10 h-10 text-accent-600" />,
      title: "Floor Refinishing & Installation",
      description: "Restore the natural beauty of your floors or install beautiful new flooring throughout your home.",
      image: "https://images.unsplash.com/photo-1693948568453-a3564f179a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd29vZCUyMGZsb29yJTIwcmVmaW5pc2hpbmd8ZW58MXx8fHwxNzY1NDUyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Hammer className="w-10 h-10 text-accent-600" />,
      title: "Deck Installation & Repair",
      description: "Create the perfect outdoor living space with custom deck installation or restore your existing deck.",
      image: "https://images.unsplash.com/photo-1740579041945-0425f80cf143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkZWNrJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY1NDUyNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Wind className="w-10 h-10 text-accent-600" />,
      title: "Siding Installation",
      description: "Enhance your home's curb appeal and protection with premium siding materials and expert installation.",
      image: "https://images.unsplash.com/photo-1759073621774-96642ef6bb3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHNpZGluZyUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjU0NTI2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <DoorOpen className="w-10 h-10 text-accent-600" />,
      title: "Window & Door Installation",
      description: "Upgrade your home with energy-efficient windows and doors that improve comfort and security.",
      image: "https://images.unsplash.com/photo-1649001241420-cbd5641d4951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aW5kb3dzJTIwaG9tZXxlbnwxfHx8fDE3NjU0MDA5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Sparkles className="w-10 h-10 text-accent-600" />,
      title: "Additional Services",
      description: "Popcorn ceiling removal, log home staining, and professional cleaning services for your home.",
      image: "https://images.unsplash.com/photo-1557308970-df80a9ccee84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1NDM0NDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-primary-800 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">Our Services</h1>
          <p className="text-xl text-white/90">
            Comprehensive home improvement solutions with expert craftsmanship
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="h-72 overflow-hidden rounded-xl mb-6">
                  {/* <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  /> */}
                </div>
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-primary-800 mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <Link
                  href="/quote"
                  className="text-accent-600 hover:text-accent-700 inline-flex items-center gap-2"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary-800 mb-6">Ready to Get Started?</h2>
          <p className="text-neutral-600 text-lg mb-8">
            Contact us today for a free consultation and estimate
          </p>
          <Link
            href="/quote"
            className="bg-accent-600 text-white px-10 py-4 rounded-lg hover:bg-accent-700 transition inline-block"
          >
            Request Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}