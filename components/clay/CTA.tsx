"use client";

import { useState } from "react";

export default function ClayCTA() {
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
    <section id="contact" className="bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
            Ready to Stop Missing Calls?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Book a demo and see how DealerInbound can work for your dealership.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          {submitted ? (
            <div className="rounded-3xl bg-gradient-to-br from-green-200 to-teal-200 p-10 text-center shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.7),inset_8px_8px_16px_rgba(0,0,0,0.05),12px_12px_32px_rgba(0,0,0,0.1)]">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-teal-500 shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.4),inset_4px_4px_8px_rgba(0,0,0,0.1),6px_6px_16px_rgba(0,0,0,0.15)]">
                <svg
                  className="h-10 w-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Thanks for reaching out!
              </h3>
              <p className="mt-3 text-gray-600">
                We'll be in touch within 24 hours to schedule your demo.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-3xl bg-white/70 p-10 shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.9),inset_8px_8px_16px_rgba(0,0,0,0.03),12px_12px_32px_rgba(0,0,0,0.1)] backdrop-blur-sm"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-2 block w-full rounded-2xl border-0 bg-white/80 px-5 py-4 text-gray-800 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.06),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-2 block w-full rounded-2xl border-0 bg-white/80 px-5 py-4 text-gray-800 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.06),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="john@dealership.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="dealership"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Dealership Name
                  </label>
                  <input
                    type="text"
                    id="dealership"
                    required
                    className="mt-2 block w-full rounded-2xl border-0 bg-white/80 px-5 py-4 text-gray-800 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.06),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="ABC Motors"
                    value={formData.dealership}
                    onChange={(e) =>
                      setFormData({ ...formData, dealership: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-2 block w-full rounded-2xl border-0 bg-white/80 px-5 py-4 text-gray-800 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.06),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
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
                className="w-full rounded-2xl bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 px-8 py-5 text-lg font-semibold text-white shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.25),inset_4px_4px_8px_rgba(0,0,0,0.1),8px_8px_24px_rgba(236,72,153,0.4)] transition-all hover:scale-[1.02] hover:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.25),inset_4px_4px_8px_rgba(0,0,0,0.1),12px_12px_32px_rgba(236,72,153,0.5)]"
              >
                Book Your Demo
              </button>
              <p className="text-center text-sm text-gray-500">
                No commitment required. We'll show you exactly how it works.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
