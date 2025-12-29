const features = [
  {
    title: "24/7 Call Answering",
    description:
      "Never miss a call. AI answers instantly — day, night, weekends, holidays.",
    number: "01",
    bg: "bg-[#ff3d00]",
  },
  {
    title: "Smart Qualification",
    description:
      "AI identifies intent and qualifies leads based on your exact criteria.",
    number: "02",
    bg: "bg-[#0057ff]",
  },
  {
    title: "Auto Booking",
    description:
      "Books appointments directly into your calendar. No double-booking.",
    number: "03",
    bg: "bg-[#ffcc00]",
  },
  {
    title: "Reminders",
    description:
      "Automated confirmations and follow-ups reduce no-shows by 60%.",
    number: "04",
    bg: "bg-black",
  },
  {
    title: "Overflow Handling",
    description:
      "When staff is busy, AI handles overflow. No missed opportunities.",
    number: "05",
    bg: "bg-[#ff3d00]",
  },
  {
    title: "Integrations",
    description:
      "Works with your existing DMS, CRM, and scheduling tools.",
    number: "06",
    bg: "bg-[#0057ff]",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white border-y-4 border-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block border-4 border-black bg-[#ffcc00] px-4 py-2 font-mono text-sm uppercase tracking-wider shadow-[4px_4px_0px_#000000]">
            Features
          </div>
          <h2 className="mt-6 text-5xl font-black uppercase leading-tight text-black sm:text-7xl">
            AI That
            <br />
            <span className="inline-block border-4 border-black bg-black px-3 text-white">
              Works
            </span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group relative border-4 border-black bg-white p-6 shadow-[4px_4px_0px_#000000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000]"
            >
              <div
                className={`${feature.bg} ${feature.bg === "bg-[#ffcc00]" ? "text-black" : "text-white"} mb-4 inline-block border-2 border-black px-3 py-1 font-mono text-2xl font-black`}
              >
                {feature.number}
              </div>
              <h3 className="text-xl font-black uppercase text-black">
                {feature.title}
              </h3>
              <p className="mt-3 font-mono text-sm leading-relaxed text-gray-700">
                {feature.description}
              </p>
              <div
                className={`${feature.bg} absolute bottom-0 left-0 h-2 w-0 transition-all duration-300 group-hover:w-full`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
