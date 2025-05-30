// images
import { DesktopBgPattern, MobileBgPattern } from '../data/Images';
import { motion } from 'motion/react';

const Image = () => {
  return (
    <>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.35, 1] }}
        src={DesktopBgPattern}
        alt='pattern'
        className='w-full hidden md:block h-60'
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.35, 1] }}
        src={MobileBgPattern}
        alt='pattern'
        className='w-full h-72 block md:hidden'
      />
    </>
  );
};

export default Image;
