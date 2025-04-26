import React from 'react';
import { animate, motion } from 'framer-motion';
import { FaCode, FaRobot } from "react-icons/fa";
import OtherResourcesList from "../components/OtherResourcesList";

export default function Suggestions() {
  return (
    <motion.div
      className="flex flex-col items-stretch w-full lg:w-2/3 mx-auto py-32 md:py-40 px-10 lg:px-0 font-Raleway"
    >
        <motion.div className='mb-10 text-base lg:text-xl'
            initial={{opacity: 0, x: +50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1.}}
            >
            <p className="text-2xl lg:text-3xl font-semibold text-left mb-5">My Go-To Reads.</p>
            <p className='text-justify lg:text-left text-gray-600'>There’s no shortage of technical books out there, but over time, I’ve found a few that really stuck with me. Whether it’s because they explained something in a way that finally clicked, or they gave me practical tools I still use today, these are the books I’d suggest if you’re diving into machine learning or programming. No fluff, no hype - just the ones that actually helped me out.</p>
        </motion.div>

      {suggestionsData.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: index * 0.2 }}
          className="mb-8"
        >   
            <div className='flex flex-row items-center gap-2 mb-5 mt-10 shadow-md rounded-full py-3 px-6 justify-self-center lg:justify-self-start'>
                <p className=''>{category.icon}</p>
                <p className="text-2xl font-medium text-gray-600">{category.category}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {category.items.map((item, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row flex-grow gap-3 p-4 bg-white shadow-md rounded-lg">
                    <img src={item.cover} className='lg:h-72 self-center'/>
                    <div className='flex flex-col gap-1'>
                        <p className="text-lg font-medium">{item.title}</p>
                        <p className="text-gray-700 text-base">{item.description}</p>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                        Learn More
                        </a>
                    </div>
                </div>
                ))}
        </div>          
        </motion.div>
      ))}
    <OtherResourcesList />
    </motion.div>
  );
}

const suggestionsData = [

    {
        category: 'Programming',
        icon: <FaCode className="h-6 w-6 text-blue-400" />,
        items: [
        {
            title: 'Think Python',
            description: 'A beginner-friendly introduction to programming and Python, focusing on problem-solving and computational thinking. It’s ideal for those new to coding, with clear explanations and practical exercises.',
            link: 'https://greenteapress.com/wp/think-python-2e/',
            cover: 'book_covers/think_python_cover.jpg'
            },
        {
            title: 'C++ Primer',
            description: 'A comprehensive and detailed guide to C++, suitable for both beginners and experienced programmers. It covers modern C++ features and best practices, making it a go-to reference for mastering the language.',
            link: 'https://www.oreilly.com/library/view/c-primer-fifth/9780133053043/',
            cover: 'book_covers/cpp_primer_cover.jpg'
        },
        {
            title: 'JavaScript: The Definitive Guide',
            description: 'A thorough and authoritative resource on JavaScript, covering everything from basics to advanced topics like asynchronous programming and APIs. It’s a must-have for web developers looking to deepen their understanding of the language.',
            link: 'https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/',
            cover: 'book_covers/javascript_the_definitive_guide_cover.jpg'
        },
        {
            title: 'Introduction to Algorithms',
            description: 'Widely regarded as the definitive guide to algorithms, this book provides a comprehensive and rigorous exploration of algorithmic design, analysis, and implementation. Essential for students, researchers, and practitioners.',
            link: 'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/',
            cover: 'book_covers/intro_to_algorithms_cover.jpg'
        },
        {
            title: 'C# Programming Yellow Book',
            description: 'A beginner-friendly guide to C# programming, written in an approachable and humorous style. It covers fundamental concepts and syntax, making it ideal for newcomers or those transitioning to C#.',
            link: 'https://www.robmiles.com/c-yellow-book',
            cover: 'book_covers/csharp_yellow_book_cover.png'
        },
        ],
    },
    {
        category: 'Machine Learning',
        icon: <FaRobot className="h-6 w-6 text-yellow-600" />,
        items: [
            {
                title: 'Data Science from Scratch',
                description: 'A practical book that introduces core data science concepts and algorithms using Python, with minimal reliance on libraries. It’s ideal for readers who want to build a strong foundational understanding by implementing tools and techniques from the ground up.',
                link: 'https://www.oreilly.com/library/view/data-science-from/9781492041122/',
                cover: 'book_covers/data_science_from_scratch_cover.jpg'
            },
            {
                title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow',
                description: 'A practical guide to machine learning, focusing on implementation using popular frameworks like Scikit-Learn, Keras, and TensorFlow. It balances theory and hands-on coding, making it ideal for practitioners.',
                link: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/',
                cover: 'book_covers/hands_on_ml_cover.jpg'
            },
            {
                title: 'Machine Learning with PyTorch and Scikit-Learn',
                description: 'A comprehensive resource that combines the flexibility of PyTorch for deep learning with the simplicity of Scikit-Learn for traditional ML. It’s well-suited for those looking to bridge the gap between classical and modern machine learning techniques.',
                link: 'https://www.packtpub.com/en-us/product/machine-learning-with-pytorch-and-scikit-learn-9781801819312',
                cover: 'book_covers/ml_with_pytorch_cover.jpg'
            },
        ],
    },
];