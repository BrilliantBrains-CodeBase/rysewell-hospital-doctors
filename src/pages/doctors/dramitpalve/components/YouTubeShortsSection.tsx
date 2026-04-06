import { motion } from "framer-motion"

const SHORTS = [
  { id: "Vtt83Vz1FWw", title: "Health Tip 1" },
  { id: "27l9HTodaoQ", title: "Health Tip 2" },
  { id: "MEV2rKylhSo", title: "Health Tip 3" },
]

const YouTubeShortsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold font-headline text-gray-900 mb-4">
              Health Tips From Dr. Palve
            </h2>
            <p className="text-gray-500 font-body">Short, actionable advice for your daily diabetes management.</p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            href="https://www.youtube.com/@RyseWellHospital"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-red-700 transition-colors font-body text-sm whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            Subscribe on YouTube
          </motion.a>
        </div>

        <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 pr-6">
            {SHORTS.map((short, idx) => (
              <motion.div
                key={short.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="snap-start shrink-0 w-[78vw] aspect-9/16 rounded-2xl overflow-hidden shadow-lg"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${short.id}`}
                  title={short.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {SHORTS.map((short, idx) => (
            <motion.div
              key={short.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="aspect-9/16 rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${short.id}`}
                title={short.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default YouTubeShortsSection
