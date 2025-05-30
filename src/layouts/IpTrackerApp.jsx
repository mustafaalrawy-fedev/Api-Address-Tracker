// icons
import Map from '../components/Map';
import IpAddressInfo from '../components/IpAddressInfo';
import FormIpTracker from '../components/FormIpTracker';
import Image from '../components/Image';
import useAction from '../hooks/useAction';
import Toast from '../components/Toast';
import { motion } from 'motion/react';

const IpTrackerApp = () => {
  const {
    inputRef,
    ipData,
    mapPosition,
    toastMessage,
    toastStatus,
    handleSubmitForm,
  } = useAction();
  return (
    <section className='w-full h-screen flex flex-col'>
      <article className='w-full shrink-0 relative'>
        {/* image */}
        <Image />
        <FormIpTracker
          handleSubmitForm={handleSubmitForm}
          inputRef={inputRef}
        />
        {/* Ip Address Info */}
        <IpAddressInfo ipData={ipData} />
      </article>
      {/* Map */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7, ease: [0.25, 0.1, 0.35, 1] }}
        className='w-full h-full flex-grow z-0'
      >
        <Map mapPosition={mapPosition} />
      </motion.article>
      <Toast message={toastMessage} status={toastStatus} />
    </section>
  );
};

export default IpTrackerApp;
