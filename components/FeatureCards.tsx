const cards = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "24/7 Call Answering",
    description: "Never miss a call. AI answers instantly — day, night, weekends, holidays.",
    bg: "bg-[#ffcc00]",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Smart Qualification",
    description: "AI identifies intent and qualifies leads based on your exact criteria.",
    bg: "bg-[#90EE90]",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Auto Booking",
    description: "Books appointments directly into your calendar. No double-booking.",
    bg: "bg-[#E8D5FF]",
  },
];

export default function FeatureCards() {
  return (
    <section className="rounded-[18px] bg-[#fffef0] overflow-hidden">
      <div className="px-6 py-8 md:px-8">
        {/* Three cards with tight gap */}
        <div className="flex flex-col md:flex-row gap-1">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex-1 border-[5px] border-black rounded-[16px] ${card.bg} p-4 md:p-5`}
            >
              {/* Icon */}
              <div className="mb-3 text-black">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-black text-black">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-800 leading-snug">
                {card.description}
              </p>

              {/* Learn More button */}
              <button className="mt-4 inline-flex items-center rounded-full bg-black px-4 py-2 font-mono text-xs font-bold text-white">
                Learn More
                <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
