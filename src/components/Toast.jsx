import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Toast = ({ message, status }) => {
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    if (message) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);
  if (!message) return null;

  const toastCLasses =
    'fixed top-5 right-5 w-fit h-10 px-5 py-2 flex items-center justify-center rounded-lg';

  const toastColor = {
    // success: 'bg-white text-black border border-black',
    success: 'bg-white text-green-500 border border-green-500',
    error: 'bg-white text-red-500 border border-red-500',
    warning: 'bg-white text-yellow-500 border border-yellow-500',
  };

  return (
    <>
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.35, 1] }}
            className={`${toastColor[status]} ${toastCLasses}`}
            // className={`bg-black ${toastCLasses}`}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Toast;
