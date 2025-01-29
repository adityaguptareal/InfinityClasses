import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaTrophy, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

function About() {
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
      <section className="bg-primary-600 text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Infinity Classes</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Empowering students to achieve their dreams through quality education and
              personalized guidance since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section ref={ref} className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading institute in IIT JEE preparation, nurturing future
                engineers who will contribute to India's technological advancement.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="heading mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide comprehensive education through innovative teaching
                methods, personalized attention, and continuous support to help
                students achieve their goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FaGraduationCap />, number: "1000+", label: "Students Enrolled" },
              { icon: <FaTrophy />, number: "500+", label: "IIT Selections" },
              { icon: <FaUsers />, number: "50+", label: "Expert Faculty" },
              { icon: <FaChalkboardTeacher />, number: "12+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-primary-600 text-3xl mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading">Our Faculty</h2>
            <p className="subheading">Learn from the best in the field</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Kumar",
                position: "Physics Faculty",
                education: "PhD IIT Delhi",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
              },
              {
                name: "Prof. Amit Singh",
                position: "Mathematics Faculty",
                education: "M.Tech IIT Bombay",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
              },
              {
                name: "Dr. Priya Sharma",
                position: "Chemistry Faculty",
                education: "PhD IIT Madras",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
              },
            ].map((faculty, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{faculty.name}</h3>
                  <p className="text-primary-600 font-semibold mb-1">
                    {faculty.position}
                  </p>
                  <p className="text-gray-600">{faculty.education}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading">Our Infrastructure</h2>
            <p className="subheading">State-of-the-art facilities for optimal learning</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern Classrooms"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Modern Classrooms</h3>
                <p className="text-gray-600">
                  Spacious, air-conditioned classrooms equipped with smart boards
                  and modern teaching aids.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Library"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Well-Stocked Library</h3>
                <p className="text-gray-600">
                  Extensive collection of study materials, reference books, and
                  digital resources for student.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;