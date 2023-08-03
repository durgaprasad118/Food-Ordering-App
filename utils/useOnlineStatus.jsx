import { useState, useEffect } from "react";
const useOnlineStatus = () => {
    //initially the online status is true
  const [status, setState] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setState(false);
    });
    window.addEventListener("online", () => {
      setState(true);
    });
  }, []);
  return status;
};
export default useOnlineStatus;
