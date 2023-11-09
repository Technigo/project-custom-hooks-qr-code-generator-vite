import Box from "../Three/Box";
import CanvasComp from "../Three/CanvasComp";
import Circle from "../Three/Circle";

export const ThreeFrame = ({ shape, style }: { shape: string; style: string }) => {
  return (
    <div className={`absolute ${style} w-fit`}>
      <CanvasComp>{shape === "box" ? <Box /> : <Circle />}</CanvasComp>
    </div>
  );
};
