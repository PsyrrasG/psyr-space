import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData)
        setLoading(true);
        try {
            const response = await axios.post("/api/contact", formData);
            if (response.status === 200) {
                console.log('Succesfully sent email (frontend)');
                navigate('/contact/success');
            }
        } catch (error) {
            console.error('Failed to send email (frontent)');
            navigate('/contact/error');
        } finally {
            console.error('Anyway finally clause');
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex flex-col w-full lg:w-1/2 mx-auto py-32 md:py-40 px-10 lg:px-0">
                <motion.div className="mb-5 md:mb-10"     
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 2.0 }}
                    >
                    <p className='text-2xl lg:text-3xl font-semibold mb-2 md:mb-5'>Get in touch.</p>
                    <p className='text-base lg:text-xl text-left text-gray-600'>Use the form below or email me at <a href='mailto:georgepsyrras@gmail.com' className='text-violet-500 hover:text-violet-700'>georgepsyrras@gmail.com</a>.</p>
                </motion.div>

                <form onSubmit={ handleSubmit } className="w-full mx-auto">
                    <motion.div className="mb-4"
                        initial={{ opacity: 0, x: +100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 0.2*1 }}
                        >
                    <label className="block text-gray-600 mb-2">Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-violet-500"
                        required
                    />
                    </motion.div>
                    <motion.div className="mb-4"
                        initial={{ opacity: 0, x: +100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 0.2*2 }}>
                    <label className="block text-gray-600 mb-2">Email</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-violet-500"
                        required
                    />
                    </motion.div>
                    <motion.div className="mb-4"
                        initial={{ opacity: 0, x: +100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 0.2*3 }}
                        >
                    <label className="block text-gray-600 mb-2">Message</label>
                    <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-violet-500 resize-none"
                        rows="10"
                        required
                    />
                    </motion.div>
                    <motion.button
                        type="submit"
                        disabled={loading} // disable 'Send Message' button while loading
                        initial={{ opacity: 0, x: +100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 0.2*4 }}
                        className="bg-violet-700 hover:bg-violet-800 hover:shadow-lg font-medium text-white w-full py-2 rounded-lg"
                    >
                        {loading && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="flex flex-col items-center bg-white/100 p-5 md:p-10 rounded-lg shadow-lg">
                                    <svg
                                        className="animate-spin h-8 w-8 text-violet-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    <p className="mt-4 text-gray-600">Sending your message...</p>
                                </div>
                            </div>
                            )}
                            Send message
                    </motion.button>
                </form>
                </div>
        </div>
    );
}

