import { motion } from "framer-motion";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useAudio } from "../../context/AudioContext";
import { X, Play, Pause } from "lucide-react";
import { useRef } from "react";
import { RotateCcw, RotateCw } from "lucide-react";
import type AudioPlayerDefault from "react-h5-audio-player";
import { useMediaQuery } from "react-responsive";

const GlobalAudioPlayer = () => {
  const { currentTrack, clearTrack } = useAudio();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const playerRef = useRef<AudioPlayerDefault | null>(null);
  if (!currentTrack) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-0 left-0 w-full bg-[#e9e9f1] shadow-2xl z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <img
          src={currentTrack.image}
          className="w-14 h-14 object-cover rounded-md"
        />

        <div className="flex-1">
          <h4 className="font-semibold text-sm">{currentTrack.title}</h4>
          <p className="text-xs text-gray-900">{currentTrack.preacher}</p>
        </div>

        <div className="flex-1">
          {/* Desktop Player */}
          <div className="md:block">
            <AudioPlayer
              ref={playerRef}
              autoPlay={true}
              src={currentTrack?.src}
              layout={isMobile ? "stacked" : "horizontal"}
              showJumpControls={!isMobile}
              progressJumpStep={10000}
              customProgressBarSection={
                isMobile
                  ? []
                  : [
                      RHAP_UI.CURRENT_TIME,
                      RHAP_UI.PROGRESS_BAR,
                      RHAP_UI.DURATION,
                    ]
              }
              customAdditionalControls={isMobile ? [] : [RHAP_UI.LOOP]}
              customVolumeControls={isMobile ? [] : [RHAP_UI.VOLUME]}
              customIcons={{
                play: <Play size={28} />,
                pause: <Pause size={28} />,

                rewind: (
                  <div className="relative flex items-center justify-center">
                    <RotateCcw size={28} />
                    <span className="absolute text-[9px] font-bold">10</span>
                  </div>
                ),

                forward: (
                  <div className="relative flex items-center justify-center">
                    <RotateCw size={28} />
                    <span className="absolute text-[9px] font-bold">10</span>
                  </div>
                ),
              }}
            />
          </div>
        </div>
        <button
          onClick={clearTrack}
          className="text-gray-600  cursor-pointer hover:text-red-500 transition"
        >
          <X size={30} />
        </button>
      </div>
    </motion.div>
  );
};

export default GlobalAudioPlayer;
