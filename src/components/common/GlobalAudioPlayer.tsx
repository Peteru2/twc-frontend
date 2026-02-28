import { motion } from "framer-motion";
import AudioPlayer, {RHAP_UI,} from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useAudio } from "../../context/AudioContext";
import { X } from "lucide-react";

const GlobalAudioPlayer = () => {
  const { currentTrack, clearTrack } = useAudio();

  if (!currentTrack) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-0 left-0 w-full bg-[#f8b5b8] shadow-2xl z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        
        <img
          src={currentTrack.image}
          className="w-14 h-14 object-cover rounded-md"
        />

        <div className="flex-1">
          <h4 className="font-semibold text-sm">
            {currentTrack.title}
          </h4>
          <p className="text-xs text-gray-900">
            {currentTrack.preacher}
          </p>
        </div>

        <div className="flex-1">
  
  {/* Desktop Player */}
  <div className="hidden md:block">
    <AudioPlayer
      autoPlay
      src={currentTrack.src}
      showJumpControls={false}
      layout="horizontal"
      customProgressBarSection={[
        RHAP_UI.CURRENT_TIME,
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.DURATION,
      ]}
    />
  </div>

  {/* Mobile Player (Only Play Button) */}
  <div className="block md:hidden">
    <AudioPlayer
      autoPlay
      src={currentTrack.src}
      showJumpControls={false}
      customAdditionalControls={[]} 
      customVolumeControls={[]} 
      customProgressBarSection={[]} 
      layout="stacked"
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