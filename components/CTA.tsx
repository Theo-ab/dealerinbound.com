"use client";

import { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dealership: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left side - Message */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-black uppercase leading-tight text-white sm:text-7xl">
              Stop
              <br />
              <span className="inline-block border-4 border-white bg-[#ff3d00] px-3">
                Missing
              </span>
              <br />
              Calls
            </h2>
            <p className="mt-8 max-w-md border-l-4 border-[#ffcc00] pl-6 font-mono text-lg text-gray-300">
              Every missed call is a missed sale. Book a demo and see
              DealerInbound in action.
            </p>

            {/* Decorative elements */}
            <div className="mt-12 flex gap-4">
              <div className="h-16 w-16 border-4 border-white bg-[#ff3d00]"></div>
              <div className="h-16 w-16 border-4 border-white bg-[#0057ff]"></div>
              <div className="h-16 w-16 border-4 border-white bg-[#ffcc00]"></div>
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            {submitted ? (
              <div className="border-4 border-white bg-[#ffcc00] p-8 shadow-[8px_8px_0px_#ff3d00]">
                <div className="mb-4 inline-block border-4 border-black bg-black p-4">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase text-black">
                  Request Received!
                </h3>
                <p className="mt-3 font-mono text-black">
                  We'll contact you within 24 hours to schedule your demo.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border-4 border-white bg-white p-8 shadow-[8px_8px_0px_#ff3d00]"
              >
                <div className="mb-6 inline-block border-4 border-black bg-[#0057ff] px-4 py-2 font-mono text-sm uppercase tracking-wider text-white">
                  Book Demo
                </div>

                <div className="space-y-4">
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
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
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
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

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
                      onChange={(e) =>
                        setFormData({ ...formData, dealership: e.target.value })
                      }
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
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="brutalist-btn mt-6 w-full border-4 border-black bg-[#ff3d00] px-8 py-4 font-mono text-xl font-black uppercase text-white shadow-[4px_4px_0px_#000000]"
                >
                  Get Demo
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
