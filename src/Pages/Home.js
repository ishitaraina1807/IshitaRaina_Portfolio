import React from 'react';
import AnimatedText from '../components/animatesText';

const MyComponent = () => {
  return (
    <div className='relative h-[100vh]'>
     <AnimatedText text='Ishita' font='text-9xl'/>
     <div className="ml-14">
     <AnimatedText text='Raina' font='text-9xl'/>
     </div>
     <div className="mt-4 ml-14">
     <AnimatedText text='A full-stack Web Developer' font='text-2xl'/>
     </div>
    </div>
  );
};

export default MyComponent;
