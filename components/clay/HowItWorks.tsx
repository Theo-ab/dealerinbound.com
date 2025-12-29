const steps = [
  {
    step: "01",
    title: "Forward Your Calls",
    description:
      "Set up call forwarding from your dealership line to DealerInbound. Takes 5 minutes to configure.",
    color: "from-orange-300 to-orange-400",
  },
  {
    step: "02",
    title: "AI Answers & Qualifies",
    description:
      "Our AI answers calls naturally, understands customer needs, and qualifies them based on your criteria.",
    color: "from-pink-300 to-pink-400",
  },
  {
    step: "03",
    title: "Appointments Appear",
    description:
      "Booked appointments sync directly to your calendar. Your team sees everything they need to follow up.",
    color: "from-purple-300 to-purple-400",
  },
];

export default function ClayHowItWorks() {
  return (
    <section id="how-it-works" className="bg-gradient-to-b from-pink-50 via-orange-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-orange-200 to-pink-200 px-4 py-2 text-sm font-medium text-orange-700 shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.9),inset_3px_3px_6px_rgba(0,0,0,0.06)]">
            Simple Setup
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
            Up and Running in Minutes
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            No complex integrations. No lengthy onboarding. Start capturing more
            appointments today.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="flex flex-col gap-6 sm:flex-row sm:items-center"
              >
                {/* Step number bubble */}
                <div
                  className={`flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-3xl font-bold text-white shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.5),inset_6px_6px_12px_rgba(0,0,0,0.1),8px_8px_24px_rgba(0,0,0,0.2)]`}
                >
                  {item.step}
                </div>

                {/* Content card */}
                <div className="flex-1 rounded-3xl bg-white/80 p-8 shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.9),inset_6px_6px_12px_rgba(0,0,0,0.03),8px_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-lg text-gray-600">
                    {item.description}
                  </p>
                </div>

                {/* Connector line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-10 hidden h-8 w-1 translate-y-20 rounded-full bg-gradient-to-b from-pink-200 to-transparent sm:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
