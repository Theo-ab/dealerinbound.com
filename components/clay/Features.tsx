const features = [
  {
    title: "24/7 Call Answering",
    description:
      "Never miss a call again. Our AI answers every inbound call instantly, day or night, weekends and holidays included.",
    color: "from-orange-300 to-orange-400",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Smart Customer Qualification",
    description:
      "AI identifies customer intent, qualifies leads based on your criteria, and prioritizes high-value opportunities.",
    color: "from-pink-300 to-pink-400",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Automatic Appointment Booking",
    description:
      "Seamlessly books service and sales appointments directly into your calendar. No double-booking, no missed slots.",
    color: "from-purple-300 to-purple-400",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Reminders & Follow-ups",
    description:
      "Automated appointment confirmations, reminders, and follow-up messages keep customers engaged and reduce no-shows.",
    color: "from-blue-300 to-blue-400",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: "Handles Peak Times & Overflow",
    description:
      "When your team is busy, DealerInbound handles the overflow. No more missed calls during rush hours.",
    color: "from-teal-300 to-teal-400",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Workflow Integration",
    description:
      "Connects with your existing DMS, CRM, and scheduling tools. Works with what you already use.",
    color: "from-indigo-300 to-indigo-400",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
];

export default function ClayFeatures() {
  return (
    <section id="features" className="bg-gradient-to-b from-purple-100 via-white to-pink-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-purple-200 to-pink-200 px-4 py-2 text-sm font-medium text-purple-700 shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.9),inset_3px_3px_6px_rgba(0,0,0,0.06)]">
            Everything You Need
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
            AI That Works Like Your Best Employee
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            DealerInbound handles calls with the professionalism your customers
            expect — and the consistency your business needs.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white/70 p-8 shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.8),inset_6px_6px_12px_rgba(0,0,0,0.04),8px_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.8),inset_6px_6px_12px_rgba(0,0,0,0.04),12px_12px_32px_rgba(0,0,0,0.12)]"
              >
                <div
                  className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.5),inset_4px_4px_8px_rgba(0,0,0,0.1),4px_4px_12px_rgba(0,0,0,0.15)]`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-3 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
