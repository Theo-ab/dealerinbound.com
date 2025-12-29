"use client";

import { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dealership: "",
    phone: "",
    confirmPhone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.phone !== formData.confirmPhone) {
      return;
    }

    setShowModal(true);
  };

  const confirmSubmit = async () => {
    setShowModal(false);
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Message */}
          <div>
            <div className="inline-block border-4 border-white bg-[#ff3d00] px-4 py-2 font-mono text-sm uppercase tracking-wider text-white shadow-[4px_4px_0px_#ffcc00]">
              Get Started
            </div>
            <h2 className="mt-6 text-5xl font-black uppercase leading-tight text-white sm:text-6xl">
              Stop Missing{" "}
              <span className="inline-block border-4 border-white bg-[#0057ff] px-3">
                Calls
              </span>
            </h2>
            <p className="mt-6 max-w-md border-l-4 border-[#ffcc00] pl-6 font-mono text-lg text-gray-300">
              Every missed call is a missed sale. Book a demo and see
              DealerInbound in action.
            </p>

            {/* Stats reminder */}
            <div className="mt-10 flex gap-4">
              <div className="border-4 border-white bg-[#ff3d00] p-4">
                <div className="font-mono text-2xl font-black text-white">98%</div>
                <div className="font-mono text-xs uppercase text-white/80">Answer Rate</div>
              </div>
              <div className="border-4 border-white bg-[#0057ff] p-4">
                <div className="font-mono text-2xl font-black text-white">+40%</div>
                <div className="font-mono text-xs uppercase text-white/80">More Bookings</div>
              </div>
              <div className="border-4 border-white bg-[#ffcc00] p-4">
                <div className="font-mono text-2xl font-black text-black">24/7</div>
                <div className="font-mono text-xs uppercase text-black/80">Always On</div>
              </div>
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
                <div className="mb-4 inline-block border-4 border-black bg-[#0057ff] px-4 py-2 font-mono text-sm uppercase tracking-wider text-white">
                  Book Demo
                </div>
                <div className="mb-6 border-4 border-[#0057ff] bg-[#e8f0ff] p-4">
                  <p className="font-mono text-sm text-black">
                    🚀 <span className="font-bold">Live Demo:</span> Our AI will call you as if you're a car buyer who just inquired about a vehicle
                  </p>
                </div>

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
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="mt-2 w-full border-4 border-black bg-[#fffef0] px-4 py-3 font-mono text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block font-mono text-sm font-bold uppercase text-black">
                    Confirm Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    className={`mt-2 w-full border-4 bg-[#fffef0] px-4 py-3 font-mono text-black placeholder-gray-500 focus:outline-none ${
                      formData.confirmPhone && formData.phone !== formData.confirmPhone
                        ? "border-[#ff3d00]"
                        : "border-black focus:border-[#0057ff]"
                    }`}
                    placeholder="(555) 123-4567"
                    value={formData.confirmPhone}
                    onChange={(e) =>
                      setFormData({ ...formData, confirmPhone: e.target.value })
                    }
                  />
                  {formData.confirmPhone && formData.phone !== formData.confirmPhone && (
                    <p className="mt-1 font-mono text-xs text-[#ff3d00]">Phone numbers don't match</p>
                  )}
                </div>

                <div className="mt-4">
                  <label className="block font-mono text-sm font-bold uppercase text-black">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    className="mt-2 w-full border-4 border-black bg-[#fffef0] px-4 py-3 font-mono text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
                    placeholder="Tell us about your dealership..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="brutalist-btn mt-6 w-full border-4 border-black bg-[#ff3d00] px-8 py-4 font-mono text-lg font-black uppercase text-white shadow-[4px_4px_0px_#000000] disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Get Your Demo"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md border-4 border-black bg-white p-8 shadow-[8px_8px_0px_#ff3d00]">
            <div className="mb-4 inline-block border-4 border-black bg-[#0057ff] p-3">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black uppercase text-black">Ready for your demo?</h3>
            <p className="mt-3 font-mono text-gray-700">
              You're about to receive a demo call. Our AI will play the role of a customer inquiring about buying a car from your dealership.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border-4 border-black bg-white px-4 py-3 font-mono font-bold uppercase text-black shadow-[4px_4px_0px_#000000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000]"
              >
                Cancel
              </button>
              <button
                onClick={confirmSubmit}
                className="flex-1 border-4 border-black bg-[#ff3d00] px-4 py-3 font-mono font-bold uppercase text-white shadow-[4px_4px_0px_#000000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000]"
              >
                Call Me
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
