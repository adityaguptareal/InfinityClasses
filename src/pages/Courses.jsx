import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck, FaBook, FaUsers, FaClock } from 'react-icons/fa';

function Courses() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const courses = [
    {
      title: "Class 11th IIT JEE Foundation",
      description: "Build a strong foundation for IIT JEE preparation",
      duration: "1 Year",
      features: [
        "Complete NCERT syllabus coverage",
        "Foundation for competitive exams",
        "Regular practice tests",
        "Doubt clearing sessions",
        "Performance tracking",
        "Parent-teacher meetings",
      ],
      subjects: ["Physics", "Chemistry", "Mathematics"],
      schedule: "5 days a week, 2 hours per subject",
    },
    {
      title: "Class 12th IIT JEE Advanced",
      description: "Comprehensive preparation for IIT JEE Advanced",
      duration: "1 Year",
      features: [
        "Advanced problem-solving techniques",
        "Previous year paper analysis",
        "Mock tests series",
        "One-on-one mentoring",
        "Weekly assessments",
        "Revision modules",
      ],
      subjects: ["Physics", "Chemistry", "Mathematics"],
      schedule: "6 days a week, 2 hours per subject",
    },
    {
      title: "Droppers Batch",
      description: "Focused preparation for better results",
      duration: "1 Year",
      features: [
        "Personalized study plan",
        "Intensive problem practice",
        "Daily mock tests",
        "Error analysis sessions",
        "Strategy building",
        "Time management training",
      ],
      subjects: ["Physics", "Chemistry", "Mathematics"],
      schedule: "6 days a week, 3 hours per subject",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive IIT JEE preparation programs designed for success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section ref={ref} className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-12">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-primary-600 mb-4">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{course.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Course Features</h3>
                      <ul className="space-y-3">
                        {course.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <FaCheck className="text-primary-600 mt-1 mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Subjects Covered</h3>
                        <ul className="space-y-2">
                          {course.subjects.map((subject, i) => (
                            <li key={i} className="flex items-center">
                              <FaBook className="text-primary-600 mr-2" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Duration</h3>
                        <p className="flex items-center">
                          <FaClock className="text-primary-600 mr-2" />
                          {course.duration}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">Class Schedule</h3>
                        <p className="flex items-center">
                          <FaUsers className="text-primary-600 mr-2" />
                          {course.schedule}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <button className="btn">Enroll Now</button>
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl mb-8">
              Join Infinity Classes and take the first step towards your IIT dream
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

export default Courses;