const steps = [
  {
    step: "01",
    title: "Forward Calls",
    description: "Set up call forwarding from your dealership line. 5-minute setup.",
    color: "bg-[#ff3d00]",
  },
  {
    step: "02",
    title: "AI Answers",
    description: "Our AI answers naturally, understands needs, qualifies customers.",
    color: "bg-[#0057ff]",
  },
  {
    step: "03",
    title: "Get Bookings",
    description: "Appointments sync to your calendar. Follow up with qualified leads.",
    color: "bg-[#ffcc00]",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#fffef0] py-24 border-t-4 border-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block border-4 border-black bg-black px-4 py-2 font-mono text-sm uppercase tracking-wider text-white shadow-[4px_4px_0px_#ff3d00]">
            Process
          </div>
          <h2 className="mt-6 text-5xl font-black uppercase leading-tight text-black sm:text-6xl">
            How It{" "}
            <span className="inline-block border-4 border-black bg-[#0057ff] px-3 text-white">
              Works
            </span>
          </h2>
        </div>

        {/* Horizontal steps */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="relative">
              {/* Step card */}
              <div
                className={`${item.color} ${item.color === "bg-[#ffcc00]" ? "text-black" : "text-white"} border-4 border-black p-8 shadow-[4px_4px_0px_#000000] h-full`}
              >
                <div className="font-mono text-6xl font-black opacity-30">
                  {item.step}
                </div>
                <h3 className="mt-4 text-2xl font-black uppercase">
                  {item.title}
                </h3>
                <p className="mt-3 font-mono text-base leading-relaxed opacity-90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow indicators for desktop */}
        <div className="hidden md:flex justify-center items-center gap-4 mt-8">
          <div className="h-1 w-20 bg-black"></div>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <div className="h-1 w-20 bg-black"></div>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <div className="h-1 w-20 bg-black"></div>
          <div className="border-4 border-black bg-[#ffcc00] px-4 py-2 font-mono text-sm font-bold uppercase">
            Done!
          </div>
        </div>
      </div>
    </section>
  );
}
