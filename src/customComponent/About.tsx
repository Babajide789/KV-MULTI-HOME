import { CheckCircle, Award, Users, Target } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-accent-600" />,
      title: "Expert Craftsmanship",
      description: "Superior workmanship on every project with attention to detail"
    },
    {
      icon: <Users className="w-8 h-8 text-accent-600" />,
      title: "Customer-Focused",
      description: "Your satisfaction is our top priority from start to finish"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent-600" />,
      title: "Quality Materials",
      description: "Premium materials and proven techniques for lasting results"
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-primary-800 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">About Us</h1>
          <p className="text-xl text-white/90">
            Your trusted partner for quality home improvement services
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-neutral-700 text-lg">
                <p>
                  KV MULTI HOME SERVICE LLC was founded with a simple mission: to provide homeowners with honest, reliable, and exceptional home improvement services.
                </p>
                <p>
                  With over 15 years of experience, we&apos;ve completed thousands of projects. Each project is an opportunity to demonstrate our commitment to quality and customer satisfaction.
                </p>
                <p>
                  We treat every home with the same care and attention we&apos;d give our own, ensuring lasting results you&apos;ll love.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1752649936390-561408d22108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwYWludGVycyUyMHRlYW18ZW58MXx8fHwxNzY1MzY0ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Team"
                className="w-full h-[500px] object-cover rounded-xl shadow-xl"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary-800 mb-4">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h4 className="text-primary-800 mb-3">{value.title}</h4>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl text-accent-400 mb-2">15+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl text-accent-400 mb-2">2000+</div>
              <div className="text-white/90">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl text-accent-400 mb-2">100%</div>
              <div className="text-white/90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary-800 mb-6">Ready to Work With Us?</h2>
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