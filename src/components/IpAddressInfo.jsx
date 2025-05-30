import { motion } from 'framer-motion';

const IpAddressInfo = ({ ipData }) => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='bg-white absolute z-10 left-1/2 -bottom-30 md:-bottom-15 -translate-x-1/2 w-11/12 md:w-9/12 h-fit p-5 md:p-10 rounded-lg'
    >
      <ul className='flex flex-col md:flex-row justify-between items-center gap-2 md:gap-5 w-full'>
        {ipData && (
          <>
            {['IP ADDRESS', 'LOCATION', 'TIMEZONE', 'ISP'].map(
              (title, index) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  className={`text-center md:text-left shrink-0 grow ${
                    index !== 3 ? 'md:border-r md:border-r-dark-gray/30' : ''
                  }`}
                >
                  <h6 className='text-xs mb-3 text-dark-gray'>{title}</h6>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {title === 'IP ADDRESS' && ipData.query}
                    {title === 'LOCATION' &&
                      `${ipData.city}, ${ipData.region}, ${ipData.countryCode}, ${ipData.zip}`}
                    {title === 'TIMEZONE' && ipData.timezone}
                    {title === 'ISP' && ipData.isp}
                  </motion.p>
                </motion.li>
              )
            )}
          </>
        )}
      </ul>
    </motion.aside>
  );
};

export default IpAddressInfo;
