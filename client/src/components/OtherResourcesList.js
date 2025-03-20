import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaPython, FaReact, FaRobot } from "react-icons/fa";

const OtherResourcesList = () => {
  const [expandedId, setExpandedId] = useState(null);

  const resourcesData = [
    {
        id: 1,
        title: "Django (Official Documentation)",
        description: "The definitive resource for learning and using Django, a high-level Python web framework. It provides comprehensive guides, tutorials, and references for everything from basic setup to advanced features like ORM, authentication, and deployment. Known for its clarity and depth, it’s an essential tool for both beginners and experienced developers building scalable web applications with Django. The documentation is well-organized and regularly updated, making it a reliable go-to resource.",
        link: "https://docs.djangoproject.com/en/5.1/",
        icon: <FaPython className="text-green-500" />
    },
    {
        id: 2,
        title: "Machine Learning Specialization (DeepLearning.AI)",
        description: "A highly regarded online course series that provides a comprehensive introduction to machine learning, covering supervised and unsupervised learning, best practices, and real-world applications. Known for its clear explanations, practical assignments, and foundational focus, it’s ideal for beginners and intermediate learners looking to build strong ML expertise. The specialization is a modern update to Andrew Ng’s classic Stanford course, now including more hands-on coding and updated content.",
        link: "https://www.deeplearning.ai/courses/machine-learning-specialization/",
        icon: <FaRobot className="text-red-500"/>
    },
    {
        id: 3,
        title: "Corey Schafer's Tutorials",
        description: "A YouTube channel offering in-depth, well-structured tutorials on Python programming. Corey covers a wide range of topics, from Python basics to advanced concepts like web development (Django, Flask), data science, and automation. His clear explanations, practical examples, and engaging teaching style make his videos a go-to resource for learners at all levels. Perfect for anyone looking to build or strengthen their Python skills.",
        link: "https://www.youtube.com/@coreyms/videos",
        icon: <FaPython className="text-yellow-500"/>
    },
    {
        id: 4,
        title: "React (Official Documentation)",
        description: "The primary and most trusted resource for learning React, a popular JavaScript library for building user interfaces. It offers clear, beginner-friendly guides, advanced concepts, and practical examples for mastering React, including hooks, components, state management, and performance optimization. Known for its interactive examples and up-to-date content, it’s an excellent starting point for both new and experienced developers looking to build modern, efficient web applications.",
        link: "https://react.dev/learn",
        icon: <FaReact className="text-sky-600"/>
    },
    {
        id: 5,
        title: "Real Python",
        description: "A comprehensive online platform offering high-quality tutorials, articles, and courses for learning Python. It covers a wide range of topics, from beginner basics to advanced concepts like web development, data science, and machine learning. Known for its practical, hands-on approach and clear explanations, Real Python is a trusted resource for developers of all skill levels looking to deepen their Python expertise and stay updated with best practices.",
        link: "https://realpython.com/",
        icon: <FaPython className="text-yellow-500"/>
    },
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <motion.div className='my-20'
                initial={{opacity: 0, y: +100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1.5}}
                >
        <div className="mb-10 text-base lg:text-xl">
            <p className="text-2xl lg:text-3xl font-semibold mb-5">Other Resources.</p>
            <p className='text-justify lg:text-left text-gray-600'>Here you will find a list of websites, channels, and online courses that I personally recommend for learning and staying updated in the tech world. Click on each resource to learn more.</p>
        </div>

      <div className="space-y-4">
        {resourcesData.map((resource) => (
          <motion.div key={resource.id} whileHover={{ y: 1 }} className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden">
            {/* Title Section */}
            <motion.div
              onClick={() => toggleExpand(resource.id)}
              className="flex flex-row items-center gap-2 px-3 lg:px-6 py-4 cursor-pointer bg-gray-50 text-base lg:text-lg font-medium"
              whileHover={{ scale: 1.00}}
              whileTap={{ scale: 1.0 }}
            >
                {resource.icon}
                <p className="">{resource.title}</p>
            </motion.div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedId === resource.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 1. }}
                  className="p-6 bg-white"
                >
                  <p className="text-gray-700 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Learn More
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OtherResourcesList;