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
  const [followUpSubmitted, setFollowUpSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Phase 1: Just 2 steps (Cover + Name/Phone)
  const totalSteps = 2;

  const progressPercentage: Record<number, number> = {
    1: 0,
    2: 50,
  };

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
        return (
          formData.name.trim() !== "" &&
          formData.phone.trim() !== "" &&
          formData.confirmPhone.trim() !== "" &&
          formData.phone === formData.confirmPhone
        );
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed()) {
      nextStep();
    }
  };

  // Phase 1 submit - just name and phone
  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
        }),
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

  // Phase 2 submit - additional info after the call
  const handleFollowUpSubmit = async () => {
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
        setFollowUpSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  // Phase 2: After the call - show follow-up form
  if (submitted) {
    // Thank you state after follow-up
    if (followUpSubmitted) {
      return (
        <div className="border-4 border-black bg-[#ffcc00] p-6 shadow-[8px_8px_0px_#000000]">
          <div className="mb-4 inline-block border-4 border-black bg-black p-3">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-black uppercase text-black">Thanks!</h3>
          <p className="mt-3 font-mono text-sm text-black">
            We'll be in touch soon to discuss how we can help your dealership.
          </p>
        </div>
      );
    }

    // Show call confirmation + follow-up form
    return (
      <div className="border-4 border-black bg-white p-5 shadow-[8px_8px_0px_#ff3d00]">
        {/* Call confirmation */}
        <div className="mb-6 border-b-2 border-gray-200 pb-6">
          <div className="mb-3 inline-block border-4 border-black bg-[#0057ff] p-2">
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-lg font-black uppercase text-black">Get Ready!</h3>
          <p className="mt-2 font-mono text-xs text-gray-700">
            Our AI will call you within 30 seconds. Remember, you're the buyer in this demo!
          </p>
        </div>

        {/* Follow-up form */}
        <div>
          <h4 className="mb-3 text-sm font-black uppercase text-black">
            Liked the demo? Let's get in touch
          </h4>
          <div className="space-y-3">
            <div>
              <label className="block font-mono text-xs font-bold uppercase text-gray-600">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full border-2 border-black bg-[#fffef0] px-3 py-2 font-mono text-base text-black placeholder-gray-400 focus:border-[#0057ff] focus:outline-none"
                placeholder="john@dealership.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block font-mono text-xs font-bold uppercase text-gray-600">
                Dealership Name
              </label>
              <input
                type="text"
                className="mt-1 w-full border-2 border-black bg-[#fffef0] px-3 py-2 font-mono text-base text-black placeholder-gray-400 focus:border-[#0057ff] focus:outline-none"
                placeholder="ABC Motors"
                value={formData.dealership}
                onChange={(e) => setFormData({ ...formData, dealership: e.target.value })}
              />
            </div>
            <div>
              <label className="block font-mono text-xs font-bold uppercase text-gray-600">
                Message (Optional)
              </label>
              <textarea
                rows={2}
                className="mt-1 w-full border-2 border-black bg-[#fffef0] px-3 py-2 font-mono text-base text-black placeholder-gray-400 focus:border-[#0057ff] focus:outline-none"
                placeholder="Tell us about your dealership..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
          </div>
          <button
            onClick={handleFollowUpSubmit}
            disabled={loading || !formData.email || !formData.dealership}
            className="mt-4 w-full border-4 border-black bg-[#ff3d00] px-4 py-3 font-mono text-sm font-black uppercase text-white shadow-[4px_4px_0px_#000000] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Get in Touch"}
          </button>
        </div>
      </div>
    );
  }

  // Phase 1: Quick demo form
  return (
    <div className="border-4 border-black bg-white p-5 shadow-[6px_6px_0px_#000000]">
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="h-3 w-full border-2 border-black bg-gray-100">
          <div
            className="h-full bg-[#0057ff] transition-all duration-300"
            style={{ width: `${progressPercentage[step]}%` }}
          />
        </div>
        <p className="mt-1 text-center font-mono text-xs font-bold uppercase text-black">
          {progressPercentage[step]}% done
        </p>
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

      {/* Step 2: Name + Phone only */}
      {step === 2 && (
        <div>
          <h3 className="mb-4 text-center text-sm font-black uppercase text-black">Enter your info and our AI will call you</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-[#0057ff] pl-3">
              <label className="block font-mono text-xs font-bold uppercase text-[#0057ff]">
                Name
              </label>
              <input
                type="text"
                autoFocus
                className="mt-1 w-full border-2 border-black bg-[#fffef0] px-3 py-2 font-mono text-base text-black placeholder-gray-400 focus:border-[#0057ff] focus:outline-none"
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="border-l-4 border-[#ffcc00] pl-3">
              <label className="block font-mono text-xs font-bold uppercase text-black">
                Phone
              </label>
              <input
                type="tel"
                className="mt-1 w-full border-2 border-black bg-[#fffef0] px-3 py-2 font-mono text-base text-black placeholder-gray-400 focus:border-[#ffcc00] focus:outline-none"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="border-l-4 border-black pl-3">
              <label className="block font-mono text-xs font-bold uppercase text-black">
                Confirm Phone
              </label>
              <input
                type="tel"
                className={`mt-1 w-full border-2 bg-[#fffef0] px-3 py-2 font-mono text-base text-black placeholder-gray-400 focus:outline-none ${
                  formData.confirmPhone && formData.phone !== formData.confirmPhone
                    ? "border-[#ff3d00]"
                    : "border-black focus:border-[#0057ff]"
                }`}
                placeholder="(555) 123-4567"
                value={formData.confirmPhone}
                onChange={(e) => setFormData({ ...formData, confirmPhone: e.target.value })}
              />
              {formData.confirmPhone && formData.phone !== formData.confirmPhone && (
                <p className="mt-1 font-mono text-xs text-[#ff3d00]">Phone numbers don't match</p>
              )}
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            <button
              onClick={prevStep}
              className="flex-1 border-4 border-black bg-white px-3 py-2.5 font-mono text-xs font-bold uppercase text-black shadow-[2px_2px_0px_#000] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#000]"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={!canProceed() || loading}
              className="flex-1 border-4 border-black bg-[#ff3d00] px-3 py-2.5 font-mono text-xs font-black uppercase text-white shadow-[2px_2px_0px_#000] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#000] disabled:opacity-50"
            >
              {loading ? "Sending..." : "Call Me"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
