import { motion } from "framer-motion"
import { ArrowLeft, PhoneCall } from "lucide-react"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0F4C81] to-[#09375E] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full rounded-3xl bg-white p-10 md:p-14 text-center shadow-2xl"
      >
        {/* 404 */}
        <h1 className="text-[96px] font-extrabold text-[#0F4C81] leading-none">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="mt-4 text-gray-600 text-lg">
          The page you’re looking for doesn’t exist or may have been moved.
          Don’t worry — your path to better health is just a click away.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F4C81] px-6 py-3 text-sm font-semibold text-white hover:bg-[#09375E] transition"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>

          <a
            href="tel:+917709862164"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
          >
            <PhoneCall size={16} />
            Call Hospital
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-xs text-gray-500">
          RyseWell Multispeciality Hospital · Pune
        </p>
      </motion.div>
    </section>
  )
}

export default NotFound
