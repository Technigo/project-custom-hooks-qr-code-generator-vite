// import { useEffect, useState } from "react";
// import { ChromePicker } from "react-color";
// import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

// export const InputColor = () => {
//   const { color, setColor, inputValue, setInputValue } = useQRCodeGenerator();
//   const [showColorPicker, setShowColorPicker] = useState(false);

//   useEffect(() => {
//     setInputValue({ ...inputValue, color: color });
//   }, [color]);

//   const handleChange = (color) => setColor(color.hex);

//   return (
//     <div className="color-picker-wrapper">
//       <label>Color</label>
//       <div className="color-picker">
//         <div
//           onClick={() => setShowColorPicker(!showColorPicker)}
//           style={{ background: color }}
//           className="color-box"
//         ></div>
//         <span>{color}</span>
//       </div>
//       {showColorPicker && (
//         <div className="chrome-picker">
//           <ChromePicker color={color} onChange={handleChange} />
//         </div>
//       )}
//     </div>
//   );
// };
