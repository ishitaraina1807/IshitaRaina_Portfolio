import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import projectBW from '../assets/projectBW.png';
import projectsColored from '../assets/projectsColored.png';

const initialSize = 450;
const finalSize = 550;

export default function Projects() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [isInView, setIsInView] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (inView) {
            setIsInView(true);
        }
    }, [inView]);

    const sizeVariants = {
        small: { width: initialSize, height: initialSize },
        large: { width: finalSize, height: finalSize },
    };

    const flyIn = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    const imageVariants = {
        bw: { opacity: 1 },
        colored: { opacity: isHovered ? 1 : 0 },
    };

    return (
        <div ref={ref} className='bg-[#f2f2f2] flex w-full'>
            <div
                className='h-[88vh] flex justify-center items-center bg-white w-[750px] image-container'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    className='image-wrapper absolute'
                    initial='small'
                    animate={isInView ? 'small' : 'large'}
                    variants={sizeVariants}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <motion.img
                        className='w-full h-full'
                        src={isHovered ? projectsColored : projectBW}
                        alt='bw'
                        variants={imageVariants}
                        animate={isHovered ? 'colored' : 'bw'}
                    />
                    <motion.div className='relative name-font text-gray-800 text-center text-5xl top-[-28px]'>Selected Projects</motion.div>
                </motion.div>
            </div>
            <motion.div
                variants={flyIn}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className=''
            >
                <p style={{ borderBottom: '4px solid #f93700' }} className='text-md w-44 ml-[330px] text-gray-600'>SELECTED PROJECTS </p>
                <div className=' ml-[100px] mt-20'>
                    <h1 className='text-4xl text-gray-800'>Reading Matters</h1>
                    <p className='text-gray-600 my-2'>A BookFinder Website</p>
                    <a href='/' target='blank' className='text-[#f93700] name-font hover:underline font-bold'>Live Link</a>
                </div>
                <div className=' ml-[600px] mt-4'>
                    <h1 className='text-4xl text-gray-800'>House Of Ajita</h1>
                    <p className='text-gray-600 my-2'>E-Commerce Website</p>
                    <a href='/' target='blank' className='text-[#f93700] name-font hover:underline font-bold'>Live Link</a>
                </div>
                <div className=' ml-[100px] mt-4'>
                    <h1 className='text-4xl text-gray-800'>CodinGo</h1>
                    <p className='text-gray-600 my-2'>A Code Editor Website</p>
                    <a href='/' target='blank' className='text-[#f93700] name-font font-bold hover:underline'>Live Link</a>
                </div>
                <div className=' ml-[600px] mt-4 mb-16'>
                    <h1 className='text-4xl text-gray-800'>The NoteBox</h1>
                    <p className='text-gray-600 my-2'>A Notes Manager Website</p>
                    <a href='/' target='blank' className='text-[#f93700] name-font hover:underline font-bold'>Live Link</a>
                </div>
                <div className='bg-[#f93700] absolute h-[930px] w-[938px]'>

                </div>
            </motion.div>
        </div>
    );
}
