import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, CheckCircle, Lock, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Clear, Practical & Applicable Advice",
      description: "We translate complex GDPR requirements into actionable, easy-to-understand guidance that fits your business reality."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Handpicked Consultants with Real Experience",
      description: "Our team consists of qualified professionals with deep expertise in intellectual property law and GDPR compliance."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Solution-Focused Approach",
      description: "We don't just identify problems—we provide practical solutions that help your business grow while staying compliant."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Absolute Confidentiality",
      description: "Your operations and data remain completely confidential. We maintain the highest standards of professional discretion."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                About Consentia Data Protection
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                We believe compliance should empower growth, not block it.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <Shield className="h-24 w-24 text-blue-300 mx-auto mb-6" />
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-blue-100">
                    To help you protect what matters most: your customers' trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded by a team of people who studied intellectual property law and are all GDPR specialists and consultants, 
                Consentia was created out of a simple realization:
              </p>
              
              <blockquote className="text-2xl font-semibold text-blue-600 text-center py-8 border-l-4 border-blue-600 pl-8 mb-6">
                "Most companies see GDPR as a burden — vague, complex, and disconnected from their real business needs."
              </blockquote>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                That's why we've built a model that is flexible, outsourced, and human — designed for today's fast-moving businesses: 
                tech startups, agencies, SaaS, e-commerce.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tech Startups</h3>
                <p className="text-gray-600">Scaling businesses that need compliance without complexity</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Agencies</h3>
                <p className="text-gray-600">Creative teams focused on client success, not legal paperwork</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SaaS & E-commerce</h3>
                <p className="text-gray-600">Data-driven businesses that prioritize customer trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600">
              Our core values guide every interaction and solution we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="h-16 w-16 text-blue-300 mx-auto mb-8" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Your Trusted Partner
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Consentia isn't just a service provider — we're your trusted partner. We work alongside your team to ensure 
              compliance becomes a competitive advantage, not a roadblock to success.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
              <blockquote className="text-2xl font-semibold mb-4">
                "We don't just check boxes — we help you build sustainable compliance that grows with your business."
              </blockquote>
              <p className="text-blue-200">
                — The Consentia Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you turn GDPR compliance into a competitive advantage for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Start the Conversation
            </Link>
            <Link
              to="/services"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;