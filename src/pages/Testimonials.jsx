import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';

function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const testimonials = [
    {
      name: "Rahul Sharma",
      batch: "IIT JEE 2023",
      rank: "AIR 145",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      quote: "The structured approach and dedicated faculty at Infinity Classes helped me achieve my dream rank. The regular tests and personalized feedback were invaluable.",
    },
    {
      name: "Priya Patel",
      batch: "IIT JEE 2023",
      rank: "AIR 256",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      quote: "What sets Infinity Classes apart is their focus on building concepts rather than rote learning. The faculty is always available for doubt clearing.",
    },
    {
      name: "Amit Kumar",
      batch: "IIT JEE 2023",
      rank: "AIR 389",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      quote: "The study material and mock tests at Infinity Classes are perfectly aligned with the actual JEE pattern. It helped me a lot in my preparation.",
    },
    {
      name: "Neha Singh",
      batch: "IIT JEE 2022",
      rank: "AIR 567",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      quote: "The weekly assessments and performance tracking helped me identify my weak areas and work on them systematically.",
    },
    {
      name: "Arun Verma",
      batch: "IIT JEE 2022",
      rank: "AIR 789",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      quote: "The teachers at Infinity Classes are not just educators but mentors who guide you throughout your JEE preparation journey.",
    },
    {
      name: "Sneha Gupta",
      batch: "IIT JEE 2022",
      rank: "AIR 876",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      quote: "The doubt clearing sessions and one-on-one mentoring helped me overcome my challenges and achieve my goals.",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Success Stories</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Hear from our students who achieved their dreams with Infinity Classes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section ref={ref} className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <p className="text-primary-600">{testimonial.rank}</p>
                      <p className="text-gray-600 text-sm">{testimonial.batch}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <FaQuoteLeft className="text-primary-100 text-4xl absolute -top-2 -left-2" />
                    <p className="text-gray-600 relative z-10 pl-8">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
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
              Join Our Success Story
            </h2>
            <p className="text-xl mb-8">
              Start your journey towards IIT JEE success with Infinity Classes
            </p>
            <button className="btn bg-white text-primary-600 hover:bg-gray-100">
              Enroll Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;