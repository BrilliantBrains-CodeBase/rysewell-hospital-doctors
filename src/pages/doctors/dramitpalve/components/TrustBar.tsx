const TRUST_NAMES = [
  "Manipal Hospitals",
  "Jehangir Hospital",
  "Sahyadri Specialty",
  "MBBS · MD · DNB",
  "Kothrud Pune",
]

const TrustBar = () => {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {TRUST_NAMES.map((name) => (
            <span key={name} className="font-bold text-xl font-headline text-gray-700 whitespace-nowrap">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
