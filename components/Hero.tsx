import ContactForm from "./ContactForm";

export default function Hero() {
  return (
    <section className="rounded-[18px] bg-gradient-to-br from-[#f5f0ff] via-[#fff5f5] to-[#fffef0] overflow-hidden">
      <div className="px-6 py-10 md:px-8 md:py-14">
        <div className="flex flex-col md:flex-row md:gap-10 gap-8 items-center">
          {/* Left side - Content (55%) */}
          <div className="w-full md:w-[55%]">
            {/* Small avatar/badge */}
            <div className="mb-4 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full border-2 border-black bg-[#ffcc00] flex items-center justify-center">
                <svg className="h-4 w-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-gray-600">For Automotive Dealerships</span>
            </div>

            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-black md:text-5xl lg:text-6xl">
              Never Miss
              <br />
              Another{" "}
              <span className="inline-block border-4 border-black bg-[#0057ff] px-3 text-white">
                Call
              </span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-gray-700 md:text-lg">
              AI-powered inbound operations that answer calls, qualify customers,
              and book appointments — automatically, 24/7.
            </p>
          </div>

          {/* Right side - Form (45%) */}
          <div className="w-full md:w-[45%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
