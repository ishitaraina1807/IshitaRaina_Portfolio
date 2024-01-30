import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import IR from '../assets/IR.png';

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const flyUp = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div ref={ref} id='info' className=''>
            <motion.div
                variants={flyUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className='flex items-center'
            >
                <div className='w-[760px] pt-28'>
                    <img src={IR} alt="img" />
                </div>
                <div className='ml-[120px] mt-32'>
                    <motion.div
                        variants={flyUp}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        className=''
                    >
                        <h1 className='text-black text-[14rem] name-font font-extrabold'>I.R.</h1>
                        <p className='text-5xl name-font font-medium'>a bit about myself</p>
                    </motion.div>
                    <motion.div
                        variants={flyUp}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        className=''
                    >
                        <p className='text-3xl basic-font font-medium mt-16'>Just About</p>
                        <p className='text-lg basic-font'>What I do</p>
                    </motion.div>
                    <motion.div
                        variants={flyUp}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        className=''
                    >  <p className='text-md basic-font mt-16 font-medium text-gray-800'>I am all about Web Development,</p>
                        <p className='text-md basic-font font-medium text-gray-800'>Music (I play Ukulele)</p>
                        <p className='text-md basic-font font-medium text-gray-800'>Art (I paint)</p>
                        <p className='text-md basic-font font-medium text-gray-800'>for sure!</p>
                    </motion.div>
                    <motion.div
                        variants={flyUp}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        className=''
                    >
                        <p className='text-3xl basic-font font-medium mt-16'>So,</p>
                        <p className='text-md pb-40 text-gray-800 basic-font w-[600px]'>
                            I'm Ishita — Web Developer with an engineering background. I love everything that has to do with web, art or music. With my decent industry experience, I know how to build a great website at production level. I have worked with a few startups and clients as a freelancer and provide them with the best results.</p>
                    </motion.div>
                </div>


            </motion.div>
        </div>
    );
}
