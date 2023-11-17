import Box from "../Three/Box";
import CanvasComp from "../Three/CanvasComp";
import Circle from "../Three/Circle";
import Corn from "../Three/Corn";

export const ThreeFrame = ({ shape, style }: { shape: string; style: string }) => {
  return (
    <div className={`absolute ${style} w-fit`}>
      <CanvasComp>
        {shape === "box" ? <Box /> : shape === "circle" ? <Circle /> : <Corn />}
      </CanvasComp>
    </div>
  );
};
