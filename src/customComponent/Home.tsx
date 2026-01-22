import Link from "next/link";
import { CheckCircle, Award, Users, Clock, Phone, ArrowRight } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function HomePage() {
  const services = [
    {
      title: "Painting",
      description: "Interior & exterior painting with expert craftsmanship",
      image: "https://images.unsplash.com/photo-1643804475756-ca849847c78a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHBhaW50aW5nJTIwd2FsbHN8ZW58MXx8fHwxNzY1NDUyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Flooring",
      description: "Installation & refinishing for beautiful floors",
      image: "https://images.unsplash.com/photo-1693948568453-a3564f179a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd29vZCUyMGZsb29yJTIwcmVmaW5pc2hpbmd8ZW58MXx8fHwxNzY1NDUyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Decks",
      description: "Custom deck installation & restoration",
      image: "https://images.unsplash.com/photo-1740579041945-0425f80cf143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkZWNrJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY1NDUyNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Siding",
      description: "Quality siding installation for lasting protection",
      image: "https://images.unsplash.com/photo-1759073621774-96642ef6bb3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHNpZGluZyUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjU0NTI2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Windows & Doors",
      description: "Energy-efficient window & door installation",
      image: "https://images.unsplash.com/photo-1649001241420-cbd5641d4951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aW5kb3dzJTIwaG9tZXxlbnwxfHx8fDE3NjU0MDA5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Renovations",
      description: "Complete home improvement & remodeling",
      image: "https://images.unsplash.com/photo-1557308970-df80a9ccee84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1NDM0NDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          {/* <ImageWithFallback
            src="https://images.unsplash.com/photo-1722876720000-f39b65b7d4a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMGNvbnRyYWN0b3J8ZW58MXx8fHwxNzY1MzQ0OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Home Renovation"
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-primary-900/60"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">
            Transform Your Home
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Professional home improvement services you can trust. From painting to complete renovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-accent-600 text-white px-10 py-4 rounded-lg hover:bg-accent-700 transition text-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="bg-white text-primary-800 px-10 py-4 rounded-lg hover:bg-neutral-100 transition text-lg"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary-800 mb-4">What We Do</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Expert home improvement services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href="/services"
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-accent-400 hover:shadow-xl transition">
                  <div className="h-56 overflow-hidden">
                    {/* <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    /> */}
                  </div>
                  <div className="p-6">
                    <h3 className="text-primary-800 mb-2">{service.title}</h3>
                    <p className="text-neutral-600">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary-800 mb-4">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="text-primary-800 mb-3">Expert Craftsmanship</h4>
              <p className="text-neutral-600">15+ years delivering quality results</p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="text-primary-800 mb-3">Licensed & Insured</h4>
              <p className="text-neutral-600">Fully certified professionals</p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="text-primary-800 mb-3">Customer First</h4>
              <p className="text-neutral-600">100% satisfaction guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 text-white/90">
            Get a free estimate for your home improvement project
          </p>
          <Link
            href="/quote"
            className="bg-accent-600 text-white px-10 py-4 rounded-lg hover:bg-accent-700 transition text-lg inline-block"
          >
            Request Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}