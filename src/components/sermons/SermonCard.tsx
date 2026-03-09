import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useAudio } from "../../context/AudioContext"
import type { Sermon } from "../types"

interface Props {
  sermon: Sermon
  formatDuration: (mins: number) => string
}

const SermonCard: React.FC<Props> = ({ sermon, formatDuration }) => {
  const { setTrack } = useAudio()

  const formattedDate = new Date(sermon.date).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

  return (
    <motion.div
      key={sermon._id}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
    >
      <div className="relative group">
        <img
          src={sermon.imageUrl}
          alt={sermon.title}
          className="w-full h-56 object-cover"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <button
            onClick={() =>
              setTrack({
                title: sermon.title,
                preacher: sermon.preacher,
                src: sermon.audioUrl,
                image: sermon.imageUrl,
              })
            }
            className="bg-white cursor-pointer text-black rounded-full p-4 shadow-xl hover:scale-110 transition"
          >
            <Play size={28} />
          </button>
        </div>

        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {formatDuration(sermon.duration)}
        </div>
      </div>

      <div className="px-4 w-full py-2">
        <h3 className="font-semibold mb-1">
          <p>{sermon.title}</p>
          <p className="font-medium">{sermon.scripture}</p>
        </h3>

        <p className="text-sm text-gray-500">
          {sermon.preacher}
        </p>

        <div className="flex w-full mt-2 items-center">
          <p className="text-xs text-gray-400">
           {formattedDate}
          </p>

          <a
            href={sermon.audioUrl}
            download
            className="ml-auto text-[10px] bg-gray-200 hover:bg-gray-300 px-4 py-[2px] rounded-full transition"
          >
            DOWNLOAD
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default SermonCard