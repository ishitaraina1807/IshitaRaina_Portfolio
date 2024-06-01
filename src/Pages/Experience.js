import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div id='experience' ref={ref}> 
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                exit={{ opacity: 0, x: 100 }}
            >
                <div className='relative top-[400px] pl-[100px]'>
                    <div className='text-gray-800 text-7xl name-font'>
                        My Experience
                    </div>
                    <div className='text-[#f93700] text-4xl mt-2 name-font'>
                        So Far.
                    </div>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    exit={{ opacity: 0, x: 100 }}
                >
                    <motion.div
                        variants={itemVariants}
                        className='relative top-[120px] pl-[780px] text-xl hover:cursor-pointer text-[#f93700]'
                    >
                         {/* className='bg-[#f93700] absolute h-[816px] w-[798px] */}
                        {/* Experience 1 */}
                        <div className="flex items-center text-[#f93700]">
                            <p className='mx-4 text-sm'>01.</p>
                            <h1 className=''>GDSC (powered by google)</h1>
                            <div className='text-center'>
                                <p className='text-xs'>2023 - 2024</p>
                                <hr className='w-32 border-t-2 border-[#f93700] mx-4' />
                            </div>
                            <p>Web Development Lead</p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className='relative top-[120px] pl-[780px] text-xl hover:cursor-pointer text-[#f93700]'
                    >
                        {/* Experience 2 */}
                        <div className="flex items-center mt-16">
                            <p className='mx-4 text-sm'>02.</p>
                            <h1>CodeStam Technologies</h1>
                            <div className='text-center'>
                                <p className='text-xs'>Oct 2023 - Nov 2023</p>
                                <hr className='w-32 border-t-2 border-[#f93700] mx-4' />
                            </div>
                            <p>Frontend Developer Intern</p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className='relative top-[120px] pl-[780px] text-xl hover:cursor-pointer text-[#f93700]'
                    >
                        {/* Experience 3 */}
                        <div className="flex items-center mt-16">
                            <p className='mx-4 text-sm'>03.</p>
                            <h1>Fiverr</h1>
                            <div className='text-center'>
                                <p className='text-xs'>Nov 2023 - present</p>
                                <hr className='w-32 border-t-2 border-[#f93700] mx-4' />
                            </div>
                            <p>E-Commerce Developer</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className='relative top-[120px] pl-[780px] text-xl hover:cursor-pointer text-[#f93700]'
                    >
                        {/* Experience 4 */}
                        <div className="flex items-center mt-16">
                            <p className='mx-4 text-sm'>04.</p>
                            <h1>PingFence</h1>
                            <div className='text-center'>
                                <p className='text-xs'>Jan 2024 - March 2024</p>
                                <hr className='w-32 border-t-2 border-[#f93700] mx-4' />
                            </div>
                            <p>Full Stack Developer Intern</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className='relative top-[120px] pl-[780px] text-xl hover:cursor-pointer text-[#f93700]'
                    >
                        {/* Experience 5 */}
                        <div className="flex items-center mt-16">
                            <p className='mx-4 text-sm'>05.</p>
                            <h1>Scorora</h1>
                            <div className='text-center'>
                                <p className='text-xs'>March 2024 - May 2024</p>
                                <hr className='w-32 border-t-2 border-[#f93700] mx-4' />
                            </div>
                            <p>Full Stack Developer Intern</p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
