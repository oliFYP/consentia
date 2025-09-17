import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FileText, Scale, Shield, AlertTriangle, Mail } from "lucide-react";

const TermsOfService = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div
          data-aos="fade-down"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Scale className="h-16 w-16 text-blue-300 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            These terms govern your use of our website and services. Please read
            them carefully.
          </p>
          <p className="text-sm text-blue-200 mt-4">Last updated: July 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div data-aos="fade-down" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 text-blue-600 mr-2" />
                Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding
                agreement between you and Consentia Data Protection ("Company,"
                "we," "our," or "us") regarding your use of our website and
                services. By accessing or using our services, you agree to be
                bound by these Terms.
              </p>
            </div>

            {/* Services Description */}
            <div data-aos="fade-down" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                Our Services
              </h2>
              <p className="text-gray-700 mb-4">
                Consentia Data Protection provides:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Outsourced Data Protection Officer (DPO) services</li>
                <li>GDPR compliance audits and assessments</li>
                <li>On-demand GDPR consulting and support</li>
                <li>Staff training and policy development</li>
                <li>Incident response and breach management</li>
              </ul>
            </div>

            {/* Acceptance and Eligibility */}
            <div data-aos="fade-down" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Acceptance and Eligibility
              </h2>
              <p className="text-gray-700 mb-4">
                By using our services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>You are at least 18 years old</li>
                <li>
                  You have the legal authority to enter into this agreement
                </li>
                <li>
                  You will comply with all applicable laws and regulations
                </li>
                <li>All information you provide is accurate and complete</li>
              </ul>
            </div>

            {/* Service Terms */}
            <div data-aos="fade-down" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Service Terms
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Service Delivery
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>
                  Services will be provided according to the agreed scope and
                  timeline
                </li>
                <li>
                  We will use reasonable efforts to meet deadlines and
                  deliverables
                </li>
                <li>
                  Service modifications require written agreement from both
                  parties
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Client Responsibilities
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Cooperate with our team and provide necessary access</li>
                <li>Implement recommended compliance measures</li>
                <li>
                  Notify us promptly of any relevant changes to your business
                </li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div data-aos="fade-down" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Payment Terms
              </h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Fees are as specified in your service agreement</li>
                <li>Payment is due within 30 days of invoice date</li>
                <li>Late payments may incur additional charges</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>
                  We reserve the right to suspend services for non-payment
                </li>
              </ul>
            </div>

            {/* Confidentiality */}
            <div data-aos="fade-down" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Confidentiality
              </h2>
              <p className="text-gray-700 mb-4">
                We understand the sensitive nature of your business information.
                We commit to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>
                  Maintain strict confidentiality of all client information
                </li>
                <li>Use information only for providing agreed services</li>
                <li>Implement appropriate security measures</li>
                <li>
                  Not disclose information to third parties without consent
                </li>
                <li>Return or destroy confidential information upon request</li>
              </ul>
            </div>

            {/* Limitations and Disclaimers */}
            <div data-aos="fade-down" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-amber-600 mr-2" />
                Limitations and Disclaimers
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Service Limitations
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>
                  Our services constitute professional advice, not legal
                  guarantees
                </li>
                <li>
                  Compliance ultimately depends on your implementation of
                  recommendations
                </li>
                <li>We cannot guarantee specific regulatory outcomes</li>
                <li>
                  Services are provided based on current laws and regulations
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Liability Limitation
              </h3>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, our liability is limited
                to the fees paid for the specific service giving rise to the
                claim. We are not liable for indirect, consequential, or
                punitive damages.
              </p>
            </div>

            {/* Intellectual Property */}
            <div data-aos="fade-down" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Intellectual Property
              </h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>
                  We retain ownership of our methodologies, templates, and tools
                </li>
                <li>
                  You retain ownership of your business information and data
                </li>
                <li>Deliverables become your property upon full payment</li>
                <li>
                  You may not reproduce or distribute our proprietary materials
                </li>
              </ul>
            </div>

            {/* Termination */}
            <div data-aos="fade-down" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Termination
              </h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>With 30 days written notice for ongoing services</li>
                <li>Immediately for material breach of these terms</li>
                <li>Immediately for non-payment after notice period</li>
              </ul>
              <p className="text-gray-700">
                Upon termination, you remain responsible for fees incurred up to
                the termination date.
              </p>
            </div>

            {/* Governing Law */}
            <div data-aos="fade-down" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-700">
                These Terms are governed by the laws of England and Wales. Any
                disputes will be resolved through the courts of England and
                Wales.
              </p>
            </div>

            {/* Changes to Terms */}
            <div data-aos="fade-down" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-700">
                We may update these Terms from time to time. We will notify you
                of material changes and post the updated Terms on our website.
                Continued use of our services constitutes acceptance of the
                updated Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div data-aos="fade-down" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-2" />
                Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms of Service, please
                contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> consentiagdpr@gmail.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +44 7404 790439
                </p>
                <p className="text-gray-700">
                  <strong>Business Hours:</strong> Monday - Friday, 9:00 AM -
                  5:00 PM GMT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
