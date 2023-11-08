import Box from "../Three/Box";
import CanvasComp from "../Three/CanvasComp";
import Circle from "../Three/Circle";

export const ThreeFrame = ({ shape, style }: { shape: string; style: string }) => {
  return (
    <span className={`absolute ${style}`}>
      <CanvasComp>{shape === "box" ? <Box /> : <Circle />}</CanvasComp>
    </span>
  );
};
