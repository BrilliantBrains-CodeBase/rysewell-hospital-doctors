import { useState } from "react";
import { motion } from "framer-motion";

interface VideoSectionProps {
  videoId?: string;
  thumbnailUrl?: string;
}

const VideoSectionV2: React.FC<VideoSectionProps> = ({
  videoId = "FHTsQmDtmMU",
  thumbnailUrl = "/thumbnail.png",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full py-20 bg-white flex justify-center items-center px-4">
      <div className="max-w-4xl w-full">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            Experience the Vision
          </h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base max-w-2xl mx-auto">
            Experience the healing journey through this exclusive video insight.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative aspect-video w-full rounded-xl overflow-hidden shadow-xl"
        >
          {!isPlaying ? (
            <>
              {/* Thumbnail */}
              <img
                src={thumbnailUrl}
                alt="Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 rounded-full bg-white/90 hover:bg-white transition flex items-center justify-center shadow-lg"
                >
                  <div className="w-0 h-0 border-l-[18px] border-l-black border-y-[12px] border-y-transparent ml-1" />
                </button>
              </div>
            </>
          ) : (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSectionV2;