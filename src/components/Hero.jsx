import { useRef } from 'react'
import ComputerContainer from "./ComputerContainer";
import { motion, useScroll, useTransform } from 'framer-motion';
// import { mountains, stars, sun } from '../assets';

const Hero = () => {

  const sectionRef = useRef();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '300%']);
  const yStars = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section 
      className='relative w-full px-4 flex items-center justify-center overflow-hidden' 
      ref={sectionRef}  
    >
      <motion.div className='text-white text-center relative bottom-[100px] z-20' style={{y: yText}}>
        <div className='flex flex-1 justify-center items-center'>
          <h1 className='font-bold text-[60px] inline-block mx-4'>
            Hi, I&apos;m <span className='text-tertiary' >Josh</span>
          </h1>
        </div>
        <p className='text-[24px]'>
          I&apos;m a Computer Science student passionate <br className='hidden sm:inline'/>  about technology and software development
        </p>
      </motion.div>
      <motion.div style={{y: yStars}} className='bg-[url("/stars.png")] bg-cover bg-bottom w-full h-full absolute top-0 left-0 z-0 bg-contain bg-no-repeat ' />
      <motion.div className='bg-[url("/mountains.png")] bg-cover bg-bottom w-full h-full absolute top-0 left-0 z-50 ' />
    </section>
  )
}

export default Hero;