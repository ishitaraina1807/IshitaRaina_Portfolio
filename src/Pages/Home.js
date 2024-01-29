import React from 'react';
import AnimatedText from '../Components/AnimatedText';

const Home = () => {
  
  return (
    <div className=' pb-14 home'>
      <div className="pt-[300px] pl-[850px]">
      <AnimatedText text='Ishita' font='text-9xl' color='text-white' />
      <div className="ml-14">
        <AnimatedText text='Raina' font='text-9xl' color='text-[#f93700]'  />
      </div>
      <div className="mt-4 ml-16">
        <AnimatedText text='A full-stack Web Developer' font='text-2xl' color='text-gray-800' />
      </div>
      </div>
    </div>
  );
};

export default Home;
