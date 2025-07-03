import React from "react";
import { Shield, Lock, Eye, FileText, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-blue-300 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-blue-200 mt-4">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 text-blue-600 mr-2" />
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Consentia Data Protection ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 text-blue-600 mr-2" />
                Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Personal Information
              </h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you provide directly to
                us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>
                  Name and contact information (email address, phone number)
                </li>
                <li>Company name and business information</li>
                <li>Communication preferences</li>
                <li>
                  Information you provide in forms, surveys, or correspondence
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>IP address and browser information</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 text-blue-600 mr-2" />
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Provide and improve our GDPR compliance services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you relevant information about our services</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            {/* Legal Basis for Processing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Legal Basis for Processing
              </h2>
              <p className="text-gray-700 mb-4">
                Under GDPR, we process your personal data based on:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>
                  <strong>Consent:</strong> When you provide explicit consent
                  for specific purposes
                </li>
                <li>
                  <strong>Contract:</strong> To perform our services or take
                  steps before entering into a contract
                </li>
                <li>
                  <strong>Legitimate Interest:</strong> For business operations,
                  improving our services, and direct marketing
                </li>
                <li>
                  <strong>Legal Obligation:</strong> To comply with applicable
                  laws and regulations
                </li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information. We may
                share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>
                  With trusted service providers who assist in our operations
                  (under strict confidentiality agreements)
                </li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Rights Under GDPR
              </h2>
              <p className="text-gray-700 mb-4">
                If you are in the EU, you have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>
                  <strong>Right of Access:</strong> Request copies of your
                  personal data
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Request correction of
                  inaccurate data
                </li>
                <li>
                  <strong>Right to Erasure:</strong> Request deletion of your
                  personal data
                </li>
                <li>
                  <strong>Right to Restrict Processing:</strong> Request
                  limitation of processing
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Request transfer
                  of your data
                </li>
                <li>
                  <strong>Right to Object:</strong> Object to processing based
                  on legitimate interests
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Withdraw consent
                  at any time
                </li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data Retention
              </h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this policy,
                comply with legal obligations, resolve disputes, and enforce our
                agreements.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-gray-700 mb-4">
                Our website may use cookies and similar tracking technologies to
                enhance your browsing experience. You can control cookie
                settings through your browser preferences.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-2" />
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or wish to
                exercise your rights, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> consentiagdpr@gmail.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +44 7404 790439
                </p>
                <p className="text-gray-700">
                  <strong>Response Time:</strong> We will respond to your
                  request within 30 days
                </p>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Policy Updates
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy on
                our website and updating the "Last updated" date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
