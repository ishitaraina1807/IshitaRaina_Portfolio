import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import IR from '../assets/IR.png';

export default function Contact() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const flyUp = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div ref={ref} id='contact' className='mt-[300px] pt-[250px] bg-[#f2f2f2]'>
            <motion.div
                variants={flyUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className='flex items-center justify-center flex-col gap-20'
            >
              <h1 className='name-font text-8xl text-gray-800'>Let's make something great!</h1>
              <div className="flex items-center gap-20">
                <p className='text-gray-800 text-3xl basic-font'>Reach me out &rarr;</p>
                <a href='mailto:ishitaraina18@gmail.com' className='text-[#f93700] hover:scale-110 duration-300 text-6xl name-font underline tracking-wider'>ishitaraina18@gmail.com</a>
              </div>
              <div className="flex items-center gap-20 text-xl text-gray-800 my-32">
                <a href='https://www.linkedin.com/in/ishitaraina1807/' target='blank' className=' hover:text-[#f93700] name-font duration-300 hover:cursor-pointer'>Linkedin</a>
                <a href='https://github.com/ishitaraina1807' target='blank' className='hover:text-[#f93700] name-font duration-300 hover:cursor-pointer'>Github</a>
              </div>
            </motion.div>
        </div>
    );
}
