"use client";

import { useState } from "react";

export default function ContactForm() {
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
    <>
      {submitted ? (
        <div className="border-4 border-black bg-[#ffcc00] p-8 shadow-[8px_8px_0px_#000000]">
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
            Get Ready!
          </h3>
          <p className="mt-3 font-mono text-black">
            Our AI will call you within the next 30 seconds.<br /><br />Remember, you're buying the car for this demo — you get a break from selling!
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="border-4 border-black bg-white p-5 shadow-[6px_6px_0px_#000000]"
        >
          <div className="mb-4 border-2 border-[#0057ff] bg-[#e8f0ff] p-3">
            <p className="font-mono text-xs text-black">
              🚀 <span className="font-bold">Live Demo:</span> Our AI will call you as a car buyer
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block font-mono text-xs font-bold uppercase text-black">
                Name
              </label>
              <input
                type="text"
                required
                className="mt-1 w-full border-2 border-black bg-[#fffef0] px-2 py-1.5 font-mono text-sm text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block font-mono text-xs font-bold uppercase text-black">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 w-full border-2 border-black bg-[#fffef0] px-2 py-1.5 font-mono text-sm text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
                placeholder="john@dealership.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block font-mono text-xs font-bold uppercase text-black">
                Dealership
              </label>
              <input
                type="text"
                required
                className="mt-1 w-full border-2 border-black bg-[#fffef0] px-2 py-1.5 font-mono text-sm text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
                placeholder="ABC Motors"
                value={formData.dealership}
                onChange={(e) =>
                  setFormData({ ...formData, dealership: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block font-mono text-xs font-bold uppercase text-black">
                Phone *
              </label>
              <input
                type="tel"
                required
                className="mt-1 w-full border-2 border-black bg-[#fffef0] px-2 py-1.5 font-mono text-sm text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mt-3">
            <label className="block font-mono text-xs font-bold uppercase text-black">
              Confirm Phone *
            </label>
            <input
              type="tel"
              required
              className={`mt-1 w-full border-2 bg-[#fffef0] px-2 py-1.5 font-mono text-sm text-black placeholder-gray-500 focus:outline-none ${
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

          <div className="mt-3">
            <label className="block font-mono text-xs font-bold uppercase text-black">
              Message (Optional)
            </label>
            <textarea
              rows={2}
              className="mt-1 w-full border-2 border-black bg-[#fffef0] px-2 py-1.5 font-mono text-sm text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
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
            className="brutalist-btn mt-4 w-full border-4 border-black bg-[#ff3d00] px-4 py-3 font-mono text-sm font-black uppercase text-white shadow-[4px_4px_0px_#000000] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Get Your Demo"}
          </button>
        </form>
      )}

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
              Our AI will call you as if you're a car buyer who just inquired about a vehicle.<br /><br />Experience how we handle your customers!
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
    </>
  );
}
