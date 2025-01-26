import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChalkboardTeacher, FaBook, FaUsers, FaClock } from 'react-icons/fa';

function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div 
          className="relative text-center text-white z-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Shape Your Future with Infinity Classes
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Premier IIT JEE Coaching for Class 11th, 12th & Droppers
          </p>
          <a 
            href="#courses"
            className="btn bg-primary-600 hover:bg-primary-700"
          >
            Enroll Now
          </a>
        </motion.div>
      </section>

      {/* Top Performers Section */}
      <section ref={ref} className="section bg-gray-50" id="top-performers">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading">Our Top Performers</h2>
            <p className="subheading">Meet the students who made us proud</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                rank: "AIR 145",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                quote: "Infinity Classes helped me achieve my dream.",
              },
              {
                name: "Priya Patel",
                rank: "AIR 256",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                quote: "The faculty support was exceptional.",
              },
              {
                name: "Amit Kumar",
                rank: "AIR 389",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                quote: "Best decision of my preparation journey.",
              },
            ].map((performer, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={performer.image}
                  alt={performer.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{performer.name}</h3>
                  <p className="text-primary-600 font-semibold mb-2">
                    {performer.rank}
                  </p>
                  <p className="text-gray-600">{performer.quote}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Overview Section */}
      <section className="section" id="courses">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading">Our Courses</h2>
            <p className="subheading">Comprehensive programs designed for success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Class 11th",
                description: "Early preparation for IIT JEE success",
                duration: "1 Year",
                features: ["Foundation Building", "NCERT Focus", "Weekly Tests"],
              },
              {
                title: "Class 12th",
                description: "Intensive IIT JEE preparation",
                duration: "1 Year",
                features: ["Advanced Concepts", "Mock Tests", "Doubt Sessions"],
              },
              {
                title: "Droppers Batch",
                description: "Focused preparation for better results",
                duration: "1 Year",
                features: ["Personalized Attention", "Test Series", "Previous Year Papers"],
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <p className="text-primary-600 font-semibold mb-4">
                    Duration: {course.duration}
                  </p>
                  <ul className="space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <FaChalkboardTeacher className="text-primary-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="btn w-full mt-6">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading">Why Choose Infinity Classes?</h2>
            <p className="subheading">Experience excellence in IIT JEE preparation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaChalkboardTeacher className="h-8 w-8" />,
                title: "Expert Faculty",
                description: "Learn from IIT graduates with years of teaching experience",
              },
              {
                icon: <FaBook className="h-8 w-8" />,
                title: "Comprehensive Study Material",
                description: "Well-researched content aligned with JEE pattern",
              },
              {
                icon: <FaUsers className="h-8 w-8" />,
                title: "Personal Attention",
                description: "Small batch sizes for individual attention",
              },
              {
                icon: <FaClock className="h-8 w-8" />,
                title: "Regular Assessment",
                description: "Weekly tests and performance tracking",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8">
              Join Infinity Classes and take the first step towards your IIT dream
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

export default Home;