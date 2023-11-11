import { ReactNode, createContext, useContext, useState, useEffect, useRef } from "react";
import { AudioContextType } from "../types/common";
import music from "../assets/music.mp3";

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const AudioProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef(new Audio(music));
  const vol = useRef((audioRef.current.volume = 0.2));
  const [play, setPlay] = useState<boolean>(false);
  useEffect(() => {
    play ? audioRef.current.play() : audioRef.current.pause();
  }, [play]);

  return <AudioContext.Provider value={{ setPlay }}>{children}</AudioContext.Provider>;
};

const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) throw new Error("useAudio must be used inside of AudioProvider");
  return context;
};

export { useAudio, AudioProvider };
