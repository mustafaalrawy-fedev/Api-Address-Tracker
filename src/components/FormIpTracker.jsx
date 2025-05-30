import { angleIcon } from '../data/Icons';
import { motion } from 'motion/react';

const FormIpTracker = ({ handleSubmitForm, inputRef }) => {
  return (
    <main className='absolute top-5 left-1/2 -translate-x-1/2 text-white text-lg'>
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.35, 1] }}
        className='text-center mb-5'
      >
        IP Address Tracker
      </motion.h1>
      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.35, 1] }}
        onSubmit={handleSubmitForm}
        className='flex justify-center w-screen'
      >
        <span className='flex flex-nowrap w-11/12 md:w-5/12'>
          <input
            ref={inputRef}
            type='text'
            className='bg-white rounded-l-lg px-5 py-3 w-full placeholder:text-dark-gray placeholder:text-sm text-very-dark-gray outline-0 border-0'
            placeholder='Search for any IP address or domain'
          />
          {/* icon */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
              ease: [0.25, 0.1, 0.35, 1],
            }}
            type='submit'
            className='shrink-0 px-5 py-3 bg-black hover:bg-very-dark-gray transition-all duration-500 rounded-r-lg group'
          >
            <img
              src={angleIcon}
              alt='angle icon'
              className='group-hover:animate-pulse'
            />
          </motion.button>
        </span>
      </motion.form>
    </main>
  );
};

export default FormIpTracker;
