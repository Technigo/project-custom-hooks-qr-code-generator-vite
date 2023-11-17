import { useState, useEffect } from "react";

export const useTypeText = (text: string): string => {
  const [currentText, setCurrentText] = useState<string>(" ");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (currentIndex < text.length + 1) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev: number) => prev + 1);
      }, 300);
    } else {
      setCurrentIndex(0);
      setCurrentText("");
    }
    return () => clearTimeout(timeout);
  });
  return currentText;
};
