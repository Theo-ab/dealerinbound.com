const steps = [
  {
    step: "01",
    title: "Forward Calls",
    description:
      "Set up call forwarding from your dealership line. 5-minute setup.",
    color: "bg-[#ff3d00]",
  },
  {
    step: "02",
    title: "AI Answers",
    description:
      "Our AI answers naturally, understands needs, qualifies customers.",
    color: "bg-[#0057ff]",
  },
  {
    step: "03",
    title: "Get Bookings",
    description:
      "Appointments sync to your calendar. Follow up with qualified leads.",
    color: "bg-[#ffcc00]",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#fffef0] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="inline-block border-4 border-black bg-black px-4 py-2 font-mono text-sm uppercase tracking-wider text-white shadow-[4px_4px_0px_#ff3d00]">
            Process
          </div>
          <h2 className="mt-6 text-5xl font-black uppercase leading-tight text-black sm:text-7xl">
            How It
            <span className="ml-4 inline-block border-4 border-black bg-[#0057ff] px-3 text-white">
              Works
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-black lg:block"></div>

          <div className="space-y-8 lg:space-y-0">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className={`relative flex flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""} lg:items-center`}
              >
                {/* Step number - center on desktop */}
                <div className="absolute left-1/2 hidden h-20 w-20 -translate-x-1/2 items-center justify-center border-4 border-black bg-white font-mono text-3xl font-black shadow-[4px_4px_0px_#000000] lg:flex">
                  {item.step}
                </div>

                {/* Content card */}
                <div
                  className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-20" : "lg:pl-20"}`}
                >
                  <div
                    className={`border-4 border-black ${item.color} p-8 shadow-[4px_4px_0px_#000000] ${item.color === "bg-[#ffcc00]" ? "text-black" : "text-white"}`}
                  >
                    <div className="mb-4 font-mono text-6xl font-black lg:hidden">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-black uppercase sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 font-mono text-lg leading-relaxed opacity-90">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
