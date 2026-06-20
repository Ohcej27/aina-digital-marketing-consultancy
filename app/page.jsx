import React, { useState } from 'react';
import { Menu, X, ArrowRight, CheckCircle, Star, TrendingUp, Users, Zap } from 'lucide-react';

export default function MarketingConsultancy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-black">AINA</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 hover:text-amber-600">Services</a>
            <a href="#work" className="text-gray-700 hover:text-amber-600">Our Work</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600">About</a>
            <a href="#contact" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900">Get Started</a>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-3">
            <a href="#services" className="block text-gray-700">Services</a>
            <a href="#work" className="block text-gray-700">Our Work</a>
            <a href="#about" className="block text-gray-700">About</a>
            <a href="#contact" className="block bg-black text-white px-6 py-2 rounded-lg text-center">Get Started</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Strategic digital marketing that drives real growth. We help brands connect with their audience and scale faster.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 flex items-center gap-2">
              Schedule Consultation <ArrowRight size={20} />
            </button>
            <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">150+</div>
            <p className="text-gray-600">Successful Campaigns</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">85%</div>
            <p className="text-gray-600">Average ROI Growth</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">8 yrs</div>
            <p className="text-gray-600">Industry Experience</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive digital solutions tailored to your business</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp size={40} className="text-amber-600" />,
                title: "SEO & Content Strategy",
                description: "Boost your organic visibility with data-driven SEO and content that ranks and converts."
              },
              {
                icon: <Users size={40} className="text-amber-600" />,
                title: "Social Media Marketing",
                description: "Build engaged communities and drive sales through strategic social media campaigns."
              },
              {
                icon: <Zap size={40} className="text-amber-600" />,
                title: "PPC Advertising",
                description: "Maximize your ad spend with targeted campaigns that deliver measurable results fast."
              },
              {
                icon: <TrendingUp size={40} className="text-amber-600" />,
                title: "Email Marketing",
                description: "Convert leads into loyal customers with personalized email campaigns that perform."
              },
              {
                icon: <Users size={40} className="text-amber-600" />,
                title: "Brand Strategy",
                description: "Define your unique market position and create a compelling brand narrative."
              },
              {
                icon: <Zap size={40} className="text-amber-600" />,
                title: "Analytics & Reporting",
                description: "Track what matters with custom dashboards and transparent, actionable insights."
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Work */}
      <section id="work" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from real clients</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                company: "TechStartup Co.",
                challenge: "Low brand awareness in competitive market",
                result: "300% increase in qualified leads in 6 months",
                metric: "+300%"
              },
              {
                company: "E-Commerce Brand",
                challenge: "High customer acquisition cost",
                result: "Reduced CAC by 45% while maintaining same volume",
                metric: "-45% CAC"
              },
              {
                company: "B2B Services",
                challenge: "Struggling to rank for key services",
                result: "Page 1 rankings for 15+ high-intent keywords",
                metric: "#1 Rankings"
              },
              {
                company: "SaaS Platform",
                challenge: "Email list not generating revenue",
                result: "Built $2.3M pipeline through email alone",
                metric: "$2.3M"
              }
            ].map((study, idx) => (
              <div key={idx} className="bg-amber-50 p-8 rounded-xl border border-amber-200">
                <p className="text-sm text-amber-600 font-semibold mb-2">Case Study</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{study.metric}</h3>
                <p className="text-gray-600 mb-4">{study.company}</p>
                <p className="text-gray-700 font-semibold mb-2">{study.challenge}</p>
                <p className="text-gray-700">{study.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "Founder, TechVentures",
                text: "GrowthLab completely transformed our marketing approach. Their strategic thinking and execution resulted in 5x growth in a year."
              },
              {
                name: "Mark Chen",
                title: "CMO, Digital Solutions",
                text: "Professional, data-driven, and results-oriented. They understand our business goals and deliver beyond expectations."
              },
              {
                name: "Emma Rodriguez",
                title: "CEO, Commerce Plus",
                text: "The team is responsive, creative, and most importantly—they deliver measurable ROI. Highly recommended."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="gold" className="text-yellow-400" />)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose GrowthLab</h2>
              <div className="space-y-4">
                {[
                  "Proven track record with 150+ successful campaigns",
                  "Transparent reporting and regular strategy sessions",
                  "Data-driven approach with focus on ROI",
                  "Dedicated account team, not just automated service",
                  "Custom strategies for your unique business",
                  "Honest advice—we say no when something won't work"
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle size={24} className="text-amber-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-100 rounded-xl p-12 h-96 flex items-center justify-center text-gray-500">
              [Your image or video here]
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's discuss how we can help you achieve your goals</p>
          <button className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-700">
            Schedule Your Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-white font-bold mb-4">AINA</p>
              <p className="text-sm">Strategic digital marketing for ambitious brands</p>
            </div>
            <div>
              <p className="text-white font-bold mb-4">Services</p>
              <ul className="text-sm space-y-2">
                <li><a href="#services" className="hover:text-white">SEO & Content</a></li>
                <li><a href="#services" className="hover:text-white">Social Media</a></li>
                <li><a href="#services" className="hover:text-white">PPC Advertising</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-4">Company</p>
              <ul className="text-sm space-y-2">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#work" className="hover:text-white">Case Studies</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-4">Contact</p>
              <p className="text-sm mb-2">hello@aina.com</p>
              <p className="text-sm">+971 (50) XXX-XXXX</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 AINA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
