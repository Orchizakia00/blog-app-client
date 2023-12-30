import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useCurrentPath() {
  const [currentPathName, setCurrentPathName] = useState('');
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    setCurrentPathName(pathname);
  }, [location]);

  return currentPathName;
}

export default useCurrentPath;
