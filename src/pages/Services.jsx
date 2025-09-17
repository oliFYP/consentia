import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import {
  Shield,
  CheckCircle,
  Clock,
  Users,
  FileCheck,
  Phone,
  Calendar,
} from "lucide-react";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const services = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Outsourced DPO (Data Protection Officer)",
      price: "From £2,200/month",
      duration: "3 days of work per month",
      description:
        "A dedicated GDPR expert managing your compliance and advising your teams.",
      ideal:
        "Ideal for startups, SMEs, digital agencies, and growing companies.",
      features: [
        "Dedicated GDPR expert assigned to your business",
        "Monthly compliance monitoring and reporting",
        "Staff training and guidance",
        "Policy development and updates",
        "Incident response support",
        "Regular compliance assessments",
      ],
      featured: true,
    },
    {
      icon: <FileCheck className="h-12 w-12" />,
      title: "GDPR Compliance Audit",
      price: "Short engagement",
      duration: "5 to 10 days",
      description:
        "Full review of your practices + actionable compliance roadmap.",
      ideal: "Identify risks and priorities with clarity.",
      features: [
        "Comprehensive data protection assessment",
        "Gap analysis against GDPR requirements",
        "Risk assessment and prioritization",
        "Detailed compliance roadmap",
        "Implementation timeline",
        "Follow-up recommendations",
      ],
      featured: false,
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "On-Demand GDPR Support",
      price: "From £450/day",
      duration: "Flexible scheduling",
      description:
        "Legal document reviews, project-specific advice, incident handling.",
      ideal: "No long-term commitment.",
      features: [
        "Document and policy reviews",
        "Project-specific GDPR advice",
        "Data breach incident response",
        "Privacy impact assessments",
        "Vendor agreement reviews",
        "Ad-hoc compliance questions",
      ],
      featured: false,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our GDPR & Data Protection Services
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            At Consentia Data Protection, we offer tailored compliance solutions
            to help you stay aligned, secure, and trustworthy — without legal
            complexity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                  service.featured ? "ring-2 ring-blue-500" : ""
                }`}
              >
                {service.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 ${service.featured ? "pt-12" : ""}`}>
                  <div className="text-blue-600 mb-6">{service.icon}</div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <div className="mb-6">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {service.price}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {service.duration}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{service.description}</p>

                  <p className="text-blue-600 font-medium mb-6">
                    {service.ideal}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      service.featured
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Additional Support Services
            </h2>
            <p className="text-xl text-gray-600">
              GDPR made simple for your staff, with custom processes and
              guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Staff Training
              </h3>
              <p className="text-gray-600">
                Comprehensive GDPR training sessions tailored to your team's
                needs and responsibilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FileCheck className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Policy Development
              </h3>
              <p className="text-gray-600">
                Custom privacy policies, data processing procedures, and
                compliance documentation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Shield className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Incident Response
              </h3>
              <p className="text-gray-600">
                24/7 support for data breach incidents and regulatory
                notification requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free 30-minute discovery call to clarify your needs and find
            the right solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Free Discovery Call</span>
            </Link>
            <a
              href="tel:+447404790439"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
