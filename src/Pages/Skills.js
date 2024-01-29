import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
    const skills = ['Frontend', 'Backend', 'Designing'];
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const flyIn = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div ref={ref} className='bg-[#f2f2f2] py-60 w-full flex flex-col items-center justify-center'>
            <motion.div
                variants={flyIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div className='text-8xl text-gray-800 name-font font-semibold tracking-wide'>
                    Let's talk about my &rarr; <i>skills</i>
                </motion.div>
                <div className="flex items-center gap-24">
                    <motion.div className='text-2xl mt-8 w-60 text-gray-800 name-font font-medium tracking-wide'>
                        *I have a lot of developed skills but I am proficient in these.
                    </motion.div>
                    <AnimatePresence>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileInView={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.5 }}
                                style={{ borderBottom: '4px solid #f93700' }}
                                className='text-6xl text-gray-800 name-font font-medium tracking-wide'
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                <motion.div className='text-6xl mt-36 text-gray-800 name-font font-semibold tracking-wide'>
                    What I know &rarr;
                </motion.div>
                <motion.div className='text-6xl mt-10 text-gray-800 name-font font-medium tracking-wide'>
                    <div className='flex flex-col gap-4 ml-40'>
                        <div className="flex items-center gap-4">
                        <p className='text-2xl text-[#f93700]'>A.</p>
                        <div className='text-5xl'>HTML, CSS, JavaScript</div>
                        </div>
                        <div className="flex items-center gap-4">
                        <p className='text-2xl'>B.</p>
                        <div className='text-5xl text-[#f93700]'>ReactJS, NextJS, Typescript</div>
                        </div>
                        <div className="flex items-center gap-4">
                        <p className='text-2xl text-[#f93700]'>C.</p>
                        <div className='text-5xl'>CSS, TailwindCSS, Framer Motion</div>
                        </div>
                        <div className="flex items-center gap-4">
                        <p className='text-2xl'>D.</p>
                        <div className='text-5xl text-[#f93700]'>MongoDB, ExpressJS, NodeJS</div>
                        </div>
                        <div className="flex items-center gap-4">
                        <p className='text-2xl text-[#f93700]'>E.</p>
                        <div className='text-5xl'>SQL, Restful APIs, Firebase</div>
                        </div>
                        <div className="flex items-center gap-4">
                        <p className='text-2xl'>F.</p>
                        <div className='text-5xl text-[#f93700]'>Git, GitHub, Visual Studio</div>
                        </div>
                        <div className="flex items-center gap-4">
                        <p className='text-2xl text-[#f93700]'>G.</p>
                        <div className='text-5xl'>Python, Java, Rust</div>
                        </div>
                        <div className="flex items-center gap-4">
                        <p className='text-2xl'>H.</p>
                        <div className='text-5xl text-[#f93700]'>Shopify, Canva, Figma</div>
                        </div>
                        </div>
                </motion.div>
                
            </motion.div>
        </div>
    );
}
