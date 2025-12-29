export const metadata = {
  title: "Pricing | DealerInbound",
  description: "Simple, transparent pricing for AI-powered call handling.",
};

const plans = [
  {
    name: "Starter",
    price: "499",
    description: "Perfect for small dealerships getting started.",
    color: "bg-white",
    textColor: "text-black",
    features: [
      "Up to 200 calls/month",
      "Business hours coverage",
      "Basic call qualification",
      "Email notifications",
      "Standard support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "999",
    description: "For growing dealerships that need more.",
    color: "bg-[#0057ff]",
    textColor: "text-white",
    features: [
      "Up to 500 calls/month",
      "24/7 coverage",
      "Advanced qualification",
      "Calendar integration",
      "SMS notifications",
      "Priority support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large dealerships with custom needs.",
    color: "bg-black",
    textColor: "text-white",
    features: [
      "Unlimited calls",
      "24/7 coverage",
      "Custom AI training",
      "DMS integration",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#fffef0] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mb-6 inline-block border-4 border-black bg-[#ffcc00] px-4 py-2 font-mono text-sm uppercase tracking-wider shadow-[4px_4px_0px_#000000]">
            Pricing
          </div>
          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight text-black sm:text-6xl">
            Simple{" "}
            <span className="inline-block border-4 border-black bg-[#ff3d00] px-3 text-white">
              Pricing
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-xl text-gray-700">
            No hidden fees. No long contracts. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="border-y-4 border-black bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative ${plan.color} ${plan.textColor} border-4 border-black p-8 shadow-[4px_4px_0px_#000000] ${plan.popular ? "lg:-mt-4 lg:mb-[-16px]" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 border-4 border-black bg-[#ffcc00] px-4 py-1 font-mono text-sm font-bold uppercase text-black">
                    Most Popular
                  </div>
                )}
                <div className="font-mono text-sm uppercase tracking-wider opacity-70">
                  {plan.name}
                </div>
                <div className="mt-4 flex items-baseline">
                  {plan.price === "Custom" ? (
                    <span className="text-5xl font-black">Custom</span>
                  ) : (
                    <>
                      <span className="text-2xl font-bold">$</span>
                      <span className="text-5xl font-black">{plan.price}</span>
                      <span className="ml-2 font-mono text-sm opacity-70">/month</span>
                    </>
                  )}
                </div>
                <p className="mt-4 font-mono text-sm opacity-80">{plan.description}</p>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 font-mono text-sm">
                      <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`mt-8 block w-full border-4 border-black py-3 text-center font-mono font-bold uppercase shadow-[4px_4px_0px_#000000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] ${
                    plan.color === "bg-white"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fffef0] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block border-4 border-black bg-black px-4 py-2 font-mono text-sm uppercase tracking-wider text-white shadow-[4px_4px_0px_#ff3d00]">
              FAQ
            </div>
            <h2 className="mt-6 text-4xl font-black uppercase leading-tight text-black sm:text-5xl">
              Common{" "}
              <span className="inline-block border-4 border-black bg-[#0057ff] px-3 text-white">
                Questions
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                q: "How does billing work?",
                a: "We bill monthly. No long-term contracts required. Cancel anytime with 30 days notice.",
              },
              {
                q: "What happens if I exceed my call limit?",
                a: "We'll notify you when you're approaching your limit. Additional calls are billed at $2/call.",
              },
              {
                q: "Can I change plans?",
                a: "Yes, upgrade or downgrade anytime. Changes take effect on your next billing cycle.",
              },
              {
                q: "Is there a setup fee?",
                a: "No setup fees. We'll help you get started for free during onboarding.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="border-4 border-black bg-white p-6 shadow-[4px_4px_0px_#000000]"
              >
                <h3 className="font-bold uppercase text-black">{faq.q}</h3>
                <p className="mt-2 font-mono text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
