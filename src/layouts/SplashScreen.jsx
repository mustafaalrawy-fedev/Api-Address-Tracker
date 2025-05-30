import { useState, useEffect } from 'react';
import IpTrackerApp from './IpTrackerApp';
import ProgressBar from '../components/ProgressBar';
import { motion } from 'motion/react';

const SplashScreen = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, []);

  return (
    <>
      {showSplashScreen ? (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.35, 1] }}
          className='fixed top-0 left-0 w-full h-full flex flex-col gap-5 items-center justify-center text-very-dark-gray'
        >
          <main>
            <h1 className='text-2xl tracking-main-space text-center'>
              IP Address Tracker
            </h1>
          </main>
          <ProgressBar progress={100} />
        </motion.div>
      ) : !showSplashScreen && !showContent ? (
        <div className='fixed top-0 left-0 w-full h-full flex flex-col gap-5 items-center justify-center text-very-dark-gray'>
          <motion.main
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className='text-2xl tracking-main-space text-center'>
              IP Address Tracker
            </h1>
          </motion.main>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className='text-white bg-black hover:bg-very-dark-gray transition-all duration-500 px-5 py-3 rounded-md'
            type='button'
            onClick={() => setShowContent(true)}
          >
            Get Started
          </motion.button>
        </div>
      ) : (
        <IpTrackerApp />
      )}
    </>
  );
};

export default SplashScreen;
