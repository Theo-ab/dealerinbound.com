export default function Hero() {
  return (
    <section className="relative bg-[#fffef0] overflow-hidden">
      {/* Marquee banner */}
      <div className="bg-black text-white py-3 overflow-hidden border-b-4 border-[#ffcc00]">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 text-sm font-mono uppercase tracking-widest">
              24/7 AI CALL HANDLING — NEVER MISS A LEAD — BOOK MORE APPOINTMENTS —
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <div className="mb-6 inline-block border-4 border-black bg-[#ffcc00] px-4 py-2 font-mono text-sm uppercase tracking-wider shadow-[4px_4px_0px_#000000]">
              For Automotive Dealerships
            </div>

            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight text-black sm:text-6xl lg:text-7xl">
              Never Miss
              <br />
              Another{" "}
              <span className="inline-block border-4 border-black bg-[#0057ff] px-3 text-white">
                Call
              </span>
            </h1>

            <p className="mt-8 max-w-lg border-l-4 border-black pl-6 text-lg leading-relaxed text-black">
              AI-powered inbound operations that answer calls, qualify customers,
              and book appointments — automatically, 24/7.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="brutalist-btn inline-flex items-center justify-center border-4 border-black bg-[#ff3d00] px-8 py-4 text-lg font-bold uppercase text-white shadow-[4px_4px_0px_#000000]"
              >
                Book a Demo
                <svg
                  className="ml-3 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="brutalist-btn inline-flex items-center justify-center border-4 border-black bg-white px-8 py-4 text-lg font-bold uppercase text-black shadow-[4px_4px_0px_#000000]"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Right side - Stats Grid */}
          <div className="relative">
            {/* Decorative shapes */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#ff3d00] rounded-full opacity-60 hidden lg:block"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#0057ff] rotate-45 opacity-60 hidden lg:block"></div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "24/7", label: "AVAILABILITY", bg: "bg-black", text: "text-white" },
                { stat: "<3s", label: "RESPONSE", bg: "bg-[#ff3d00]", text: "text-white" },
                { stat: "98%", label: "ANSWER RATE", bg: "bg-[#0057ff]", text: "text-white" },
                { stat: "+40%", label: "MORE BOOKINGS", bg: "bg-[#ffcc00]", text: "text-black" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.bg} ${item.text} border-4 border-black p-6 shadow-[4px_4px_0px_#000000]`}
                >
                  <div className="font-mono text-4xl font-black lg:text-5xl">
                    {item.stat}
                  </div>
                  <div className="mt-2 font-mono text-xs uppercase tracking-wider opacity-80">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
