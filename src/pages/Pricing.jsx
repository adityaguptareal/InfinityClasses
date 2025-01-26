import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck } from 'react-icons/fa';

function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const plans = [
    {
      title: "Class 11th",
      price: "₹75,000",
      duration: "per year",
      features: [
        "Complete syllabus coverage",
        "Regular mock tests",
        "Study materials included",
        "Doubt clearing sessions",
        "Online access to resources",
        "Monthly parent-teacher meetings",
      ],
      popular: false,
    },
    {
      title: "Class 12th",
      price: "₹85,000",
      duration: "per year",
      features: [
        "Comprehensive JEE preparation",
        "Weekly mock tests",
        "Advanced study materials",
        "One-on-one mentoring",
        "Online test series",
        "Performance tracking",
      ],
      popular: true,
    },
    {
      title: "Droppers Batch",
      price: "₹95,000",
      duration: "per year",
      features: [
        "Intensive preparation",
        "Daily practice tests",
        "Specialized study material",
        "Personal mentoring",
        "Previous year analysis",
        "Strategy sessions",
      ],
      popular: false,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Pricing Plans</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Choose the right plan for your IIT JEE preparation journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section ref={ref} className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-primary-600' : ''
                }`}
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {plan.popular && (
                  <div className="bg-primary-600 text-white text-center py-2">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {plan.title}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">/{plan.duration}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-primary-600 mt-1 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full btn ${
                      plan.popular
                        ? 'bg-primary-600 hover:bg-primary-700'
                        : 'bg-gray-600 hover:bg-gray-700'
                    }`}
                  >
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading">Frequently Asked Questions</h2>
            <p className="subheading">Find answers to common questions about our pricing</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Are there any additional fees?",
                answer: "No, our fees are all-inclusive. They cover study materials, test series, and access to online resources.",
              },
              {
                question: "Do you offer installment options?",
                answer: "Yes, we offer flexible payment plans. You can pay in 3 installments throughout the year.",
              },
              {
                question: "Is there a refund policy?",
                answer: "We offer a 100% refund within the first week of joining if you're not satisfied with our services.",
              },
              {
                question: "Are there any scholarships available?",
                answer: "Yes, we offer merit-based scholarships. Contact us for more details about eligibility criteria.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 mb-4"
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8">
              Contact our team for more information about our pricing and courses
            </p>
            <button className="btn bg-white text-primary-600 hover:bg-gray-100">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;