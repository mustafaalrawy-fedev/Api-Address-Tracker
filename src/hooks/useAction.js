import { useRef, useState, useEffect } from 'react';
// data
// import { API_KEY } from '../data/Data';

const useAction = () => {
  const inputRef = useRef(null);
  const [ipData, setIpData] = useState(null);
  const [mapPosition, setMapPosition] = useState([34.04915, -118.09462]); // default map position marker in map
  const [ipAddress, setIpAddress] = useState('192.212.174.101'); // ip Address Info
  const [toast, setToast] = useState({ message: '', status: '' });

  //   Form Handle
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    const regex =
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    // Reset toast before showing new message
    setToast({ message: '', status: '' });

    // Add setTimeout to ensure state is reset before showing new toast
    setTimeout(() => {
      if (value && !regex.test(value)) {
        setToast({
          message: 'Please enter a valid IP Address',
          status: 'error',
        });
        return;
      }
      if (!value) {
        setToast({ message: 'Please enter an IP Address', status: 'error' });
        return;
      }
      fetchIpData(value);
      setToast({ message: 'Fetching IP data...', status: 'success' });
      inputRef.current.value = '';
    }, 100);
  };

  //   Get Ip User or Client
  const getUserIp = async () => {
    const url = 'https://api.ipify.org?format=json';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.ip) {
        setIpAddress(data.ip);
      }
      setToast({ message: 'Your IP Address Detected', status: 'success' });
    } catch (error) {
      console.error('Error fetching IP:', error);
      setToast({
        message: 'Failed to fetch your IP Address, using default IP Address',
        status: 'warning',
      });
    }
  };

  //   fetch ip data to get ip info
  const fetchIpData = async (ip) => {
    // const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;
    const url = `http://ip-api.com/json/${ip}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setToast({ message: 'Failed to fetch IP data', status: 'error' });
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setIpData(data);
      if (data.lat && data.lon) {
        setMapPosition([data.lat, data.lon]);
      } else {
        setMapPosition([34.04915, -118.09462]);
      }
    } catch (error) {
      setIpData({
        query: '192.212.174.101',
        city: 'Los Angeles',
        countryCode: 'US',
        lat: 34.04915,
        lon: -118.09462,
        zip: '90001',
        region: 'California',
        timezone: 'UTC-07:00',
        isp: 'SpaceX',
      });
      console.error('Error fetching IP data:', error);
      setToast({ message: 'Failed to fetch IP data', status: 'error' });
    }
  };

  useEffect(() => {
    getUserIp();
    fetchIpData(ipAddress);
  }, [ipAddress]);

  return {
    inputRef,
    ipData,
    mapPosition,
    ipAddress,
    toastMessage: toast.message,
    toastStatus: toast.status,
    handleSubmitForm,
  };
};
export default useAction;
