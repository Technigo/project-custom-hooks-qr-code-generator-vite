import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import useScreenSize from "../../hooks/useScreenWidth";

export const BoxAnimated = ({
  maxHeight,
  position = "bottom-0",
}: {
  maxHeight?: number;
  position?: string;
}) => {
  const { windowWidth } = useScreenSize();
  const colWidth = useRef(20);
  const colNums = useMemo(() => {
    const nums = Math.floor(windowWidth / colWidth.current);
    return nums;
  }, [windowWidth]);

  return (
    <div className={`flex items-end absolute ${position} min-h-[${maxHeight}px] bottom-0`}>
      {Array.from({ length: colNums }, (_, i) => (
        <Bar maxHeight={maxHeight} />
      ))}
    </div>
  );
};

const Bar = ({ maxHeight = 280 }) => {
  const [height, setHight] = useState<number>(0);

  const changeHeight = () => {
    const random = Math.floor(Math.random() * maxHeight) + 1;
    setHight(random);
  };

  useEffect(() => {
    changeHeight();
    console.log(height);
    const interval = setInterval(changeHeight, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white min-w-[20px]  transition-all  " style={{ height: height + "px" }}>
      &nbsp;
    </div>
  );
};
