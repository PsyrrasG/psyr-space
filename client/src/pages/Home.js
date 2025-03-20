import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaKaggle, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import TimelineComponent from '../components/Timeline';
import { Email } from '@mui/icons-material';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col pb-20 gap-20 z-10 text-black font-Raleway"
        >
            <div className="w-full h-[600px] bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('backgrounds/gray-brush.jpg')` }}
                            >
                <div className='flex flex-col-reverse md:flex-row gap-5 md:gap-10 h-[600px] items-center justify-center select-none'>
                    <div className='flex flex-col space-y-3 lg:text-black text-center'>
                        <motion.p initial={{ opacity: 0, x: +50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1 * 0.2 }}
                            className="text-lg md:text-3xl md:text-left">
                                Welcome to
                        </motion.p>
                        
                        <motion.p initial={{ opacity: 0, x: +50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 2 * 0.3 }}
                            className='text-4xl md:text-7xl md:text-right font-extralight'>
                                <span className='font-PlayfairDisplay'>Ψ</span> SPACE
                        </motion.p>
                        <motion.p initial={{ opacity: 0, x: +50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 3 * 0.4 }}
                            className='text-lg md:text-2xl md:text-right'>by
                                G<span className=''>eorge</span> P<span className=''>syrras</span>
                        </motion.p>
                    </div>
                    <motion.img
                        src='/images/me_profile.jpg' // Replace with your profile photo
                        alt="Profile"
                        className="w-40 h-40 rounded-full mb-4 shadow-lg object-cover ring-2 ring-black"
                    //   whileHover={{ scale: 1.05 }}
                    //   transition={{ type: 'spring', stiffness: 300 }}
                        initial={{ opacity: 0, x: +50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 2 * 0.3 }}
                    />
                </div>
                
            </div>
            
            <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.}}
                    className='w-full lg:w-1/2 mx-auto flex flex-col gap-7 px-10 lg:px-0'>
                <div className='flex flex-row justify-between text-base'>
                    <p className="text-lg lg:text-2xl font-medium self-start">A little bit about me.</p>
                    <motion.div className='flex flex-row items-center justify-center gap-3 rounded-2xl self-center'>
                        <motion.a href='mailto:georgepsyrras@gmail.com' target='_blank'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{duration: 0.5}}
                                whileHover={{scale: 1.3}}
                                >
                                <Email className='text-2xl text-red-400 scale-125'/>
                            </motion.a>
                        <motion.a href='https://www.linkedin.com/in/giorgos-psyrras/' target='_blank'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{duration: 0.5}}
                            whileHover={{scale: 1.3}}
                            >
                            <FaLinkedin className='text-2xl text-sky-700'/>
                        </motion.a>
                        <motion.a href='https://github.com/PsyrrasG' target='_blank'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{duration: 0.5}}
                            whileHover={{scale: 1.3}}
                            >
                            <FaGithub className='text-2xl text-black'/>
                        </motion.a>
                        {/* <motion.a href='https://stackoverflow.com/users/10461976/psyrras' target='_blank'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{duration: 0.5}}
                            whileHover={{scale: 1.3}}
                            >
                            <FaStackOverflow className='text-2xl text-orange-500'/>
                        </motion.a> */}
                        {/* <motion.a href='https://www.kaggle.com/georgepsyrras' target='_blank'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{duration: 0.5}}
                            whileHover={{scale: 1.3}}
                            >
                            <FaKaggle className='text-2xl text-sky-500'/>
                        </motion.a> */}
                    </motion.div>
                </div>
                
                {/* <hr className='my-2 border-2 border-emerald-500'/> */}
                <p className='lg:text-lg self-start text-justify'>
                I’m a Software Developer with experience in full-stack web development, cloud computing, and modern software practices. My background in engineering and research has given me a solid foundation for problem-solving and the ability to quickly adapt to new tools, frameworks, and technologies.
    I enjoy the process of breaking down complex problems into manageable pieces and finding practical solutions.
    Outside of work, I like exploring side projects, experimenting with new technologies, and keeping up with industry trends.
    Always open to collaboration and new opportunities, so feel free to reach out.
                </p>
            </motion.div>
            <div className='w-full lg:w-1/2 mx-auto flex flex-col'>
                <p className="px-10 lg:px-0 text-left text-lg lg:text-2xl font-medium mb-5 self-start">
                    Career timeline.
                </p>
                <TimelineComponent/>
            </div>
            
        </motion.div>
        );
    }
