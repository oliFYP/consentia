import React, { useState } from 'react';
import { Mail, Phone, Calendar, CheckCircle, Clock, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "consentiagdpr@gmail.com",
      description: "Send us a message and we'll respond within 24 hours",
      action: "mailto:consentiagdpr@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+44 7404 790439",
      description: "Speak directly with our GDPR experts",
      action: "tel:+447404790439"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Free Consultation",
      details: "30-minute discovery call",
      description: "Book a free consultation to discuss your needs",
      action: "#consultation"
    }
  ];

  const reasons = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Speak directly with qualified GDPR specialists"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "No Obligation",
      description: "Free consultation with no strings attached"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Send a message or email to take an appointment. We're here to help you navigate GDPR compliance with confidence.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <a 
                  href={method.action}
                  className="text-blue-600 font-medium text-lg hover:text-blue-700 transition-colors"
                >
                  {method.details}
                </a>
                <p className="text-gray-600 mt-2">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="dpo">Outsourced DPO</option>
                      <option value="audit">GDPR Compliance Audit</option>
                      <option value="support">On-Demand Support</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your GDPR compliance needs..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Consentia?
              </h2>
              
              <div className="space-y-6 mb-8">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Book a free 30-minute discovery call to discuss your specific GDPR compliance needs and learn how we can help your business.
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:consentiagdpr@gmail.com"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>consentiagdpr@gmail.com</span>
                  </a>
                  <a
                    href="tel:+447404790439"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+44 7404 790439</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Don't Let GDPR Compliance Hold You Back
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today and discover how easy GDPR compliance can be with the right partner by your side.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:consentiagdpr@gmail.com"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Email Us Now</span>
            </a>
            <a
              href="tel:+447404790439"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Us Today</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;