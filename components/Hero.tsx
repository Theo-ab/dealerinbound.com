import ContactForm from "./ContactForm";

export default function Hero() {
  return (
    <section className="relative bg-[#fffef0] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-[1fr,360px] md:gap-10 items-start">
          {/* Left side - Content */}
          <div className="md:py-8">
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

            <div className="mt-10 hidden flex-col gap-4 sm:flex-row md:flex">
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

          {/* Right side - Form */}
          <div className="w-full max-w-sm md:max-w-none md:w-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
