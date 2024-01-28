import React from 'react';
import AnimatedText from '../Components/AnimatedText';

const Home = () => {
  return (
    <div className='relative h-[100vh]'>
      <AnimatedText text='Ishita' font='text-9xl' color='text-white' position={{ top: '0', left: '0' }} />
      <div className="ml-14">
        <AnimatedText text='Raina' font='text-9xl' color='text-[#f93700]' position={{ top: '0', left: '0' }} />
      </div>
      <div className="mt-4 ml-16">
        <AnimatedText text='A full-stack Web Developer' font='text-2xl' color='text-gray-800' position={{ top: '350px', left: '850px' }} />
      </div>
    </div>
  );
};

export default Home;
