import ContactForm from "./ContactForm";

export default function Hero() {
  return (
    <section className="relative bg-[#fffef0] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-12 lg:py-16">
        <div className="flex flex-col md:flex-row md:gap-8 gap-6 items-start">
          {/* Left side - Content (60%) */}
          <div className="w-full md:w-[60%] md:py-4">
            <div className="mb-6 inline-block border-4 border-black bg-[#ffcc00] px-4 py-2 font-mono text-sm uppercase tracking-wider shadow-[4px_4px_0px_#000000]">
              For Automotive Dealerships
            </div>

            <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tight text-black md:text-5xl lg:text-6xl">
              Never Miss
              <br />
              Another{" "}
              <span className="inline-block border-4 border-black bg-[#0057ff] px-3 text-white">
                Call
              </span>
            </h1>

            <p className="mt-6 max-w-lg border-l-4 border-black pl-6 text-base leading-relaxed text-black lg:text-lg">
              AI-powered inbound operations that answer calls, qualify customers,
              and book appointments — automatically, 24/7.
            </p>

            <div className="mt-6 hidden flex-col gap-3 md:flex md:flex-row">
              <a
                href="#contact"
                className="brutalist-btn inline-flex items-center justify-center border-4 border-black bg-[#ff3d00] px-6 py-3 text-sm font-bold uppercase text-white shadow-[4px_4px_0px_#000000] lg:px-8 lg:py-4 lg:text-base"
              >
                Book a Demo
                <svg
                  className="ml-2 h-4 w-4 lg:ml-3 lg:h-5 lg:w-5"
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
                className="brutalist-btn inline-flex items-center justify-center border-4 border-black bg-white px-6 py-3 text-sm font-bold uppercase text-black shadow-[4px_4px_0px_#000000] lg:px-8 lg:py-4 lg:text-base"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Right side - Form (40%) */}
          <div className="w-full md:w-[40%] md:py-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
