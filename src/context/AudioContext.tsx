import { createContext, useContext, useState } from "react";

type Track = {
  title: string;
  preacher: string;
  src: string;
  image: string;
};

type AudioContextType = {
  currentTrack: Track | null;
  setTrack: (track: Track) => void;
  clearTrack: () => void;
};
const AudioCtx = createContext<AudioContextType | null>(null);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  const setTrack = (track: Track) => {
    setCurrentTrack(track);
  };

  const clearTrack = () => {
  setCurrentTrack(null);
};

  return (
   <AudioCtx.Provider value={{ currentTrack, setTrack, clearTrack }}>
      {children}
    </AudioCtx.Provider>
  );
};

export const useAudio = () => {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudio must be used inside AudioProvider");
  return ctx;
};