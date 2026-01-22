import { Star, Quote } from "lucide-react";
import Link from "next/link";


export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Austin, TX",
      rating: 5,
      service: "Interior Painting",
      text: "KV MULTI HOME SERVICE transformed our living room beyond our expectations. The team was professional, punctual, and incredibly detail-oriented. Highly recommend!",
      date: "November 2024"
    },
    {
      name: "Michael Thompson",
      location: "Denver, CO",
      rating: 5,
      service: "Deck Installation",
      text: "We hired them to build a custom deck in our backyard, and we couldn't be happier. From design to completion, they communicated clearly and delivered exactly what we wanted.",
      date: "October 2024"
    },
    {
      name: "Jennifer Rodriguez",
      location: "Seattle, WA",
      rating: 5,
      service: "Floor Refinishing",
      text: "Our hardwood floors looked worn and dated. After they refinished them, they look brand new! The attention to detail was impressive.",
      date: "September 2024"
    },
    {
      name: "David Chen",
      location: "Portland, OR",
      rating: 5,
      service: "Siding Installation",
      text: "Excellent service from start to finish. The team replaced our old siding and completely transformed our home's appearance. Very professional and efficient.",
      date: "August 2024"
    },
    {
      name: "Amanda Williams",
      location: "Phoenix, AZ",
      rating: 5,
      service: "Window Installation",
      text: "We replaced all the windows in our home. The installation was flawless, and we've already noticed a difference in our energy bills.",
      date: "July 2024"
    },
    {
      name: "Robert Johnson",
      location: "Atlanta, GA",
      rating: 5,
      service: "Exterior Painting",
      text: "They gave us honest advice, fair pricing, and delivered exceptional results. Our home looks amazing!",
      date: "June 2024"
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-primary-800 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">Customer Reviews</h1>
          <p className="text-xl text-white/90">
            See what homeowners are saying about our work
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-50 p-8 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
                  ))}
                </div>

                <p className="text-neutral-700 mb-6">&quot;{testimonial.text}&quot;</p>

                <div className="border-t border-neutral-200 pt-4">
                  <div className="text-primary-800 mb-1">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600">{testimonial.location}</div>
                  <div className="text-sm text-accent-600 mt-2">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary-800 mb-6">Join Our Happy Customers</h2>
          <p className="text-neutral-600 text-lg mb-8">
            Get your free estimate today
          </p>
          <Link
            href="/quote"
            className="bg-accent-600 text-white px-10 py-4 rounded-lg hover:bg-accent-700 transition inline-block"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}