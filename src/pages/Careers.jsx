import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import {
  Users,
  Heart,
  Target,
  Briefcase,
  GraduationCap,
  Clock,
  MapPin,
  Mail,
  Send,
} from "lucide-react";

const Careers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Working",
      description:
        "Remote-first culture with flexible hours that work around your life",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Professional Development",
      description:
        "Continuous learning opportunities and professional certification support",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Meaningful Work",
      description: "Help businesses build trust and protect customer privacy",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaborative Team",
      description: "Work with passionate experts in a supportive environment",
    },
  ];

  const openPositions = [
    {
      title: "Senior GDPR Consultant",
      type: "Full-time / Contract",
      location: "Remote (UK)",
      description:
        "Lead GDPR compliance projects for our growing client base of tech startups and SMEs.",
      requirements: [
        "3+ years experience in data protection law",
        "GDPR certification (CIPP/E or equivalent)",
        "Experience with tech companies or startups",
        "Strong communication and client management skills",
      ],
      responsibilities: [
        "Conduct GDPR audits and assessments",
        "Develop compliance strategies and roadmaps",
        "Provide ongoing DPO services to clients",
        "Deliver training sessions and workshops",
      ],
    },
    {
      title: "Junior Data Protection Specialist",
      type: "Full-time",
      location: "Remote (UK)",
      description:
        "Support our team in delivering excellent GDPR compliance services to clients.",
      requirements: [
        "Law degree or relevant qualification",
        "Interest in data protection and privacy law",
        "Strong analytical and research skills",
        "Excellent written and verbal communication",
      ],
      responsibilities: [
        "Assist with compliance audits and documentation",
        "Research regulatory updates and best practices",
        "Support client communications and reporting",
        "Help develop training materials and resources",
      ],
    },
    {
      title: "Business Development Manager",
      type: "Full-time / Part-time",
      location: "Remote (UK)",
      description:
        "Drive growth by building relationships with potential clients in the tech and startup ecosystem.",
      requirements: [
        "3+ years in B2B sales or business development",
        "Experience in professional services or legal sector",
        "Understanding of startup and tech company needs",
        "Strong networking and relationship-building skills",
      ],
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Build relationships with potential clients",
        "Represent Consentia at industry events",
        "Collaborate with delivery team on proposals",
      ],
    },
  ];

  const values = [
    {
      title: "Expertise with Empathy",
      description:
        "We combine deep technical knowledge with genuine care for our clients' success.",
    },
    {
      title: "Growth Mindset",
      description:
        "We're always learning, improving, and helping our clients and each other grow.",
    },
    {
      title: "Practical Solutions",
      description:
        "We focus on real-world, actionable advice that businesses can actually implement.",
    },
    {
      title: "Collaborative Spirit",
      description:
        "We work together as a team and partner closely with our clients.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                data-aos="fade-down"
                className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                Join Our Mission to
                <span className="text-blue-300"> Simplify GDPR</span>
              </h1>
              <p
                data-aos="fade-down"
                className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8"
              >
                Help businesses turn compliance into a competitive advantage.
                Join a team that's passionate about making data protection
                accessible and practical.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  data-aos="zoom-in"
                  href="#positions"
                  className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors duration-200 text-center"
                >
                  View Open Positions
                </a>
                <Link
                  data-aos="zoom-in"
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 text-center"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                data-aos="zoom-in"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <Users className="h-24 w-24 text-blue-300 mx-auto mb-6" />
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4">
                    Why Consentia?
                  </h3>
                  <p className="text-blue-100">
                    Be part of a team that's transforming how businesses
                    approach data protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-down" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the culture
              we're building together.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <div
                data-aos="zoom-in"
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-down" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why You'll Love Working Here
            </h2>
            <p className="text-xl text-gray-600">
              We believe in creating an environment where talented people can do
              their best work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div data-aos="zoom-in" key={index} className="text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-down" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              Join our growing team and help shape the future of data protection
              consulting.
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div
                      data-aos="fade-down"
                      className="flex flex-wrap items-center gap-4 mb-4"
                    >
                      <h3 className="text-2xl font-bold text-gray-900">
                        {position.title}
                      </h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {position.type}
                      </span>
                    </div>

                    <div
                      data-aos="fade-down"
                      className="flex items-center text-gray-600 mb-4"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{position.location}</span>
                    </div>

                    <p
                      data-aos="fade-down"
                      className="text-gray-700 mb-6 leading-relaxed"
                    >
                      {position.description}
                    </p>

                    <div
                      data-aos="fade-down"
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Requirements:
                        </h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li
                              key={reqIndex}
                              className="text-gray-600 text-sm flex items-start"
                            >
                              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div data-aos="fade-down">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((resp, respIndex) => (
                            <li
                              key={respIndex}
                              className="text-gray-600 text-sm flex items-start"
                            >
                              <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div
                      data-aos="zoom-in"
                      className="bg-gray-50 rounded-xl p-6 h-full flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Ready to Apply?
                        </h4>
                        <p className="text-gray-600 text-sm mb-6">
                          Send us your CV and a brief cover letter explaining
                          why you're interested in this role.
                        </p>
                      </div>
                      <a
                        href={`mailto:consentiagdpr@gmail.com?subject=Application for ${position.title}&body=Hi Consentia team,%0D%0A%0D%0AI'm interested in the ${position.title} position. Please find my CV attached.%0D%0A%0D%0ABest regards,`}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center inline-flex items-center justify-center space-x-2"
                      >
                        <Send className="h-4 w-4" />
                        <span>Apply Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Role */}
      <section className="py-20 bg-blue-900 text-white">
        <div
          data-aos="zoom-in"
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Briefcase className="h-16 w-16 text-blue-300 mx-auto mb-8" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            We're always looking for talented people who share our passion for
            making data protection accessible. If you think you'd be a great fit
            for our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:consentiagdpr@gmail.com?subject=General Application - Join the Team&body=Hi Consentia team,%0D%0A%0D%0AI'm interested in joining your team. Here's a bit about me and why I think I'd be a great fit:%0D%0A%0D%0A[Tell us about yourself]%0D%0A%0D%0ABest regards,"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Send Us Your Details</span>
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-down" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Application Process
            </h2>
            <p className="text-xl text-gray-600">
              We believe in a fair, transparent process that respects your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div data-aos="zoom-in" className="text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Application
              </h3>
              <p className="text-gray-600 text-sm">
                Send us your CV and cover letter via email
              </p>
            </div>

            <div data-aos="zoom-in" className="text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Initial Chat
              </h3>
              <p className="text-gray-600 text-sm">
                30-minute informal conversation about the role
              </p>
            </div>

            <div data-aos="zoom-in" className="text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Technical Interview
              </h3>
              <p className="text-gray-600 text-sm">
                Discussion of experience and approach to GDPR
              </p>
            </div>

            <div data-aos="zoom-in" className="text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Team Meeting
              </h3>
              <p className="text-gray-600 text-sm">
                Meet the team and discuss how we work together
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
