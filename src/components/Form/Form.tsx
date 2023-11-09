import { useQrCode } from "../../context/QrcodeContext";
import { useTheme } from "../../context/ThemeContext";

export const Form = () => {
  const { url, setUrl, generateQRCode, color, size, setColor, setSize } = useQrCode();
  const { theme } = useTheme();

  return (
    <div className="flex flex-col  bg-orange py-8 px-10 rounded shadow-md">
      <p className="text-start m-0 text-stone-900 text-sm font-bold">URL Please</p>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-80 px-6 py-2 text-lg focus:outline-sky-500 focus:outline-offset-2 focus:outline-4 text-stone-600 rounded-sm shadow-sm  "
      />
      <div className="text-stone-900">
        <p>Option</p>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="rounded-sm mr-3 cursor-pointer  focus:outline-sky-500 focus:outline-offset-2 focus:outline-4 text-stone-600 "
        >
          <option disabled={true} value="">
            Color
          </option>
          <option value="#05c46b">Green</option>
          <option value="#335383FF">Gray</option>
          <option value="#3c40c6">Sky</option>
          <option value="#f53b57">Rose</option>
          <option value="#ffa801">Orange</option>
        </select>

        <select
          value={Number(size)}
          onChange={(e) => setSize(Number(e.target.value))}
          className="rounded-sm mr-3 cursor-pointer  focus:outline-sky-500 focus:outline-offset-2 focus:outline-4 text-stone-600 "
        >
          <option disabled={true} value="">
            Size
          </option>
          <option value={600}>Large</option>
          <option value={300}>Middle</option>
          <option value={100}>Small</option>
        </select>
        <>
          <button onClick={generateQRCode} className="button text-sm w-40 bg-orange font-bold">
            Generate QRcode
          </button>
        </>
      </div>
    </div>
  );
};
