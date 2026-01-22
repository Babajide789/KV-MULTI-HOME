import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white">KV</span>
              </div>
              <span className="text-xl">KV Multi Home</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Professional home improvement services across the USA.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-accent-500 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent-500 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent-500 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-neutral-400 hover:text-white transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-500 shrink-0 mt-1" />
                <a href="tel:+1234567890" className="text-neutral-400 hover:text-white transition">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-500 shrink-0 mt-1" />
                <a href="mailto:info@kvmultihome.com" className="text-neutral-400 hover:text-white transition">
                  info@kvmultihome.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-500 shrink-0 mt-1" />
                <span className="text-neutral-400">Serving Across USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400 text-sm">
          <p>&copy; {currentYear} KV MULTI HOME SERVICE LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}