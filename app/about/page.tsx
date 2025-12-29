export const metadata = {
  title: "About | DealerInbound",
  description: "Learn about DealerInbound - AI-powered call handling for automotive dealerships.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#fffef0] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block border-4 border-black bg-[#0057ff] px-4 py-2 font-mono text-sm uppercase tracking-wider text-white shadow-[4px_4px_0px_#000000]">
              About Us
            </div>
            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight text-black sm:text-6xl lg:text-7xl">
              Built for{" "}
              <span className="inline-block border-4 border-black bg-[#ff3d00] px-3 text-white">
                Dealerships
              </span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-gray-700">
              We understand that every missed call is a missed opportunity. That's why we built DealerInbound — to ensure your dealership never loses a lead.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y-4 border-black bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-block border-4 border-black bg-[#ffcc00] px-4 py-2 font-mono text-sm uppercase tracking-wider shadow-[4px_4px_0px_#000000]">
                Our Mission
              </div>
              <h2 className="mt-6 text-4xl font-black uppercase leading-tight text-black sm:text-5xl">
                Zero Missed{" "}
                <span className="inline-block border-4 border-black bg-black px-3 text-white">
                  Calls
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                Dealerships lose thousands of dollars every month from unanswered calls. After-hours inquiries, peak-time overflow, lunch breaks — opportunities slip away.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                DealerInbound changes that. Our AI handles every call with professionalism, qualifies leads instantly, and books appointments directly into your calendar.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-4 border-black bg-[#ff3d00] p-6 shadow-[4px_4px_0px_#000000]">
                <div className="font-mono text-4xl font-black text-white">500+</div>
                <div className="mt-2 font-mono text-sm uppercase text-white/80">Dealerships Served</div>
              </div>
              <div className="border-4 border-black bg-[#0057ff] p-6 shadow-[4px_4px_0px_#000000]">
                <div className="font-mono text-4xl font-black text-white">1M+</div>
                <div className="mt-2 font-mono text-sm uppercase text-white/80">Calls Handled</div>
              </div>
              <div className="border-4 border-black bg-[#ffcc00] p-6 shadow-[4px_4px_0px_#000000]">
                <div className="font-mono text-4xl font-black text-black">98%</div>
                <div className="mt-2 font-mono text-sm uppercase text-black/80">Satisfaction</div>
              </div>
              <div className="border-4 border-black bg-black p-6 shadow-[4px_4px_0px_#ff3d00]">
                <div className="font-mono text-4xl font-black text-white">24/7</div>
                <div className="mt-2 font-mono text-sm uppercase text-white/80">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#fffef0] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block border-4 border-black bg-black px-4 py-2 font-mono text-sm uppercase tracking-wider text-white shadow-[4px_4px_0px_#0057ff]">
              Our Values
            </div>
            <h2 className="mt-6 text-4xl font-black uppercase leading-tight text-black sm:text-5xl">
              What We{" "}
              <span className="inline-block border-4 border-black bg-[#0057ff] px-3 text-white">
                Believe
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Reliability First",
                description: "Your customers call expecting answers. We deliver 99.9% uptime, every time.",
                color: "bg-[#ff3d00]",
              },
              {
                title: "Human Touch",
                description: "AI that sounds natural, not robotic. Conversations your customers actually enjoy.",
                color: "bg-[#0057ff]",
              },
              {
                title: "Results Driven",
                description: "More appointments, fewer no-shows, happier customers. Measurable impact.",
                color: "bg-[#ffcc00]",
              },
            ].map((value) => (
              <div
                key={value.title}
                className={`${value.color} ${value.color === "bg-[#ffcc00]" ? "text-black" : "text-white"} border-4 border-black p-8 shadow-[4px_4px_0px_#000000]`}
              >
                <h3 className="text-2xl font-black uppercase">{value.title}</h3>
                <p className="mt-4 font-mono text-base leading-relaxed opacity-90">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-4 border-black bg-black py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black uppercase text-white sm:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-mono text-lg text-gray-400">
            Join hundreds of dealerships already using DealerInbound.
          </p>
          <a
            href="/contact"
            className="brutalist-btn mt-8 inline-flex items-center border-4 border-white bg-[#ff3d00] px-8 py-4 text-lg font-bold uppercase text-white shadow-[4px_4px_0px_#ffcc00]"
          >
            Book a Demo
            <svg className="ml-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
