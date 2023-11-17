import { useQRCodeGenerator } from "../hooks/useQRCodeGenerator"

export const  ColorSelect = () => {

    const { color, setColor } = useQRCodeGenerator();

    const handleColorChange = (e) => {
        const selectedColor = e.target.value;
        console.log("Color changed:", selectedColor);
        setColor(selectedColor);
    }
  return (
    <>
    <select name="colorSelector" className="color-selector" value={color} onChange={handleColorChange}>
        <option disabled value="">Color</option>  
        <option value="#05c46b">Green</option>
        <option value="#335383">Grey</option>
        <option value="#3c40c6">Sky</option>
        <option value="#f53b57">Rose</option>
        <option value="#ffa801">Orange</option>
    </select>
    </>
  )
}
