"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dealership: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#fffef0] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left - Content */}
            <div>
              <div className="mb-6 inline-block border-4 border-black bg-[#ff3d00] px-4 py-2 font-mono text-sm uppercase tracking-wider text-white shadow-[4px_4px_0px_#000000]">
                Contact
              </div>
              <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight text-black sm:text-6xl">
                Let's{" "}
                <span className="inline-block border-4 border-black bg-[#0057ff] px-3 text-white">
                  Talk
                </span>
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-gray-700">
                Ready to stop missing calls? Book a demo and see DealerInbound in action.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-4 border-black bg-[#ffcc00] shadow-[2px_2px_0px_#000000]">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold uppercase text-black">Email</div>
                    <div className="font-mono text-gray-600">hello@dealerinbound.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-4 border-black bg-[#0057ff] shadow-[2px_2px_0px_#000000]">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold uppercase text-black">Phone (UK)</div>
                    <div className="font-mono text-gray-600">+44 7491 957485</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-4 border-black bg-[#ff3d00] shadow-[2px_2px_0px_#000000]">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold uppercase text-black">Phone (USA)</div>
                    <div className="font-mono text-gray-600">+1 (954) 758-8285</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-4 border-black bg-[#ff3d00] shadow-[2px_2px_0px_#000000]">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold uppercase text-black">Response Time</div>
                    <div className="font-mono text-gray-600">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {submitted ? (
                <div className="border-4 border-black bg-[#ffcc00] p-8 shadow-[8px_8px_0px_#000000]">
                  <div className="mb-4 inline-block border-4 border-black bg-black p-4">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black uppercase text-black">Message Sent!</h3>
                  <p className="mt-3 font-mono text-black">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_#000000]"
                >
                  <div className="mb-6 inline-block border-4 border-black bg-[#0057ff] px-4 py-2 font-mono text-sm uppercase tracking-wider text-white">
                    Book Demo
                  </div>

                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-sm font-bold uppercase text-black">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          className="mt-2 w-full border-4 border-black bg-[#fffef0] px-4 py-3 font-mono text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-sm font-bold uppercase text-black">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="mt-2 w-full border-4 border-black bg-[#fffef0] px-4 py-3 font-mono text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
                          placeholder="john@dealership.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-sm font-bold uppercase text-black">
                          Dealership
                        </label>
                        <input
                          type="text"
                          required
                          className="mt-2 w-full border-4 border-black bg-[#fffef0] px-4 py-3 font-mono text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
                          placeholder="ABC Motors"
                          value={formData.dealership}
                          onChange={(e) => setFormData({ ...formData, dealership: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-sm font-bold uppercase text-black">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="mt-2 w-full border-4 border-black bg-[#fffef0] px-4 py-3 font-mono text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-sm font-bold uppercase text-black">
                        Message (Optional)
                      </label>
                      <textarea
                        rows={4}
                        className="mt-2 w-full border-4 border-black bg-[#fffef0] px-4 py-3 font-mono text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
                        placeholder="Tell us about your dealership..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="brutalist-btn mt-6 w-full border-4 border-black bg-[#ff3d00] px-8 py-4 font-mono text-lg font-black uppercase text-white shadow-[4px_4px_0px_#000000]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
