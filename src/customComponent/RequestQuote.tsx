"use client"

import { useState } from "react";
import { CheckCircle, FileText } from "lucide-react";

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    serviceType: "",
    projectDescription: "",
    timeframe: "",
    budget: "",
    preferredContact: "email"
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a server
    console.log("Quote request submitted:", formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-lg shadow-lg">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
            <h2 className="text-primary-800 mb-4">Quote Request Received!</h2>
            <p className="text-neutral-600 mb-8">
              Thank you for your interest in KV MULTI HOME SERVICE LLC. We&apos;ve received your quote request and will review the details carefully.
            </p>
            <div className="bg-neutral-50 p-6 rounded-lg mb-8">
              <h4 className="text-primary-800 mb-4">What Happens Next?</h4>
              <ul className="text-left space-y-3 text-neutral-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 shrink-0 mt-1" />
                  <span>A member of our team will review your project details within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 shrink-0 mt-1" />
                  <span>We&apos;ll contact you to schedule a convenient time for a consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 shrink-0 mt-1" />
                  <span>You&apos;ll receive a detailed, no-obligation estimate for your project</span>
                </li>
              </ul>
            </div>
            <p className="text-neutral-600 mb-6">
              If you have any immediate questions, please don&apos;t hesitate to call us at{" "}
              <a href="tel:+1234567890" className="text-accent-600 hover:text-accent-700">
                (123) 456-7890
              </a>
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-accent-600 text-white px-8 py-3 rounded-lg hover:bg-accent-700 transition"
            >
              Submit Another Quote
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">Request a Free Estimate</h1>
          <p className="max-w-3xl mx-auto text-neutral-100">
            Get started on your home improvement project today. Fill out the form below and receive a detailed, no-obligation quote.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-accent-600" />
              <h2 className="text-primary-800">Project Information</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-primary-800 mb-6">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-neutral-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-neutral-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                  </div>
                </div>
              </div>

              {/* Property Address */}
              <div>
                <h3 className="text-primary-800 mb-6">Property Address</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="address" className="block text-neutral-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-neutral-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="state" className="block text-neutral-700 mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="zipCode" className="block text-neutral-700 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-primary-800 mb-6">Project Details</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="serviceType" className="block text-neutral-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    >
                      <option value="">Select a service</option>
                      <option value="interior-painting">Interior Painting</option>
                      <option value="exterior-painting">Exterior Painting</option>
                      <option value="popcorn-ceiling">Popcorn Ceiling Removal</option>
                      <option value="floor-refinishing">Floor Refinishing</option>
                      <option value="log-home-staining">Log Home Staining</option>
                      <option value="deck-installation">Deck Installation</option>
                      <option value="deck-repair">Deck Repair</option>
                      <option value="floor-installation">Floor Installation</option>
                      <option value="siding-installation">Siding Installation</option>
                      <option value="window-installation">Window Installation</option>
                      <option value="door-installation">Door Installation</option>
                      <option value="cleaning">Home/Space Cleaning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="projectDescription" className="block text-neutral-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Please describe your project in detail, including scope, specific requirements, and any special considerations..."
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 resize-none"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="timeframe" className="block text-neutral-700 mb-2">
                        Desired Timeframe *
                      </label>
                      <select
                        id="timeframe"
                        name="timeframe"
                        value={formData.timeframe}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      >
                        <option value="">Select timeframe</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-2-weeks">1-2 weeks</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-neutral-700 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="over-50k">Over $50,000</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-700 mb-2">
                      Preferred Contact Method *
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === "email"}
                          onChange={handleChange}
                          className="w-4 h-4 text-accent-600 focus:ring-accent-500"
                        />
                        <span className="text-neutral-700">Email</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === "phone"}
                          onChange={handleChange}
                          className="w-4 h-4 text-accent-600 focus:ring-accent-500"
                        />
                        <span className="text-neutral-700">Phone</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-accent-600 text-white px-8 py-4 rounded-lg hover:bg-accent-700 transition"
              >
                Submit Quote Request
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
              <CheckCircle className="w-10 h-10 text-accent-600 mx-auto mb-3" />
              <h4 className="text-primary-800 mb-2">Free Estimates</h4>
              <p className="text-sm text-neutral-600">No obligation quotes with transparent pricing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <CheckCircle className="w-10 h-10 text-accent-600 mx-auto mb-3" />
              <h4 className="text-primary-800 mb-2">Quick Response</h4>
              <p className="text-sm text-neutral-600">We&apos;ll contact you within 24 hours</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <CheckCircle className="w-10 h-10 text-accent-600 mx-auto mb-3" />
              <h4 className="text-primary-800 mb-2">Expert Consultation</h4>
              <p className="text-sm text-neutral-600">Professional advice tailored to your needs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
