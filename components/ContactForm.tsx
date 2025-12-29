"use client";

import { useState } from "react";

export default function ContactForm() {
  const [step, setStep] = useState(1);
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

  const totalSteps = 7;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return true;
      case 2:
        return formData.name.trim() !== "";
      case 3:
        return formData.email.trim() !== "" && formData.email.includes("@");
      case 4:
        return formData.dealership.trim() !== "";
      case 5:
        return (
          formData.phone.trim() !== "" &&
          formData.confirmPhone.trim() !== "" &&
          formData.phone === formData.confirmPhone
        );
      case 6:
        return true; // Optional
      case 7:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed()) {
      nextStep();
    }
  };

  const handleSubmit = () => {
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

  if (submitted) {
    return (
      <div className="border-4 border-black bg-[#ffcc00] p-6 shadow-[6px_6px_0px_#000000]">
        <div className="mb-4 inline-block border-4 border-black bg-black p-3">
          <svg
            className="h-6 w-6 text-white"
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
        <h3 className="text-xl font-black uppercase text-black">Get Ready!</h3>
        <p className="mt-2 font-mono text-sm text-black">
          Our AI will call you within the next 30 seconds.
          <br /><br />
          Remember, you're buying the car for this demo — you get a break from selling!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="border-4 border-black bg-white p-5 shadow-[6px_6px_0px_#000000]">
        {/* Progress Indicator */}
        <div className="mb-4 text-center font-mono text-xs uppercase tracking-wider text-gray-500">
          Step {step} of {totalSteps}
        </div>

        {/* Step 1: Cover */}
        {step === 1 && (
          <div className="text-center">
            <div className="mb-4 inline-block border-4 border-black bg-[#0057ff] p-3">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-black uppercase text-black">Live Demo</h3>
            <p className="mt-3 font-mono text-sm text-gray-700">
              Our AI will call you as if you're a car buyer who just inquired about a vehicle.
            </p>
            <button
              onClick={handleNext}
              className="brutalist-btn mt-5 w-full border-4 border-black bg-[#ff3d00] px-4 py-3 font-mono text-sm font-black uppercase text-white shadow-[4px_4px_0px_#000000]"
            >
              Yes, Call Me
            </button>
          </div>
        )}

        {/* Step 2: Name */}
        {step === 2 && (
          <div>
            <label className="block font-mono text-xs font-bold uppercase text-black">
              What's your name?
            </label>
            <input
              type="text"
              autoFocus
              className="mt-2 w-full border-2 border-black bg-[#fffef0] px-3 py-2 font-mono text-sm text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
              placeholder="John Smith"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onKeyDown={(e) => e.key === "Enter" && handleNext()}
            />
            <div className="mt-4 flex gap-2">
              <button
                onClick={prevStep}
                className="flex-1 border-2 border-black bg-white px-3 py-2 font-mono text-xs font-bold uppercase text-black"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex-1 border-2 border-black bg-black px-3 py-2 font-mono text-xs font-bold uppercase text-white disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Email */}
        {step === 3 && (
          <div>
            <label className="block font-mono text-xs font-bold uppercase text-black">
              Your email address?
            </label>
            <input
              type="email"
              autoFocus
              className="mt-2 w-full border-2 border-black bg-[#fffef0] px-3 py-2 font-mono text-sm text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
              placeholder="john@dealership.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onKeyDown={(e) => e.key === "Enter" && handleNext()}
            />
            <div className="mt-4 flex gap-2">
              <button
                onClick={prevStep}
                className="flex-1 border-2 border-black bg-white px-3 py-2 font-mono text-xs font-bold uppercase text-black"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex-1 border-2 border-black bg-black px-3 py-2 font-mono text-xs font-bold uppercase text-white disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Dealership */}
        {step === 4 && (
          <div>
            <label className="block font-mono text-xs font-bold uppercase text-black">
              Your dealership name?
            </label>
            <input
              type="text"
              autoFocus
              className="mt-2 w-full border-2 border-black bg-[#fffef0] px-3 py-2 font-mono text-sm text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
              placeholder="ABC Motors"
              value={formData.dealership}
              onChange={(e) => setFormData({ ...formData, dealership: e.target.value })}
              onKeyDown={(e) => e.key === "Enter" && handleNext()}
            />
            <div className="mt-4 flex gap-2">
              <button
                onClick={prevStep}
                className="flex-1 border-2 border-black bg-white px-3 py-2 font-mono text-xs font-bold uppercase text-black"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex-1 border-2 border-black bg-black px-3 py-2 font-mono text-xs font-bold uppercase text-white disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Phone */}
        {step === 5 && (
          <div>
            <label className="block font-mono text-xs font-bold uppercase text-black">
              Your phone number?
            </label>
            <input
              type="tel"
              autoFocus
              className="mt-2 w-full border-2 border-black bg-[#fffef0] px-3 py-2 font-mono text-sm text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <label className="mt-3 block font-mono text-xs font-bold uppercase text-black">
              Confirm phone number
            </label>
            <input
              type="tel"
              className={`mt-2 w-full border-2 bg-[#fffef0] px-3 py-2 font-mono text-sm text-black placeholder-gray-500 focus:outline-none ${
                formData.confirmPhone && formData.phone !== formData.confirmPhone
                  ? "border-[#ff3d00]"
                  : "border-black focus:border-[#0057ff]"
              }`}
              placeholder="(555) 123-4567"
              value={formData.confirmPhone}
              onChange={(e) => setFormData({ ...formData, confirmPhone: e.target.value })}
              onKeyDown={(e) => e.key === "Enter" && handleNext()}
            />
            {formData.confirmPhone && formData.phone !== formData.confirmPhone && (
              <p className="mt-1 font-mono text-xs text-[#ff3d00]">Phone numbers don't match</p>
            )}
            <div className="mt-4 flex gap-2">
              <button
                onClick={prevStep}
                className="flex-1 border-2 border-black bg-white px-3 py-2 font-mono text-xs font-bold uppercase text-black"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex-1 border-2 border-black bg-black px-3 py-2 font-mono text-xs font-bold uppercase text-white disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 6: Message */}
        {step === 6 && (
          <div>
            <label className="block font-mono text-xs font-bold uppercase text-black">
              Any message? (Optional)
            </label>
            <textarea
              autoFocus
              rows={3}
              className="mt-2 w-full border-2 border-black bg-[#fffef0] px-3 py-2 font-mono text-sm text-black placeholder-gray-500 focus:border-[#0057ff] focus:outline-none"
              placeholder="Tell us about your dealership..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <div className="mt-4 flex gap-2">
              <button
                onClick={prevStep}
                className="flex-1 border-2 border-black bg-white px-3 py-2 font-mono text-xs font-bold uppercase text-black"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="flex-1 border-2 border-black bg-black px-3 py-2 font-mono text-xs font-bold uppercase text-white"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 7: Submit */}
        {step === 7 && (
          <div className="text-center">
            <div className="mb-4 inline-block border-4 border-black bg-[#ffcc00] p-3">
              <svg className="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-black uppercase text-black">Ready!</h3>
            <p className="mt-2 font-mono text-xs text-gray-600">
              We'll call {formData.phone} shortly
            </p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={prevStep}
                className="flex-1 border-2 border-black bg-white px-3 py-2 font-mono text-xs font-bold uppercase text-black"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 border-4 border-black bg-[#ff3d00] px-3 py-2 font-mono text-xs font-black uppercase text-white shadow-[4px_4px_0px_#000000] disabled:opacity-50"
              >
                {loading ? "Sending..." : "Get Your Demo"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-sm border-4 border-black bg-white p-6 shadow-[8px_8px_0px_#ff3d00]">
            <div className="mb-4 inline-block border-4 border-black bg-[#0057ff] p-3">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-black uppercase text-black">Ready for your demo?</h3>
            <p className="mt-3 font-mono text-sm text-gray-700">
              Remember, you're buying the car for this demo — you get a break from selling!
            </p>
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border-2 border-black bg-white px-3 py-2 font-mono text-xs font-bold uppercase text-black"
              >
                Cancel
              </button>
              <button
                onClick={confirmSubmit}
                className="flex-1 border-4 border-black bg-[#ff3d00] px-3 py-2 font-mono text-xs font-black uppercase text-white shadow-[4px_4px_0px_#000000]"
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
