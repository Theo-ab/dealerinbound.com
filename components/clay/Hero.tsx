export default function ClayHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100 py-24 sm:py-32">
      {/* Floating clay shapes */}
      <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 opacity-60 shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.8),inset_8px_8px_16px_rgba(0,0,0,0.1),8px_8px_24px_rgba(0,0,0,0.15)]"></div>
      <div className="absolute top-40 right-20 h-48 w-48 rounded-full bg-gradient-to-br from-purple-300 to-purple-400 opacity-60 shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.8),inset_8px_8px_16px_rgba(0,0,0,0.1),8px_8px_24px_rgba(0,0,0,0.15)]"></div>
      <div className="absolute bottom-32 left-1/4 h-24 w-24 rounded-3xl bg-gradient-to-br from-pink-300 to-pink-400 opacity-60 shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.8),inset_8px_8px_16px_rgba(0,0,0,0.1),8px_8px_24px_rgba(0,0,0,0.15)]"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-gradient-to-r from-orange-200 to-pink-200 px-6 py-3 text-sm font-medium text-orange-800 shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.9),inset_4px_4px_8px_rgba(0,0,0,0.08),4px_4px_12px_rgba(0,0,0,0.1)]">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-orange-500"></span>
            AI-Powered 24/7 Call Handling
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-gray-800 sm:text-7xl">
            Never Miss Another{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Customer Call
            </span>
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-600">
            DealerInbound answers every call, qualifies customers, and books
            appointments automatically — so your dealership never loses an
            opportunity.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.3),inset_4px_4px_8px_rgba(0,0,0,0.1),6px_6px_20px_rgba(249,115,22,0.4)] transition-all hover:scale-105 hover:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.3),inset_4px_4px_8px_rgba(0,0,0,0.1),8px_8px_30px_rgba(249,115,22,0.5)]"
            >
              Book a Demo
              <svg
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-2xl bg-white/60 px-8 py-4 text-lg font-semibold text-gray-700 shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.9),inset_4px_4px_8px_rgba(0,0,0,0.05),4px_4px_16px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/80"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { stat: "24/7", label: "Availability", color: "from-orange-300 to-orange-400" },
              { stat: "< 3s", label: "Response Time", color: "from-pink-300 to-pink-400" },
              { stat: "98%", label: "Call Answer Rate", color: "from-purple-300 to-purple-400" },
              { stat: "40%", label: "More Appointments", color: "from-blue-300 to-blue-400" },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-3xl bg-gradient-to-br ${item.color} p-6 text-center shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.7),inset_6px_6px_12px_rgba(0,0,0,0.08),6px_6px_20px_rgba(0,0,0,0.12)]`}
              >
                <div className="text-3xl font-bold text-white drop-shadow-sm sm:text-4xl">
                  {item.stat}
                </div>
                <div className="mt-1 text-sm font-medium text-white/80">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
