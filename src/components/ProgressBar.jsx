import { motion, AnimatePresence } from 'motion/react';

const ProgressBar = ({ progress }) => {
  return (
    <div className='h-3 w-72 bg-gray-200 rounded-full overflow-hidden'>
      <AnimatePresence>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 2.5, ease: [0.25, 0.1, 0.35, 1] }}
          className='h-full bg-black'
        />
      </AnimatePresence>
    </div>
  );
};

export default ProgressBar;
