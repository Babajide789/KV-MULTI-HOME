
import { Calendar, ArrowRight } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import Link from "next/link";


export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Top 10 Exterior Paint Colors for 2024",
      excerpt: "Discover the trending exterior paint colors that will enhance your home's curb appeal and increase property value.",
      date: "December 5, 2024",
      category: "Painting Tips",
      image: "https://images.unsplash.com/photo-1722876720000-f39b65b7d4a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMGNvbnRyYWN0b3J8ZW58MXx8fHwxNzY1MzQ0OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      title: "How to Prepare Your Home for a Painting Project",
      excerpt: "Learn the essential steps to prepare your home before painting begins to ensure the best results and protect your belongings.",
      date: "November 28, 2024",
      category: "DIY Guide",
      image: "https://images.unsplash.com/photo-1643804475756-ca849847c78a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHBhaW50aW5nJTIwd2FsbHN8ZW58MXx8fHwxNzY1NDUyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      title: "Hardwood vs. Laminate: Which Flooring is Right for You?",
      excerpt: "Compare the pros and cons of hardwood and laminate flooring to make an informed decision for your home.",
      date: "November 20, 2024",
      category: "Flooring",
      image: "https://images.unsplash.com/photo-1693948568453-a3564f179a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd29vZCUyMGZsb29yJTIwcmVmaW5pc2hpbmd8ZW58MXx8fHwxNzY1NDUyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      title: "5 Signs Your Deck Needs Repair or Replacement",
      excerpt: "Identify the warning signs that indicate your deck requires professional attention to maintain safety and appearance.",
      date: "November 12, 2024",
      category: "Deck Maintenance",
      image: "https://images.unsplash.com/photo-1740579041945-0425f80cf143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkZWNrJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY1NDUyNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      title: "The Benefits of Energy-Efficient Windows",
      excerpt: "Discover how upgrading to energy-efficient windows can reduce your utility bills and improve home comfort.",
      date: "November 5, 2024",
      category: "Home Improvement",
      image: "https://images.unsplash.com/photo-1649001241420-cbd5641d4951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aW5kb3dzJTIwaG9tZXxlbnwxfHx8fDE3NjU0MDA5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      title: "Choosing the Right Siding Material for Your Climate",
      excerpt: "Learn which siding materials perform best in different weather conditions to protect your home year-round.",
      date: "October 29, 2024",
      category: "Siding",
      image: "https://images.unsplash.com/photo-1759073621774-96642ef6bb3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHNpZGluZyUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjU0NTI2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">Home Improvement Blog</h1>
          <p className="max-w-3xl mx-auto text-neutral-100">
            Expert tips, advice, and insights to help you make informed decisions about your home improvement projects.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group">
                <div className="h-48 overflow-hidden">
                  {/* <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  /> */}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs bg-accent-100 text-accent-700 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="text-primary-800 mb-3 group-hover:text-accent-600 transition">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-accent-600 hover:text-accent-700 inline-flex items-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-600">
              Get answers to common questions about our services and processes.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-primary-800 mb-3">How long does a typical painting project take?</h4>
              <p className="text-neutral-600">
                The timeline varies based on the project size and scope. A single room interior paint job typically takes 1-2 days, while whole-home exterior painting may take 5-7 days. We&apos;ll provide a detailed timeline in your quote.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-primary-800 mb-3">Do you offer warranties on your work?</h4>
              <p className="text-neutral-600">
                Yes! We stand behind our work with comprehensive warranties. Specific warranty terms vary by service type and are detailed in your contract. We use quality materials and proven techniques to ensure lasting results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-primary-800 mb-3">What payment methods do you accept?</h4>
              <p className="text-neutral-600">
                We accept multiple payment methods including cash, checks, and major credit cards. For larger projects, we offer flexible payment schedules with deposits and milestone-based payments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-primary-800 mb-3">Are you licensed and insured?</h4>
              <p className="text-neutral-600">
                Absolutely. KV MULTI HOME SERVICE LLC is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers&apos; compensation to protect you and our team.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-primary-800 mb-3">Can you help with design and color selection?</h4>
              <p className="text-neutral-600">
                Yes! We offer complimentary color consultation and design advice to help you choose the perfect colors and materials for your project. Our experienced team can guide you through the selection process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-primary-800 mb-3">Do you provide cleanup after the project?</h4>
              <p className="text-neutral-600">
                Complete cleanup is included in all our projects. We take pride in leaving your property clean and ready to enjoy. Our team will remove all debris, equipment, and materials when the job is complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Have More Questions?</h2>
          <p className="mb-8 text-neutral-100">
            Our team is here to help. Contact us today for personalized answers and expert advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent-600 text-white px-8 py-4 rounded-lg hover:bg-accent-700 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/quote"
              className="bg-white text-primary-800 px-8 py-4 rounded-lg hover:bg-neutral-100 transition"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
