import { useTheme } from "../../context/ThemeContext";

export const ThemeButton = () => {
  const { setTheme } = useTheme();

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    if (!event.currentTarget.dataset.value) return;
    console.log(event.currentTarget.dataset.value);
    setTheme(event.currentTarget.dataset.value);
  }
  return (
    <div className="flex flex-col gap-2 absolute top-5 left-5">
      <button
        data-value="yellow"
        onClick={handleClick}
        className="themeButton bg-gradient-to-r from-sky-900 to-teal-900 hover:bg-gradient-to-l hover:from-teal-700 hover:to-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-900 dark:focus:ring-sky-700"
      ></button>
      <button
        data-value="blue"
        onClick={handleClick}
        className="themeButton bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
      ></button>
      <button
        data-value="pink"
        onClick={handleClick}
        className="themeButton bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 "
      ></button>
    </div>
  );
};
