import { useState, useEffect } from "react";

function getWindowWidth() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}
const useScreenSize = (): { windowWidth: number } => {
  const [{ width: windowWidth }, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { windowWidth };
};

export default useScreenSize;
