import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Users, Zap, Phone, ArrowRight, Building2, Rocket, Globe, ShoppingCart } from 'lucide-react';

const Home = () => {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Understand and implement GDPR requirements effectively",
      description: "Clear guidance on complex regulations"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Manage legal and reputational risks",
      description: "Proactive compliance strategy"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Protect the privacy of their users and customers",
      description: "Build trust through transparency"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Build a culture of compliance",
      description: "Simple, sustainable, and aligned with business goals"
    }
  ];

  const clientTypes = [
    {
      icon: <Rocket className="h-16 w-16" />,
      title: "Tech Startups",
      description: "Fast-growing companies that need compliance without the complexity",
      features: ["Scalable solutions", "Growth-focused approach", "Flexible engagement"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Building2 className="h-16 w-16" />,
      title: "Digital Agencies",
      description: "Creative teams managing client data who need expert guidance",
      features: ["Client data protection", "Team training", "Project-specific advice"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="h-16 w-16" />,
      title: "SaaS Companies",
      description: "Software businesses handling user data across multiple jurisdictions",
      features: ["Multi-jurisdiction compliance", "User privacy protection", "Ongoing monitoring"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <ShoppingCart className="h-16 w-16" />,
      title: "E-commerce",
      description: "Online retailers processing customer data and payment information",
      features: ["Customer data security", "Payment compliance", "Marketing regulations"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      title: "External Data Protection Officer (DPO)",
      description: "Dedicated GDPR expert for your business"
    },
    {
      title: "GDPR Audits",
      description: "Comprehensive compliance reviews"
    },
    {
      title: "One-off or Ongoing Consulting Support",
      description: "Flexible support when you need it"
    },
    {
      title: "Document Reviews & Incident Response",
      description: "Expert assistance for critical situations"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Take Control of Your 
                <span className="text-blue-300"> Data Protection</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                At Consentia Data Protection, our mission is to help businesses take control of their data protection obligations with clarity and confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 text-center"
                >
                  Free 30-min Consultation
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 text-center"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md">
                <Shield className="h-24 w-24 text-blue-300 mx-auto mb-6" />
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4">Our Promise</h3>
                  <p className="text-blue-100">
                    Clear, reliable, and fast support — so that compliance becomes a driver of trust, not a blocker to growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Support - Completely Redesigned */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We <span className="text-blue-600">Empower</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We partner with forward-thinking businesses across industries, helping them transform GDPR compliance 
              from a challenge into a competitive advantage.
            </p>
          </div>

          {/* Client Types Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {clientTypes.map((client, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`absolute inset-0 bg-gradient-to-r ${client.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-r ${client.gradient} p-4 rounded-2xl w-fit mb-6 text-white`}>
                      {client.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {client.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {client.description}
                    </p>
                    
                    <div className="space-y-3">
                      {client.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${client.gradient}`}></div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <Link 
                        to="/services"
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
                      >
                        <span>Explore Solutions</span>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* What We Help You Achieve */}
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                What We Help You Achieve
              </h3>
              <p className="text-xl text-gray-600">
                Transform your approach to data protection with our comprehensive support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Philosophy
            </h2>
            <p className="text-2xl text-blue-600 font-semibold mb-8">
              We believe data protection should not be a burden but a strategic advantage.
            </p>
          </div>

          <div className="bg-blue-900 text-white rounded-2xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  That's why we offer flexible, outsourced compliance solutions:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="bg-blue-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">{service.title}</h4>
                      <p className="text-blue-200 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <h3 className="text-3xl font-bold mb-4">You handle data.</h3>
                  <h3 className="text-3xl font-bold mb-4 text-blue-300">We protect it.</h3>
                  <h3 className="text-3xl font-bold text-blue-300">You move forward.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Data Protection?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't let GDPR compliance slow down your growth. Let's discuss how we can help you build trust through proper data protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Book Free Consultation</span>
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

export default Home;