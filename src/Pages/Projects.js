import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const flyIn = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div ref={ref} className='bg-[#f2f2f2] flex w-full'>
            <div className='h-[80vh] bg-white w-[750px]'>
      {/* Add require project image */}
            </div>
            <motion.div
                variants={flyIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className=''
            >
                <p style={{ borderBottom: '4px solid #f93700' }} className='text-md w-44 ml-[330px] text-gray-600'>SELECTED PROJECTS </p>
                <div className=' ml-[100px] mt-20'>
                <h1 className='text-3xl text-gray-800'>Reading Matters</h1>
                <p className='text-gray-600 mt-2'>A BookFinder Website</p>
                <a href='/' target='blank' className='text-[#f93700] name-font'>Gihub Link</a>
                </div>
                <div className=' ml-[600px] mt-10'>
                <h1 className='text-3xl text-gray-800'>The NoteBox</h1>
                <p className='text-gray-600 mt-2'>A Notes Manager Website</p>
                <a href='/' target='blank' className='text-[#f93700] name-font'>Gihub Link</a>
                </div>
                <div className=' ml-[100px] mt-10'>
                <h1 className='text-3xl text-gray-800'>CodinGo</h1>
                <p className='text-gray-600 mt-2'>A Code Editor Website</p>
                <a href='/' target='blank' className='text-[#f93700] name-font'>Gihub Link</a>
                </div>
                <div className=' ml-[600px] mt-10'>
                <h1 className='text-3xl text-gray-800'>Web Quest</h1>
                <p className='text-gray-600 mt-2'>A Quiz playing Website</p>
                <a href='/' target='blank' className='text-[#f93700] name-font'>Gihub Link</a>
                </div>
            </motion.div>
        </div>
    );
}
